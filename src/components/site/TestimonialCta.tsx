import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { useSiteContent, uid } from "@/lib/site-content";
import { Orb, Reveal } from "./primitives";
import { cn } from "@/lib/utils";

const positions = [
  "left-[4%] top-[12%] w-56",
  "right-[5%] top-[8%] w-52",
  "left-[10%] bottom-[16%] w-52",
  "right-[8%] bottom-[14%] w-56",
  "left-[32%] top-[2%] w-48",
  "right-[30%] bottom-[3%] w-48",
];

export function TestimonialCta() {
  const { content, update } = useSiteContent();
  const [email, setEmail] = useState("");
  const featured = content.testimonials.filter((t) => t.featured).slice(0, 6);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    update({
      leads: [
        {
          id: uid(),
          name: "Website visitor",
          email,
          message: "Requested to get started from the homepage CTA.",
          createdAt: new Date().toISOString(),
          read: false,
        },
        ...content.leads,
      ],
    });
    setEmail("");
    toast.success("Thanks! We'll be in touch within 24 hours.");
  };

  return (
    <section id="contact" className="px-3 py-20 sm:px-5">
      <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,oklch(0.88_0.07_230),oklch(0.93_0.06_170)_45%,oklch(0.94_0.06_70))] px-6 py-20">
        <div className="relative mx-auto hidden h-[320px] max-w-4xl md:block">
          {featured.map((t, i) => (
            <div
              key={t.id}
              className={cn(
                "float-slow group absolute rounded-2xl bg-white/70 p-3.5 opacity-80 shadow-soft backdrop-blur-md transition-all duration-300 hover:z-20 hover:scale-[1.04] hover:opacity-100",
                positions[i % positions.length],
              )}
              style={{ animationDelay: `${i * -1.8}s`, animationDuration: `${8 + i}s` }}
            >
              <div className="flex items-start gap-2.5">
                <img src={t.photo} alt="" className="size-8 shrink-0 rounded-full object-cover" />
                <div>
                  <p className="text-[0.72rem] leading-snug text-foreground/85">"{t.quote}"</p>
                  <p className="mt-1 text-[0.62rem] text-muted-foreground">
                    {t.name} · {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <Orb size={200} />
          </div>
        </div>

        <div className="flex justify-center md:hidden">
          <Orb size={140} />
        </div>

        <div className="relative z-20 mt-12 flex flex-col items-center text-center">
          <Reveal>
            <h2 className="max-w-xl text-3xl leading-tight font-medium text-balance sm:text-4xl">
              {content.settings.ctaHeading}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <form
              onSubmit={submit}
              className="mt-7 flex w-full max-w-md items-center gap-2 rounded-full bg-white/80 p-1.5 shadow-soft backdrop-blur"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                aria-label="Your email address"
                className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                Get Started
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
