"use client";

import { useState, useEffect, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Loader2,
  Mail,
  MessageSquare,
  Phone,
  User,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/shared/glass-card";

type Status = "idle" | "submitting" | "success" | "error";

interface EnquiryModalProps {
  onClose: () => void;
}

export function EnquiryModal({ onClose }: EnquiryModalProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  // Prevent scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(json.error ?? "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-md"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-lg"
      >
        <GlassCard className="relative overflow-hidden border border-white/10 p-6 sm:p-8 shadow-2xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/5"
            aria-label="Close modal"
          >
            <X className="size-5" />
          </button>

          {status === "success" ? (
            <div className="flex min-h-[320px] flex-col items-center justify-center gap-4 text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                <CheckCircle className="size-7" />
              </span>
              <h3 className="text-xl font-semibold text-white">
                Thanks, we&rsquo;ve got it.
              </h3>
              <p className="max-w-sm text-sm text-muted-foreground">
                Our team will reach out within one business day. In the meantime, feel free to check your inbox for an acknowledgment email.
              </p>
              <Button
                onClick={() => {
                  setStatus("idle");
                  onClose();
                }}
                className="mt-4 rounded-full h-10 px-6 text-sm"
              >
                Close Window
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              <div>
                <span className="flex items-center gap-3 text-xs font-semibold tracking-wide text-primary uppercase mb-2">
                  <span className="h-px w-6 bg-primary/40" />
                  Get In Touch
                </span>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Ready to Scale Your{" "}
                  <span className="text-gradient-primary">Shopify Store?</span>
                </h2>
                <p className="text-xs text-muted-foreground mt-2">
                  Tell us a little about your project and we&rsquo;ll get back to you within one business day.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    icon={User}
                    label="Full name"
                    name="name"
                    placeholder="Jane Doe"
                    required
                  />
                  <Field
                    icon={Phone}
                    label="Phone"
                    name="phone"
                    type="tel"
                    placeholder="+971 5X XXX XXXX"
                    required
                  />
                </div>
                <Field
                  icon={Mail}
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                />
                <Field
                  icon={MessageSquare}
                  label="How can we help?"
                  name="message"
                  as="textarea"
                  placeholder="Tell us about your Shopify project, timeline, and goals."
                />

                {error && (
                  <p className="text-sm text-destructive" role="alert">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "submitting"}
                  className="mt-2 h-12 w-full gap-2 rounded-full text-sm font-semibold"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send enquiry
                      <ArrowRight className="size-4" />
                    </>
                  )}
                </Button>

                <p className="text-[10px] text-muted-foreground text-center">
                  We&rsquo;ll only use your details to reply to this enquiry.
                </p>
              </form>
            </div>
          )}
        </GlassCard>
      </motion.div>
    </div>
  );
}

type FieldProps = {
  icon: typeof User;
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  as?: "input" | "textarea";
};

function Field({
  icon: Icon,
  label,
  name,
  placeholder,
  type = "text",
  required,
  as = "input",
}: FieldProps) {
  const shared =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-11 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary/60 focus:bg-white/[0.05] focus:outline-none";

  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium tracking-wide text-white/70 uppercase">
        {label}
        {required && <span className="ml-1 text-primary">*</span>}
      </span>
      <span className="relative block">
        <Icon className="pointer-events-none absolute top-3.5 left-3.5 size-4 text-white/40" />
        {as === "textarea" ? (
          <textarea
            name={name}
            placeholder={placeholder}
            required={required}
            rows={3}
            className={`${shared} resize-none py-3`}
          />
        ) : (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            className={`${shared} h-11 py-0`}
          />
        )}
      </span>
    </label>
  );
}
