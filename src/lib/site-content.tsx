import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  photo: string;
  rating: number;
  featured: boolean;
};

export type Project = {
  id: string;
  title: string;
  category: "Website" | "App" | "Social" | "Ads" | "Other";
  thumbnail: string;
  description: string;
  client: string;
  link: string;
  featured: boolean;
};

export type Founder = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  linkedin: string;
  instagram: string;
  email: string;
};

export type Service = {
  id: string;
  title: string;
  short: string;
  detail: string;
  icon: string;
};

export type Stat = { id: string; value: string; label: string };
export type Faq = { id: string; question: string; answer: string };
export type Lead = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  read: boolean;
};

export type Settings = {
  companyName: string;
  tagline: string;
  logoUrl: string;
  email: string;
  phone: string;
  ctaHeading: string;
  seoTitle: string;
  seoDescription: string;
  socials: { label: string; url: string }[];
};

export type SiteContent = {
  settings: Settings;
  services: Service[];
  stats: Stat[];
  projects: Project[];
  founders: Founder[];
  testimonials: Testimonial[];
  faqs: Faq[];
  leads: Lead[];
};

const img = (seed: string, w = 600, h = 600) =>
  `https://images.unsplash.com/photo-${seed}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const defaultContent: SiteContent = {
  settings: {
    companyName: "Devnomic Digital Solutions",
    tagline: "Take your business digital, the right way.",
    logoUrl: "",
    email: "hello@devnomic.com",
    phone: "+91 98765 43210",
    ctaHeading: "Join 100+ businesses already thriving online",
    seoTitle: "Devnomic Digital Solutions — Websites, Apps & Growth Marketing",
    seoDescription:
      "Devnomic builds websites, apps, social media presence and Google Ads campaigns that help businesses grow online.",
    socials: [
      { label: "Instagram", url: "https://instagram.com" },
      { label: "LinkedIn", url: "https://linkedin.com" },
      { label: "X", url: "https://x.com" },
      { label: "Facebook", url: "https://facebook.com" },
    ],
  },
  services: [
    {
      id: "s1",
      title: "Website Development",
      short: "Fast, beautiful sites that convert visitors into customers.",
      detail:
        "Custom marketing sites, e-commerce and web apps — designed, built and optimised for speed and search.",
      icon: "monitor",
    },
    {
      id: "s2",
      title: "App Development",
      short: "Native-feeling mobile apps for Android and iOS.",
      detail: "From product discovery to store launch, with analytics and updates baked in.",
      icon: "smartphone",
    },
    {
      id: "s3",
      title: "Social Media Management",
      short: "Content, calendars and community — handled end to end.",
      detail: "Strategy, design, scheduling and reporting across every platform your audience uses.",
      icon: "share",
    },
    {
      id: "s4",
      title: "Google Ads & SEO",
      short: "Performance campaigns tuned for real revenue.",
      detail: "Search, Performance Max and local SEO that lowers cost-per-lead month after month.",
      icon: "trending",
    },
  ],
  stats: [
    { id: "st1", value: "100+", label: "Happy clients served" },
    { id: "st2", value: "48h", label: "Average response time" },
    { id: "st3", value: "95%", label: "Client retention rate" },
  ],
  projects: [
    {
      id: "p1",
      title: "Aurora Interiors",
      category: "Website",
      thumbnail: img("1487017159836-4e23ece2e4cf", 900, 700),
      description: "A studio portfolio site with a booking flow and CMS.",
      client: "Aurora Studio",
      link: "#",
      featured: true,
    },
    {
      id: "p2",
      title: "FitLoop Tracker",
      category: "App",
      thumbnail: img("1512941937669-90a1b58e7e9c", 900, 700),
      description: "A cross-platform fitness app with streaks and coaching.",
      client: "FitLoop",
      link: "#",
      featured: true,
    },
    {
      id: "p3",
      title: "Saffron Kitchen",
      category: "Social",
      thumbnail: img("1552566626-52f8b828add9", 900, 700),
      description: "90 days of content that tripled reach for a restaurant group.",
      client: "Saffron",
      link: "#",
      featured: false,
    },
    {
      id: "p4",
      title: "Northline Legal",
      category: "Ads",
      thumbnail: img("1450101499163-c8848c66ca85", 900, 700),
      description: "Search campaigns that cut cost-per-lead by 42%.",
      client: "Northline",
      link: "#",
      featured: false,
    },
    {
      id: "p5",
      title: "Bloom Cosmetics",
      category: "Website",
      thumbnail: img("1522335789203-aabd1fc54bc9", 900, 700),
      description: "Headless storefront with a 1.2s load time.",
      client: "Bloom",
      link: "#",
      featured: true,
    },
    {
      id: "p6",
      title: "Metro Realty",
      category: "App",
      thumbnail: img("1560518883-ce09059eeffa", 900, 700),
      description: "Property discovery app with saved-search alerts.",
      client: "Metro",
      link: "#",
      featured: false,
    },
  ],
  founders: [
    {
      id: "f1",
      name: "Anshuman Mishra",
      role: "Founder & Product Lead",
      bio: "Builds the roadmap and keeps every project shipping on time.",
      photo: img("1500648767791-00dcc994a43e", 400, 400),
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      email: "anshuman@devnomic.com",
    },
    {
      id: "f2",
      name: "Ritika Sharma",
      role: "Co-founder & Design Director",
      bio: "Turns brand ideas into interfaces people actually enjoy using.",
      photo: img("1494790108377-be9c29b29330", 400, 400),
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      email: "ritika@devnomic.com",
    },
    {
      id: "f3",
      name: "Karan Verma",
      role: "Head of Growth",
      bio: "Runs paid media and SEO with a spreadsheet in one hand.",
      photo: img("1507003211169-0a1dd7228f2d", 400, 400),
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      email: "karan@devnomic.com",
    },
  ],
  testimonials: [
    {
      id: "t1",
      name: "Priya Nair",
      role: "Founder, Saffron Kitchen",
      quote: "Our bookings doubled within two months of the new site going live.",
      photo: img("1438761681033-6461ffad8d80", 200, 200),
      rating: 5,
      featured: true,
    },
    {
      id: "t2",
      name: "Daniel Cruz",
      role: "CMO, Northline Legal",
      quote: "Cost per lead dropped 42%. They actually understand performance marketing.",
      photo: img("1500648767791-00dcc994a43e", 200, 200),
      rating: 5,
      featured: true,
    },
    {
      id: "t3",
      name: "Meera Iyer",
      role: "Owner, Bloom Cosmetics",
      quote: "The store loads instantly and the team ships changes the same day.",
      photo: img("1544005313-94ddf0286df2", 200, 200),
      rating: 5,
      featured: true,
    },
    {
      id: "t4",
      name: "Arjun Patel",
      role: "CEO, FitLoop",
      quote: "They took our app from a sketch to the App Store in ten weeks.",
      photo: img("1519085360753-af0119f7cbe7", 200, 200),
      rating: 5,
      featured: true,
    },
    {
      id: "t5",
      name: "Sofia Almeida",
      role: "Marketing Lead, Metro Realty",
      quote: "Social finally feels consistent — and it's bringing in real enquiries.",
      photo: img("1487412720507-e7ab37603c6f", 200, 200),
      rating: 4,
      featured: true,
    },
    {
      id: "t6",
      name: "Rahul Desai",
      role: "Director, Aurora Studio",
      quote: "Genuinely the smoothest agency process we've had in eight years.",
      photo: img("1472099645785-5658abf4ff4e", 200, 200),
      rating: 5,
      featured: true,
    },
  ],
  faqs: [
    {
      id: "q1",
      question: "What services do you offer?",
      answer:
        "Website and app development, social media management, Google Ads and SEO, plus branding and ongoing maintenance — all under one roof.",
    },
    {
      id: "q2",
      question: "How long does a typical project take?",
      answer:
        "A marketing website takes 2–4 weeks, a full web app 6–10 weeks, and mobile apps 8–12 weeks depending on scope.",
    },
    {
      id: "q3",
      question: "Do you offer ongoing support after launch?",
      answer:
        "Yes. Every project includes 30 days of free support, and we offer monthly care plans covering updates, hosting and reporting.",
    },
    {
      id: "q4",
      question: "What's included in your pricing?",
      answer:
        "Strategy, design, development, testing, launch and handover documentation. No hidden per-page fees.",
    },
    {
      id: "q5",
      question: "Can I see examples of your past work?",
      answer: "Absolutely — browse the project gallery above or ask us for case studies in your industry.",
    },
  ],
  leads: [],
};

const STORAGE_KEY = "devnomic-content-v1";

type Ctx = {
  content: SiteContent;
  update: (patch: Partial<SiteContent>) => void;
  reset: () => void;
};

const SiteContentContext = createContext<Ctx | null>(null);

export function SiteContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(defaultContent);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setContent({ ...defaultContent, ...(JSON.parse(raw) as SiteContent) });
    } catch {
      /* ignore */
    }
  }, []);

  const update = useCallback((patch: Partial<SiteContent>) => {
    setContent((prev) => {
      const next = { ...prev, ...patch };
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    window.localStorage.removeItem(STORAGE_KEY);
    setContent(defaultContent);
  }, []);

  const value = useMemo(() => ({ content, update, reset }), [content, update, reset]);
  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>;
}

export function useSiteContent() {
  const ctx = useContext(SiteContentContext);
  if (!ctx) throw new Error("useSiteContent must be used inside SiteContentProvider");
  return ctx;
}

export const uid = () => Math.random().toString(36).slice(2, 10);
