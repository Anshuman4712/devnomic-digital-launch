import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function useInView<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform motion-reduce:transition-none",
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-medium text-secondary-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  label,
  title,
  subtitle,
  className,
}: {
  label?: string;
  title: ReactNode;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      {label ? <Reveal>{<Pill>{label}</Pill>}</Reveal> : null}
      <Reveal delay={80}>
        <h2 className="mt-5 max-w-3xl text-3xl leading-[1.1] font-medium text-balance sm:text-4xl md:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={160}>
          <p className="mt-4 max-w-[32rem] text-sm leading-relaxed text-muted-foreground">{subtitle}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function CountUp({ value, className }: { value: string; className?: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const [display, setDisplay] = useState(value.replace(/[0-9]/g, "0"));

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/([\d.]+)/);
    const numeric = match?.[1];
    if (!numeric) {
      setDisplay(value);
      return;
    }
    const target = parseFloat(numeric);
    const start = performance.now();
    const duration = 1200;
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = Math.round(target * eased);
      setDisplay(value.replace(numeric, String(current)));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

export function Orb({ className, size = 200 }: { className?: string; size?: number }) {
  return (
    <div
      className={cn("orb-sphere", className)}
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  );
}

export function Logo({ name, logoUrl }: { name: string; logoUrl?: string }) {
  return (
    <span className="flex items-center gap-2.5">
      {logoUrl ? (
        <img src={logoUrl} alt={name} className="h-8 w-8 rounded-full object-cover" />
      ) : (
        <span className="orb-sphere block h-8 w-8" style={{ animation: "none" }} aria-hidden="true" />
      )}
      <span className="text-[0.95rem] font-semibold tracking-tight">{name.split(" ")[0]}</span>
    </span>
  );
}
