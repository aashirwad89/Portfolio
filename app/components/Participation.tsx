/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useRef } from "react";
import { FaTrophy, FaLightbulb, FaAward, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Participation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = 320;
    canvas.height = 320;
    let animationFrameId: number;
    let rotation = 0;

    const drawTrophyAnimation = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      rotation += 0.01;
      ctx.save();
      ctx.translate(centerX, centerY);

      // Trophy Cup Gradient (Gold & Olive Amber)
      const cupGradient = ctx.createLinearGradient(-35, -70, 35, 0);
      cupGradient.addColorStop(0, "#D97706");
      cupGradient.addColorStop(0.5, "#B45309");
      cupGradient.addColorStop(1, "#3D550C");

      ctx.beginPath();
      ctx.moveTo(-35, 0);
      ctx.quadraticCurveTo(-40, -50, -25, -70);
      ctx.lineTo(25, -70);
      ctx.quadraticCurveTo(40, -50, 35, 0);
      ctx.closePath();
      ctx.fillStyle = cupGradient;
      ctx.fill();
      ctx.strokeStyle = "#4A5D23";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Handles
      ctx.beginPath();
      ctx.arc(-35, -35, 12, Math.PI, Math.PI * 1.5);
      ctx.strokeStyle = "#D97706";
      ctx.lineWidth = 2.5;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(35, -35, 12, Math.PI * 1.5, Math.PI * 2);
      ctx.stroke();

      // Base
      ctx.fillStyle = "#3D550C";
      ctx.fillRect(-12, 0, 24, 25);
      ctx.fillStyle = "#4A5D23";
      ctx.fillRect(-28, 25, 56, 8);

      // Star in Cup
      ctx.save();
      ctx.translate(0, -35);
      ctx.rotate(rotation * 2);
      ctx.fillStyle = "#FEF3C7";
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
        if (i === 0) ctx.moveTo(Math.cos(angle) * 8, Math.sin(angle) * 8);
        else ctx.lineTo(Math.cos(angle) * 8, Math.sin(angle) * 8);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Orbiting particles (Olive & Amber)
      for (let i = 0; i < 10; i++) {
        const angle = rotation * 1.5 + (i * Math.PI * 2) / 10;
        const radius = 85 + Math.sin(rotation * 2 + i) * 12;
        ctx.beginPath();
        ctx.arc(Math.cos(angle) * radius, Math.sin(angle) * radius, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = ["#3D550C", "#606C38", "#D97706", "#4A5D23"][i % 4];
        ctx.fill();
      }

      // Orbit Rings
      ctx.strokeStyle = "rgba(61, 85, 12, 0.15)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.ellipse(0, 0, 105, 45, rotation * 0.5, 0, Math.PI * 2);
      ctx.stroke();

      ctx.restore();
      animationFrameId = requestAnimationFrame(drawTrophyAnimation);
    };

    drawTrophyAnimation();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const participations = [
    {
      title: "TIC Hackathon",
      subtitle: "Technocrats Institute of Technology, Bhopal",
      description:
        "Participated in a 36-hour competitive hackathon and secured a prestigious position in the Top 10 teams under the Innovation category.",
      icon: FaTrophy,
      color: "#3D550C",
      status: "Top 10 Finalist",
      year: "April 2026",
    },
    {
      title: "Idea Hackathon",
      subtitle: "Issued by BIST & Sheryians Coding School",
      description:
        "Showcased innovative software architecture and full-stack solutions at the national idea presentation hackathon.",
      icon: FaLightbulb,
      color: "#4A5D23",
      status: "Issued & Certified",
      year: "June 2025",
    },
    {
      title: "Smart India Hackathon",
      subtitle: "Internal Selection Round — AdarshSetu",
      description:
        "Qualified through rigorous internal selection rounds with digital civic infrastructure solution AdarshSetu.",
      icon: FaAward,
      color: "#606C38",
      status: "Qualified",
      year: "2024 - 2025",
    },
  ];

  const stats = [
    { value: "Top 10", label: "TIC Innovation", color: "#3D550C" },
    { value: "Sheryians", label: "& BIST Certified", color: "#4A5D23" },
    { value: "SIH", label: "Internal Qualified", color: "#606C38" },
  ];

  return (
    <div
      id="participation"
      className="py-24 px-4 sm:px-8 relative overflow-hidden bg-white text-slate-900"
    >
      {/* Background Subtle Pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(61, 85, 12, 0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block mb-3.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[#CEDBBA] bg-[#EFF4EA] text-[#3D550C] font-mono text-xs font-bold uppercase tracking-wider shadow-xs">
                Honors &amp; Achievements
              </span>
            </div>

            <h2
              style={{ fontFamily: "'Georgia', serif" }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-3"
            >
              Hackathons &amp;{" "}
              <span className="text-[#3D550C] italic">Certifications</span>
            </h2>

            <p className="font-mono text-xs sm:text-sm text-slate-500 mb-6 max-w-md">
              competitive engineering, national hackathons, and certified software milestones.
            </p>

            {/* Quick Stat Chips */}
            <div className="flex gap-3 flex-wrap">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl border border-stone-200 bg-[#FAFBF9] text-center min-w-[100px] shadow-xs"
                >
                  <div className="font-serif text-lg font-bold text-[#3D550C]">
                    {s.value}
                  </div>
                  <div className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <canvas ref={canvasRef} className="w-full max-w-[280px]" />
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-7">
          {participations.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
                className="bg-[#FAFBF9] hover:bg-white rounded-2xl border border-stone-200/90 hover:border-[#CEDBBA] p-6 shadow-xs hover:shadow-lg hover:shadow-[#3D550C]/5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Subtle top olive accent highlight */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3D550C] to-[#606C38] opacity-80" />

                <div>
                  {/* Top: Icon & Year */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#EFF4EA] border border-[#CEDBBA] text-[#3D550C] flex items-center justify-center text-lg shadow-xs">
                      <Icon />
                    </div>

                    <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-white border border-stone-200 text-slate-600">
                      {item.year}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    style={{ fontFamily: "'Georgia', serif" }}
                    className="text-lg font-bold text-slate-900 mb-1"
                  >
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-[#3D550C] font-semibold mb-3">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-sans mb-5">
                    {item.description}
                  </p>
                </div>

                {/* Status Bar */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-[#EFF4EA] border border-[#CEDBBA] text-[#3D550C]">
                    {item.status}
                  </span>
                  <FaCheckCircle className="text-[#3D550C] text-sm" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Participation;