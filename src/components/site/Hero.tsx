import { Monitor, Smartphone, Share2, TrendingUp, Home, Target, Briefcase, Clock, Settings, ArrowRight, Zap, BadgeCheck, LifeBuoy } from "lucide-react";
import { useSiteContent } from "@/lib/site-content";
import { Orb, Pill, Reveal } from "./primitives";
import { cn } from "@/lib/utils";

const iconMap: Record<string, typeof Monitor> = {
  monitor: Monitor,
  smartphone: Smartphone,
  share: Share2,
  trending: TrendingUp,
};

const avatars = [
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&h=80&q=80",
];

const trust = [
  { icon: Zap, label: "Fast Delivery", copy: "Most sites ship in under four weeks.", tint: "bg-tint-peach" },
  { icon: BadgeCheck, label: "Result-Driven", copy: "Every decision tied to a real metric.", tint: "bg-tint-lav" },
  { icon: LifeBuoy, label: "Dedicated Support", copy: "A named contact, not a ticket queue.", tint: "bg-tint-mint" },
];

export function Hero() {
  const { content } = useSiteContent();
  const services = content.services.slice(0, 4);

  return (
    <section className="relative overflow-hidden px-5 pt-14 pb-0 sm:pt-20">
      <div className="glow-blob top-40 -left-10 h-[420px] w-[420px] bg-[oklch(0.86_0.11_60)]" />
      <div
        className="glow-blob top-56 -right-10 h-[420px] w-[420px] bg-[oklch(0.85_0.1_215)]"
        style={{ animationDelay: "-6s" }}
      />

      <div className="relative mx-auto max-w-[1180px]">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <Pill className="bg-white/70 shadow-soft backdrop-blur">
              <span className="flex -space-x-2">
                {avatars.map((a) => (
                  <img
                    key={a}
                    src={a}
                    alt=""
                    className="size-5 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </span>
              100+ businesses trust us
            </Pill>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] font-medium text-balance sm:text-5xl md:text-[3.75rem]">
              Take your business digital, the right way.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 max-w-[32rem] text-sm leading-relaxed text-muted-foreground">
              Websites, apps, social media and Google Ads — designed, built and managed by one team that
              actually cares about your numbers.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              Book a Free Consultation <ArrowRight className="size-4" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={400} className="mt-14">
          <div className="relative mx-auto max-w-[960px] rounded-[28px] bg-card p-3 shadow-panel sm:p-4">
            <div className="flex gap-4">
              <div className="hidden flex-col items-center gap-3 rounded-2xl bg-secondary/70 px-2.5 py-4 sm:flex">
                {[Home, Target, Briefcase, Clock, Settings].map((Icon, i) => (
                  <span
                    key={i}
                    className={cn(
                      "flex size-8 items-center justify-center rounded-xl transition-colors",
                      i === 0 ? "bg-card text-foreground shadow-soft" : "text-muted-foreground",
                    )}
                  >
                    <Icon className="size-4" />
                  </span>
                ))}
                <img
                  src={avatars[0]}
                  alt=""
                  className="mt-auto size-8 rounded-full object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-3 px-1 pt-1 pb-4">
                  <Orb size={44} />
                  <div>
                    <p className="text-sm font-medium">Hi there — what are we building?</p>
                    <p className="text-xs text-muted-foreground">
                      Pick a service and we'll scope it for free.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {services.map((s) => {
                    const Icon = iconMap[s.icon] ?? Monitor;
                    return (
                      <div
                        key={s.id}
                        className="group flex items-start justify-between gap-3 rounded-2xl border border-border/70 bg-background p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-lift"
                      >
                        <div>
                          <p className="text-sm font-semibold">{s.title}</p>
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.short}</p>
                        </div>
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                          <Icon className="size-4" />
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 flex items-center gap-2 rounded-full border border-border bg-background py-2 pr-2 pl-4">
                  <span className="flex-1 truncate text-xs text-muted-foreground">
                    Tell us about your project…
                  </span>
                  <a
                    href="#contact"
                    aria-label="Get a free quote"
                    className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                  >
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {trust.map((t, i) => (
            <Reveal key={t.label} delay={i * 90}>
              <div className="flex items-start gap-3">
                <span className={cn("flex size-9 items-center justify-center rounded-xl", t.tint)}>
                  <t.icon className="size-4 text-foreground/70" />
                </span>
                <div>
                  <p className="text-sm font-semibold">{t.label}</p>
                  <p className="text-xs text-muted-foreground">{t.copy}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
