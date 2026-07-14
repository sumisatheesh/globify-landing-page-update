import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { GlassCard } from "@/components/shared/glass-card";
import { Reveal } from "@/components/shared/reveal";
import { faqItems } from "@/data/faq";

export function Faq() {
  return (
    <section id="faq" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto flex max-w-3xl flex-col gap-16">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          description="Everything you need to know before starting your Shopify project with Globify."
        />

        <Reveal>
          <GlassCard className="p-2 sm:p-4">
            <Accordion type="single" collapsible className="px-4">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.question}
                  value={item.question}
                  className="border-white/[0.06]"
                >
                  <AccordionTrigger className="py-5 text-base font-medium text-white hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
