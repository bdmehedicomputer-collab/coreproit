"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDownRight, ArrowUpRight, Bot, Braces, Check, ChevronRight,
  Code2, ExternalLink, Github, Globe2, Layers3, Menu, MessageCircle,
  MousePointer2, Rocket, Server, Smartphone, Sparkles, Terminal,
  Workflow, X, Zap
} from "lucide-react";
import { useState } from "react";

const services = [
  { icon: Globe2, n: "01", title: "Web Experiences", text: "Premium personal, business and e-commerce websites engineered for speed, clarity and conversion." },
  { icon: Smartphone, n: "02", title: "App Development", text: "Modern mobile and Windows applications designed around practical workflows and polished UX." },
  { icon: Workflow, n: "03", title: "Automation", text: "Smart automation systems that turn repetitive processes into reliable digital workflows." },
  { icon: Bot, n: "04", title: "WhatsApp & Telegram", text: "Custom bots, admin systems and API integrations built for real-world automation." },
  { icon: Server, n: "05", title: "Backend & APIs", text: "Scalable backend services, REST APIs, integrations and data-driven systems." },
  { icon: Layers3, n: "06", title: "Full Stack Products", text: "End-to-end product development from interface to business logic and deployment." }
];

const projects = [
  { type: "AUTOMATION", title: "Smart Windows Tools", desc: "Desktop automation experiences built to simplify complex, repetitive operations.", tech: ["Python", "Windows", "Automation"] },
  { type: "PLATFORM", title: "Business Web Systems", desc: "Responsive full-stack platforms connecting clean interfaces with powerful backend logic.", tech: ["PHP", "Node.js", "API"] },
  { type: "BOT ECOSYSTEM", title: "Messaging Automation", desc: "Custom Telegram and WhatsApp workflows with APIs, admin controls and automation.", tech: ["Node.js", "Bots", "REST API"] }
];

const tech = ["HTML", "PHP", "NODE.JS", "PYTHON", "NEXT.JS", "JAVASCRIPT", "REST API", "AUTOMATION"];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.35], [0, 130]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#05070D]">
      <div className="fixed inset-0 -z-20 grid-bg" />
      <div className="fixed inset-0 -z-20 noise opacity-30" />
      <motion.div style={{ y }} className="fixed left-1/2 top-[-260px] -z-10 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyanx/10 blur-[150px]" />
      <div className="fixed right-[-220px] top-[30%] -z-10 h-[520px] w-[520px] rounded-full bg-purplex/10 blur-[150px]" />

      <nav className="fixed top-0 z-50 w-full border-b border-white/[.06] bg-[#05070D]/70 backdrop-blur-2xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-cyanx/30 bg-cyanx/10 font-black text-cyanx">
              <span className="absolute inset-0 bg-gradient-to-br from-cyanx/20 to-purplex/20" />
              <span className="relative">C</span>
            </span>
            <span className="text-lg font-black tracking-tight">Core<span className="text-cyanx">Pro</span>IT</span>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {["About", "Services", "Work", "Contact"].map(x => <a key={x} href={`#${x.toLowerCase()}`} className="text-sm text-slate-400 transition hover:text-white">{x}</a>)}
            <a href="#contact" className="rounded-full border border-white/10 bg-white px-5 py-2.5 text-sm font-bold text-[#05070D] transition hover:-translate-y-0.5">Start a project</a>
          </div>
          <button className="md:hidden" onClick={() => setMenu(!menu)} aria-label="Menu">{menu ? <X/> : <Menu/>}</button>
        </div>
        {menu && <div className="border-t border-white/5 bg-[#05070D] px-5 py-5 md:hidden">{["About","Services","Work","Contact"].map(x => <a key={x} onClick={() => setMenu(false)} href={`#${x.toLowerCase()}`} className="block py-3 text-slate-300">{x}</a>)}</div>}
      </nav>

      <section id="home" className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-24 pt-32 lg:px-8">
        <div className="w-full">
          <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_.75fr]">
            <div>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyanx/20 bg-cyanx/[.06] px-4 py-2 text-[11px] font-bold uppercase tracking-[.24em] text-cyanx">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyanx" /> Available for new projects
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }} className="max-w-5xl text-5xl font-black leading-[.96] tracking-[-.055em] sm:text-7xl lg:text-[7.2rem]">
                Digital products.<br/><span className="text-gradient">Engineered.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }} className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                <span className="font-semibold text-white">MD MEHEDI HASAN</span> — Full Stack Developer behind <span className="font-semibold text-cyanx">CoreProIT</span>. I build websites, apps, automation systems and intelligent bots that turn ideas into useful products.
              </motion.p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-[#05070D] transition hover:-translate-y-1">Explore work <ArrowUpRight size={17} className="transition group-hover:rotate-45"/></a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-6 py-3.5 font-bold text-white transition hover:border-cyanx/30 hover:bg-cyanx/[.07]">Let&apos;s talk <MessageCircle size={17}/></a>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, scale: .95, rotate: 1 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: .18 }} className="relative mx-auto w-full max-w-[430px]">
              <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-cyanx/15 via-transparent to-purplex/15 blur-3xl"/>
              <div className="glass relative overflow-hidden rounded-[2rem] p-5 shadow-glow">
                <div className="flex items-center justify-between border-b border-white/7 pb-4">
                  <div className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-red-400/80"/><i className="h-2.5 w-2.5 rounded-full bg-yellow-400/80"/><i className="h-2.5 w-2.5 rounded-full bg-green-400/80"/></div>
                  <span className="font-mono text-[10px] text-slate-600">coreproit.dev</span>
                </div>
                <div className="p-3 font-mono text-[12px] leading-7 text-slate-500">
                  <p><span className="text-purplex">const</span> <span className="text-white">stack</span> = [</p>
                  <p className="pl-5"><span className="text-cyanx">&quot;PHP&quot;</span>, <span className="text-cyanx">&quot;Node.js&quot;</span>,</p>
                  <p className="pl-5"><span className="text-cyanx">&quot;Python&quot;</span>, <span className="text-cyanx">&quot;Next.js&quot;</span></p>
                  <p>];</p>
                  <p className="mt-4"><span className="text-purplex">function</span> <span className="text-white">build</span>(idea) {"{"}</p>
                  <p className="pl-5 text-slate-400">return <span className="text-cyanx">idea</span> → product;</p>
                  <p>{"}"}</p>
                  <div className="mt-5 flex items-center gap-2 rounded-xl border border-green-400/10 bg-green-400/[.04] px-3 py-2 text-green-400"><Check size={14}/> system.ready()</div>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-3">
                  {[["01","Web"],["02","Apps"],["03","Bots"]].map(a => <div key={a[0]} className="rounded-xl border border-white/7 bg-white/[.025] p-3"><span className="font-mono text-[9px] text-cyanx">{a[0]}</span><p className="mt-1 text-xs font-semibold">{a[1]}</p></div>)}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-20 overflow-hidden border-y border-white/[.06] py-5">
            <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} className="flex w-max gap-10 whitespace-nowrap">
              {[...tech, ...tech].map((t,i) => <div key={i} className="flex items-center gap-10 text-xs font-bold tracking-[.18em] text-slate-600"><span>{t}</span><span className="text-cyanx/40">✦</span></div>)}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="text-[11px] font-bold uppercase tracking-[.25em] text-cyanx">/ About CoreProIT</p><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">Code that solves <span className="text-gradient">real problems.</span></h2></div>
          <div className="space-y-7 text-lg leading-8 text-slate-400"><p>CoreProIT is the personal technology brand of <strong className="text-white">MD MEHEDI HASAN</strong>, focused on practical full-stack engineering, automation and digital product development.</p><p>From a polished company website to a custom Windows automation tool or a messaging bot, every build is approached with the same goal: <strong className="text-slate-200">clean UX, useful functionality and dependable engineering.</strong></p><div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{[["4+","Core stacks"],["7","Service areas"],["∞","Ideas"],["1","Mission"]].map(x => <div key={x[1]} className="rounded-2xl border border-white/8 bg-white/[.025] p-4"><p className="text-2xl font-black text-white">{x[0]}</p><p className="mt-1 text-xs text-slate-600">{x[1]}</p></div>)}</div></div>
        </div>
      </section>

      <section id="services" className="border-y border-white/[.05] bg-white/[.012] py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-[11px] font-bold uppercase tracking-[.25em] text-cyanx">/ Capabilities</p><h2 className="mt-4 text-4xl font-black sm:text-6xl">What I <span className="text-gradient">build.</span></h2></div><p className="max-w-md text-sm leading-6 text-slate-500">From concept to deployment, CoreProIT creates digital systems around the actual problem—not just the technology.</p></div>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s,i) => <motion.div whileHover={{ backgroundColor: "rgba(255,255,255,.045)" }} key={s.title} className="bg-[#080C15] p-7 sm:p-8"><div className="flex items-start justify-between"><s.icon className="text-cyanx" size={25}/><span className="font-mono text-xs text-slate-700">{s.n}</span></div><h3 className="mt-14 text-xl font-bold">{s.title}</h3><p className="mt-3 text-sm leading-7 text-slate-500">{s.text}</p><div className="mt-7 flex items-center gap-2 text-xs font-bold text-slate-600 transition group-hover:text-cyanx">Explore <ChevronRight size={14}/></div></motion.div>)}
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
        <div className="mb-14 flex items-end justify-between"><div><p className="text-[11px] font-bold uppercase tracking-[.25em] text-cyanx">/ Selected Work</p><h2 className="mt-4 text-4xl font-black sm:text-6xl">Built for <span className="text-gradient">impact.</span></h2></div><Github className="hidden text-slate-700 sm:block" size={45}/></div>
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((p,i) => <motion.article whileHover={{ y: -7 }} key={p.title} className="group overflow-hidden rounded-3xl border border-white/8 bg-white/[.025]">
            <div className="relative h-60 overflow-hidden border-b border-white/8 bg-[#090E18]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(93,231,255,.13),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(155,124,255,.12),transparent_35%)]"/>
              <div className="absolute left-7 top-7 flex gap-2"><span className="rounded-full border border-cyanx/20 bg-cyanx/5 px-3 py-1 text-[9px] font-bold tracking-[.18em] text-cyanx">{p.type}</span></div>
              <div className="absolute bottom-7 left-7"><Code2 size={50} strokeWidth={1} className="text-slate-700 transition group-hover:text-cyanx/50"/></div>
              <ArrowUpRight className="absolute bottom-7 right-7 text-slate-700 transition group-hover:text-white" size={24}/>
            </div>
            <div className="p-7"><h3 className="text-xl font-bold">{p.title}</h3><p className="mt-3 text-sm leading-7 text-slate-500">{p.desc}</p><div className="mt-6 flex flex-wrap gap-2">{p.tech.map(t => <span key={t} className="rounded-md bg-white/[.04] px-2.5 py-1 text-[10px] font-semibold text-slate-500">{t}</span>)}</div></div>
          </motion.article>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8"><div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-gradient-to-br from-cyanx/[.08] via-white/[.02] to-purplex/[.08] p-8 sm:p-14"><Rocket className="absolute right-8 top-8 text-cyanx/20" size={80} strokeWidth={1}/><div className="max-w-2xl"><p className="text-[11px] font-bold uppercase tracking-[.25em] text-cyanx">/ Why CoreProIT</p><h2 className="mt-4 text-3xl font-black sm:text-5xl">Less complexity.<br/><span className="text-gradient">More momentum.</span></h2><p className="mt-5 leading-7 text-slate-500">A developer-led approach with direct communication, practical architecture and a focus on shipping useful software.</p></div></div></section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
        <div className="rounded-[2rem] border border-cyanx/15 bg-[#080D16] p-8 text-center sm:p-16">
          <p className="text-[11px] font-bold uppercase tracking-[.25em] text-cyanx">/ Start something</p>
          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-7xl">Have an idea?<br/><span className="text-gradient">Let&apos;s build it.</span></h2>
          <p className="mx-auto mt-5 max-w-xl text-slate-500">Websites, apps, automation, APIs or bots—tell me what you want to create.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="https://wa.me/8801736840633" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-[#05070D] transition hover:-translate-y-1"><MessageCircle size={17}/> WhatsApp</a>
            <a href="https://t.me/mehediprobd" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-6 py-3.5 font-bold transition hover:border-cyanx/30"><Zap size={17}/> Telegram</a>
            <a href="https://facebook.com/mehedi.refused" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-6 py-3.5 font-bold transition hover:border-cyanx/30"><ExternalLink size={17}/> Facebook</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[.06] py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 text-xs text-slate-600 sm:flex-row lg:px-8"><span>© {new Date().getFullYear()} CoreProIT. All rights reserved.</span><span>MD MEHEDI HASAN • Full Stack Developer</span></div>
      </footer>
    </main>
  );
}