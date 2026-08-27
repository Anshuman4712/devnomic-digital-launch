import { Instagram, Linkedin, Mail } from "lucide-react";
import { useSiteContent } from "@/lib/site-content";
import { Reveal, SectionHeading } from "./primitives";

export function Founders() {
  const { content } = useSiteContent();

  return (
    <section id="about" className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading
          label="About us"
          title="Meet the team behind Devnomic."
          subtitle="A small, senior team — you talk to the people doing the work."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.founders.map((f, i) => (
            <Reveal key={f.id} delay={i * 90}>
              <div className="flex h-full flex-col items-center rounded-3xl bg-card p-7 text-center shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <img
                  src={f.photo}
                  alt={f.name}
                  loading="lazy"
                  className="size-20 rounded-full object-cover"
                />
                <p className="mt-4 text-base font-semibold">{f.name}</p>
                <p className="text-xs text-brand">{f.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.bio}</p>
                <div className="mt-5 flex gap-2">
                  {[
                    { href: f.linkedin, Icon: Linkedin, label: "LinkedIn" },
                    { href: f.instagram, Icon: Instagram, label: "Instagram" },
                    { href: `mailto:${f.email}`, Icon: Mail, label: "Email" },
                  ].map(({ href, Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={`${f.name} on ${label}`}
                      className="flex size-8 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <Icon className="size-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
