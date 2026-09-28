/* eslint-disable react/no-unescaped-entities */
"use client";

import { FaTrophy, FaLightbulb, FaAward, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import TrophyModel3D from "./TrophyModel3D";

const Participation = () => {


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
      className="py-10 sm:py-20 px-3 sm:px-6 lg:px-10 relative overflow-hidden bg-white text-slate-900"
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

      <div className="max-w-[1600px] w-full mx-auto relative z-10">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-10 mb-8 sm:mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block mb-2 sm:mb-3.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full border border-[#CEDBBA] bg-[#EFF4EA] text-[#3D550C] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-xs">
                Honors &amp; Achievements
              </span>
            </div>

            <h2
              style={{ fontFamily: "'Georgia', serif" }}
              className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-2 sm:mb-3"
            >
              Hackathons &amp;{" "}
              <span className="text-[#3D550C] italic">Certifications</span>
            </h2>

            <p className="font-mono text-[11px] sm:text-sm text-slate-500 mb-4 sm:mb-6 max-w-md">
              competitive engineering, national hackathons, and certified software milestones.
            </p>

            {/* Quick Stat Chips */}
            <div className="grid grid-cols-3 gap-2 sm:flex sm:gap-3">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="p-2 sm:p-3.5 rounded-lg sm:rounded-xl border border-stone-200 bg-[#FAFBF9] text-center min-w-0 sm:min-w-[100px] shadow-xs"
                >
                  <div className="font-serif text-sm sm:text-lg font-bold text-[#3D550C]">
                    {s.value}
                  </div>
                  <div className="font-mono text-[8px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5 truncate">
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
            className="flex justify-center md:justify-end"
          >
            <TrophyModel3D />
          </motion.div>
        </div>

        {/* Cards: 2 cards per row on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-7">
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
                className={`bg-[#FAFBF9] hover:bg-white rounded-xl sm:rounded-2xl border border-stone-200/90 hover:border-[#CEDBBA] p-3 sm:p-6 shadow-xs hover:shadow-lg hover:shadow-[#3D550C]/5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                  index === 2 ? "col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Subtle top olive accent highlight */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3D550C] to-[#606C38] opacity-80" />

                <div>
                  {/* Top: Icon & Year */}
                  <div className="flex items-start justify-between gap-1.5 sm:gap-3 mb-2.5 sm:mb-4">
                    <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#EFF4EA] border border-[#CEDBBA] text-[#3D550C] flex items-center justify-center text-sm sm:text-lg shadow-xs shrink-0">
                      <Icon />
                    </div>

                    <span className="font-mono text-[9px] sm:text-xs font-bold px-2 py-0.5 rounded sm:rounded-full bg-white border border-stone-200 text-slate-600 shrink-0">
                      {item.year}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    style={{ fontFamily: "'Georgia', serif" }}
                    className="text-xs sm:text-lg font-bold text-slate-900 mb-0.5 sm:mb-1 leading-snug line-clamp-1 sm:line-clamp-none"
                  >
                    {item.title}
                  </h3>
                  <p className="font-mono text-[10px] sm:text-xs text-[#3D550C] font-semibold mb-1.5 sm:mb-3 line-clamp-1 sm:line-clamp-none">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-[10px] sm:text-[13px] text-slate-600 leading-snug sm:leading-relaxed font-sans mb-3 sm:mb-5 line-clamp-3 sm:line-clamp-none">
                    {item.description}
                  </p>
                </div>

                {/* Status Bar */}
                <div className="pt-2 sm:pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="font-mono text-[8px] sm:text-[11px] font-bold px-1.5 py-0.5 sm:px-2.5 sm:py-0.5 rounded sm:rounded-md bg-[#EFF4EA] border border-[#CEDBBA] text-[#3D550C] truncate max-w-[120px] sm:max-w-none">
                    {item.status}
                  </span>
                  <FaCheckCircle className="text-[#3D550C] text-xs sm:text-sm shrink-0" />
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