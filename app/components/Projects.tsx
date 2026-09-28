/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import {
  FaHotel,
  FaVideo,
  FaRobot,
  FaLightbulb,
  FaGithub,
  FaExternalLinkAlt,
  FaCodeBranch,
  FaLaptopCode,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Full-Stack", "Real-Time", "AI & Next.js"];

  const projects = [
    {
      title: "DevSync - Version Control",
      description:
        "GitHub-inspired version control platform with core CLI commands (pull, push, commit, revert, init), role-based collaboration, and an AI assistant.",
      icon: FaCodeBranch,
      tags: ["MERN", "Yargs", "Supabase", "bcryptjs", "Vercel", "Render"],
      status: "completed",
      github: "https://github.com/aashirwad89/",
      live: "https://dev-sync-phi.vercel.app/",
      badge: "Full-Stack CLI & Web",
      category: "Full-Stack",
    },
    {
      title: "EchoMeet - Video Conferencing",
      description:
        "Real-time meeting platform with video calls, live chat, screen sharing, polling, meeting ID session management, and WebRTC streaming.",
      icon: FaVideo,
      tags: ["MERN", "Socket.io", "WebRTC", "Render", "bcryptjs"],
      status: "completed",
      github: "https://github.com/aashirwad89/",
      live: "https://echomeet-2-0-frontend.onrender.com/",
      badge: "Real-Time WebRTC",
      category: "Real-Time",
    },
    {
      title: "WanderBook - Hotel Booking",
      description:
        "Hotel discovery and booking platform featuring role-based owner management, user reviews, search filters, and an integrated AI assistant.",
      icon: FaHotel,
      tags: ["MERN", "JWT", "Passport", "bcryptjs", "Render"],
      status: "completed",
      github: "https://github.com/aashirwad89/",
      live: "",
      badge: "E-Commerce & Discovery",
      category: "Full-Stack",
    },
    {
      title: "Tutorly-AI - Learning Assistant",
      description:
        "AI chatbot for personalized tutoring, intelligent hints, and real-time interactive learning assistance.",
      icon: FaRobot,
      tags: ["Next.js", "Gemini API", "React.js", "Tailwind CSS"],
      status: "completed",
      github: "https://github.com/aashirwad89/",
      live: "https://tutorly-aichat.vercel.app/",
      badge: "Generative AI",
      category: "AI & Next.js",
    },
    {
      title: "AdarshSetu - Smart Infrastructure",
      description:
        "Smart India Hackathon prototype for digital public infrastructure with real-time data sync and analytics.",
      icon: FaLightbulb,
      tags: ["Firebase", "MERN", "Real-Time Data", "SIH"],
      status: "completed",
      github: "https://github.com/aashirwad89/",
      live: "https://adarsh-setu.vercel.app/",
      badge: "SIH Innovation",
      category: "Real-Time",
    },
    {
      title: "CareerHub Platform",
      description:
        "Production-ready animated frontend and integrated backend services delivering dynamic UI and accelerating release cycles by ~40%.",
      icon: FaLaptopCode,
      tags: ["React.js", "Node.js", "MongoDB", "Express", "Auth"],
      status: "completed",
      github: "https://github.com/aashirwad89/",
      live: "",
      badge: "Production Frontend",
      category: "Full-Stack",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-10 relative overflow-hidden bg-white text-slate-900"
    >
      {/* Background Subtle Mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(61, 85, 12, 0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-[1600px] w-full mx-auto relative z-10">
        {/* Header Section with Executive Project Hub on the Right */}
        <div className="grid lg:grid-cols-12 gap-8 mb-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <div className="inline-block mb-3.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[#CEDBBA] bg-[#EFF4EA] text-[#3D550C] font-mono text-xs font-bold uppercase tracking-wider shadow-xs">
                Featured Portfolio
              </span>
            </div>
            <h2
              style={{ fontFamily: "'Georgia', serif" }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-3"
            >
              My <span className="text-[#3D550C] italic">Projects</span>
            </h2>
            <p className="font-mono text-xs sm:text-sm text-slate-500 max-w-lg leading-relaxed">
              Full-stack architectures, real-time WebRTC engines, CLI developer tools, and production-grade web systems.
            </p>
          </motion.div>

          {/* RIGHT SIDE: Interactive Engineering Highlights & Domain Filters */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 w-full"
          >
            <div className="bg-[#FAFBF9] rounded-2xl border border-stone-200/90 hover:border-[#CEDBBA] p-5 sm:p-6 shadow-xs relative overflow-hidden transition-all">
              {/* Subtle top olive accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3D550C] via-[#606C38] to-[#A3B18A] opacity-90" />

              {/* Top Row: Deployment Pulse & GitHub Link */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF4EA] border border-[#CEDBBA] text-[#3D550C] text-xs font-mono font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3D550C] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3D550C]" />
                  </span>
                  <span>CI/CD Deployments Live</span>
                </div>

                <a
                  href="https://github.com/aashirwad89"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-[#3D550C] transition-colors"
                >
                  <FaGithub size={13} />
                  <span>github.com/aashirwad89</span>
                </a>
              </div>

              {/* Engineering Metrics Row */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-4">
                <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-stone-200 text-center shadow-2xs">
                  <div className="text-xl sm:text-2xl font-black text-[#3D550C] font-mono leading-tight">6</div>
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 mt-0.5">
                    Projects Built
                  </div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-stone-200 text-center shadow-2xs">
                  <div className="text-xl sm:text-2xl font-black text-[#3D550C] font-mono leading-tight">4</div>
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 mt-0.5">
                    Live Online
                  </div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-stone-200 text-center shadow-2xs">
                  <div className="text-xl sm:text-2xl font-black text-[#3D550C] font-mono leading-tight">100%</div>
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 mt-0.5">
                    Full-Stack
                  </div>
                </div>
              </div>

              {/* Interactive Domain Filter Pills */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                    Filter by Domain:
                  </span>
                  <span className="text-[11px] font-mono text-[#3D550C] font-semibold">
                    Showing {filteredProjects.length} of {projects.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => {
                    const isActive = activeCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                          isActive
                            ? "bg-[#3D550C] text-white shadow-xs"
                            : "bg-white border border-stone-200 text-slate-700 hover:border-[#CEDBBA] hover:bg-[#EFF4EA] hover:text-[#3D550C]"
                        }`}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const Icon = project.icon;
              return (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="group bg-[#FAFBF9] hover:bg-white rounded-2xl border border-stone-200/90 hover:border-[#CEDBBA] p-6 shadow-xs hover:shadow-lg hover:shadow-[#3D550C]/5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Subtle top olive line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3D550C] via-[#606C38] to-[#A3B18A] opacity-90" />

                  <div>
                    {/* Top Bar: Icon + Badge */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#EFF4EA] border border-[#CEDBBA] text-[#3D550C] flex items-center justify-center text-lg shadow-xs group-hover:scale-105 transition-transform">
                        <Icon />
                      </div>

                      <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-md bg-[#EFF4EA] border border-[#CEDBBA] text-[#3D550C] tracking-wider uppercase">
                        {project.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      style={{ fontFamily: "'Georgia', serif" }}
                      className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#3D550C] transition-colors leading-snug"
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-4 min-h-[50px] font-sans">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#F5F7F2] border border-[#E2EADA] text-[#3D550C]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Links */}
                  <div className="pt-3 border-t border-stone-100 flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-stone-200 text-slate-700 hover:border-[#CEDBBA] hover:bg-[#EFF4EA] hover:text-[#3D550C] font-mono text-xs font-semibold shadow-2xs transition-all"
                    >
                      <FaGithub size={13} />
                      <span>Code</span>
                    </a>

                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#3D550C] hover:bg-[#2F4307] text-white font-mono text-xs font-semibold shadow-xs transition-all"
                      >
                        <FaExternalLinkAlt size={10} />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <span className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-dashed border-stone-200 text-slate-400 font-mono text-xs cursor-not-allowed">
                        <span>Internal</span>
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;