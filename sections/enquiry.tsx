"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Loader2,
  Mail,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/shared/glass-card";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { siteConfig } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error";

const contactPoints = [
  {
    icon: Phone,
    label: "Call us",
    value: siteConfig.whatsapp.display,
    href: `tel:${siteConfig.whatsapp.number}`,
  },
  {
    icon: Mail,
    label: "Email us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
];

export function Enquiry() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

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
    <section id="enquiry" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <GlassCard className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
            <div className="flex flex-col gap-6">
              <span className="flex items-center gap-3 text-sm font-medium tracking-wide text-primary uppercase">
                <span className="h-px w-8 bg-primary/40" />
                Get In Touch
              </span>
              <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Ready to Scale Your{" "}
                <span className="text-gradient-primary">Shopify Store?</span>
              </h2>
              <p className="max-w-md text-muted-foreground">
                Tell us a little about your project and we&rsquo;ll get back to
                you within one business day. Prefer to talk right now? Reach us
                on WhatsApp, phone, or email.
              </p>

              <div className="mt-2 flex flex-col gap-4 border-t border-white/[0.06] pt-6">
                {contactPoints.map((point) => (
                  <a
                    key={point.label}
                    href={point.href}
                    className="group flex items-center gap-4 text-left"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary transition-colors group-hover:bg-primary/10">
                      <point.icon className="size-5" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-xs tracking-wide text-muted-foreground uppercase">
                        {point.label}
                      </span>
                      <span className="text-base font-semibold text-white transition-colors group-hover:text-primary">
                        {point.value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {status === "success" ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 rounded-2xl border border-primary/30 bg-primary/[0.04] p-8 text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <CheckCircle className="size-7" />
                </span>
                <h3 className="text-xl font-semibold text-white">
                  Thanks, we&rsquo;ve got it.
                </h3>
                <p className="max-w-sm text-sm text-muted-foreground">
                  Our team will reach out within one business day. In the
                  meantime, feel free to WhatsApp us for anything urgent.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setStatus("idle")}
                  className="mt-2 h-10 rounded-full border-white/10 bg-white/[0.02] px-5 text-sm text-white hover:bg-white/[0.06]"
                >
                  Send another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    icon={User}
                    label="Full name"
                    name="name"
                    type="text"
                    placeholder="Jane Doe"
                    required
                  />
                  <Field
                    icon={Phone}
                    label="Phone"
                    name="phone"
                    type="tel"
                    placeholder="+971 5X XXX XXXX"
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
                  required
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
                  className="mt-2 h-12 w-full gap-2 rounded-full text-sm font-semibold sm:w-fit"
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

                <p className="text-xs text-muted-foreground">
                  We&rsquo;ll only use your details to reply to this enquiry.
                </p>
              </form>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </section>
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
            rows={4}
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
