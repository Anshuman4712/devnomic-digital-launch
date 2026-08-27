import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useSiteContent } from "@/lib/site-content";
import { Logo } from "./primitives";

const columns = [
  {
    title: "Services",
    links: ["Website Development", "App Development", "Social Media", "Google Ads & SEO"],
  },
  { title: "Industries", links: ["Retail", "Hospitality", "Real Estate", "Professional Services"] },
  { title: "Company", links: ["About Us", "Careers", "Portfolio", "Contact"] },
  { title: "Resources", links: ["Blog", "Case Studies", "Privacy Policy", "Terms"] },
];

const socialIcons = { Instagram, LinkedIn: Linkedin, X: Twitter, Facebook } as Record<
  string,
  typeof Instagram
>;

export function Footer() {
  const { content } = useSiteContent();
  const { settings } = content;

  return (
    <footer className="border-t border-border px-5 pt-14 pb-8">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-10 md:grid-cols-[1.2fr_repeat(4,minmax(0,1fr))]">
          <div>
            <Logo name={settings.companyName} logoUrl={settings.logoUrl} />
            <p className="mt-3 max-w-56 text-xs leading-relaxed text-muted-foreground">
              {settings.tagline}
            </p>
            <p className="mt-3 text-xs text-muted-foreground">{settings.email}</p>
            <p className="text-xs text-muted-foreground">{settings.phone}</p>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-border pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {settings.companyName}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {settings.socials.map((s) => {
              const Icon = socialIcons[s.label] ?? Instagram;
              return (
                <a
                  key={s.label}
                  href={s.url}
                  aria-label={s.label}
                  className="flex size-8 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="size-3.5" />
                </a>
              );
            })}
            <a
              href="#contact"
              className="ml-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium transition-colors hover:bg-secondary"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
