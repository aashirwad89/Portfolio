/* eslint-disable react/no-unescaped-entities */
"use client"
import { FaGraduationCap, FaSchool, FaBook } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science & Engineering',
      institution: 'LNCT Group of Colleges',
      period: 'Sept 2023 – June 2027',
      status: 'Pursuing',
      icon: FaGraduationCap,
      color: '#06b6d4',
      note: 'Deep diving into DSA, full-stack dev & AI.',
      year: '2023',
    },
    {
      degree: 'Higher Secondary (12th)',
      field: 'PCM — Physics, Chemistry, Mathematics',
      institution: 'Secondary School',
      period: '2023',
      status: 'Completed',
      icon: FaBook,
      color: '#8b5cf6',
      note: 'Strong foundations in logical thinking & problem solving.',
      year: '2021',
    },
    {
      degree: 'Secondary School (10th)',
      field: 'General Education',
      institution: 'Secondary School',
      period: '2021',
      status: 'Completed',
      icon: FaSchool,
      color: '#10b981',
      note: 'Where the curiosity for computers first sparked.',
      year: '2019',
    }
  ];

  return (
    <div
      id='education'
      className="min-h-screen text-white py-20 px-4 sm:px-8 relative overflow-hidden"
      style={{ background: '#080808' }}
    >
      {/* Subtle ruled-line background */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, rgba(255,255,255,0.03) 31px, rgba(255,255,255,0.03) 32px)',
        backgroundSize: '100% 32px',
      }} />
      {/* Left margin line */}
      <div style={{
        position: 'absolute', top: 0, bottom: 0, left: '6%', width: '1px',
        background: 'rgba(239,68,68,0.18)', pointerEvents: 'none'
      }} />

      <div className="max-w-3xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          {/* Notebook label */}
          <div className="inline-block mb-4" style={{ position: 'relative' }}>
            <div style={{
              background: 'rgba(6,182,212,0.1)',
              border: '1px solid rgba(6,182,212,0.25)',
              padding: '3px 18px',
              fontFamily: "'Courier New', monospace",
              fontSize: '0.7rem',
              color: '#06b6d4',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}>
              Academic Record
            </div>
          </div>

          <h2 style={{ fontFamily: "'Georgia', serif", fontSize: '3.5rem', fontWeight: 800, lineHeight: 1 }}
            className="mb-2">
            Edu<span className="text-cyan-400 italic">cation</span>
          </h2>

          <p style={{ fontFamily: "'Courier New', monospace", fontSize: '0.75rem', color: '#4b5563', marginTop: '10px' }}>
             my academic journey, one chapter at a time
          </p>
        </motion.div>

        {/* Cards — styled as notebook pages */}
        <div className="space-y-10">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ x: 6 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              style={{ position: 'relative' }}
            >
              {/* Year tab on the left */}
              <div style={{
                position: 'absolute',
                left: -14,
                top: '50%',
                transform: 'translateY(-50%) rotate(-90deg)',
                fontFamily: "'Courier New', monospace",
                fontSize: '0.65rem',
                color: edu.color,
                opacity: 0.5,
                letterSpacing: '0.15em',
                whiteSpace: 'nowrap',
              }}>
                {edu.period}
              </div>

              {/* Notebook card */}
              <div style={{
                marginLeft: '18px',
                background: 'linear-gradient(135deg, #111 0%, #0d0d0d 100%)',
                border: `1px solid rgba(255,255,255,0.07)`,
                borderLeft: `3px solid ${edu.color}`,
                borderRadius: '2px',
                padding: '22px 24px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: `0 4px 30px rgba(0,0,0,0.5), 4px 0 0 ${edu.color}10 inset`,
              }}>

                {/* Top color glow */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
                  background: `linear-gradient(90deg, ${edu.color}, transparent)`,
                  opacity: 0.5
                }} />

                {/* Hole punch circles */}
                {[0.25, 0.5, 0.75].map((p, i) => (
                  <div key={i} style={{
                    position: 'absolute',
                    left: -12,
                    top: `${p * 100}%`,
                    transform: 'translateY(-50%)',
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: '#080808',
                    border: `1px solid ${edu.color}40`,
                  }} />
                ))}

                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: `${edu.color}12`,
                    border: `1px solid ${edu.color}30`,
                    flexShrink: 0,
                    boxShadow: `0 0 16px ${edu.color}15`,
                  }}>
                    <edu.icon style={{ color: edu.color, fontSize: '1.25rem' }} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                      <h3 style={{
                        fontFamily: "'Georgia', serif",
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: '#f0f0f0',
                      }}>
                        {edu.degree}
                      </h3>

                      {/* Status badge */}
                      <span style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: '0.65rem',
                        padding: '2px 10px',
                        borderRadius: '2px',
                        border: `1px solid ${edu.color}40`,
                        background: `${edu.color}10`,
                        color: edu.color,
                        letterSpacing: '0.1em',
                      }}>
                        {edu.status === 'Pursuing' ? '● Pursuing' : '✓ Done'}
                      </span>
                    </div>

                    {/* Field */}
                    <p style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: '0.8rem',
                      color: '#6b7280',
                      marginBottom: '10px',
                    }}>
                      {edu.field}
                    </p>

                    {/* Institution + period */}
                    <div style={{
                      display: 'flex',
                      gap: '16px',
                      fontSize: '0.72rem',
                      color: '#4b5563',
                      fontFamily: "'Courier New', monospace",
                      marginBottom: '14px',
                      flexWrap: 'wrap',
                    }}>
                      <span>📍 {edu.institution}</span>
                      <span>📅 {edu.period}</span>
                    </div>

                    {/* Dashed divider */}
                    <div style={{ borderTop: '1px dashed rgba(255,255,255,0.07)', marginBottom: '12px' }} />

                    {/* Hand-written style note */}
                    <p style={{
                      fontFamily: "'Georgia', serif",
                      fontSize: '0.8rem',
                      color: `${edu.color}90`,
                      fontStyle: 'italic',
                      lineHeight: 1.6,
                      paddingLeft: '10px',
                      borderLeft: `2px solid ${edu.color}30`,
                    }}>
                      "{edu.note}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
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
           continuously learning — the journey never stops
        </motion.p>
      </div>
    </div>
  );
};

export default Education;