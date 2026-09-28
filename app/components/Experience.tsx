"use client";

import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCode,
  FaChalkboardTeacher,
  FaTasks,
  FaLaptopCode,
} from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "Software Developer - Team Lead",
      company: "BodhaSoft Pvt. Ltd.",
      duration: "Apr 2026 – Present",
      period: "Apr 2026 – Present",
      location: "Remote",
      type: "Part-time",
      description: [
        "Led and developed two full-stack products, an LMS and e-commerce platform",
        "Managing architecture, core development, team coordination, and deployment of scalable production-ready systems",
        "Ensuring robust code standards, system stability, and seamless deployment workflows",
      ],
      skills: ["Architecture", "LMS", "E-Commerce", "Team Lead", "Deployment", "Scalability"],
      icon: FaTasks,
      color: "#3D550C",
      current: true,
      stamp: "ACTIVE",
    },
    {
      role: "MERN Stack Intern",
      company: "Nexissparkx Technologies",
      duration: "5 Months",
      period: "Apr 2026 – Aug 2026",
      location: "Remote",
      type: "Internship",
      description: [
        "Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js",
        "Built responsive interfaces, RESTful APIs, and complex database integrations",
        "Optimized application performance and streamlined data flow while collaborating with the team",
      ],
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "RESTful APIs", "Optimization"],
      icon: FaCode,
      color: "#4A5D23",
      current: false,
      stamp: "DONE",
    },
    {
      role: "Full Stack Developer",
      company: "CareerHub",
      duration: "3 Months",
      period: "Jun 2025 – Aug 2025",
      location: "Bhopal, M.P.",
      type: "Developer",
      description: [
        "Delivered a production-ready, animated, data-driven frontend within 3 months, increasing user engagement",
        "Reduced feature release cycles by ~40% through reusable components and streamlined patterns",
        "Built responsive UI with dynamic data rendering, backend service integrations, and secure authentication",
      ],
      skills: ["React.js", "Framer Motion", "REST APIs", "Authentication", "UI/UX", "Node.js"],
      icon: FaLaptopCode,
      color: "#606C38",
      current: false,
      stamp: "DONE",
    },
    {
      role: "Scrum Master & Tech Lead",
      company: "BodhaSoft Pvt. Ltd.",
      duration: "5 Months",
      period: "Oct 2025 – Feb 2026",
      location: "Remote",
      type: "Leadership",
      description: [
        "Led development of a production-ready full-stack product delivered within 5 months",
        "Maintained weekly release cycles and reduced post-release defects by 30%",
        "Directed sprint planning, task allocation, code reviews, and mentored 20+ interns on architecture and execution standards",
      ],
      skills: ["Sprint Planning", "Agile / Scrum", "Code Reviews", "Mentorship (20+ Interns)", "Architecture"],
      icon: FaChalkboardTeacher,
      color: "#526E2D",
      current: false,
      stamp: "DONE",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div
      id="experience"
      className="py-24 px-4 sm:px-8 relative overflow-hidden bg-[#f7f9f6] text-slate-900"
    >
      {/* Delicate background pattern */}
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="inline-block mb-3.5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[#CEDBBA] bg-[#EFF4EA] text-[#3D550C] font-mono text-xs font-bold uppercase tracking-wider shadow-xs">
              Professional Journey
            </span>
          </div>

          <h2
            style={{ fontFamily: "'Georgia', serif" }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-3"
          >
            Work <span className="text-[#3D550C] italic">Experience</span>
          </h2>

          <p className="font-mono text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            2025 – Present · remote &amp; on-site · scalable systems, full stack &amp; tech leadership
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="relative group"
              >
                {/* Executive Light Card */}
                <div className="h-full bg-white rounded-2xl border border-stone-200/90 hover:border-[#CEDBBA] p-7 shadow-xs hover:shadow-lg hover:shadow-[#3D550C]/5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
                  {/* Subtle top olive accent highlight */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3D550C] via-[#606C38] to-[#A3B18A] opacity-90" />

                  {/* Card Top Section */}
                  <div>
                    {/* Header Row: Icon + Company + Status Badge */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-xl bg-[#EFF4EA] border border-[#CEDBBA] flex items-center justify-center text-[#3D550C] shadow-xs group-hover:scale-105 transition-transform">
                          <Icon size={20} />
                        </div>
                        <div>
                          <h4 className="font-mono text-sm font-bold text-[#3D550C] tracking-wide">
                            {exp.company}
                          </h4>
                          <span className="inline-block text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Status Stamp */}
                      <span
                        className={`font-mono text-[11px] font-bold px-2.5 py-1 rounded-md border tracking-wider uppercase ${
                          exp.current
                            ? "bg-[#EFF4EA] border-[#CEDBBA] text-[#3D550C]"
                            : "bg-stone-50 border-stone-200 text-slate-500"
                        }`}
                      >
                        {exp.current ? "● Active" : "✓ Done"}
                      </span>
                    </div>

                    {/* Role Title */}
                    <h3
                      style={{ fontFamily: "'Georgia', serif" }}
                      className="text-xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#3D550C] transition-colors"
                    >
                      {exp.role}
                    </h3>

                    {/* Timeline & Location */}
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 mb-5">
                      <span className="flex items-center gap-1.5">
                        <FaCalendarAlt className="text-[#3D550C] opacity-75" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaMapMarkerAlt className="text-[#3D550C] opacity-75" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Dashed divider */}
                    <div className="border-t border-dashed border-stone-200 mb-4" />

                    {/* Description bullet points */}
                    <ul className="space-y-2.5 mb-6">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans"
                        >
                          <span className="text-[#3D550C] font-bold mt-0.5 text-xs">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Pill Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-stone-100">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-[#F5F7F2] border border-[#E2EADA] text-[#3D550C] hover:bg-[#EFF4EA] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 mb-10 text-center font-mono text-xs text-slate-500 tracking-wider"
        >
          — consistently driving engineering excellence &amp; scalable architectures —
        </motion.p>
      </div>

      {/* Decorative Wavy Border Finish (Wave 2) */}
      <div className="w-full overflow-hidden leading-none relative z-10 -mb-[1px]">
        <svg
          className="relative block w-full h-12 sm:h-16 md:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {/* Main wave matching About section white background */}
          <path
            d="M0,55 C220,15 450,105 700,50 C920,-5 1080,85 1200,45 L1200,120 L0,120 Z"
            fill="#FFFFFF"
          />
          {/* Secondary subtle olive wave contour */}
          <path
            d="M0,38 C300,118 580,-12 880,68 C1040,112 1140,48 1200,38"
            fill="none"
            stroke="#5A7328"
            strokeWidth="1.5"
            strokeOpacity="0.45"
          />
          {/* Primary prominent dark green wavy border line */}
          <path
            d="M0,55 C220,15 450,105 700,50 C920,-5 1080,85 1200,45"
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

export default Experience;