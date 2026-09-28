/* eslint-disable react/no-unescaped-entities */
"use client";

import { FaCode, FaLaptopCode, FaUsers, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { icon: FaUsers, value: "20+", label: "Interns Mentored", color: "#3D550C" },
    { icon: FaCode, value: "~40%", label: "Release Boost", color: "#4A5D23" },
    { icon: FaLaptopCode, value: "7.71", label: "LNCT B.Tech GPA", color: "#606C38" },
  ];

  const highlights = [
    { label: "Currently", value: "Software Dev - Team Lead @ BodhaSoft", color: "#3D550C" },
    { label: "Stack", value: "MERN + Next.js + TS + Java", color: "#4A5D23" },
    { label: "Education", value: "B.Tech CSE @ LNCT (7.71 GPA)", color: "#606C38" },
    { label: "Based in", value: "Bhopal, Madhya Pradesh", color: "#78716c" },
  ];

  const entries = [
    {
      num: "01",
      title: "Full-Stack Engineering & Scalable Systems",
      text: "I'm a Software Developer and Team Lead specializing in the MERN stack, TypeScript, and modern scalable web architecture. With a strong engineering foundation in both frontend and backend systems, I build production-ready applications that deliver high performance and real impact.",
    },
    {
      num: "02",
      title: "Leadership & Production Execution",
      text: "Currently leading development at BodhaSoft Pvt. Ltd. as Software Developer - Team Lead, managing architecture, core development, and deployment of LMS and e-commerce platforms. Previously served as Scrum Master & Tech Lead, directing sprint planning, code reviews, and mentoring 20+ interns while cutting post-release defects by 30%.",
    },
    {
      num: "03",
      title: "Core Computer Science Fundamentals",
      text: "Pursuing B.Tech in Computer Science & Engineering at LNCT Group of Colleges, Bhopal (GPA: 7.71). Proficient in core CS principles—DBMS, OOPs, DSA, Operating Systems, and Computer Networks—backed by proven industry experience across Nexissparkx Technologies and CareerHub.",
    },
  ];

  return (
    <div
      id="about"
      className="py-24 px-4 sm:px-8 relative overflow-hidden bg-white text-slate-900"
    >
      {/* Background ambient subtle glow */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-[#3D550C]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-[#606C38]/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="inline-block mb-3.5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[#CEDBBA] bg-[#EFF4EA] text-[#3D550C] font-mono text-xs font-bold uppercase tracking-wider shadow-xs">
              Who I Am
            </span>
          </div>

          <h2
            style={{ fontFamily: "'Georgia', serif" }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-3"
          >
            About <span className="text-[#3D550C] italic">Me</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
            software developer · team lead · lifelong builder
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-14">
          {/* Left Column — Executive Profile Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="bg-[#FAFBF9] rounded-2xl border border-stone-200/90 p-7 shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Avatar Initial Badge */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#3D550C] to-[#606C38] text-white flex items-center justify-center font-serif text-2xl font-black shadow-md shadow-[#3D550C]/20 mb-5">
                AS
              </div>

              <h3
                style={{ fontFamily: "'Georgia', serif" }}
                className="text-2xl font-extrabold text-slate-900 mb-1"
              >
                Aashirwad Singh
              </h3>
              <p className="font-mono text-xs font-semibold text-[#3D550C] uppercase tracking-wider mb-6">
                Software Developer · Team Lead &amp; Full Stack
              </p>

              {/* Highlights List */}
              <div className="border-t border-stone-200/80 pt-5 space-y-3.5">
                {highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs font-mono">
                    <span className="min-w-[75px] uppercase font-bold text-slate-500">
                      {h.label}
                    </span>
                    <span className="text-slate-800 font-medium">→ {h.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stat Cards Row */}
            <div className="grid grid-cols-3 gap-3.5 mt-5">
              {stats.map((st, i) => {
                const Icon = st.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 rounded-xl border border-stone-200 bg-white text-center shadow-xs hover:border-[#CEDBBA] transition-all"
                  >
                    <Icon className="text-[#3D550C] text-lg mx-auto mb-2 opacity-90" />
                    <div className="font-serif text-xl font-extrabold text-[#3D550C] leading-none mb-1">
                      {st.value}
                    </div>
                    <div className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      {st.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column — Editorial Entry Cards (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-5"
          >
            {entries.map((entry, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-[#FAFBF9] rounded-xl border border-stone-200/90 border-l-4 border-l-[#3D550C] p-6 shadow-xs hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-[#3D550C] uppercase tracking-wider">
                    Entry {entry.num}
                  </span>
                  <span className="text-stone-300">/</span>
                  <span className="text-xs font-semibold text-slate-500">
                    {entry.title}
                  </span>
                </div>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-sans">
                  {entry.text}
                </p>
              </motion.div>
            ))}

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a href="/Resume.pdf" download="Aashirwad_Singh_Resume.pdf">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2.5 rounded-xl font-mono text-xs font-bold bg-[#3D550C] hover:bg-[#2F4307] text-white shadow-sm shadow-[#3D550C]/20 flex items-center gap-2 transition-all"
                >
                  Download CV
                  <FaArrowRight size={11} />
                </motion.button>
              </a>

              <a href="mailto:aashirwad2626@gmail.com">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2.5 rounded-xl font-mono text-xs font-bold border border-stone-300 bg-white text-slate-700 hover:border-[#CEDBBA] hover:bg-[#EFF4EA] hover:text-[#3D550C] shadow-xs transition-all"
                >
                  Get In Touch →
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;