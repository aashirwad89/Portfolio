/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState, useEffect, useRef } from "react";
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
  Sun,
  Moon,
  Globe,
  Terminal,
} from "lucide-react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";

const Landing = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"code" | "metrics">("code");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [manualTheme, setManualTheme] = useState<"auto" | "light" | "dark">("auto");
  const [isScrolledDark, setIsScrolledDark] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Framer motion scroll binding for smooth dark transition as user scrolls to bottom of Landing
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  // Smooth dark fade layer opacity
  const bgGradientOpacity = useTransform(smoothProgress, [0.35, 0.85], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle scroll to top button visibility only when scrolled down
      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Check if user scrolled down near the experience section
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.bottom < window.innerHeight * 0.5) {
          setIsScrolledDark(true);
        } else {
          setIsScrolledDark(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const effectiveTheme = manualTheme === "auto" ? (isScrolledDark ? "dark" : "light") : manualTheme;
  const isDark = effectiveTheme === "dark";

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  const techStack = [
    "React",
    "TypeScript",
    "Node.js",
    "Next.js",
    "MongoDB",
    "Express",
    "Tailwind CSS",
    "Firebase",
  ];

  const stats = [
    { value: "1+", label: "Years Experience" },
    { value: "5+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("aashirwad2626@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div
      ref={containerRef}
      id="home"
      className="relative min-h-screen transition-colors duration-700 overflow-hidden font-sans"
      style={{
        backgroundColor: isDark ? "#080808" : "#ffffff",
      }}
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className={`absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl transition-opacity duration-1000 ${
            isDark ? "bg-cyan-900/15 opacity-40" : "bg-cyan-100/70 opacity-80"
          }`}
        />
        <div
          className={`absolute top-1/3 -right-32 w-96 h-96 rounded-full blur-3xl transition-opacity duration-1000 ${
            isDark ? "bg-indigo-900/15 opacity-40" : "bg-indigo-100/70 opacity-80"
          }`}
        />
        {/* Subtle grid background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: isDark
              ? "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)"
              : "radial-gradient(circle, rgba(15,23,42,0.05) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Smooth Scroll Darkness Fade Layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-1 bg-[#080808]"
        style={{ opacity: bgGradientOpacity }}
      />

      {/* NAVBAR */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-xl border-b ${
          isDark
            ? "bg-[#080808]/85 border-white/10 text-white"
            : "bg-white/90 border-slate-200 text-slate-900 shadow-xs"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 font-bold tracking-tight group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 p-[2px] shadow-sm shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <div
                className={`w-full h-full rounded-[10px] flex items-center justify-center font-mono text-xs font-black ${
                  isDark ? "bg-slate-950 text-cyan-400" : "bg-white text-cyan-600"
                }`}
              >
                AS
              </div>
            </div>
            <span
              className={`font-mono text-base font-extrabold tracking-wider ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              AASHIRWAD<span className="text-cyan-600 dark:text-cyan-400">.DEV</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-cyan-600 ${
                  isDark ? "text-slate-300 hover:text-cyan-400" : "text-slate-700"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Items */}
          <div className="flex items-center gap-3">
            {/* Worldwide Availability Badge */}
            <div
              className={`hidden sm:flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${
                isDark
                  ? "bg-emerald-950/40 border-emerald-500/30 text-emerald-400"
                  : "bg-emerald-50 border-emerald-200 text-emerald-800"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <Globe size={13} className="text-emerald-600 dark:text-emerald-400" />
              <span>Available Worldwide</span>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={() => {
                if (manualTheme === "auto") {
                  setManualTheme(isDark ? "light" : "dark");
                } else {
                  setManualTheme(manualTheme === "light" ? "dark" : "light");
                }
              }}
              className={`p-2 rounded-xl border transition-all ${
                isDark
                  ? "bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-xs"
              }`}
              title={`Switch to ${isDark ? "Light" : "Dark"} mode`}
            >
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-xl border transition-colors ${
                isDark
                  ? "bg-slate-900 border-slate-800 text-white"
                  : "bg-white border-slate-200 text-slate-800 shadow-xs"
              }`}
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
              className={`md:hidden border-b px-6 py-5 flex flex-col gap-4 ${
                isDark
                  ? "bg-slate-950 border-slate-800 text-white"
                  : "bg-white border-slate-200 text-slate-900 shadow-md"
              }`}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold hover:text-cyan-600 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <Globe size={13} />
                  Available Worldwide
                </span>
                <a
                  href="/Resume.pdf"
                  download="Aashirwad_Singh_Resume.pdf"
                  className="px-3.5 py-1.5 rounded-lg bg-cyan-600 text-white font-mono text-xs font-bold"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO CONTENT */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-10 md:pt-16 pb-20 flex flex-col justify-center min-h-[calc(100vh-70px)]">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: HERO TEXT & CTAS */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Role Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono font-bold uppercase tracking-wider ${
                isDark
                  ? "bg-cyan-950/40 border-cyan-500/30 text-cyan-400"
                  : "bg-cyan-50 border-cyan-200 text-cyan-800 shadow-xs"
              }`}
            >
              <Sparkles size={14} className="text-cyan-600 dark:text-cyan-400" />
              <span>Full Stack Software Engineer</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h1
                className={`text-4xl sm:text-6xl font-black tracking-tight leading-tight ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent italic">
                  Aashirwad
                </span>
                .
              </h1>
              <p
                className={`text-2xl sm:text-4xl font-extrabold tracking-tight leading-snug ${
                  isDark ? "text-slate-200" : "text-slate-900"
                }`}
              >
                Building Scalable, High-Performance{" "}
                <span className="bg-gradient-to-r from-cyan-600 to-indigo-600 dark:from-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Web Applications
                </span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-base sm:text-lg max-w-xl leading-relaxed ${
                isDark ? "text-slate-300 font-normal" : "text-slate-700 font-medium"
              }`}
            >
              Specializing in the{" "}
              <strong className="text-cyan-600 dark:text-cyan-400 font-bold">
                MERN Stack
              </strong>{" "}
              &amp;{" "}
              <strong className="text-indigo-600 dark:text-indigo-400 font-bold">
                TypeScript
              </strong>
              . I deliver robust web solutions, clean architecture, and intuitive user experiences for clients worldwide.
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
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-7 py-3 rounded-xl font-mono text-sm font-bold bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 text-white shadow-md shadow-cyan-600/20 hover:shadow-cyan-600/35 flex items-center justify-center gap-2 group transition-all"
                >
                  View Work
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </a>

              <a href="/Resume.pdf" download="Aashirwad_Singh_Resume.pdf" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full sm:w-auto px-6 py-3 rounded-xl font-mono text-sm font-bold border flex items-center justify-center gap-2 transition-all ${
                    isDark
                      ? "bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800"
                      : "bg-white border-slate-300 text-slate-900 hover:bg-slate-50 shadow-xs"
                  }`}
                >
                  <Download size={16} className="text-cyan-600 dark:text-cyan-400" />
                  Download CV
                </motion.button>
              </a>

              <button
                onClick={copyEmailToClipboard}
                className={`px-4 py-3 rounded-xl font-mono text-xs font-semibold border flex items-center justify-center gap-2 transition-all ${
                  copiedEmail
                    ? "bg-emerald-600 text-white border-emerald-600"
                    : isDark
                    ? "bg-slate-900 border-slate-800 text-slate-300 hover:text-white"
                    : "bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200/80"
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
              className="flex items-center gap-3 pt-2"
            >
              {[
                { icon: Github, href: "https://github.com/aashirwad89", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/aashirwad26", label: "LinkedIn" },
                { icon: Mail, href: "mailto:aashirwad2626@gmail.com", label: "Email" },
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2.5 rounded-xl border transition-all ${
                    isDark
                      ? "bg-slate-900 border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40"
                      : "bg-white border-slate-300 text-slate-800 hover:text-cyan-700 hover:border-cyan-400 shadow-xs"
                  }`}
                  aria-label={item.label}
                >
                  <item.icon size={18} />
                </motion.a>
              ))}
            </motion.div>

            {/* Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-2 w-full"
            >
              <p
                className={`text-xs font-mono font-bold uppercase tracking-wider mb-2.5 ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
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
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold border transition-all cursor-default ${
                      isDark
                        ? "bg-slate-900 border-slate-800 text-slate-200 hover:border-cyan-500/40 hover:text-cyan-400"
                        : "bg-slate-100 border-slate-300 text-slate-800 hover:border-cyan-500 hover:text-cyan-700 shadow-xs"
                    }`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: MACOS IDE SHOWCASE CARD */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="w-full max-w-md lg:max-w-none"
            >
              {/* IDE Window Box */}
              <div className="rounded-2xl border border-slate-800 bg-[#0c1017] text-slate-100 shadow-2xl overflow-hidden">
                {/* Window Header */}
                <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>

                  {/* Tabs */}
                  <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
                    <button
                      onClick={() => setActiveTab("code")}
                      className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-bold transition-all ${
                        activeTab === "code"
                          ? "bg-cyan-500 text-slate-950 font-black"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      developer.ts
                    </button>
                    <button
                      onClick={() => setActiveTab("metrics")}
                      className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-bold transition-all ${
                        activeTab === "metrics"
                          ? "bg-cyan-500 text-slate-950 font-black"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      metrics.json
                    </button>
                  </div>

                  <div className="text-slate-500 font-mono text-[11px] hidden sm:block">UTF-8</div>
                </div>

                {/* Code Content */}
                <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[250px]">
                  {activeTab === "code" ? (
                    <pre className="text-slate-200">
                      <code>
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-cyan-400">developer</span> = &#123;{"\n"}
                        {"  "}
                        <span className="text-slate-400">name:</span>{" "}
                        <span className="text-emerald-400">"Aashirwad Singh"</span>,{"\n"}
                        {"  "}
                        <span className="text-slate-400">role:</span>{" "}
                        <span className="text-emerald-400">"Full Stack Engineer"</span>,{"\n"}
                        {"  "}
                        <span className="text-slate-400">availability:</span>{" "}
                        <span className="text-emerald-400">"Worldwide Remote"</span>,{"\n"}
                        {"  "}
                        <span className="text-slate-400">stack:</span> [
                        <span className="text-amber-300">"React"</span>,{" "}
                        <span className="text-amber-300">"Node"</span>,{" "}
                        <span className="text-amber-300">"TS"</span>],{"\n"}
                        {"  "}
                        <span className="text-slate-400">status:</span>{" "}
                        <span className="text-emerald-400">"Available for Hire 🚀"</span>
                        {"\n"}&#125;;{"\n\n"}
                        <span className="text-slate-500">// Clean & Scalable Codebase</span>{"\n"}
                        <span className="text-cyan-400">console</span>.
                        <span className="text-indigo-400">log</span>(
                        <span className="text-emerald-400">`Let's build together!`</span>);
                      </code>
                    </pre>
                  ) : (
                    <pre className="text-slate-200">
                      <code>
                        &#123;{"\n"}
                        {"  "}
                        <span className="text-cyan-400">"experience_years"</span>:{" "}
                        <span className="text-amber-400">1</span>,{"\n"}
                        {"  "}
                        <span className="text-cyan-400">"completed_projects"</span>:{" "}
                        <span className="text-amber-400">5</span>,{"\n"}
                        {"  "}
                        <span className="text-cyan-400">"satisfaction_rate"</span>:{" "}
                        <span className="text-emerald-400">"100%"</span>,{"\n"}
                        {"  "}
                        <span className="text-cyan-400">"availability"</span>:{" "}
                        <span className="text-emerald-400">"Global Remote"</span>
                        {"\n"}&#125;
                      </code>
                    </pre>
                  )}
                </div>

                {/* Footer Bar */}
                <div className="px-4 py-2 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>TypeScript Ready</span>
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
                  className={`p-3 rounded-xl border text-center transition-all ${
                    isDark
                      ? "bg-slate-900 border-slate-800 text-white"
                      : "bg-white border-slate-300 text-slate-900 shadow-xs"
                  }`}
                >
                  <div className="text-lg sm:text-xl font-black text-cyan-600 dark:text-cyan-400 font-mono">
                    {st.value}
                  </div>
                  <div className={`text-[10px] font-mono font-bold uppercase tracking-wider mt-0.5 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}>
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
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 sm:mt-16 flex flex-col items-center justify-center gap-2"
        >
          <a
            href="#experience"
            className={`flex flex-col items-center gap-2 group transition-colors ${
              isDark ? "text-slate-400 hover:text-cyan-400" : "text-slate-600 hover:text-cyan-600"
            }`}
          >
            <span className="font-mono text-xs font-bold tracking-widest uppercase">
              Scroll to Experience
            </span>
            <ChevronDown size={16} className="animate-bounce text-cyan-600 dark:text-cyan-400" />
          </a>
        </motion.div>
      </main>

      {/* Fade Gradient Bridge to Next Section */}
      <div
        className="w-full h-24 pointer-events-none transition-colors duration-700"
        style={{
          background: isDark
            ? "linear-gradient(to bottom, transparent, #080808)"
            : "linear-gradient(to bottom, #ffffff, #080808)",
        }}
      />

      {/* Scroll-to-Top Button (Only visible when scrolled down) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.a
            href="#home"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <button
              className="p-3 rounded-full bg-cyan-600 text-white font-bold shadow-lg shadow-cyan-600/30 hover:bg-cyan-500 transition-colors"
              title="Scroll to Top"
            >
              <ChevronDown size={18} className="rotate-180" />
            </button>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Landing;