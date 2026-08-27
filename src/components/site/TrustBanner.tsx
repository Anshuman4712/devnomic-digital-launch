import { Clock, HeartHandshake, ShieldCheck } from "lucide-react";
import { useSiteContent } from "@/lib/site-content";
import { CountUp, Pill, Reveal } from "./primitives";

const icons = [ShieldCheck, Clock, HeartHandshake];

export function TrustBanner() {
  const { content } = useSiteContent();

  return (
    <section className="px-3 sm:px-5">
      <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[32px]">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&h=900&q=80"
          alt="Mountains above the clouds at sunset"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.78_0.11_60/0.75),oklch(0.35_0.05_250/0.85))]" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-14 text-center">
          <Reveal>
            <Pill className="border border-white/30 bg-white/15 text-white backdrop-blur">Trust</Pill>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 max-w-2xl text-2xl leading-tight font-medium text-white text-balance sm:text-4xl">
              Trusted, proven, and result-driven.
            </h2>
          </Reveal>

          <div className="mt-8 grid w-full max-w-3xl gap-3 sm:grid-cols-3">
            {content.stats.map((s, i) => {
              const Icon = icons[i % icons.length]!;
              return (
                <Reveal key={s.id} delay={140 + i * 90}>
                  <div className="rounded-2xl border border-white/25 bg-white/15 p-5 text-left backdrop-blur-md">
                    <Icon className="size-4 text-white/80" />
                    <p className="mt-6 text-3xl font-semibold text-white">
                      <CountUp value={s.value} />
                    </p>
                    <p className="mt-1 text-xs text-white/75">{s.label}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
