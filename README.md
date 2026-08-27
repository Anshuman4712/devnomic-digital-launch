# Devnomic Digital Launch

Build Prompt: Devnomic Digital Solutions — Website + Admin Panel

0. Project Summary

Build a modern, animation-rich marketing website for Devnomic Digital Solutions, a digital agency that helps businesses "go digital" through Website Development, App Development, Social Media Management, Google Ads / Performance Marketing, and related digital services. The site must visually replicate the reference design's premium SaaS aesthetic (soft off-white background, generous whitespace, pill-shaped tags, gradient glow blobs, floating glassmorphic cards, rounded 20–28px corners, minimal single-accent-color usage, large serif-less display headings) but reworded and re-purposed entirely for a digital agency instead of an AI/SaaS product.

The build has two parts:

Public marketing website (multi-section single-page + supporting pages)

Admin panel (authenticated dashboard) to manage all dynamic content: testimonials, project gallery, founders/about section, stats, FAQs, services, and general site settings — without touching code.

No tech stack is specified here — choose the best modern stack automatically. Focus entirely on UI/UX fidelity, layout precision, spacing, typography, color, component structure, and animation/interaction design.

1. Pixel-Level Design Audit of Reference (translate ALL of this 1:1 in spirit)

1.1 Global layout & spacing system

Page background: very light warm-grey/off-white (#F7F7F5–#FAFAF8 range), NOT pure white.

Content is centered in a max-width container (~1200–1280px) with a subtle rounded "device frame" feeling — outer page has soft grey padding (like a canvas), inner content card has a very light background with big rounded corners (~24–32px) at the very top and bottom, giving a "framed webpage inside a browser mat" effect.

Consistent vertical rhythm: large section padding (~96–140px top/bottom on desktop, ~56–72px on mobile).

8px-based spacing scale throughout; nothing feels cramped.

Corner radius system: small chips/pills = fully rounded (999px), cards = 16–24px, large hero panels/images = 24–32px, buttons = fully rounded or 10–12px.

1.2 Header / Navigation

Fixed/sticky top bar, transparent-to-blurred on scroll.

Left: circular logo mark (abstract colorful swirl icon in reference) + wordmark in medium-weight sans-serif, black text.

Center-right: horizontal nav links in muted grey, small font (~14px): e.g. Industries, Documents/Resources, Partnership, Contact us — regular weight, hover state darkens to black with a subtle underline/slide animation.

Right: "Log in" as plain text link + a solid black pill/rounded-rectangle button "Get started" (white text, black fill, subtle scale/brightness on hover).

Nav bar height ~64–72px, no visible border, sits directly on the page background.

1.3 Hero Section

Small pill-shaped "eyebrow" badge above the headline: overlapping circular user avatars (3 small circles, slightly overlapping) + text "1k+ joined" — grey pill background, rounded-full, tiny shadow.

Headline: very large (56–64px desktop), tight line-height, medium/regular weight (not bold-heavy), black, center-aligned, two lines, breaks naturally at a phrase boundary.

Sub-copy: none in image 2's hero, but where used (e.g. Service section) it's a small 1–2 line grey paragraph, centered, max-width ~520px.

Primary CTA button directly under headline: black filled, rounded pill, white text, small horizontal padding (~24px), medium font — "Schedule a demo" equivalent.

Below the CTA: a large soft radial gradient glow bleeding from behind the hero visual — warm peach/orange glow on the left, cool blue/cyan glow on the right, blurred and diffused (like two colored spotlights), sitting behind/around the product screenshot panel. This is a signature visual element — recreate as an animated, slowly drifting gradient blob (CSS radial-gradient + blur, subtle infinite float animation).

1.4 Hero Visual — "Product Preview" Panel (repurpose for agency)

A large rounded card (white, soft shadow, ~24px radius) floating above the gradient glow, slightly overlapping into the next section (negative margin-bottom overlap effect).

Left edge of this panel has a thin vertical icon rail (small circular/square icon buttons stacked vertically: home, target, briefcase, clock, gear, avatar at bottom) — a faux sidebar for visual richness.

Inside the card: a chat/assistant-style header ("Hi, Emily! How can I help you today?") with a glossy 3D sphere/orb avatar (glassy blue gradient sphere with light reflection — this orb re-appears later as a signature motif and should be recreated as an SVG/CSS 3D-looking gradient sphere with a highlight and soft shadow, gently rotating/breathing via animation).

Below that: a 2×2 grid of feature/action cards, each with a title, one-line description, and a small illustrative icon/thumbnail on the right (files stack, translate icon, waveform/mic icon, image stack icon). Repurpose these 4 cards for agency services, e.g.: "Website Development", "App Development", "Social Media Management", "Google Ads & SEO" — each with a relevant icon illustration.

Bottom: a rounded input bar with placeholder text ("Ask me anything…") and a circular black send button — for the agency version, this can be swapped for a "Get a free quote" quick-input or removed/replaced with a CTA strip; keep the visual weight and shape identical even if function changes.

Directly beneath this panel: 3 small inline trust badges in a row, each with a colored rounded-square icon (soft pastel background: peach, lavender, mint) + bold label + one-line grey description — e.g. "Multi-task / Effective / Powerful" → repurpose as "Full-Service / Result-Driven / Reliable" style trio.

1.5 "Technology" / Capability Section

Small centered pill label ("Service" / "Technology") above section heading — grey bg, black text, tiny, rounded-full.

Large centered heading (~40–44px), e.g. "Lead your AI transformation" → repurpose as "Lead your Digital Transformation" or "Everything your business needs, online."

Two-column layout below:

Left column: vertical stacked list of 4 feature bullets, each with a small line-icon on the left and 1–2 line label text. One item is visually "highlighted" — wrapped in a soft yellow/cream rounded card with a colored icon-badge, bold heading line + grey description line, standing out from the plain (unboxed) list items above/below it. Recreate this alternating "plain list item vs highlighted card" pattern.

Right column: a large soft-grey rounded panel (24px radius) containing a floating mock UI element — in reference this is a message/notification stack (contact cards with avatars, name, timestamp) plus a WhatsApp-green circular floating icon badge overlapping the bottom-right corner, and a small mail/envelope icon chip overlapping the top-left. Recreate this "floating chip overlapping a soft panel" composition for an agency context — e.g. client message previews, or social platform icons (Instagram/Meta/Google) floating around a dashboard mockup.

1.6 "Governance / Trust" Full-Bleed Banner Section

Full-width (edge-to-edge within the rounded container) background image: a moody, desaturated landscape/mountains-in-clouds photo with a warm sunset gradient overlay (peach top fading to blue-grey bottom) — creates strong visual break from the light sections above/below.

Small pill label centered on image ("Governance") in a translucent/blurred glass chip.

Large centered white heading, two lines ("Reliable, Safe, and Validated" → repurpose to something like "Trusted, Proven, and Result-Driven").

Below: 3 glassmorphic stat cards in a row (frosted translucent white/black overlay, rounded corners, backdrop-blur), each with: small line icon top-left, huge bold number (e.g. "99%", "200+", "95%"), small grey/white label underneath. Repurpose numbers for the agency, e.g. "100+ Happy Clients", "Fast Turnaround / 48hr Response", "95% Client Retention" — keep exact card shape/composition.

1.7 Service Feature Grid ("Omni-channel" section, image 2 top)

Centered pill label ("Service"), large centered two-line heading, centered grey sub-paragraph (max-width ~500px).

Below: an asymmetric bento-grid of cards (NOT uniform grid) — this is a key visual signature:

Card 1 (tall, left): dark photographic card with a portrait photo, a small chat-bubble UI overlay near top ("I installed it, but the panel shows a red flashlight...") on a translucent dark glass strip, and bold white heading + grey description at bottom ("Collaborative intelligence").

Card 2 (top-middle, wide): light card showing a language/toggle switch UI (flag icons + toggle switches) with a bold label beneath ("All major languages").

Card 3 (top-right, small square): light card, large blue rounded-square chat-bubble icon centered, huge bold stat number below ("300K") + small grey caption ("Daily Conversations").

Card 4 (bottom-middle, wide): light card with two small horizontal "toast" notification chips stacked (colored dot/icon + one-line text) and a bold label beneath ("Multitasking").

Card 5 (bottom-right, small): light card with a bold label ("Omni channel") and a cluster of small circular icon bubbles scattered bottom-right (globe, chat, mic, calendar icons at varying sizes, slightly overlapping).

Recreate this exact 5-card bento composition (1 tall + 4 varied) but with agency-relevant content: e.g. Card 1 = "Dedicated Project Managers" with a team-photo + client-message overlay; Card 2 = "Multi-Platform Delivery" (Web/App/Social icons toggle row); Card 3 = big stat "100+ Projects Delivered"; Card 4 = "End-to-End Service" with toast chips like "Strategy → Design → Launch"; Card 5 = "Every Channel Covered" with scattered platform icon bubbles (Instagram, Google, Facebook, WhatsApp, LinkedIn).

All cards: consistent rounded corners (~20–24px), soft drop shadow, subtle hover-lift animation (translateY + shadow increase).

1.8 FAQ Section

Two-column layout: left = sticky-ish heading block ("Frequently Asked Questions" large heading + small grey sub-line + black "Contact us" pill button); right = accordion list.

Accordion rows: white rounded-2xl cards (~16px radius), each full-width, subtle 1px border or shadow, question text left + circular icon button right (plus icon "+" when closed, "×" when open, rotates 45° on open via animation).

One item shown expanded by default with a 2–3 line grey answer paragraph revealed below the question, smooth accordion height/opacity transition.

Repurpose questions for agency: "What services do you offer?", "How long does a typical project take?", "Do you offer ongoing support after launch?", "What's included in your pricing?", "Can I see examples of your past work?"

1.9 Signature "Testimonial Orb" CTA Section

Full-bleed rounded rectangle panel with a soft multi-color gradient background (blue → mint → peach/cream, diagonal, dreamy/atmospheric, slightly blurred like a sky).

Center: a large glossy 3D sphere (same glass-orb motif as hero) — bigger here, ~180–220px diameter, with realistic highlight, soft cast shadow, subtle floating/pulsing animation loop.

Scattered around the orb (behind it, layered with reduced opacity/blur): 6 floating testimonial "chat bubble" cards — each a small rounded-rectangle with a circular avatar photo, short 1-sentence quote in dark text, and (on 2 of them) a name + job title beneath. Bubbles are arranged asymmetrically (some higher, some lower, varying sizes, slight rotation), and should gently float/drift with a slow independent animation per card (parallax-like idle motion), partially obscured behind the glowing orb to feel layered/dimensional.

Below this composition: large centered two-line heading ("Join forward-thinking AI leaders" → repurpose to "Join 100+ businesses already thriving online" or similar), then an inline email-capture row: rounded pill input field ("Your email address") + adjoining black rounded button ("Notify" → repurpose as "Get Started" / "Book a Call").

This section doubles as the testimonials teaser — real testimonial content should pull dynamically from the admin-managed testimonials list (rotate a random 6 on each load, or feature the ones marked "featured").

1.10 Footer

Simple horizontal footer, light background, top hairline border.

Left: small logo mark + wordmark.

Middle: multiple link columns with small bold column headers (Integrations, Industries, Technology, Solutions equivalents) → repurpose to Services, Industries We Serve, Company, Resources with relevant links (Website Development, App Development, Social Media, Google Ads / Portfolio, About Us, Careers, Blog / Contact, Privacy, Terms).

Right: row of small circular social icons (X/Twitter, Instagram, Facebook, LinkedIn) + a small outlined "Contact us" pill button.

Bottom row: copyright line left ("© 2025 Devnomic Digital Solutions. All rights reserved"), Privacy Policy / Terms links right, separated by a thin top border, small muted grey text (~12–13px).

1.11 Typography & Color System (extracted)

Font: clean modern geometric/grotesk sans-serif (e.g. similar to Inter/General Sans/Neue Montreal feel) — headings use a slightly rounded, friendly display cut with tight tracking; body uses a neutral grotesk.

Type scale: Hero H1 ~56–64px / Section H2 ~36–44px / Card titles ~16–18px semi-bold / Body ~14–15px regular, grey (#6B6B6B–#8A8A8A) / Small labels & captions ~12–13px.

Color palette: near-black text (#111111), off-white background (#F7F7F5), white cards (#FFFFFF), muted grey secondary text, and accent gradients used ONLY in glow blobs, the 3D orb, and the CTA banner (peach #FFD9A8→cyan #B7E4F5→mint #C9F2D8 diagonal blend). Icon badge backgrounds use soft pastel tints (peach, lavender/blue, mint) at ~15% opacity with a solid-color icon inside.

Devnomic should establish its own primary accent (recommend a distinctive brand color, e.g. an electric indigo or teal, used consistently for buttons/links/icon accents/orb tint) while preserving this exact light/airy structure and neutral base palette.

1.12 Motion & Micro-interaction Requirements (this reference is animation-heavy — do NOT skip)

Page-load stagger animation: hero eyebrow badge → headline → CTA → hero panel fade/slide up in sequence (~80–120ms stagger, ease-out, 400–600ms duration).

Scroll-triggered reveal: every section's heading, cards, and images fade-up + slight translateY(20–30px) into view once ~15–20% visible (intersection observer), staggered per grid item.

Gradient glow blobs behind hero and CTA sections: continuous slow drift/scale animation (10–20s loop, ease-in-out, subtle — not distracting).

3D orb: idle gentle vertical float + slow rotation of internal highlight, plus a soft pulsing glow/shadow.

Floating testimonial bubbles: independent slow float (different durations/delays per card) for a layered parallax feel; hover to bring a bubble to full opacity/foreground with a smooth transition.

Buttons: hover = slight scale (1.02–1.04) + shadow/brightness shift, active = scale down slightly; all with 150–200ms ease transitions.

Nav links: underline-slide-in or color-fade on hover.

Bento grid cards & feature cards: hover-lift (translateY(-4 to -6px) + shadow expand).

FAQ accordion: smooth height + icon-rotate transition (~250–300ms).

Numbers in stat cards (100+, 300K, 95%) should count up from 0 when scrolled into view.

Optional but encouraged: subtle cursor-follow parallax tilt on the hero panel (very slight, 3–5deg max) for a premium feel.

Sticky/blurred header on scroll: background fades from transparent to a translucent blurred white bar with a soft bottom shadow after ~40px scroll.

All animations must respect prefers-reduced-motion and degrade gracefully.

2. Devnomic-Specific Page/Section Content Plan

Rebuild the reference layout order but with agency-appropriate content and add the sections explicitly requested by the client:

Header/Nav: Logo — Devnomic Digital Solutions | Nav: Services, Portfolio, About, Testimonials, Contact | Log in (admin) + "Get Started" CTA button.

Hero: Eyebrow badge "100+ Businesses Trust Us" (with avatar stack) → Headline "Take Your Business Digital, The Right Way." → sub-line → CTA "Book a Free Consultation" → hero preview panel showcasing 4 core services (Website, App, Social Media, Google Ads) in the 2×2 card layout → 3 trust badges ("Fast Delivery", "Result-Driven", "Dedicated Support").

Trust/Stats strip: quick inline numbers — "100+ Customers Served", "Highly Trusted", "Fast Turnaround".

Services Deep-Dive (repurposed "Technology" section): heading "Everything Your Business Needs, Online" with the highlighted-list + floating-panel composition, describing the full service stack.

Full-bleed Trust Banner: heading "Trusted, Proven, and Result-Driven" with 3 glass stat cards.

Services Bento Grid: 5-card asymmetric grid covering Website Dev, App Dev, Social Media Management, Google Ads/SEO, and Full-Channel Coverage.

Project Gallery / Portfolio Showcase (NEW — client-requested, not in reference but must match same visual language): a masonry/bento gallery grid of completed projects — each tile shows a project thumbnail image, hover-reveal overlay with project name, category tag, and "View Project" link; filterable by category (Website / App / Social / Ads); smooth hover zoom + overlay fade-in animation; fully managed via admin panel (add/edit/delete/reorder projects, each with title, category, thumbnail, description, external link, gallery images).

About Us / Founders Section (NEW — client-requested): heading "Meet the Team Behind Devnomic" — a row/grid of founder cards, each with circular profile photo, name, title, short bio, and social links (LinkedIn/Twitter/Instagram icons); same card styling (rounded, soft shadow, hover-lift) as the rest of the site; fully editable from admin panel (add/edit/remove founders, change photo/bio/socials/order).

FAQ Section: agency-relevant Q&A in the identical accordion UI.

Testimonial Orb CTA Section: floating testimonial bubbles around the glossy orb, pulling live from admin-managed testimonials (each testimonial = client photo, quote, name, company/title, rating, featured flag); heading "Join 100+ Businesses Already Thriving Online"; email-capture / "Get Started" strip.

Full Testimonials Page/Section (supporting the teaser): a dedicated scrollable/grid testimonials showcase (card-based, same visual language) for browsing all reviews, not just the featured 6.

Footer: Services / Industries / Company / Resources columns, social icons, "Contact us" button, copyright bar.

3. Admin Panel Specification

Build a secure, authenticated Admin Dashboard (separate route, e.g. /admin) with login (email/password, session-protected) styled with the same clean, light, rounded design language as the public site (consistent brand, not a generic default admin theme). Sidebar navigation with icons; main content area with cards/tables and modal or slide-over forms for editing.

Modules required:

Can Change Website LOGO From the Admin Panel, and each and every images.

Dashboard/Overview: quick summary cards (total projects, total testimonials, unread contact messages, etc.).

Testimonials Manager: table + card view of all testimonials; add/edit/delete; fields — client photo upload, name, job title/company, quote text, star rating, "featured on homepage" toggle, display order (drag-to-reorder).

Project Gallery Manager: add/edit/delete portfolio projects; fields — title, category (Website/App/Social/Ads/Other, multi-select tags), thumbnail image upload, additional gallery images, short description, long description, external live link, client name, completion date, "featured" toggle, drag-to-reorder.

About/Founders Manager: add/edit/delete founder/team member entries; fields — profile photo, name, title/role, bio text, social links (LinkedIn, Twitter/X, Instagram, email), display order.

Services Manager: edit the core services shown in hero/bento grid/services section — title, icon, short description, detailed description, display order.

Stats Manager: edit the numeric trust stats shown in the banner/hero badges (e.g. "100+", "95%", labels) so they stay accurate over time.

FAQ Manager: add/edit/delete/reorder FAQ question-answer pairs.

General Site Settings: edit site-wide info — company name, logo upload, tagline, contact email/phone, social media links, footer link columns, newsletter/CTA section text, SEO meta title/description.

Contact Form Submissions/Leads: view and manage messages/leads submitted through the site's contact or "Get Started" forms (mark read/unread, delete, export).

Media Library: central place to upload/manage all images used across gallery, testimonials, founders, and services.

Admin UX requirements:

Live preview or "changes reflect immediately on the live site" behavior — no code redeploy needed for content edits.

Form validation, image upload with preview/crop, drag-and-drop reordering for lists (testimonials, gallery, founders, FAQs).

Toast/snackbar confirmations on save/delete; confirmation modal before destructive deletes.

Fully responsive admin panel (usable on tablet at minimum).

Consistent rounded-card, soft-shadow, off-white design language matching the public site — the admin should feel like part of the same product, not a bolted-on generic dashboard.

4. Non-Negotiable Quality Bar

The final result should look and feel like a premium, funded SaaS product's marketing site, not a template — match the reference's restraint (lots of whitespace, one accent color, soft shadows, no clutter) while injecting Devnomic's own brand identity/color.

Every dynamic content area (testimonials, gallery, founders, services, FAQs, stats) must be wired to the admin panel — nothing should be hardcoded that the client needs to update themselves.

Animations should feel purposeful and smooth (not gimmicky), reinforcing that Devnomic itself is a skilled digital agency — the site's own polish is part of the sales pitch.

Fully responsive across mobile, tablet, and desktop, preserving the bento-grid/asymmetric layouts by gracefully re-stacking them on smaller screens (reference the mobile-width screenshots' natural single-column reflow as the target mobile behavior).

Accessible: proper contrast ratios, keyboard-navigable accordion/menus, alt text fields for all admin-uploaded images.


Your Task is to Just Build the Site Design it first then go for other task like activating cloud or other things first Build Code the Website and Admin Panel

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5af258d9-ab71-4c65-aabb-30d0b6656158).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
