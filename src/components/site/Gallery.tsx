import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useSiteContent } from "@/lib/site-content";
import { Reveal, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

const filters = ["All", "Website", "App", "Social", "Ads"] as const;

export function Gallery() {
  const { content } = useSiteContent();
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const projects = content.projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="portfolio" className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading
          label="Portfolio"
          title="Work we're proud to put our name on."
          subtitle="A selection of recent websites, apps and campaigns built for growing businesses."
        />

        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-medium transition-all duration-200",
                  filter === f
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 70}>
              <a
                href={p.link}
                className={cn(
                  "group relative block overflow-hidden rounded-3xl shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift",
                  i % 5 === 0 ? "aspect-4/5" : "aspect-4/3",
                )}
              >
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,oklch(0.15_0.01_285/0.85))] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute right-5 bottom-5 left-5 translate-y-1 transition-transform duration-300 group-hover:translate-y-0">
                  <span className="rounded-full bg-white/20 px-2.5 py-1 text-[0.65rem] font-medium text-white backdrop-blur">
                    {p.category}
                  </span>
                  <p className="mt-2.5 text-base font-semibold text-white">{p.title}</p>
                  <p className="mt-0.5 line-clamp-2 text-xs text-white/70">{p.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View project <ArrowUpRight className="size-3.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
