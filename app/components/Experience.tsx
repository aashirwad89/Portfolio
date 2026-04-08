"use client"
import { FaCalendarAlt, FaMapMarkerAlt, FaCode, FaChalkboardTeacher, FaTasks, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Variants } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: 'Scrum Master & Technical Lead',
      company: 'BodhaSoft',
      duration: '5 Months',
      period: 'Oct 2025 - Feb 2026',
      location: 'Remote',
      type: 'Part time',
      description: [
        'Leading and managing multiple development projects from conception to deployment',
        'Coordinating cross-functional teams and ensuring timely project delivery',
        'Implementing agile methodologies and sprint planning'
      ],
      skills: ['Project Management', 'Agile', 'Team Leadership', 'Scrum'],
      icon: FaTasks,
      color: '#06b6d4',
      current: true,
      rotate: '-1.5deg',
      stamp: 'ACTIVE',
    },
    {
      role: 'Full Stack Tutor',
      company: 'BodhaSoft',
      duration: '1 Month',
      period: 'Feb 2025 - Present',
      location: 'Remote',
      type: 'Current',
      description: [
        'Taught MERN stack development to students and professionals',
        'Created comprehensive learning materials and code examples',
        'Conducted live Zoom hands-on coding sessions and project guidance'
      ],
      skills: ['MongoDB', 'Express', 'React', 'Node.js', 'Teaching', 'TypeScript'],
      icon: FaChalkboardTeacher,
      color: '#8b5cf6',
      current: false,
      rotate: '1.2deg',
      stamp: 'DONE',
    },
    {
      role: 'Full Stack Developer',
      company: 'CareerHub',
      duration: '3 Months',
      period: 'July 2025 - Sep 2025',
      location: 'Remote',
      type: 'Full-time',
      description: [
        'Developed full-stack web applications with the team',
        'Implemented responsive UI components and RESTful APIs',
        'Optimized application interface and database queries'
      ],
      skills: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Framer-Motion'],
      icon: FaCode,
      color: '#10b981',
      current: false,
      rotate: '-2deg',
      stamp: 'DONE',
    },
    {
      role: 'Freelance Developer',
      company: 'Self-Employed',
      duration: '5 Months',
      period: 'Dec 2024 - Apr 2025',
      location: 'Remote',
      type: 'Freelance',
      description: [
        'Built custom web applications for various clients',
        'Delivered end-to-end solutions from design to deployment',
        'Managed client relationships and project timelines'
      ],
      skills: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Firebase', 'TypeScript'],
      icon: FaLaptopCode,
      color: '#f59e0b',
      current: false,
      rotate: '1.8deg',
      stamp: 'DONE',
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <div
      id='experience'
      className="min-h-screen text-white py-20 px-4 sm:px-8 relative overflow-hidden"
      style={{ background: '#080808' }}
    >
      {/* Dot grid background */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />

      {/* Faint diagonal lines texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.01) 40px, rgba(255,255,255,0.01) 41px)',
      }} />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="inline-block mb-4">
            <div style={{
              background: 'rgba(6,182,212,0.08)',
              border: '1px solid rgba(6,182,212,0.2)',
              padding: '3px 18px',
              fontFamily: "'Courier New', monospace",
              fontSize: '0.7rem',
              color: '#06b6d4',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}>
              Professional Journey
            </div>
          </div>

          <h2
            style={{ fontFamily: "'Georgia', serif", fontSize: '3.5rem', fontWeight: 800, lineHeight: 1 }}
            className="mb-2"
          >
            Work <span className="text-cyan-400 italic">Experience</span>
          </h2>

          <p style={{ fontFamily: "'Courier New', monospace", fontSize: '0.75rem', color: '#4b5563', marginTop: '10px' }}>
             2024 - 2025 · remote · building things that matter
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 gap-10"
        >
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ rotate: '0deg', scale: 1.03, zIndex: 20 }}
                style={{
                  transform: `rotate(${exp.rotate})`,
                  position: 'relative',
                }}
              >
                {/* Tape strip on top */}
                <div style={{
                  position: 'absolute',
                  top: -10,
                  left: index % 2 === 0 ? 28 : undefined,
                  right: index % 2 !== 0 ? 28 : undefined,
                  width: 56,
                  height: 18,
                  background: 'rgba(255,255,240,0.12)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  borderRadius: 2,
                  transform: index % 2 === 0 ? 'rotate(-6deg)' : 'rotate(6deg)',
                  zIndex: 10,
                }} />

                {/* Card */}
                <div style={{
                  background: 'linear-gradient(150deg, #131313, #0e0e0e)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderTop: `3px solid ${exp.color}`,
                  borderRadius: '3px',
                  padding: '22px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: `5px 5px 24px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)`,
                }}>

                  {/* Color top glow */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: 1,
                    background: `linear-gradient(90deg, ${exp.color}80, transparent)`,
                  }} />

                  {/* Torn corner bottom-right */}
                  <div style={{
                    position: 'absolute', bottom: 0, right: 0,
                    width: 0, height: 0,
                    borderStyle: 'solid',
                    borderWidth: '0 0 32px 32px',
                    borderColor: `transparent transparent ${exp.color}15 transparent`,
                  }} />

                  {/* STAMP */}
                  <div style={{
                    position: 'absolute',
                    top: 16, right: 16,
                    fontFamily: "'Courier New', monospace",
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    color: exp.current ? '#10b981' : '#374151',
                    border: `1px solid ${exp.current ? '#10b98150' : '#37415160'}`,
                    padding: '2px 8px',
                    borderRadius: '2px',
                    transform: 'rotate(4deg)',
                    opacity: exp.current ? 1 : 0.6,
                    background: exp.current ? 'rgba(16,185,129,0.08)' : 'transparent',
                  }}>
                    {exp.current ? '● ACTIVE' : '✓ DONE'}
                  </div>

                  {/* Icon + Company */}
                  <div className="flex items-center gap-3 mb-4">
                    <div style={{
                      width: 44, height: 44,
                      borderRadius: '5px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: `${exp.color}12`,
                      border: `1px solid ${exp.color}30`,
                      flexShrink: 0,
                      boxShadow: `0 0 14px ${exp.color}15`,
                    }}>
                      <Icon style={{ color: exp.color, fontSize: '1.1rem' }} />
                    </div>
                    <div>
                      <p style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: '0.7rem',
                        color: exp.color,
                        letterSpacing: '0.1em',
                        marginBottom: 2,
                      }}>
                        {exp.company}
                      </p>
                      <p style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: '0.62rem',
                        color: '#4b5563',
                        letterSpacing: '0.08em',
                      }}>
                        {exp.type}
                      </p>
                    </div>
                  </div>

                  {/* Role */}
                  <h3 style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#f0f0f0',
                    marginBottom: '10px',
                    lineHeight: 1.3,
                  }}>
                    {exp.role}
                  </h3>

                  {/* Meta */}
                  <div style={{
                    display: 'flex', flexWrap: 'wrap', gap: '12px',
                    fontFamily: "'Courier New', monospace",
                    fontSize: '0.68rem',
                    color: '#4b5563',
                    marginBottom: '14px',
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <FaCalendarAlt style={{ color: exp.color, opacity: 0.7 }} />
                      {exp.duration} · {exp.period}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <FaMapMarkerAlt style={{ color: exp.color, opacity: 0.7 }} />
                      {exp.location}
                    </span>
                  </div>

                  {/* Dashed divider */}
                  <div style={{ borderTop: '1px dashed rgba(255,255,255,0.07)', marginBottom: '12px' }} />

                  {/* Description */}
                  <ul style={{ marginBottom: '14px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    {exp.description.map((item, i) => (
                      <li key={i} style={{
                        display: 'flex', gap: '8px', alignItems: 'flex-start',
                        fontFamily: "'Courier New', monospace",
                        fontSize: '0.72rem',
                        color: '#6b7280',
                        lineHeight: 1.55,
                      }}>
                        <span style={{ color: exp.color, flexShrink: 0, opacity: 0.8, marginTop: 1 }}>→</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {exp.skills.map((skill, i) => (
                      <span key={i} style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: '0.62rem',
                        padding: '2px 9px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '2px',
                        color: '#9ca3af',
                        letterSpacing: '0.05em',
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            marginTop: '48px',
            textAlign: 'center',
            fontFamily: "'Courier New', monospace",
            fontSize: '0.7rem',
            color: '#374151',
            letterSpacing: '0.15em',
          }}
        >
           still writing new chapters —
        </motion.p>
      </div>
    </div>
  );
};

export default Experience;