/* eslint-disable react/no-unescaped-entities */
"use client";

import { FaGraduationCap, FaSchool, FaBook, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      field: "Core CS & Full-Stack Development",
      gpa: "GPA: 7.71 / 10",
      institution: "LNCT Group of Colleges",
      location: "Bhopal, Madhya Pradesh",
      period: "Sep 2023 – Jul 2027",
      status: "Pursuing",
      icon: FaGraduationCap,
      note: "Deep dive into Data Structures & Algorithms, DBMS, OOPs, Computer Networks, Operating Systems, and scalable web architecture.",
    },
    {
      degree: "Higher Secondary Education (12th)",
      field: "PCM — Physics, Chemistry, Mathematics",
      gpa: "Senior Secondary",
      institution: "Senior Secondary School",
      location: "Madhya Pradesh",
      period: "2021 – 2023",
      status: "Completed",
      icon: FaBook,
      note: "Built strong foundations in advanced mathematics, analytical reasoning, and logical problem solving.",
    },
    {
      degree: "Secondary School Certificate (10th)",
      field: "Foundational Sciences & Mathematics",
      gpa: "High School",
      institution: "High School",
      location: "Madhya Pradesh",
      period: "2020 – 2021",
      status: "Completed",
      icon: FaSchool,
      note: "Discovered an early passion for computers, programming logic, and building interactive software systems.",
    },
  ];

  return (
    <div
      id="education"
      className="py-24 px-4 sm:px-8 relative overflow-hidden bg-[#F7F9F6] text-slate-900"
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

      <div className="max-w-4xl mx-auto relative z-10">
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
              Academic Background
            </span>
          </div>

          <h2
            style={{ fontFamily: "'Georgia', serif" }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-3"
          >
            Edu<span className="text-[#3D550C] italic">cation</span>
          </h2>

          <p className="font-mono text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            formal computer science education and foundational analytical background
          </p>
        </motion.div>

        {/* Education Timeline Cards */}
        <div className="space-y-6">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-stone-200/90 hover:border-[#CEDBBA] p-6 sm:p-7 shadow-xs hover:shadow-md hover:shadow-[#3D550C]/5 transition-all relative overflow-hidden"
              >
                {/* Subtle top olive accent highlight */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3D550C] to-[#606C38] opacity-80" />

                <div className="flex flex-col sm:flex-row items-start gap-5">
                  {/* Icon Badge */}
                  <div className="w-12 h-12 rounded-xl bg-[#EFF4EA] border border-[#CEDBBA] text-[#3D550C] flex items-center justify-center text-xl shrink-0 shadow-xs">
                    <Icon />
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 w-full">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3
                        style={{ fontFamily: "'Georgia', serif" }}
                        className="text-xl font-bold text-slate-900"
                      >
                        {edu.degree}
                      </h3>

                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#EFF4EA] border border-[#CEDBBA] text-[#3D550C]">
                          {edu.gpa}
                        </span>
                        <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full border border-stone-200 bg-stone-50 text-slate-600">
                          {edu.status === "Pursuing" ? "● Pursuing" : "✓ Completed"}
                        </span>
                      </div>
                    </div>

                    <p className="font-mono text-xs font-semibold text-[#3D550C] mb-3">
                      {edu.institution} · <span className="text-slate-600 font-normal">{edu.field}</span>
                    </p>

                    {/* Metadata: Location & Period */}
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 mb-3.5">
                      <span className="flex items-center gap-1.5">
                        <FaMapMarkerAlt className="text-[#3D550C] opacity-75" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaCalendarAlt className="text-[#3D550C] opacity-75" />
                        {edu.period}
                      </span>
                    </div>

                    {/* Note Box */}
                    <div className="bg-[#FAFBF9] border border-stone-200/80 rounded-xl p-3 text-xs sm:text-[13px] text-slate-600 italic leading-relaxed">
                      "{edu.note}"
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 mb-8 text-center font-mono text-xs text-slate-500 tracking-wider"
        >
          — continuously expanding engineering horizon &amp; technical acumen —
        </motion.p>
      </div>

      {/* Decorative Wavy Border Finish (Wave 4) */}
      <div className="w-full overflow-hidden leading-none relative z-10 -mb-[1px]">
        <svg
          className="relative block w-full h-12 sm:h-16 md:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {/* Main wave matching Participation section white background */}
          <path
            d="M0,50 C250,115 500,-10 740,65 C980,135 1110,30 1200,55 L1200,120 L0,120 Z"
            fill="#FFFFFF"
          />
          {/* Secondary subtle olive wave contour */}
          <path
            d="M0,28 C200,98 420,12 680,82 C920,148 1060,42 1200,62"
            fill="none"
            stroke="#5A7328"
            strokeWidth="1.5"
            strokeOpacity="0.45"
          />
          {/* Primary prominent dark green wavy border line */}
          <path
            d="M0,50 C250,115 500,-10 740,65 C980,135 1110,30 1200,55"
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

export default Education;