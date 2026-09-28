/* eslint-disable react/no-unescaped-entities */
"use client";

import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaJava,
  FaFire,
  FaUsers,
  FaTasks,
  FaGithub,
  FaDatabase,
  FaNetworkWired,
  FaServer,
  FaCogs,
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongoose,
  SiVercel,
  SiRender,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useState } from "react";

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = [
    "All",
    "Frontend",
    "Backend & DB",
    "Computer Science",
    "Tools & Cloud",
    "Leadership",
  ];

  const allSkills = [
    // Frontend
    { name: "React.js", icon: FaReact, level: 95, color: "#0284C7", category: "Frontend", size: "large" },
    { name: "JavaScript", icon: FaJs, level: 94, color: "#CA8A04", category: "Frontend", size: "large" },
    { name: "Next.js", icon: SiNextdotjs, level: 90, color: "#0F172A", category: "Frontend", size: "medium" },
    { name: "TypeScript", icon: SiTypescript, level: 88, color: "#2563EB", category: "Frontend", size: "medium" },
    { name: "React Native", icon: FaMobileAlt, level: 82, color: "#0284C7", category: "Frontend", size: "small", tag: "Mobile" },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: 92, color: "#0D9488", category: "Frontend", size: "small" },

    // Backend & DB
    { name: "Node.js", icon: FaNodeJs, level: 92, color: "#16A34A", category: "Backend & DB", size: "large" },
    { name: "MongoDB", icon: SiMongodb, level: 90, color: "#15803D", category: "Backend & DB", size: "large" },
    { name: "Express.js", icon: SiExpress, level: 88, color: "#334155", category: "Backend & DB", size: "medium" },
    { name: "REST APIs", icon: FaServer, level: 92, color: "#3D550C", category: "Backend & DB", size: "medium" },
    { name: "Mongoose", icon: SiMongoose, level: 86, color: "#991B1B", category: "Backend & DB", size: "small" },
    { name: "Firebase", icon: FaFire, level: 84, color: "#D97706", category: "Backend & DB", size: "small" },

    // Computer Science
    { name: "DSA", icon: FaCode, level: 88, color: "#3D550C", category: "Computer Science", size: "medium" },
    { name: "OOPs", icon: FaCogs, level: 90, color: "#4A5D23", category: "Computer Science", size: "small" },
    { name: "DBMS", icon: FaDatabase, level: 88, color: "#2563EB", category: "Computer Science", size: "small" },
    { name: "Operating Systems", icon: FaLaptopCode, level: 85, color: "#606C38", category: "Computer Science", size: "small" },
    { name: "Computer Networks", icon: FaNetworkWired, level: 84, color: "#7C3AED", category: "Computer Science", size: "small" },

    // Tools & Cloud
    { name: "Git & GitHub", icon: FaGithub, level: 92, color: "#EA580C", category: "Tools & Cloud", size: "medium" },
    { name: "Vercel", icon: SiVercel, level: 90, color: "#0F172A", category: "Tools & Cloud", size: "small" },
    { name: "Render", icon: SiRender, level: 88, color: "#0D9488", category: "Tools & Cloud", size: "small" },
    { name: "Java", icon: FaJava, level: 82, color: "#C2410C", category: "Tools & Cloud", size: "small", tag: "Core" },

    // Leadership
    { name: "Team Lead", icon: FaUsers, level: 92, color: "#3D550C", category: "Leadership", size: "medium", tag: "20+ Interns" },
    { name: "Scrum Master", icon: FaTasks, level: 90, color: "#4A5D23", category: "Leadership", size: "small", tag: "Agile" },
  ];

  const filteredSkills =
    activeFilter === "All"
      ? allSkills
      : allSkills.filter((s) => s.category === activeFilter);

  return (
    <div
      id="skills"
      className="py-24 px-4 sm:px-8 relative overflow-hidden bg-[#F7F9F6] text-slate-900"
    >
      {/* Background ambient subtle glow */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-[#3D550C]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#606C38]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <div className="inline-block mb-3.5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[#CEDBBA] bg-[#EFF4EA] text-[#3D550C] font-mono text-xs font-bold uppercase tracking-wider shadow-xs">
              Technical Arsenal
            </span>
          </div>

          <h2
            style={{ fontFamily: "'Georgia', serif" }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-3"
          >
            My <span className="text-[#3D550C] italic">Tech Stack</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            Full-stack technologies, databases, computer science foundations &amp; cloud tools
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full font-mono text-xs font-semibold transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-[#3D550C] text-white shadow-sm shadow-[#3D550C]/25"
                    : "bg-white border border-stone-200/90 text-slate-600 hover:border-[#CEDBBA] hover:bg-[#EFF4EA] hover:text-[#3D550C]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.02 }}
                whileHover={{ y: -3 }}
                className="bg-white rounded-2xl border border-stone-200/90 hover:border-[#CEDBBA] p-5 shadow-xs hover:shadow-md hover:shadow-[#3D550C]/5 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Icon + Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#F5F7F2] border border-[#E2EADA] flex items-center justify-center text-xl shadow-xs">
                      <Icon style={{ color: skill.color }} />
                    </div>
                    {skill.tag && (
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#EFF4EA] border border-[#CEDBBA] text-[#3D550C]">
                        {skill.tag}
                      </span>
                    )}
                  </div>

                  {/* Title & Category */}
                  <h3 className="font-bold text-slate-900 text-base mb-0.5">
                    {skill.name}
                  </h3>
                  <span className="font-mono text-[11px] text-slate-500 block mb-4">
                    {skill.category}
                  </span>
                </div>

                {/* Progress Bar & Percentage */}
                <div>
                  <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#4A5D23] to-[#3D550C] rounded-full"
                    />
                  </div>
                  <div className="flex justify-between items-center text-[11px] font-mono text-slate-500">
                    <span>Proficiency</span>
                    <span className="font-bold text-[#3D550C]">{skill.level}%</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Decorative Wavy Border Finish (Wave 3) */}
      <div className="w-full overflow-hidden leading-none relative z-10 -mb-[1px] mt-16">
        <svg
          className="relative block w-full h-12 sm:h-16 md:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {/* Main wave matching Projects section white background */}
          <path
            d="M0,55 C160,115 390,20 630,75 C870,130 1030,35 1200,65 L1200,120 L0,120 Z"
            fill="#FFFFFF"
          />
          {/* Secondary subtle olive wave contour */}
          <path
            d="M0,32 C220,112 480,-8 740,78 C990,152 1110,42 1200,58"
            fill="none"
            stroke="#5A7328"
            strokeWidth="1.5"
            strokeOpacity="0.45"
          />
          {/* Primary prominent dark green wavy border line */}
          <path
            d="M0,55 C160,115 390,20 630,75 C870,130 1030,35 1200,65"
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

export default Skills;