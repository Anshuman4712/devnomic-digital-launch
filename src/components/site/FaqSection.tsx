import { useState } from "react";
import { Plus } from "lucide-react";
import { useSiteContent } from "@/lib/site-content";
import { Pill, Reveal } from "./primitives";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const { content } = useSiteContent();
  const [open, setOpen] = useState<string | null>(content.faqs[0]?.id ?? null);

  return (
    <section className="px-5 py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div>
          <Reveal>
            <Pill>FAQ</Pill>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-3xl leading-tight font-medium sm:text-4xl">
              Frequently asked questions
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Still unsure about something? Ask us directly — we reply within a day.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a
              href="#contact"
              className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Contact us
            </a>
          </Reveal>
        </div>

        <div className="flex flex-col gap-3">
          {content.faqs.map((f, i) => {
            const isOpen = open === f.id;
            return (
              <Reveal key={f.id} delay={i * 70}>
                <div className="rounded-2xl border border-border bg-card px-5 shadow-soft">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : f.id)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-sm font-medium">{f.question}</span>
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary">
                      <Plus
                        className={cn(
                          "size-4 transition-transform duration-300",
                          isOpen && "rotate-45",
                        )}
                      />
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{f.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
