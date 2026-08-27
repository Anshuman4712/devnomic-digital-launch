import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  MessageCircle,
  MessagesSquare,
  Monitor,
  Smartphone,
  Share2,
} from "lucide-react";
import { CountUp, Reveal, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

const cardBase =
  "rounded-3xl bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift";

export function BentoGrid() {
  return (
    <section className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading
          label="How we work"
          title="One partner across every channel your customers use."
          subtitle="Strategy, design, build and growth — connected, so nothing falls between two agencies."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          <Reveal className="lg:row-span-2">
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-3xl shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=1000&q=80"
                alt="Devnomic project team collaborating"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,oklch(0.15_0.01_285/0.85))]" />
              <div className="absolute top-5 right-5 left-5 rounded-2xl border border-white/20 bg-black/35 p-3 backdrop-blur-md">
                <p className="text-xs leading-relaxed text-white/90">
                  "Can we push the launch date up by a week?" — handled the same day.
                </p>
              </div>
              <div className="absolute right-6 bottom-6 left-6">
                <p className="text-lg font-semibold text-white">Dedicated project managers</p>
                <p className="mt-1 text-xs text-white/70">
                  One named contact from kickoff to launch, reachable on WhatsApp.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-1">
            <div className={cn(cardBase, "h-full")}>
              <div className="space-y-2.5">
                {[
                  { icon: Monitor, label: "Web", on: true },
                  { icon: Smartphone, label: "Mobile", on: true },
                  { icon: Share2, label: "Social", on: false },
                ].map((r) => (
                  <div
                    key={r.label}
                    className="flex items-center gap-3 rounded-xl bg-secondary/70 px-3 py-2.5"
                  >
                    <r.icon className="size-4 text-muted-foreground" />
                    <span className="flex-1 text-xs font-medium">{r.label}</span>
                    <span
                      className={cn(
                        "flex h-4 w-7 items-center rounded-full p-0.5 transition-colors",
                        r.on ? "bg-brand" : "bg-border",
                      )}
                    >
                      <span
                        className={cn(
                          "size-3 rounded-full bg-white transition-transform",
                          r.on && "translate-x-3",
                        )}
                      />
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-base font-semibold">Multi-platform delivery</p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className={cn(cardBase, "flex h-full flex-col items-center justify-center text-center")}>
              <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                <MessagesSquare className="size-6" />
              </span>
              <p className="mt-5 text-4xl font-semibold">
                <CountUp value="100+" />
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Projects delivered</p>
            </div>
          </Reveal>

          <Reveal delay={220} className="lg:col-span-1">
            <div className={cn(cardBase, "h-full")}>
              <div className="space-y-2">
                {[
                  { dot: "bg-tint-peach", text: "Strategy call booked" },
                  { dot: "bg-tint-lav", text: "Design approved → build started" },
                  { dot: "bg-tint-mint", text: "Launched & tracking live" },
                ].map((t) => (
                  <div
                    key={t.text}
                    className="flex items-center gap-2.5 rounded-xl border border-border/70 bg-background px-3 py-2.5"
                  >
                    <span className={cn("size-2 rounded-full", t.dot)} />
                    <span className="text-xs text-muted-foreground">{t.text}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-base font-semibold">End-to-end service</p>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className={cn(cardBase, "relative h-full min-h-[190px] overflow-hidden")}>
              <p className="text-base font-semibold">Every channel covered</p>
              <p className="mt-1 max-w-[60%] text-xs text-muted-foreground">
                Instagram, Google, Meta, WhatsApp and LinkedIn.
              </p>
              <div className="absolute -right-2 -bottom-2 size-36">
                {[
                  { Icon: Instagram, cls: "size-11 right-14 bottom-16 bg-tint-peach" },
                  { Icon: Globe, cls: "size-9 right-2 bottom-20 bg-tint-lav" },
                  { Icon: Facebook, cls: "size-12 right-16 bottom-3 bg-tint-mint" },
                  { Icon: MessageCircle, cls: "size-10 right-4 bottom-6 bg-brand-soft" },
                  { Icon: Linkedin, cls: "size-8 right-24 bottom-24 bg-secondary" },
                ].map(({ Icon, cls }, i) => (
                  <span
                    key={i}
                    className={cn(
                      "float-slow absolute flex items-center justify-center rounded-full text-foreground/70 shadow-soft",
                      cls,
                    )}
                    style={{ animationDelay: `${i * -1.7}s` }}
                  >
                    <Icon className="size-4" />
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
