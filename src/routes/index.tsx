import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { ServicesSection } from "@/components/site/ServicesSection";
import { TrustBanner } from "@/components/site/TrustBanner";
import { BentoGrid } from "@/components/site/BentoGrid";
import { Gallery } from "@/components/site/Gallery";
import { Founders } from "@/components/site/Founders";
import { FaqSection } from "@/components/site/FaqSection";
import { TestimonialCta } from "@/components/site/TestimonialCta";
import { Footer } from "@/components/site/Footer";

const title = "Devnomic Digital Solutions — Websites, Apps & Growth Marketing";
const description =
  "Devnomic builds websites, mobile apps, social media presence and Google Ads campaigns that help businesses grow online.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-canvas py-3">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[32px] bg-background">
        <Header />
        <main>
          <Hero />
          <ServicesSection />
          <TrustBanner />
          <BentoGrid />
          <Gallery />
          <Founders />
          <FaqSection />
          <TestimonialCta />
        </main>
        <Footer />
      </div>
    </div>
  );
}
