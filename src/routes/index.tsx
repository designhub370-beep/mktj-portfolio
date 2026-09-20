import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, Check, Copy } from "lucide-react";
import { useState, type FormEvent } from "react";

import meridianWatch from "@/assets/meridian-watch.jpg";
import vantaAthletics from "@/assets/vanta-athletics.jpg";

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
  ["01", "Graphic Design", "Brand identity, logos, packaging & campaign creatives"],
  ["02", "Web Development", "Portfolio, business, e-commerce & interactive websites"],
  ["03", "Video Editing", "Reels, commercials, brand films & colour grading"],
  ["04", "UI/UX & Motion", "Product design, motion graphics, 3D & social content"],
];

const process = [
  ["01", "Discover", "We understand the brand, audience and the real business goal."],
  ["02", "Create", "Strategy, design and motion come together as one visual system."],
  ["03", "Deliver", "Production-ready files and a polished launch, without the chaos."],
];

function Index() {
  const [copied, setCopied] = useState(false);

  const copyBrief = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const brief = [
      "MKTJ Project Enquiry",
      `Name: ${data.get("name") ?? ""}`,
      `Project: ${data.get("project") ?? ""}`,
      `Budget: ${data.get("budget") ?? ""}`,
      `Details: ${data.get("details") ?? ""}`,
    ].join("\n");

    await navigator.clipboard.writeText(brief);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2500);
  };

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
          <div className="flex items-center gap-5">
            <nav className="hidden items-center gap-7 text-sm text-fog md:flex" aria-label="Main navigation">
              <a className="transition-colors hover:text-bright" href="#services">Services</a>
              <a className="transition-colors hover:text-bright" href="#work">Work</a>
              <a className="transition-colors hover:text-bright" href="#process">Process</a>
            </nav>
            <a className="button-primary" href="#contact">Enquire <ArrowUpRight size={16} /></a>
          </div>
        </header>

        <section id="top" className="grid min-h-[76svh] items-end gap-10 py-14 sm:py-20 lg:grid-cols-[1.35fr_0.65fr] lg:pb-24 lg:pt-32">
          <div>
            <p className="eyebrow">Independent creative studio · India</p>
            <h1 className="mt-6 max-w-5xl font-display text-5xl font-black leading-[0.92] text-bright sm:text-7xl lg:text-[7.5rem]">
              Ideas that <span className="text-volt">move</span> markets.
            </h1>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-xl text-base leading-relaxed text-mist/85 sm:text-lg">
              MKTJ creates sharp identities, high-performance websites and cinematic video for brands that refuse to blend in.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="button-primary button-large" href="#contact">Start a project <ArrowUpRight size={18} /></a>
              <a className="button-secondary button-large" href="#work">See our work <ArrowDownRight size={18} /></a>
            </div>
          </div>
        </section>

        <section id="services" className="section-border py-16 sm:py-24">
          <div className="section-heading">
            <div><p className="eyebrow">Capabilities</p><h2>What we do</h2></div>
            <span>01—04</span>
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

        <section id="work" className="section-border py-16 sm:py-24">
          <div className="section-heading">
            <div><p className="eyebrow">Selected concepts</p><h2>Work built to be felt</h2></div>
            <span>2026</span>
          </div>
          <div className="mt-9 grid gap-6 md:grid-cols-2">
            <article className="work-card group">
              <div className="overflow-hidden"><img src={vantaAthletics} alt="Concept campaign for Vanta Athletics" width={1088} height={1360} className="work-image" /></div>
              <div className="work-meta">
                <div><h3>Vanta Athletics</h3><p>Concept campaign · Film & identity</p></div>
                <span>Video</span>
              </div>
            </article>
            <article className="work-card group md:mt-20">
              <div className="overflow-hidden"><img src={meridianWatch} alt="Concept web direction for Meridian Watches" width={1088} height={1360} loading="lazy" className="work-image" /></div>
              <div className="work-meta">
                <div><h3>Meridian Watches</h3><p>Concept project · Web & art direction</p></div>
                <span>Web</span>
              </div>
            </article>
          </div>
        </section>

        <section id="process" className="section-border py-16 sm:py-24">
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

        <section id="contact" className="section-border py-16 sm:py-24">
          <div className="contact-grid">
            <div>
              <p className="eyebrow">Have a project?</p>
              <h2 className="mt-5 max-w-2xl font-display text-4xl font-black leading-tight text-bright sm:text-6xl">Let&apos;s build something bold.</h2>
              <p className="mt-5 max-w-lg leading-relaxed text-mist/80">Tell us the shape of your idea. We&apos;ll turn it into a ready-to-share project brief.</p>
            </div>
            <form className="space-y-4" onSubmit={copyBrief}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="field-label">Your name<input required name="name" className="field" placeholder="Name" /></label>
                <label className="field-label">Project type<select required name="project" className="field"><option value="">Select service</option><option>Brand identity</option><option>Website</option><option>Video editing</option><option>UI/UX or motion</option><option>Full creative partnership</option></select></label>
              </div>
              <label className="field-label">Budget range<select required name="budget" className="field"><option value="">Select range</option><option>₹25k–₹50k</option><option>₹50k–₹1L</option><option>₹1L–₹3L</option><option>₹3L+</option></select></label>
              <label className="field-label">A little about the project<textarea required name="details" rows={4} className="field resize-none" placeholder="Goal, timeline and what you need..." /></label>
              <button type="submit" className="button-primary button-large w-full justify-center">
                {copied ? <><Check size={18} /> Brief copied</> : <><Copy size={18} /> Copy project brief</>}
              </button>
              <p className="text-xs leading-relaxed text-fog">Your details stay on your device. Paste the copied brief into WhatsApp, email or Instagram DM.</p>
            </form>
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