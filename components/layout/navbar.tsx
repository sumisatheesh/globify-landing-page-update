"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";
import { EnquiryModal } from "@/components/shared/enquiry-modal";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <div className="glass flex w-full max-w-5xl items-center justify-between rounded-[20px] px-4 py-2 sm:px-6">
        <Link href="#" className="flex shrink-0 items-center">
          <Image
            src="/globify-logo.png"
            alt="Globify"
            width={508}
            height={299}
            priority
            className="h-16 w-auto sm:h-20"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">

          <Button
            size="sm"
            onClick={() => setIsEnquiryOpen(true)}
            className="rounded-full px-4"
          >
            Get started
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex size-9 items-center justify-center rounded-lg text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "glass absolute inset-x-4 top-[calc(100%+8px)] flex flex-col gap-1 rounded-[20px] p-4 md:hidden"
            )}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-3">
              <Button
                size="sm"
                onClick={() => {
                  setOpen(false);
                  setIsEnquiryOpen(true);
                }}
                className="justify-center rounded-full"
              >
                Get started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isEnquiryOpen && (
          <EnquiryModal onClose={() => setIsEnquiryOpen(false)} />
        )}
      </AnimatePresence>
    </header>
  );
}
