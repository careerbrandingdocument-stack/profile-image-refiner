import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Target, Layers, ShieldCheck, Award, BarChart3, RefreshCw, Truck, TrendingUp, Globe2, Users,
  MapPin, Mail, Phone, Linkedin, Download, ChevronDown, Plane, FlaskConical, Zap, Cpu, Building2, Factory,
} from "lucide-react";
import portrait from "@/assets/fatima-portrait.jpg";

const TITLE = "Fátima de Diego de las Heras — Head of Quality | Madrid";
const DESC = "Head of Quality with 15+ years of international experience in QMS, ISO 9001 & EN 9100, regulatory compliance and quality leadership across aerospace, defense, chemical and energy sectors.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CV = "/Fatima-de-Diego-CV.pdf";
const EMAIL = "fdediego74@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/fatima-de-diego-de-las-heras/";

const nav = [["Profile", "profile"], ["Expertise", "expertise"], ["Experience", "experience"], ["Value", "value"], ["Contact", "contact"]];

const expertise = [
  [Target, "Quality Strategy & Governance"], [Layers, "Quality Management Systems (QMS)"],
  [ShieldCheck, "Regulatory Compliance & Audit Management"], [Award, "ISO 9001 & EN 9100"],
  [BarChart3, "Quality KPI Development & Reporting"], [RefreshCw, "Organizational Transformation"],
  [Truck, "Supplier Quality Management"], [TrendingUp, "Continuous Improvement"],
  [Globe2, "International Quality Operations"], [Users, "Team Leadership & Development"],
] as const;

const experience = [
  { co: "Destinus", role: "Head of Quality", date: "Aug 2025 – Present", items: [
    "Define and lead the company-wide Quality Function strategy: policy, objectives and action plans.",
    "Design the organizational structure, roles and responsibilities of the Quality area.",
    "Lead harmonization and deployment of the Quality Management System across all processes.",
    "Drive ISO 9001 certification across company operations and locations.",
    "Act as change agent to promote a company-wide quality mindset.",
    "Primary contact with National Authorities and Certification Bodies, ensuring continuous regulatory compliance."] },
  { co: "Capgemini Engineering", role: "Client Quality Manager – Airbus Defence & Space", date: "Jan 2024 – Jun 2025", items: [
    "Deploy and harmonize processes aligned with ISO 9001 and EN 9100 within the Division.",
    "Build and strengthen the relationship with Airbus' Global Supplier Quality Manager.",
    "Establish the methodology for Global Quality KPI reporting.",
    "Consolidate the Quality Manager role across the Airbus Defence & Space account."] },
  { co: "Capgemini Engineering", role: "Continuous Improvement Manager", date: "Apr 2022 – Jan 2024", items: [
    "Consolidated the new Continuous Improvement area in the Aeronautical, Space & Defense Division.",
    "Harmonized operational quality ways of working; implemented a Lessons Learnt culture.",
    "Satisfactory results in customer, external and internal audits (ISO 9001, EN 9100, ISO 27001)."] },
  { co: "MAXAM Terra Solutions", role: "Business Unit Quality Manager", date: "Jan 2008 – Jan 2020", items: [
    "Standardized and deployed the Corporate QMS across 50 subsidiaries and operations worldwide.",
    "Defined and tracked monthly Quality KPIs (NC, Rework, Scrap, CAPAs) for the Executive Committee.",
    "Deployed strategic quality projects, including a Cost Effectiveness process reaching €4.5M by end of 2019.",
    "Led, coached and trained teams in RCA, Problem Solving, 8D and ISO 9001."] },
  { co: "MAXAM Europe", role: "Europe Quality Manager", date: "Jul 2006 – Jan 2008", items: [
    "Implemented the Corporate QMS across ~15 European subsidiaries.",
    "Built and supervised the EU Quality Managers network and CE Mark national bodies network.",
    "Managed internal and external audit plans, NCs, CAPAs and RCA methodologies."] },
  { co: "Bureau Veritas Spain", role: "Spain Quality Manager", date: "2001 – 2006", items: [
    "Deployed the Bureau Veritas Group QMS across 50 delegations in Spain and trained all employees involved.",
    "Defined, coordinated and developed ISO 9001 internal and external audit plans."] },
];

const value = [
  "Establish and standardize strategic, business and support processes.",
  "Develop quality projects aligned with organizational objectives.",
  "Design and monitor Quality KPI reporting systems.",
  "Promote quality awareness and organizational accountability.",
  "Build and consolidate international quality networks.",
  "Strengthen customer satisfaction through structured quality management.",
];

const industries = [[Plane, "Aerospace & Defense"], [FlaskConical, "Chemical & Industrial"], [Zap, "Energy"], [Cpu, "Engineering & R&D"], [Building2, "Construction"], [Factory, "Manufacturing"]] as const;

function Eyebrow({ children }: { children: string }) {
  return <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-teal"><span className="h-px w-8 bg-gold" />{children}</p>;
}
const h2 = "font-display text-3xl text-navy md:text-4xl";
const btn = "inline-flex items-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold transition-colors";

function Index() {
  const [open, setOpen] = useState(2);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(String(f.get("subject") || "Portfolio enquiry"))}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-navy-foreground/10 bg-navy/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg text-navy-foreground">F. de Diego</a>
          <nav className="hidden gap-8 md:flex">
            {nav.map(([l, id]) => <a key={id} href={`#${id}`} className="text-sm text-navy-foreground/80 transition-colors hover:text-gold">{l}</a>)}
          </nav>
          <a href={CV} download className="text-sm font-semibold text-gold hover:text-navy-foreground">CV</a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="bg-navy pt-24 text-navy-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.2fr_1fr] md:py-24">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em]">FÁTIMA DE DIEGO DE LAS HERAS</p>
            <p className="mt-2 text-xs tracking-[0.2em] text-gold">HEAD OF QUALITY | QUALITY & REGULATORY LEADERSHIP</p>
            <h1 className="mt-8 font-display text-4xl leading-tight md:text-5xl">Building Quality Excellence Through Strategic Leadership and Operational Transformation.</h1>
            <p className="mt-6 max-w-xl leading-relaxed text-navy-foreground/75">Quality management professional with 15+ years of international experience leading quality strategies, harmonizing management systems, strengthening regulatory compliance, and developing high-performance quality organizations across complex industrial environments.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#experience" className={`${btn} bg-teal text-navy-foreground hover:bg-gold hover:text-navy`}>Explore My Experience</a>
              <a href={CV} download className={`${btn} border border-gold/60 text-gold hover:bg-gold hover:text-navy`}><Download className="h-4 w-4" />Download Executive CV</a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -right-4 -top-4 h-full w-full rounded-md border border-gold/50" />
            <img src={portrait} alt="Portrait of Fátima de Diego de las Heras" width={720} height={928} className="relative aspect-[4/5] w-full rounded-md object-cover shadow-2xl" />
            <div className="absolute -bottom-5 left-6 flex items-center gap-2 rounded-sm bg-background px-4 py-2 text-sm font-medium text-navy shadow-lg"><MapPin className="h-4 w-4 text-teal" />Madrid, Spain</div>
          </div>
        </div>
      </section>

      {/* Profile */}
      <section id="profile" className="mx-auto max-w-4xl scroll-mt-20 px-6 py-24">
        <Eyebrow>Executive Profile</Eyebrow>
        <h2 className={h2}>A Strategic Approach to Quality Leadership</h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed">
          <p>Fátima is a quality leader with more than 15 years of experience across aerospace, defense, chemical, energy, engineering and construction environments. She builds quality functions from the ground up, deploys and harmonizes QMS frameworks across multi-country operations, and leads multidisciplinary teams by influence.</p>
          <p>From coordinating certification and regulatory audits with national authorities to establishing KPI reporting for executive committees, her focus is a sustainable quality culture that anticipates problems and delivers full customer satisfaction.</p>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="scroll-mt-20 bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Eyebrow>Areas of Expertise</Eyebrow>
          <h2 className={h2}>Core Capabilities</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {expertise.map(([Icon, t]) => (
              <div key={t} className="group rounded-md border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-teal hover:shadow-lg">
                <Icon className="h-7 w-7 text-teal transition-colors group-hover:text-gold" strokeWidth={1.5} />
                <p className="mt-4 text-sm font-semibold leading-snug text-navy">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-4xl scroll-mt-20 px-6 py-24">
        <Eyebrow>Professional Experience</Eyebrow>
        <h2 className={h2}>Career Timeline</h2>
        <ol className="relative mt-12 border-l border-border pl-8">
          {experience.map((x, i) => {
            const isOpen = i < open;
            return (
              <li key={x.role + x.date} className="relative pb-10 last:pb-0">
                <span className={`absolute -left-[37px] top-1.5 h-3 w-3 rounded-full ring-4 ring-background ${i === 0 ? "bg-gold" : "bg-teal"}`} />
                <p className="text-xs font-semibold uppercase tracking-widest text-teal">{x.date}</p>
                <h3 className="mt-1 font-display text-xl text-navy">{x.role}</h3>
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{x.co}</p>
                <button onClick={() => setOpen(isOpen ? i : i + 1)} className="mt-2 inline-flex items-center gap-1 text-sm text-teal hover:text-navy" aria-expanded={isOpen}>
                  {isOpen ? "Hide details" : "Show details"}<ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <ul className="mt-4 space-y-2 rounded-md border border-border bg-card p-5">
                    {x.items.map((it) => <li key={it} className="flex gap-3 text-sm leading-relaxed"><span className="mt-2 h-1 w-3 shrink-0 bg-gold" />{it}</li>)}
                  </ul>
                )}
              </li>
            );
          })}
        </ol>
      </section>

      {/* Value */}
      <section id="value" className="scroll-mt-20 bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Eyebrow>How I Add Value</Eyebrow>
          <h2 className={h2}>What I Bring to Your Organization</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {value.map((v, i) => (
              <div key={v} className="rounded-md border-t-2 border-teal bg-card p-8 shadow-sm transition-shadow hover:shadow-lg">
                <span className="font-display text-3xl text-gold">0{i + 1}</span>
                <p className="mt-4 leading-relaxed text-navy">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Eyebrow>Industry Experience</Eyebrow>
        <h2 className={h2}>Sectors</h2>
        <div className="mt-12 grid grid-cols-2 border-l border-t border-border md:grid-cols-3 lg:grid-cols-6">
          {industries.map(([Icon, t]) => (
            <div key={t} className="flex flex-col items-center gap-3 border-b border-r border-border p-8 text-center transition-colors hover:bg-secondary">
              <Icon className="h-8 w-8 text-teal" strokeWidth={1.3} />
              <span className="text-sm font-semibold text-navy">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-navy py-24 text-navy-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="mx-auto block h-px w-16 bg-gold" />
          <blockquote className="mt-10 font-display text-2xl leading-relaxed md:text-3xl">"Quality is not simply a compliance requirement. It is a strategic capability that strengthens organizations, empowers teams, and builds lasting customer confidence."</blockquote>
          <p className="mt-8 text-xs tracking-[0.25em] text-gold">PROFESSIONAL PHILOSOPHY</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto grid max-w-6xl scroll-mt-20 gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h2 className={h2}>Let's Connect</h2>
          <ul className="mt-8 space-y-5">
            <li><a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:text-teal"><Mail className="h-5 w-5 text-teal" />{EMAIL}</a></li>
            <li><a href="tel:+34686875197" className="flex items-center gap-3 hover:text-teal"><Phone className="h-5 w-5 text-teal" />+34 686 87 51 97</a></li>
            <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-teal" />Madrid, Spain</li>
            <li><a href={LINKEDIN} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-teal"><Linkedin className="h-5 w-5 text-teal" />LinkedIn profile</a></li>
          </ul>
          <a href={CV} download className={`${btn} mt-10 bg-navy text-navy-foreground hover:bg-teal`}><Download className="h-4 w-4" />Download Executive CV</a>
        </div>
        <form onSubmit={submit} className="space-y-4 rounded-md border border-border bg-card p-8 shadow-sm">
          {[["name", "Name", "text"], ["email", "Email", "email"], ["subject", "Subject", "text"]].map(([n, l, t]) => (
            <label key={n} className="block text-sm font-medium text-navy">{l}
              <input name={n} type={t} required={n !== "subject"} className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 outline-none focus:border-teal" />
            </label>
          ))}
          <label className="block text-sm font-medium text-navy">Message
            <textarea name="message" required rows={5} className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 outline-none focus:border-teal" />
          </label>
          <button type="submit" className={`${btn} w-full justify-center bg-teal text-navy-foreground hover:bg-navy`}>Send Message</button>
        </form>
      </section>

      <footer className="bg-navy py-10 text-center text-navy-foreground">
        <p className="font-display text-lg">Fátima de Diego de las Heras</p>
        <p className="mt-1 text-xs tracking-[0.2em] text-gold">HEAD OF QUALITY · MADRID</p>
        <p className="mt-4 text-xs text-navy-foreground/50">© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
