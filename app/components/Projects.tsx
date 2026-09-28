/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useRef } from "react";
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
import { motion } from "framer-motion";

const Projects = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 300;
    canvas.height = 300;

    let animationFrameId: number;
    let time = 0;

    const drawCodingAnimation = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      time += 0.02;

      ctx.save();
      ctx.translate(centerX, centerY);

      // Light terminal window box
      const termWidth = 190;
      const termHeight = 125;
      const gradient = ctx.createLinearGradient(0, -termHeight / 2, 0, termHeight / 2);
      gradient.addColorStop(0, "#ffffff");
      gradient.addColorStop(1, "#f8faf7");
      ctx.fillStyle = gradient;
      ctx.fillRect(-termWidth / 2, -termHeight / 2, termWidth, termHeight);
      ctx.strokeStyle = "#3D550C";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(-termWidth / 2, -termHeight / 2, termWidth, termHeight);

      // Header bar
      ctx.fillStyle = "rgba(61, 85, 12, 0.08)";
      ctx.fillRect(-termWidth / 2, -termHeight / 2, termWidth, 22);

      // Window dots
      const buttonY = -termHeight / 2 + 11;
      [
        ["#ef4444", 15],
        ["#f59e0b", 30],
        ["#10b981", 45],
      ].forEach(([color, x]) => {
        ctx.fillStyle = color as string;
        ctx.beginPath();
        ctx.arc(-termWidth / 2 + (x as number), buttonY, 3.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Terminal text lines
      const codeLines = [
        "> const dev = {",
        '>   project: "DevSync",',
        '>   stack: ["MERN"]',
        "> };",
      ];
      ctx.font = "11px monospace";
      ctx.fillStyle = "#3D550C";
      let yOffset = -35;
      codeLines.forEach((line, i) => {
        const chars = Math.floor(((Math.sin(time + i) + 1) * line.length) / 2);
        ctx.fillText(line.substring(0, chars), -termWidth / 2 + 15, yOffset);
        yOffset += 18;
      });

      // Cursor
      if (Math.floor(time * 2) % 2 === 0) {
        ctx.fillStyle = "#3D550C";
        ctx.fillRect(
          -termWidth / 2 + 15 + ctx.measureText(codeLines[3]).width + 2,
          yOffset - 18,
          6,
          12
        );
      }

      // Orbiting symbols in olive
      const symbols = ["{ }", "< >", "( )", "[ ]", "< />"];
      symbols.forEach((symbol, i) => {
        const angle = time + (i * Math.PI * 2) / symbols.length;
        const radius = 95 + Math.sin(time + i) * 8;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.font = "bold 13px monospace";
        ctx.fillStyle = `rgba(61, 85, 12, ${0.45 + Math.sin(time + i) * 0.25})`;
        ctx.fillText(symbol, -12, 4);
        ctx.restore();
      });

      ctx.restore();
      animationFrameId = requestAnimationFrame(drawCodingAnimation);
    };

    drawCodingAnimation();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

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
    },
  ];

  return (
    <div
      id="projects"
      className="py-24 px-4 sm:px-8 relative overflow-hidden bg-white text-slate-900"
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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
            <p className="font-mono text-xs sm:text-sm text-slate-500 max-w-md">
              Full-stack architectures, real-time collaboration engines, and production-grade applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center md:justify-end"
          >
            <canvas ref={canvasRef} className="w-full max-w-[280px] drop-shadow-sm" />
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
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
        </div>
      </div>
    </div>
  );
};

export default Projects;