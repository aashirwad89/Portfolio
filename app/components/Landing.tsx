/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  X,
  Menu,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Globe,
  Phone,
  Terminal,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Landing = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"code" | "metrics">("code");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
  ];

  const techStack = [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "TypeScript",
    "JavaScript",
    "Java",
    "React Native",
    "Firebase",
  ];

  const stats = [
    { value: "20+", label: "Interns Mentored" },
    { value: "~40%", label: "Faster Release Cycles" },
    { value: "7.71", label: "LNCT B.Tech GPA" },
  ];

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("aashirwad2626@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div
      id="home"
      className="relative min-h-screen bg-[#fafaf9] text-slate-900 overflow-hidden font-sans selection:bg-[#dce7ce] selection:text-[#2e4008]"
    >
      {/* Ambient background soft olive & stone glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -left-24 w-96 h-96 rounded-full bg-[#3D550C]/8 blur-3xl opacity-70" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-[#606C38]/10 blur-3xl opacity-70" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 rounded-full bg-[#8A9A5B]/8 blur-3xl opacity-60" />

        {/* Delicate subtle micro-grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(61, 85, 12, 0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-stone-200/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 font-bold tracking-tight group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#3D550C] to-[#606C38] p-[2px] shadow-sm shadow-[#3D550C]/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-[10px] bg-white flex items-center justify-center font-mono text-xs font-black text-[#3D550C]">
                AS
              </div>
            </div>
            <span className="font-mono text-base font-extrabold tracking-wider text-slate-900">
              AASHIRWAD<span className="text-[#4A5D23]">.DEV</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-[#3D550C] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Items */}
          <div className="flex items-center gap-3">
            {/* Worldwide Availability Badge */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border bg-[#EFF4EA] border-[#CEDBBA] text-[#3D550C]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5A7328] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3D550C]"></span>
              </span>
              <Globe size={13} className="text-[#3D550C]" />
              <span>Available Worldwide</span>
            </div>

            {/* Quick Resume CTA */}
            <a
              href="/Resume.pdf"
              download="Aashirwad_Singh_Resume.pdf"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#3D550C] hover:bg-[#2F4307] text-white font-mono text-xs font-semibold shadow-sm transition-all"
            >
              <Download size={13} />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl border border-stone-200 bg-white text-slate-800 shadow-xs hover:bg-stone-50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-b border-stone-200 bg-white px-6 py-5 flex flex-col gap-3.5 shadow-lg"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-slate-700 hover:text-[#3D550C] transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#3D550C] flex items-center gap-1.5">
                  <Globe size={13} />
                  Available Worldwide
                </span>
                <a
                  href="/Resume.pdf"
                  download="Aashirwad_Singh_Resume.pdf"
                  className="px-3.5 py-1.5 rounded-lg bg-[#3D550C] text-white font-mono text-xs font-bold"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO CONTENT */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-10 md:pt-16 pb-16 flex flex-col justify-center min-h-[calc(100vh-70px)]">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* LEFT COLUMN: HERO TEXT & CTAS */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Role Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#CEDBBA] bg-[#EFF4EA] text-[#3D550C] text-xs font-mono font-bold uppercase tracking-wider shadow-xs"
            >
              <Sparkles size={14} className="text-[#4A5D23]" />
              <span>Software Developer · Team Lead &amp; Full Stack</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-slate-900">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-[#2F4307] via-[#4A5D23] to-[#606C38] bg-clip-text text-transparent italic">
                  Aashirwad Singh
                </span>
                .
              </h1>
              <p className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-snug text-slate-800">
                Building Scalable, High-Impact{" "}
                <span className="bg-gradient-to-r from-[#3D550C] to-[#5A7328] bg-clip-text text-transparent">
                  Web Applications
                </span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg max-w-xl leading-relaxed text-slate-600 font-normal"
            >
              Software Developer &amp; Team Lead specializing in the{" "}
              <strong className="text-[#3D550C] font-semibold">MERN Stack</strong>,{" "}
              <strong className="text-[#4A5D23] font-semibold">TypeScript</strong>, and{" "}
              <strong className="text-slate-800 font-semibold">Next.js</strong>. Proven
              track record architecting production LMS &amp; e-commerce platforms,
              reducing feature release cycles by ~40%, and mentoring 20+ developers.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto"
            >
              <a href="#projects" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-7 py-3 rounded-xl font-mono text-sm font-semibold bg-[#3D550C] hover:bg-[#2F4307] text-white shadow-md shadow-[#3D550C]/25 flex items-center justify-center gap-2 group transition-all"
                >
                  View Work
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </a>

              <a
                href="/Resume.pdf"
                download="Aashirwad_Singh_Resume.pdf"
                className="w-full sm:w-auto"
              >
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl font-mono text-sm font-semibold border border-stone-300 bg-white text-slate-800 hover:bg-[#F5F7F2] hover:border-[#CEDBBA] shadow-xs flex items-center justify-center gap-2 transition-all"
                >
                  <Download size={16} className="text-[#3D550C]" />
                  Download CV
                </motion.button>
              </a>

              <button
                onClick={copyEmailToClipboard}
                className={`px-4 py-3 rounded-xl font-mono text-xs font-semibold border flex items-center justify-center gap-2 transition-all ${
                  copiedEmail
                    ? "bg-[#3D550C] text-white border-[#3D550C]"
                    : "bg-[#EFF4EA] border-[#CEDBBA] text-[#3D550C] hover:bg-[#E3ECD7]"
                }`}
                title="Click to copy email address"
              >
                {copiedEmail ? <CheckCircle2 size={15} /> : <Mail size={15} />}
                {copiedEmail ? "Copied!" : "aashirwad2626@gmail.com"}
              </button>
            </motion.div>

            {/* Social Icons Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3 pt-1"
            >
              {[
                { icon: Github, href: "https://github.com/aashirwad89", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/aashirwad26", label: "LinkedIn" },
                { icon: Mail, href: "mailto:aashirwad2626@gmail.com", label: "Email" },
                { icon: Phone, href: "tel:+917024913839", label: "Phone" },
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl border border-stone-200 bg-white text-slate-700 hover:text-[#3D550C] hover:border-[#CEDBBA] hover:bg-[#EFF4EA] shadow-xs transition-all"
                  aria-label={item.label}
                >
                  <item.icon size={17} />
                </motion.a>
              ))}
              <span className="text-xs font-mono text-slate-500 pl-2">
                +91 7024913839 · Bhopal, M.P.
              </span>
            </motion.div>

            {/* Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-2 w-full"
            >
              <p className="text-xs font-mono font-bold uppercase tracking-wider mb-2.5 text-slate-500">
                Core Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.03 }}
                    whileHover={{ scale: 1.05, y: -1 }}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-semibold border border-stone-200 bg-white text-slate-700 hover:border-[#CEDBBA] hover:bg-[#EFF4EA] hover:text-[#3D550C] shadow-xs transition-all cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: MACOS LIGHT IDE SHOWCASE CARD */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="w-full max-w-md lg:max-w-none"
            >
              {/* IDE Window Box */}
              <div className="rounded-2xl border border-stone-200/90 bg-white shadow-xl shadow-stone-200/50 overflow-hidden">
                {/* Window Header */}
                <div className="px-4 py-3 bg-[#F8FAFC] border-b border-stone-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>

                  {/* Tabs */}
                  <div className="flex items-center gap-1 bg-stone-100/80 p-1 rounded-lg border border-stone-200/60">
                    <button
                      onClick={() => setActiveTab("code")}
                      className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-bold transition-all ${
                        activeTab === "code"
                          ? "bg-white text-[#3D550C] shadow-xs"
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      developer.ts
                    </button>
                    <button
                      onClick={() => setActiveTab("metrics")}
                      className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-bold transition-all ${
                        activeTab === "metrics"
                          ? "bg-white text-[#3D550C] shadow-xs"
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      metrics.json
                    </button>
                  </div>

                  <div className="text-slate-400 font-mono text-[11px] hidden sm:block">
                    UTF-8
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[250px] bg-[#FAFCF8]">
                  {activeTab === "code" ? (
                    <pre className="text-slate-800">
                      <code>
                        <span className="text-[#6D28D9]">const</span>{" "}
                        <span className="text-[#0369A1]">developer</span> = &#123;{"\n"}
                        {"  "}
                        <span className="text-slate-500">name:</span>{" "}
                        <span className="text-[#3D550C] font-semibold">"Aashirwad Singh"</span>,{"\n"}
                        {"  "}
                        <span className="text-slate-500">role:</span>{" "}
                        <span className="text-[#3D550C] font-semibold">"Software Developer - Team Lead"</span>,{"\n"}
                        {"  "}
                        <span className="text-slate-500">company:</span>{" "}
                        <span className="text-[#3D550C] font-semibold">"BodhaSoft Pvt. Ltd."</span>,{"\n"}
                        {"  "}
                        <span className="text-slate-500">education:</span>{" "}
                        <span className="text-[#3D550C] font-semibold">"B.Tech CSE @ LNCT (7.71 GPA)"</span>,{"\n"}
                        {"  "}
                        <span className="text-slate-500">stack:</span> [
                        <span className="text-[#B45309]">"MERN"</span>,{" "}
                        <span className="text-[#B45309]">"Next.js"</span>,{" "}
                        <span className="text-[#B45309]">"TypeScript"</span>],{"\n"}
                        {"  "}
                        <span className="text-slate-500">status:</span>{" "}
                        <span className="text-[#047857] font-semibold">"Open to Opportunities 🚀"</span>
                        {"\n"}&#125;;{"\n\n"}
                        <span className="text-slate-400">// Scalable Architecture &amp; High Performance</span>{"\n"}
                        <span className="text-[#0369A1]">console</span>.
                        <span className="text-[#B45309]">log</span>(
                        <span className="text-[#3D550C]">`Ready to build production-grade solutions!`</span>);
                      </code>
                    </pre>
                  ) : (
                    <pre className="text-slate-800">
                      <code>
                        &#123;{"\n"}
                        {"  "}
                        <span className="text-[#0369A1]">"mentored_interns"</span>:{" "}
                        <span className="text-[#3D550C] font-semibold">"20+"</span>,{"\n"}
                        {"  "}
                        <span className="text-[#0369A1]">"release_cycle_reduction"</span>:{" "}
                        <span className="text-[#B45309] font-semibold">"~40%"</span>,{"\n"}
                        {"  "}
                        <span className="text-[#0369A1]">"post_release_defect_drop"</span>:{" "}
                        <span className="text-[#3D550C] font-semibold">"30%"</span>,{"\n"}
                        {"  "}
                        <span className="text-[#0369A1]">"college_gpa"</span>:{" "}
                        <span className="text-[#B45309] font-semibold">7.71</span>,{"\n"}
                        {"  "}
                        <span className="text-[#0369A1]">"phone"</span>:{" "}
                        <span className="text-[#3D550C] font-semibold">"+91 7024913839"</span>,{"\n"}
                        {"  "}
                        <span className="text-[#0369A1]">"email"</span>:{" "}
                        <span className="text-[#3D550C] font-semibold">"aashirwad2626@gmail.com"</span>
                        {"\n"}&#125;
                      </code>
                    </pre>
                  )}
                </div>

                {/* Footer Bar */}
                <div className="px-4 py-2 bg-[#F8FAFC] border-t border-stone-200/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#3D550C]" />
                    <span className="text-[#3D550C] font-semibold">TypeScript Ready</span>
                  </div>
                  <span>Ln 12, Col 4</span>
                </div>
              </div>
            </motion.div>

            {/* Stat Cards Below IDE */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="grid grid-cols-3 gap-3 w-full mt-4"
            >
              {stats.map((st, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl border border-stone-200 bg-white text-center shadow-xs hover:border-[#CEDBBA] transition-all"
                >
                  <div className="text-lg sm:text-xl font-black text-[#3D550C] font-mono">
                    {st.value}
                  </div>
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider mt-0.5 text-slate-500">
                    {st.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 sm:mt-16 flex flex-col items-center justify-center gap-1.5"
        >
          <a
            href="#experience"
            className="flex flex-col items-center gap-1.5 group text-slate-500 hover:text-[#3D550C] transition-colors"
          >
            <span className="font-mono text-xs font-bold tracking-widest uppercase">
              Scroll to Experience
            </span>
            <ChevronDown size={16} className="animate-bounce text-[#3D550C]" />
          </a>
        </motion.div>
      </main>

      {/* Decorative Wavy Border Finish (Wave 1) */}
      <div className="w-full overflow-hidden leading-none relative z-10 -mb-[1px]">
        <svg
          className="relative block w-full h-12 sm:h-16 md:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {/* Fill path transitioning to next section (#F7F9F6) */}
          <path
            d="M0,45 C200,110 450,15 700,70 C950,125 1100,45 1200,65 L1200,120 L0,120 Z"
            fill="#F7F9F6"
          />
          {/* Secondary subtle olive wave contour */}
          <path
            d="M0,28 C160,88 360,-15 530,52 C700,118 890,22 1200,62"
            fill="none"
            stroke="#5A7328"
            strokeWidth="1.5"
            strokeOpacity="0.45"
          />
          {/* Primary prominent dark green wavy border line */}
          <path
            d="M0,45 C200,110 450,15 700,70 C950,125 1100,45 1200,65"
            fill="none"
            stroke="#2F4307"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Landing;