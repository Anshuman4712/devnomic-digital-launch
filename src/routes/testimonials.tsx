import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal, SectionHeading } from "@/components/site/primitives";
import { useSiteContent } from "@/lib/site-content";

const title = "Client Testimonials — Devnomic Digital Solutions";
const description =
  "Read what founders and marketing leads say about working with Devnomic on websites, apps and campaigns.";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  const { content } = useSiteContent();

  return (
    <div className="min-h-screen bg-canvas py-3">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[32px] bg-background">
        <Header />
        <main className="px-5 py-20">
          <div className="mx-auto max-w-[1180px]">
            <SectionHeading
              label="Testimonials"
              title="What our clients say."
              subtitle="Every review below comes from a business we've shipped work for."
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {content.testimonials.map((t, i) => (
                <Reveal key={t.id} delay={i * 70}>
                  <div className="flex h-full flex-col rounded-3xl bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star
                          key={s}
                          className={
                            s < t.rating
                              ? "size-3.5 fill-brand text-brand"
                              : "size-3.5 text-border"
                          }
                        />
                      ))}
                    </div>
                    <p className="mt-4 flex-1 text-sm leading-relaxed">"{t.quote}"</p>
                    <div className="mt-5 flex items-center gap-3">
                      <img src={t.photo} alt="" className="size-9 rounded-full object-cover" />
                      <div>
                        <p className="text-xs font-semibold">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
