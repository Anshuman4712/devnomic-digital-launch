import { Check, Mail, MessageCircle, Sparkles } from "lucide-react";
import { useSiteContent } from "@/lib/site-content";
import { Reveal, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  const { content } = useSiteContent();
  const services = content.services;
  const highlightIndex = 1;

  return (
    <section id="services" className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading
          label="Services"
          title="Everything your business needs, online."
          subtitle="One team for the whole journey — from the first wireframe to the campaign report that lands in your inbox every month."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-3">
            {services.map((s, i) =>
              i === highlightIndex ? (
                <Reveal key={s.id} delay={i * 80}>
                  <div className="rounded-2xl bg-[oklch(0.97_0.035_95)] p-5">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-[oklch(0.9_0.09_80)] text-foreground/70">
                      <Sparkles className="size-4" />
                    </span>
                    <p className="mt-4 text-base font-semibold">{s.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
                  </div>
                </Reveal>
              ) : (
                <Reveal key={s.id} delay={i * 80}>
                  <div className="flex items-start gap-3 px-5 py-4">
                    <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-secondary">
                      <Check className="size-3 text-brand" />
                    </span>
                    <div>
                      <p className="text-sm font-medium">{s.title}</p>
                      <p className="text-sm text-muted-foreground">{s.short}</p>
                    </div>
                  </div>
                </Reveal>
              ),
            )}
          </div>

          <Reveal delay={160}>
            <div className="relative rounded-[28px] bg-secondary p-6 sm:p-10">
              <span className="absolute top-6 left-6 flex size-10 items-center justify-center rounded-2xl bg-card shadow-soft">
                <Mail className="size-4 text-brand" />
              </span>
              <div className="mx-auto mt-10 max-w-sm space-y-3">
                {[
                  { name: "Priya Nair", msg: "Traffic is up 3x this month 🎉", time: "2m" },
                  { name: "Daniel Cruz", msg: "New lead from the Google campaign", time: "18m" },
                  { name: "Meera Iyer", msg: "Store went live — it's so fast!", time: "1h" },
                ].map((m, i) => (
                  <div
                    key={m.name}
                    className={cn(
                      "float-slow flex items-center gap-3 rounded-2xl bg-card p-3.5 shadow-soft",
                      i === 1 && "translate-x-3",
                    )}
                    style={{ animationDelay: `${i * -3}s` }}
                  >
                    <span className="flex size-9 items-center justify-center rounded-full bg-brand-soft text-xs font-semibold text-brand">
                      {m.name[0]}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold">{m.name}</p>
                      <p className="truncate text-xs text-muted-foreground">{m.msg}</p>
                    </div>
                    <span className="text-[0.65rem] text-muted-foreground">{m.time}</span>
                  </div>
                ))}
              </div>
              <span className="absolute right-6 bottom-6 flex size-12 items-center justify-center rounded-full bg-[oklch(0.72_0.16_150)] text-white shadow-lift">
                <MessageCircle className="size-5" />
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
