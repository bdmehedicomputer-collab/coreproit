"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  type Variants,
} from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Rocket,
  Server,
  Smartphone,
  Sparkles,
  Terminal,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

/* ------------------------------------------------------------------ */
/* Typed easing tuple — required by Framer Motion v11+                */
/* ------------------------------------------------------------------ */
const EASE: [number, number, number, number] = [0.2, 0.7, 0.2, 1];

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  { icon: Globe2, title: "Web Experiences", text: "Premium business, personal and e-commerce websites built for speed, clarity and conversion." },
  { icon: Smartphone, title: "App Development", text: "Modern mobile and Windows applications engineered around real workflows and polished UX." },
  { icon: Workflow, title: "Automation", text: "Reliable automation systems that turn repetitive processes into dependable digital pipelines." },
  { icon: Bot, title: "Messaging Bots", text: "Custom Telegram and WhatsApp bots with admin controls, commands and real API integrations." },
  { icon: Server, title: "Backend & APIs", text: "Scalable backend services, REST APIs and data-driven systems built for growth." },
  { icon: Layers3, title: "Full Stack Products", text: "End-to-end product development — interface, business logic, database and deployment." },
];

const PROCESS = [
  { n: "01", title: "Discover", text: "We clarify the problem, audience and success criteria. No code yet — just a shared understanding." },
  { n: "02", title: "Design", text: "Wireframes, flows and a technical blueprint. You approve the shape before build begins." },
  { n: "03", title: "Build", text: "Focused sprints with visible progress. You see working software, not just status updates." },
  { n: "04", title: "Ship & Support", text: "Deploy, hand off and stay available. Clean docs, tested pipelines, no black boxes." },
];

const PROJECTS = [
  {
    tag: "AUTOMATION",
    title: "Smart Windows Toolsuite",
    desc: "Desktop automation suite that turns multi-hour manual operations into one-click workflows.",
    tech: ["Python", "Windows", "Automation"],
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=1200&q=80",
    alt: "Dashboard analytics interface on a monitor representing automation tooling",
  },
  {
    tag: "PLATFORM",
    title: "Business Web Systems",
    desc: "Full-stack business platforms connecting clean storefronts with powerful admin backends.",
    tech: ["PHP", "Node.js", "MySQL", "REST API"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
    alt: "Web design workspace with layout mockups representing web platforms",
  },
  {
    tag: "BOT ECOSYSTEM",
    title: "Messaging Automation",
    desc: "Custom Telegram and WhatsApp bot ecosystems with admin dashboards and API-driven flows.",
    tech: ["Node.js", "Telegram API", "WhatsApp API"],
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=1200&q=80",
    alt: "Close-up of a phone showing messaging app representing chat automation",
  },
];

const TESTIMONIALS = [
  {
    quote: "Delivered our business site and internal automation within three weeks. Communication was direct and the code was clean.",
    name: "Arif H.",
    role: "Founder, Retail Ops",
  },
  {
    quote: "The Telegram bot handles what used to take a full-time role. Reliable, well-documented and easy to extend.",
    name: "Nadia R.",
    role: "Operations Lead",
  },
  {
    quote: "Rare to find a developer who thinks about the problem first. The result actually fits how our team works.",
    name: "Tanvir A.",
    role: "Product Manager",
  },
];

const FAQ = [
  { q: "What types of projects do you take on?", a: "Websites, web apps, desktop tools, backend APIs and messaging bot ecosystems. If it needs building and it's software, it's worth a conversation." },
  { q: "How long does a typical project take?", a: "A focused marketing site: 1–2 weeks. A full-stack platform or bot system: 3–8 weeks depending on scope. You get a clear timeline before we start." },
  { q: "Do you work with clients outside Bangladesh?", a: "Yes — most of my work is remote. I coordinate across time zones and keep progress visible through regular check-ins." },
  { q: "What happens after launch?", a: "You receive clean documentation and a deployment you can run yourself. Ongoing support and iteration are available if you want them." },
  { q: "How do we get started?", a: "Send a short message on WhatsApp or Telegram describing the idea. I'll reply with questions, a rough timeline and the next step." },
];

const TECH = ["HTML", "PHP", "NODE.JS", "PYTHON", "NEXT.JS", "TYPESCRIPT", "REST API", "AUTOMATION"];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.4,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 22 },
    show: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: EASE, delay: i * 0.07 },
    }),
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-ink">
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-gradient-to-r from-cyanx via-purplex to-cyanx"
      />

      {/* Background layers */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 grid-bg" />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 noise opacity-[.05]" />
      <div aria-hidden className="glow-cyan pointer-events-none fixed left-1/2 top-[-280px] -z-10 h-[680px] w-[680px] -translate-x-1/2" />
      <div aria-hidden className="glow-purple pointer-events-none fixed right-[-200px] top-[35%] -z-10 h-[560px] w-[560px]" />

      {/* ---------------- NAV ---------------- */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-white/[.06] bg-ink/75 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#home" className="group flex items-center gap-3" aria-label="CoreProIT home">
            <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-cyanx/30 bg-ink-700">
              <span className="absolute inset-0 bg-gradient-to-br from-cyanx/25 via-transparent to-purplex/25" />
              <span className="absolute inset-0 bg-gradient-to-br from-cyanx/40 to-purplex/40 opacity-0 transition group-hover:opacity-100" />
              <Image
                src="/logo.png"
                alt=""
                width={26}
                height={26}
                priority
                className="relative z-10"
              />
            </span>
            <span className="text-lg font-black tracking-tight">
              Core<span className="text-cyanx">Pro</span>IT
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="relative text-sm text-slate-400 transition hover:text-white"
              >
                {n.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary !px-5 !py-2.5 !text-[13px]">
              Start a project <ArrowUpRight size={15} />
            </a>
          </nav>

          <button
            onClick={() => setMenu((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 md:hidden"
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menu ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X size={18} />
                </motion.span>
              ) : (
                <motion.span
                  key="m"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
          {menu && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="overflow-hidden border-t border-white/[.06] bg-ink/95 backdrop-blur-xl md:hidden"
            >
              <div className="space-y-1 px-5 py-5">
                {NAV.map((n, i) => (
                  <motion.a
                    key={n.label}
                    href={n.href}
                    onClick={() => setMenu(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/[.04] hover:text-white"
                  >
                    {n.label}
                    <ArrowUpRight size={16} className="text-slate-600" />
                  </motion.a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMenu(false)}
                  className="btn-primary mt-3 w-full justify-center"
                >
                  Start a project <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ---------------- HERO ---------------- */}
      <section
        id="home"
        className="relative mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pb-24 pt-32 lg:px-8"
      >
        <div className="w-full">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyanx/20 bg-cyanx/[.06] px-4 py-2 text-[11px] font-bold uppercase tracking-[.24em] text-cyanx"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-cyanx" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-cyanx" />
                </span>
                Available for new projects
              </motion.div>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={1}
                className="max-w-5xl text-[clamp(2.75rem,8vw,7rem)] font-black leading-[.95] tracking-[-.04em]"
              >
                Website, App
                <br />
                <span className="text-shimmer">Whatsapp/Telegram Bot</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={2}
                className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
              >
                <span className="font-semibold text-white">MD MEHEDI HASAN</span> — Full Stack
                Developer behind <span className="font-semibold text-cyanx">CoreProIT</span>. I
                build websites, apps, automation systems and intelligent bots that turn ideas into
                useful products.
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={3}
                className="mt-9 flex flex-wrap gap-3"
              >
                <a href="#work" className="btn-primary group">
                  Explore work
                  <ArrowUpRight size={17} className="transition-transform group-hover:rotate-45" />
                </a>
                <a href="#contact" className="btn-ghost">
                  Let&apos;s talk <MessageCircle size={17} />
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={4}
                className="mt-10 flex items-center gap-6 text-xs text-slate-500"
              >
                <div className="flex -space-x-2">
                  {[0, 1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className="grid h-7 w-7 place-items-center rounded-full border border-ink-700 bg-gradient-to-br from-cyanx/30 to-purplex/30 text-[10px] font-bold text-white"
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                  ))}
                </div>
                <span>Trusted by founders &amp; teams across 3 continents</span>
              </motion.div>
            </div>

            {/* Hero visual — system status panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
              className="relative mx-auto w-full max-w-[440px]"
            >
              <div
                aria-hidden
                className="absolute -inset-10 rounded-[3rem] bg-gradient-to-br from-cyanx/15 via-transparent to-purplex/15 blur-2xl"
              />

              <div className="glass relative overflow-hidden rounded-[1.75rem] shadow-glow">
                <div className="flex items-center justify-between border-b border-white/[.07] px-5 py-3.5">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                  </div>
                  <span className="font-mono text-[10px] text-slate-500">
                    coreproit.dev / status
                  </span>
                  <span className="h-2.5 w-2.5" />
                </div>

                <div className="space-y-2.5 p-5">
                  {[
                    { label: "Web · Next.js", value: 96, tone: "cyan" as const },
                    { label: "Backend · Node / PHP", value: 92, tone: "purple" as const },
                    { label: "Automation · Python", value: 94, tone: "cyan" as const },
                    { label: "Bots · Telegram / WA", value: 90, tone: "purple" as const },
                  ].map((row, i) => (
                    <motion.div
                      key={row.label}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.45 + i * 0.09, duration: 0.5 }}
                      className="rounded-xl border border-white/[.06] bg-white/[.02] px-3.5 py-3"
                    >
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-400">{row.label}</span>
                        <span
                          className={`font-mono font-bold ${
                            row.tone === "cyan" ? "text-cyanx" : "text-purplex"
                          }`}
                        >
                          {row.value}%
                        </span>
                      </div>
                      <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[.05]">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${row.value}%` }}
                          transition={{
                            delay: 0.55 + i * 0.09,
                            duration: 0.9,
                            ease: EASE,
                          }}
                          className={`h-full rounded-full ${
                            row.tone === "cyan"
                              ? "bg-gradient-to-r from-cyanx/60 to-cyanx"
                              : "bg-gradient-to-r from-purplex/60 to-purplex"
                          }`}
                        />
                      </div>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-3 flex items-center gap-2 rounded-xl border border-green-400/15 bg-green-400/[.05] px-3.5 py-2.5 text-[11px] font-semibold text-green-400"
                  >
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inset-0 animate-ping rounded-full bg-green-400" />
                      <span className="relative h-1.5 w-1.5 rounded-full bg-green-400" />
                    </span>
                    All systems operational
                  </motion.div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="glass absolute -bottom-5 -left-5 hidden items-center gap-2.5 rounded-2xl px-4 py-3 shadow-card animate-floaty sm:flex"
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-cyanx/15 text-cyanx">
                  <Sparkles size={15} />
                </span>
                <div>
                  <p className="text-[11px] font-bold leading-tight">4+ years</p>
                  <p className="text-[10px] text-slate-500">Shipping products</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Marquee */}
          <div className="relative mt-20 overflow-hidden border-y border-white/[.06] py-5">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent"
              aria-hidden
            />
            <div className="marquee">
              {[...TECH, ...TECH].map((t, i) => (
                <div
                  key={i}
                  className="flex items-center gap-10 px-5 text-xs font-bold tracking-[.2em] text-slate-600"
                >
                  <span>{t}</span>
                  <span className="text-cyanx/40">✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- ABOUT ---------------- */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[.25em] text-cyanx">
              / About CoreProIT
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Code that solves <span className="text-gradient">real problems.</span>
            </h2>

            <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/[.07]">
              <Image
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80"
                alt="Developer workspace with code editor and dual monitors"
                width={1000}
                height={700}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="h-auto w-full object-cover opacity-90 transition duration-700 hover:scale-[1.03] hover:opacity-100"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-ink/70 px-3 py-1.5 text-[10px] font-bold tracking-widest text-slate-300 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-cyanx" />
                WORKSPACE
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-8">
            <p className="text-lg leading-8 text-slate-300">
              CoreProIT is the personal technology brand of{" "}
              <strong className="text-white">MD MEHEDI HASAN</strong>, focused on practical
              full-stack engineering, automation and digital product development.
            </p>
            <p className="leading-8 text-slate-400">
              From a polished company website to a custom Windows automation tool or a messaging
              bot, every build is approached with the same goal:{" "}
              <strong className="text-slate-200">
                clean UX, useful functionality and dependable engineering.
              </strong>
            </p>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { k: "4+", v: "Years shipping" },
                { k: "30+", v: "Projects built" },
                { k: "7", v: "Service areas" },
                { k: "24h", v: "Reply window" },
              ].map((s) => (
                <div
                  key={s.v}
                  className="rounded-2xl border border-white/[.07] bg-white/[.02] p-4 transition hover:border-cyanx/20 hover:bg-cyanx/[.03]"
                >
                  <p className="text-2xl font-black text-white">{s.k}</p>
                  <p className="mt-1 text-xs text-slate-500">{s.v}</p>
                </div>
              ))}
            </div>

            <div className="hairline" />

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Direct communication — you talk to the developer",
                "Clean, documented, maintainable code",
                "Clear timelines before work starts",
                "Post-launch support and iteration",
              ].map((line) => (
                <div key={line} className="flex items-start gap-2.5 text-sm text-slate-400">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cyanx/15 text-cyanx">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {line}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <section id="services" className="border-y border-white/[.05] bg-white/[.012] py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[.25em] text-cyanx">
                / Capabilities
              </p>
              <h2 className="mt-4 text-4xl font-black sm:text-5xl lg:text-6xl">
                What I <span className="text-gradient">build.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-md text-sm leading-6 text-slate-400">
                From concept to deployment, CoreProIT creates digital systems around the actual
                problem — not just the technology.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div
                  className="card-hover h-full rounded-3xl border border-white/[.07] bg-ink-800 p-7 shadow-card sm:p-8"
                  onMouseMove={(e) => {
                    const el = e.currentTarget;
                    const r = el.getBoundingClientRect();
                    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
                    el.style.setProperty("--my", `${e.clientY - r.top}px`);
                  }}
                >
                  <div className="flex items-start justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyanx/20 bg-cyanx/[.06] text-cyanx">
                      <s.icon size={20} />
                    </span>
                    <span className="font-mono text-xs text-slate-700">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PROCESS ---------------- */}
      <section id="process" className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[.25em] text-cyanx">/ Process</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            A simple path from <span className="text-gradient">idea to shipped.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <div className="relative h-full rounded-3xl border border-white/[.07] bg-white/[.02] p-7">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-3xl font-black text-cyanx/70">{p.n}</span>
                  <span className="h-px flex-1 bg-gradient-to-r from-cyanx/30 to-transparent" />
                </div>
                <h3 className="mt-6 text-lg font-bold">{p.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{p.text}</p>
                {i < PROCESS.length - 1 && (
                  <ArrowRight
                    size={18}
                    className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-cyanx/30 lg:block"
                  />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- WORK ---------------- */}
      <section id="work" className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
        <div className="mb-14 flex items-end justify-between">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[.25em] text-cyanx">
              / Selected Work
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl lg:text-6xl">
              Built for <span className="text-gradient">impact.</span>
            </h2>
          </Reveal>
          <Github className="hidden text-slate-700 sm:block" size={44} aria-hidden />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="group h-full overflow-hidden rounded-3xl border border-white/[.07] bg-white/[.02] transition duration-500 hover:-translate-y-1.5 hover:border-cyanx/25 hover:bg-white/[.035]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover opacity-70 transition duration-700 group-hover:scale-[1.06] group-hover:opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full border border-cyanx/25 bg-ink/70 px-3 py-1 text-[9px] font-bold tracking-[.2em] text-cyanx backdrop-blur">
                    {p.tag}
                  </span>

                  <ArrowUpRight
                    className="absolute right-5 top-5 text-slate-400 transition duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                    size={22}
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{p.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/[.06] bg-white/[.03] px-2.5 py-1 text-[10px] font-semibold text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <section className="border-y border-white/[.05] bg-white/[.012] py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[.25em] text-cyanx">
              / Testimonials
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              What clients <span className="text-gradient">say.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="flex h-full flex-col rounded-3xl border border-white/[.07] bg-ink-800 p-7 sm:p-8">
                  <div className="mb-5 flex gap-1 text-cyanx" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Sparkles key={s} size={14} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <blockquote className="flex-1 text-[15px] leading-7 text-slate-300">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-white/[.06] pt-5">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-cyanx/30 to-purplex/30 text-sm font-bold text-white">
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <p className="text-sm font-bold">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WHY ---------------- */}
      <section className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/[.07] bg-gradient-to-br from-cyanx/[.08] via-white/[.02] to-purplex/[.08] p-8 sm:p-14">
            <Rocket
              className="absolute right-8 top-8 text-cyanx/20"
              size={80}
              strokeWidth={1}
              aria-hidden
            />
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[.25em] text-cyanx">
                / Why CoreProIT
              </p>
              <h2 className="mt-4 text-3xl font-black sm:text-5xl">
                Less complexity.
                <br />
                <span className="text-gradient">More momentum.</span>
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-slate-400">
                A developer-led approach with direct communication, practical architecture and a
                focus on shipping useful software.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: Terminal, k: "Clean code", v: "Readable, documented, extendable" },
                  { icon: Zap, k: "Fast delivery", v: "Focused sprints, visible progress" },
                  { icon: Check, k: "Reliable", v: "Tested before it ships" },
                ].map((f) => (
                  <div
                    key={f.k}
                    className="rounded-2xl border border-white/[.07] bg-ink/40 p-4 backdrop-blur"
                  >
                    <f.icon size={18} className="text-cyanx" />
                    <p className="mt-3 text-sm font-bold">{f.k}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{f.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="mx-auto max-w-7xl px-5 pb-28 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[.25em] text-cyanx">/ FAQ</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Questions, <span className="text-gradient">answered.</span>
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-400">
              Still curious about something? Send a message — I answer directly.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="divide-y divide-white/[.06] rounded-3xl border border-white/[.07] bg-white/[.02]">
              {FAQ.map((item) => (
                <details
                  key={item.q}
                  className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-[15px] font-semibold">
                    {item.q}
                    <ChevronDown
                      size={18}
                      className="shrink-0 text-slate-500 transition-transform duration-300 group-open:rotate-180"
                    />
                  </summary>
                  <p className="mt-3 pr-8 text-sm leading-7 text-slate-400">{item.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <section id="contact" className="mx-auto max-w-7xl px-5 pb-28 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-cyanx/15 bg-ink-800 p-8 text-center sm:p-16">
            <div
              aria-hidden
              className="glow-cyan pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2"
            />

            <div className="relative">
              <p className="text-[11px] font-bold uppercase tracking-[.25em] text-cyanx">
                / Start something
              </p>
              <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
                Have an idea?
                <br />
                <span className="text-gradient">Let&apos;s build it.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-slate-400">
                Websites, apps, automation, APIs or bots — tell me what you want to create and
                I&apos;ll reply within 24 hours.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href="https://wa.me/8801736840633"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <MessageCircle size={17} /> WhatsApp
                </a>
                <a
                  href="https://t.me/mehediprobd"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  <Zap size={17} /> Telegram
                </a>
                <a href="mailto:hello@coreproit.com" className="btn-ghost">
                  <Mail size={17} /> Email
                </a>
                <a
                  href="https://facebook.com/mehedi.refused"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  <ExternalLink size={17} /> Facebook
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Check size={13} className="text-cyanx" /> Free consultation
                </span>
                <span className="flex items-center gap-1.5">
                  <Check size={13} className="text-cyanx" /> Clear fixed quote
                </span>
                <span className="flex items-center gap-1.5">
                  <Check size={13} className="text-cyanx" /> Reply within 24h
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t border-white/[.06] py-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-cyanx/25 bg-ink-700">
                <Image src="/logo.svg" alt="" width={22} height={22} />
              </span>
              <div>
                <p className="text-sm font-black tracking-tight">
                  Core<span className="text-cyanx">Pro</span>IT
                </p>
                <p className="text-[11px] text-slate-500">
                  MD MEHEDI HASAN · Full Stack Developer
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: MessageCircle, href: "https://t.me/mehediprobd", label: "Telegram" },
                { icon: Mail, href: "mailto:hello@coreproit.com", label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/[.08] bg-white/[.02] text-slate-400 transition hover:border-cyanx/30 hover:bg-cyanx/[.06] hover:text-cyanx"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/[.05] pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
            <span>© {new Date().getFullYear()} CoreProIT. All rights reserved.</span>
            <span className="flex items-center gap-1.5">
              <Code2 size={13} /> Built with Next.js, Tailwind &amp; Framer Motion
            </span>
          </div>
        </div>
      </footer>

      <BackToTop />
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-ink-800/90 text-slate-300 shadow-card backdrop-blur transition hover:border-cyanx/40 hover:text-cyanx"
        >
          <ArrowDownRight size={17} className="-rotate-[135deg]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
