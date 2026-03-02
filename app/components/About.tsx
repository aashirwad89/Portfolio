/* eslint-disable react/no-unescaped-entities */
"use client"
import { FaCode, FaLaptopCode, FaUsers, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { icon: FaCode, value: '15+', label: 'Projects', color: '#06b6d4', rotate: '-2deg' },
    { icon: FaLaptopCode, value: '10+', label: 'Technologies', color: '#8b5cf6', rotate: '1.5deg' },
    { icon: FaUsers, value: '95%', label: 'Satisfaction', color: '#10b981', rotate: '-1deg' },
  ];

  const sideNotes = [
    { text: '// clean code', color: '#06b6d4', top: '8%', rotate: '-6deg' },
    { text: '> always learning', color: '#8b5cf6', top: '38%', rotate: '5deg' },
    { text: '{ scalable: true }', color: '#10b981', top: '68%', rotate: '-4deg' },
  ];

  const highlights = [
    { label: 'Currently', value: 'Scrum Master @ BodhaSoft', color: '#06b6d4' },
    { label: 'Stack', value: 'MERN + Next.js + TypeScript', color: '#8b5cf6' },
    { label: 'Focus', value: 'Scalable Web Apps', color: '#10b981' },
    { label: 'Based in', value: 'Bhopal, India', color: '#f59e0b' },
  ];

  return (
    <div
      id='about'
      className="min-h-screen text-white py-20 px-4 sm:px-8 relative overflow-hidden"
      style={{ background: '#080808' }}
    >
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />

      {/* Ruled lines */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'repeating-linear-gradient(transparent, transparent 39px, rgba(255,255,255,0.025) 39px, rgba(255,255,255,0.025) 40px)',
      }} />

      {/* Right margin sticky notes — desktop */}
      <div className="hidden xl:block">
        {sideNotes.map((note, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
            style={{
              position: 'absolute',
              right: '2%',
              top: note.top,
              transform: `rotate(${note.rotate})`,
              fontFamily: "'Courier New', monospace",
              fontSize: '0.65rem',
              color: note.color,
              background: `${note.color}08`,
              border: `1px solid ${note.color}25`,
              borderLeft: `2px solid ${note.color}50`,
              padding: '5px 12px',
              borderRadius: 2,
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          >
            {note.text}
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

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
              Who am I
            </div>
          </div>

          <h2
            style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1 }}
            className="mb-2"
          >
            About <span style={{ color: '#06b6d4', fontStyle: 'italic' }}>Me</span>
          </h2>
          <p style={{ fontFamily: "'Courier New', monospace", fontSize: '0.72rem', color: '#4b5563', marginTop: 10 }}>
             professional developer · project lead · lifelong learner
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">

          {/* Left — Identity card + highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Name card — polaroid style */}
            <motion.div
              whileHover={{ rotate: '0deg', scale: 1.02 }}
              style={{
                transform: 'rotate(-1.5deg)',
                background: 'linear-gradient(145deg, #131313, #0e0e0e)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderTop: '3px solid #06b6d4',
                borderRadius: 3,
                padding: '24px',
                marginBottom: 24,
                position: 'relative',
                boxShadow: '5px 5px 24px rgba(0,0,0,0.5)',
              }}
            >
              {/* Tape */}
              <div style={{
                position: 'absolute', top: -10, left: 28,
                width: 52, height: 16,
                background: 'rgba(255,255,240,0.1)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 2,
                transform: 'rotate(-5deg)',
              }} />

              {/* Top color glow */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 1,
                background: 'linear-gradient(90deg, #06b6d4, transparent)',
                opacity: 0.5,
              }} />

              {/* Avatar placeholder — initials */}
              <div style={{
                width: 64, height: 64,
                borderRadius: 4,
                background: 'rgba(6,182,212,0.1)',
                border: '1px solid rgba(6,182,212,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Georgia', serif",
                fontSize: '1.6rem',
                fontWeight: 800,
                color: '#06b6d4',
                marginBottom: 16,
                boxShadow: '0 0 16px rgba(6,182,212,0.1)',
              }}>
                AS
              </div>

              <h3 style={{
                fontFamily: "'Georgia', serif",
                fontSize: '1.8rem',
                fontWeight: 800,
                color: '#f0f0f0',
                marginBottom: 4,
              }}>
                Aashirwad Singh
              </h3>
              <p style={{
                fontFamily: "'Courier New', monospace",
                fontSize: '0.72rem',
                color: '#06b6d4',
                letterSpacing: '0.1em',
                marginBottom: 16,
              }}>
                Full Stack Developer & Project Lead
              </p>

              <div style={{ borderTop: '1px dashed rgba(255,255,255,0.07)', paddingTop: 14 }}>
                {highlights.map((h, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: 10, alignItems: 'baseline',
                    marginBottom: 8,
                  }}>
                    <span style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: '0.6rem',
                      color: h.color,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      minWidth: 70,
                      opacity: 0.8,
                    }}>
                      {h.label}
                    </span>
                    <span style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: '0.7rem',
                      color: '#9ca3af',
                    }}>
                      → {h.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats — scattered sticky notes */}
            <div className="flex gap-4 flex-wrap">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ rotate: '0deg', scale: 1.07, zIndex: 10 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    style={{
                      transform: `rotate(${stat.rotate})`,
                      flex: 1,
                      minWidth: 80,
                      background: 'linear-gradient(145deg, #111, #0d0d0d)',
                      border: `1px solid rgba(255,255,255,0.07)`,
                      borderTop: `3px solid ${stat.color}`,
                      borderRadius: 3,
                      padding: '16px 12px',
                      textAlign: 'center',
                      boxShadow: '4px 4px 16px rgba(0,0,0,0.5)',
                      position: 'relative',
                      cursor: 'default',
                    }}
                  >
                    <div style={{
                      position: 'absolute', top: -8, left: '50%',
                      transform: 'translateX(-50%) rotate(-3deg)',
                      width: 34, height: 12,
                      background: 'rgba(255,255,240,0.09)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: 2,
                    }} />
                    <Icon style={{ color: stat.color, fontSize: '1.1rem', margin: '0 auto 8px' }} />
                    <div style={{
                      fontFamily: "'Georgia', serif",
                      fontSize: '1.5rem',
                      fontWeight: 900,
                      color: stat.color,
                      lineHeight: 1,
                      marginBottom: 4,
                    }}>
                      {stat.value}
                    </div>
                    <div style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: '0.58rem',
                      color: '#4b5563',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}>
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — About paragraphs as notebook entries */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Entry 01 */}
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{ marginBottom: 20, position: 'relative' }}
            >
              <div style={{
                fontFamily: "'Courier New', monospace",
                fontSize: '0.58rem',
                color: '#06b6d4',
                letterSpacing: '0.2em',
                marginBottom: 8,
                opacity: 0.7,
              }}>
                ENTRY 01 —
              </div>
              <div style={{
                background: 'linear-gradient(145deg, #111, #0d0d0d)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderLeft: '2px solid #06b6d4',
                borderRadius: '0 3px 3px 0',
                padding: '16px 18px',
                boxShadow: '3px 3px 14px rgba(0,0,0,0.4)',
              }}>
                <p style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: '0.92rem',
                  color: '#9ca3af',
                  lineHeight: 1.85,
                  fontStyle: 'italic',
                }}>
                  I'm a passionate developer specializing in building scalable web applications with clean, maintainable code. With a strong foundation in both frontend and backend technologies, I create solutions that are not only technically sound but also user-centric.
                </p>
              </div>
            </motion.div>

            {/* Entry 02 */}
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{ marginBottom: 20, position: 'relative' }}
            >
              <div style={{
                fontFamily: "'Courier New', monospace",
                fontSize: '0.58rem',
                color: '#8b5cf6',
                letterSpacing: '0.2em',
                marginBottom: 8,
                opacity: 0.7,
              }}>
                ENTRY 02 —
              </div>
              <div style={{
                background: 'linear-gradient(145deg, #111, #0d0d0d)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderLeft: '2px solid #8b5cf6',
                borderRadius: '0 3px 3px 0',
                padding: '16px 18px',
                boxShadow: '3px 3px 14px rgba(0,0,0,0.4)',
              }}>
                <p style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: '0.92rem',
                  color: '#9ca3af',
                  lineHeight: 1.85,
                  fontStyle: 'italic',
                }}>
                  Currently leading development at BodhaSoft as a Scrum Master — overseeing project delivery, team coordination, and technical implementation of complex features across the MERN stack.
                </p>
              </div>
            </motion.div>

            {/* Entry 03 */}
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{ marginBottom: 32, position: 'relative' }}
            >
              <div style={{
                fontFamily: "'Courier New', monospace",
                fontSize: '0.58rem',
                color: '#10b981',
                letterSpacing: '0.2em',
                marginBottom: 8,
                opacity: 0.7,
              }}>
                ENTRY 03 —
              </div>
              <div style={{
                background: 'linear-gradient(145deg, #111, #0d0d0d)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderLeft: '2px solid #10b981',
                borderRadius: '0 3px 3px 0',
                padding: '16px 18px',
                boxShadow: '3px 3px 14px rgba(0,0,0,0.4)',
              }}>
                <p style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: '0.92rem',
                  color: '#9ca3af',
                  lineHeight: 1.85,
                  fontStyle: 'italic',
                }}>
                  My approach combines strategic thinking with hands-on development — ensuring projects are delivered on time while maintaining code quality, best practices, and a great developer experience.
                </p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
            >
              <a href="/Resume.pdf" download="Aashirwad_Singh_Resume.pdf">
                <motion.button
                  whileHover={{ scale: 1.04, rotate: '-0.5deg' }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '10px 24px',
                    background: '#06b6d4',
                    border: 'none',
                    borderRadius: 3,
                    fontFamily: "'Courier New', monospace",
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#000',
                    cursor: 'pointer',
                    letterSpacing: '0.08em',
                    boxShadow: '3px 3px 0 rgba(6,182,212,0.3)',
                  }}
                >
                  Download CV
                  <FaArrowRight size={12} />
                </motion.button>
              </a>

              <a href="#contact">
                <motion.button
                  whileHover={{ scale: 1.04, rotate: '0.5deg' }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    padding: '10px 24px',
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 3,
                    fontFamily: "'Courier New', monospace",
                    fontSize: '0.75rem',
                    color: '#9ca3af',
                    cursor: 'pointer',
                    letterSpacing: '0.08em',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = '#06b6d4';
                    (e.currentTarget as HTMLButtonElement).style.color = '#06b6d4';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.1)';
                    (e.currentTarget as HTMLButtonElement).style.color = '#9ca3af';
                  }}
                >
                  Get In Touch →
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          textAlign: 'center',
          fontFamily: "'Courier New', monospace",
          fontSize: '0.68rem',
          color: '#1f2937',
          letterSpacing: '0.15em',
          position: 'relative', zIndex: 10,
        }}
      >
         still writing the story —
      </motion.p>
    </div>
  );
};

export default About;