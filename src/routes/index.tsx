import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, HeartHandshake, Lightbulb, Sparkles, Target } from "lucide-react";
import { useEffect } from "react";

import groceryDesign from "@/assets/designhub-grocery.png.asset.json";
import handbagDesign from "@/assets/designhub-handbag.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MKTJ — Creative Design, Web & Video Studio" },
      {
        name: "description",
        content:
          "MKTJ is a multidisciplinary creative studio for graphic design, websites, video editing, branding, UI/UX and motion.",
      },
      { property: "og:title", content: "MKTJ — Ideas that move markets" },
      {
        property: "og:description",
        content: "Premium graphic design, web development and cinematic video for ambitious brands.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  ["01", "Graphic Design", "Posters, flyers, banners, brochures, menus, invitations & print design"],
  ["02", "Brand Identity", "Logos, business cards, stationery, packaging & brand guidelines"],
  ["03", "Social & Advertising", "Social posts, thumbnails, ad creatives, product posts & campaigns"],
  ["04", "Album Design", "Wedding albums, photo books, covers, layouts & retouching"],
  ["05", "Web & UI/UX", "Portfolio, business, e-commerce, landing pages & product interfaces"],
  ["06", "Video & Animation", "Reels, commercials, editing, motion graphics, intros & animated videos"],
  ["07", "Writing", "Scripts, screenplays, plays, ad copy, captions & creative concepts"],
  ["08", "Custom Creative Service", "Tell us what you want made—even if it is not listed here"],
];

const process = [
  ["01", "Discover", "We understand the brand, audience and the real business goal."],
  ["02", "Create", "Strategy, design and motion come together as one visual system."],
  ["03", "Deliver", "Production-ready files and a polished launch, without the chaos."],
];

const experience = [
  {
    icon: Lightbulb,
    title: "Ideas before decoration",
    description: "Every visual starts with your audience, message and goal—not a recycled template.",
  },
  {
    icon: Target,
    title: "Built for real use",
    description: "From a social post to a full website, the final work is prepared for the place it will actually live.",
  },
  {
    icon: Sparkles,
    title: "One creative partner",
    description: "Design, web, video, animation and writing can move together without five different teams.",
  },
];

function Index() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="site-shell min-h-screen overflow-hidden bg-ink font-body text-mist">
      <div className="ambient-lights" aria-hidden="true" />
      <div className="glass-panel glass-panel-left" aria-hidden="true" />
      <div className="glass-panel glass-panel-right" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between border-b border-line py-5 sm:py-6">
          <a href="#top" className="font-display text-2xl font-extrabold text-bright" aria-label="MKTJ home">
            MKTJ<span className="text-volt">.</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-fog md:flex" aria-label="Main navigation">
            <a className="transition-colors hover:text-bright" href="#services">Services</a>
            <a className="transition-colors hover:text-bright" href="#work">Work</a>
            <a className="transition-colors hover:text-bright" href="#experience">Experience</a>
          </nav>
        </header>

        <section id="top" className="grid min-h-[76svh] items-end gap-10 py-14 sm:py-20 lg:grid-cols-[1.35fr_0.65fr] lg:pb-24 lg:pt-32">
          <div data-reveal>
            <p className="eyebrow">MKTJ creative portfolio · India</p>
            <h1 className="mt-6 max-w-5xl font-display text-5xl font-black leading-[0.92] text-bright sm:text-7xl lg:text-[7.5rem]">
              Ideas that <span className="text-volt">move</span> markets.
            </h1>
          </div>
          <div className="lg:pb-2" data-reveal>
            <p className="max-w-xl text-base leading-relaxed text-mist/85 sm:text-lg">
              A selection of graphic design, websites, video, animation and writing made to help growing businesses look impossible to ignore.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="button-primary button-large" href="#work">Explore the work <ArrowDownRight size={18} /></a>
            </div>
          </div>
        </section>

        <div className="marquee section-border" aria-label="MKTJ creative disciplines">
          <div className="marquee-track">
            <span>GRAPHIC DESIGN</span><i>✦</i><span>WEB DEVELOPMENT</span><i>✦</i><span>VIDEO EDITING</span><i>✦</i><span>ANIMATION</span><i>✦</i><span>BRAND IDENTITY</span><i>✦</i><span>CREATIVE WRITING</span><i>✦</i>
            <span aria-hidden="true">GRAPHIC DESIGN</span><i aria-hidden="true">✦</i><span aria-hidden="true">WEB DEVELOPMENT</span><i aria-hidden="true">✦</i><span aria-hidden="true">VIDEO EDITING</span><i aria-hidden="true">✦</i><span aria-hidden="true">ANIMATION</span><i aria-hidden="true">✦</i><span aria-hidden="true">BRAND IDENTITY</span><i aria-hidden="true">✦</i><span aria-hidden="true">CREATIVE WRITING</span><i aria-hidden="true">✦</i>
          </div>
        </div>

        <section id="services" className="section-border py-16 sm:py-24" data-reveal>
          <div className="section-heading">
            <div><p className="eyebrow">Capabilities</p><h2>What we do</h2></div>
            <span>01—08</span>
          </div>
          <div className="mt-9 grid gap-3 lg:grid-cols-2">
            {services.map(([number, title, description]) => (
              <article key={number} className="service-row group">
                <div>
                  <p className="font-display text-xl font-bold text-bright sm:text-2xl">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-fog">{description}</p>
                </div>
                <span className="font-display text-sm font-bold text-volt">{number}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section-border py-16 sm:py-24" data-reveal>
          <div className="section-heading">
            <div><p className="eyebrow">Selected concepts</p><h2>Work built to be felt</h2></div>
            <span>2026</span>
          </div>
          <div className="mt-9 grid gap-6 md:grid-cols-2">
            <article className="work-card group">
              <div className="overflow-hidden"><img src={handbagDesign.url} alt="DESIGNHUB handbag promotional graphic design sample" width={768} height={960} className="work-image" /></div>
              <div className="work-meta">
                <div><h3>Handbag Sale Creative</h3><p>DESIGNHUB sample · Product advertising</p></div>
                <span>Graphic</span>
              </div>
            </article>
            <article className="work-card group md:mt-20">
              <div className="overflow-hidden"><img src={groceryDesign.url} alt="DESIGNHUB grocery delivery promotional graphic design sample" width={768} height={960} loading="lazy" className="work-image" /></div>
              <div className="work-meta">
                <div><h3>Grocery Delivery Creative</h3><p>DESIGNHUB sample · Promotional design</p></div>
                <span>Graphic</span>
              </div>
            </article>
          </div>
          <p className="work-contact-note">
            Want to see more samples? Email us at <a href="mailto:designhub370@gmail.com">designhub370@gmail.com</a>
          </p>
        </section>

        <section id="experience" className="section-border py-16 sm:py-24" data-reveal>
          <div className="section-heading">
            <div><p className="eyebrow">How MKTJ works</p><h2>Experience you can feel in the work</h2></div>
            <span>Approach</span>
          </div>
          <div className="experience-grid">
            {experience.map(({ icon: Icon, title, description }, index) => (
              <article className="experience-item" key={title}>
                <div className="experience-icon"><Icon size={20} /></div>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="belief-section section-border" data-reveal>
          <div className="belief-mark" aria-hidden="true"><HeartHandshake size={34} /></div>
          <p className="eyebrow">Why accessible pricing?</p>
          <h2>New businesses deserve great design before they have big funding.</h2>
          <div className="belief-copy">
            <p>MKTJ keeps pricing practical because an early-stage idea should not look small just because its budget is small.</p>
            <p>We are not here to inflate a bill. We are here to understand what will genuinely help, use the budget wisely and create work that helps the business move forward.</p>
          </div>
        </section>

        <section id="process" className="section-border py-16 sm:py-24" data-reveal>
          <div className="section-heading">
            <div><p className="eyebrow">No layers of confusion</p><h2>One studio. End to end.</h2></div>
            <span>Process</span>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
            {process.map(([number, title, description]) => (
              <article key={number} className="bg-ink/95 p-6 sm:p-8">
                <span className="text-xs font-semibold text-volt">{number}</span>
                <h3 className="mt-12 font-display text-2xl font-bold text-bright">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fog">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-line py-7 text-xs text-fog sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display text-base font-bold text-mist">MKTJ<span className="text-volt">.</span></span>
          <span>Graphic · Web · Video · Motion</span>
          <span>© 2026 MKTJ Studio</span>
        </footer>
      </div>
    </main>
  );
}