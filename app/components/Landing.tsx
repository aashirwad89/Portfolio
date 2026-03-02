/* eslint-disable react/no-unescaped-entities */
"use client"
import { useState } from 'react';
import { Download, Github, Linkedin, Mail, ChevronDown, X, Menu, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Landing = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Experience', 'Skills', 'Projects'];

  const tags = ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Next.js', 'Express', 'Tailwind', 'Firebase'];

  const floatingNotes = [
    { text: '// building things', color: '#06b6d4', rotate: '-8deg', top: '12%', left: '72%', delay: 0 },
    { text: '> git push origin main', color: '#8b5cf6', rotate: '5deg', top: '62%', left: '68%', delay: 0.15 },
    { text: '{ passion: true }', color: '#10b981', rotate: '-4deg', top: '78%', left: '78%', delay: 0.25 },
    { text: 'npm run dev', color: '#f59e0b', rotate: '7deg', top: '28%', left: '80%', delay: 0.1 },
  ];

  return (
    <div id='home' className="min-h-screen text-white overflow-hidden relative" style={{ background: '#080808' }}>

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

      {/* Left margin line */}
      <div style={{
        position: 'absolute', top: 0, bottom: 0, left: '5%', width: 1,
        background: 'rgba(239,68,68,0.15)', pointerEvents: 'none',
      }} />

      {/* Floating sticky notes — desktop only */}
      <div className="hidden lg:block">
        {floatingNotes.map((note, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: note.delay + 0.8, duration: 0.5 }}
            style={{
              position: 'absolute',
              top: note.top,
              left: note.left,
              transform: `rotate(${note.rotate})`,
              fontFamily: "'Courier New', monospace",
              fontSize: '0.68rem',
              color: note.color,
              background: `${note.color}08`,
              border: `1px solid ${note.color}25`,
              borderLeft: `2px solid ${note.color}60`,
              padding: '6px 12px',
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

      {/* Nav */}
      <nav className="relative z-20 flex justify-between items-center px-4 md:px-10 py-5"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: '1.3rem',
            fontWeight: 800,
            letterSpacing: '0.02em',
          }}
        >
          {'<'}<span style={{ color: '#06b6d4', fontStyle: 'italic' }}>AS</span>{' />'}
        </motion.div>

        {/* Desktop nav */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="hidden lg:flex gap-8"
        >
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: '0.78rem',
                color: '#6b7280',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                transition: 'color 0.2s',
                position: 'relative',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#06b6d4')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}
            >
              {item}
            </a>
          ))}
        </motion.div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-gray-400 hover:text-white transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/97 z-50 flex flex-col items-center justify-center gap-10"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          >
            <button onClick={() => setMobileMenuOpen(false)} className="absolute top-6 right-6 text-gray-500">
              <X className="w-5 h-5" />
            </button>
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: '#f0f0f0',
                  textDecoration: 'none',
                }}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Main hero */}
      <main className="relative z-10 px-6 md:px-12 lg:px-16 pt-16 pb-24 max-w-5xl mx-auto">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28 }}
        >
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '4px 14px',
            background: 'rgba(16,185,129,0.08)',
            border: '1px solid rgba(16,185,129,0.25)',
            borderRadius: 2,
            fontFamily: "'Courier New', monospace",
            fontSize: '0.68rem',
            color: '#10b981',
            letterSpacing: '0.1em',
            transform: 'rotate(-0.5deg)',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', display: 'inline-block' }}
              className="animate-pulse" />
            Available for opportunities
          </div>
        </motion.div>

        {/* Name — big scrapbook headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ position: 'relative', marginBottom: 8 }}
        >
          {/* Highlight tape behind name */}
          <div style={{
            position: 'absolute',
            bottom: 6, left: -4,
            width: '60%', height: 14,
            background: 'rgba(6,182,212,0.07)',
            borderRadius: 2,
            zIndex: 0,
          }} />
          <h1 style={{
            fontFamily: "'Georgia', serif",
            fontSize: 'clamp(3rem, 9vw, 7rem)',
            fontWeight: 900,
            lineHeight: 1,
            position: 'relative', zIndex: 1,
          }}>
            Hi, I'm{' '}
            <span style={{ color: '#06b6d4', fontStyle: 'italic' }}>Aashirwad</span>
          </h1>
        </motion.div>

        {/* Role — stamped feel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.55 }}
          style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}
        >
          <div style={{
            fontFamily: "'Courier New', monospace",
            fontSize: '0.7rem',
            color: '#06b6d4',
            border: '1px solid rgba(6,182,212,0.35)',
            padding: '3px 12px',
            borderRadius: 2,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            transform: 'rotate(-0.8deg)',
          }}>
            Full Stack Developer
          </div>
          <div style={{
            fontFamily: "'Courier New', monospace",
            fontSize: '0.68rem',
            color: '#374151',
            letterSpacing: '0.1em',
          }}>
            📍 Bhopal, India
          </div>
        </motion.div>

        {/* Description — handwritten notebook style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          style={{ maxWidth: 520, marginBottom: 32 }}
        >
          <p style={{
            fontFamily: "'Georgia', serif",
            fontSize: '1.05rem',
            color: '#9ca3af',
            lineHeight: 1.8,
            borderLeft: '2px solid rgba(6,182,212,0.2)',
            paddingLeft: 16,
            fontStyle: 'italic',
          }}>
            I craft beautiful, performant web applications with clean code & thoughtful design — specializing in{' '}
            <span style={{ color: '#06b6d4', fontStyle: 'normal', fontWeight: 700 }}>React</span>,{' '}
            <span style={{ color: '#8b5cf6', fontStyle: 'normal', fontWeight: 700 }}>Node.js</span>, and{' '}
            <span style={{ color: '#ec4899', fontStyle: 'normal', fontWeight: 700 }}>Modern Web Tech</span>.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.75 }}
          style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 36 }}
        >
          <a href="/Resume.pdf" download="Aashirwad_Singh_Resume.pdf">
            <motion.button
              whileHover={{ scale: 1.04, rotate: '-0.5deg' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '10px 26px',
                background: '#06b6d4',
                border: 'none',
                borderRadius: 3,
                fontFamily: "'Courier New', monospace",
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#000',
                cursor: 'pointer',
                letterSpacing: '0.08em',
                boxShadow: '3px 3px 0 rgba(6,182,212,0.3)',
                transition: 'box-shadow 0.2s',
              }}
            >
              <Download size={15} />
              Resume
            </motion.button>
          </a>

          <a href="#projects">
            <motion.button
              whileHover={{ scale: 1.04, rotate: '0.5deg' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '10px 26px',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 3,
                fontFamily: "'Courier New', monospace",
                fontSize: '0.8rem',
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
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.12)';
                (e.currentTarget as HTMLButtonElement).style.color = '#9ca3af';
              }}
            >
              View Work →
            </motion.button>
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.85 }}
          style={{ display: 'flex', gap: 10, marginBottom: 56 }}
        >
          {[
            { Icon: Github, href: 'https://github.com/aashirwad89', color: '#e5e7eb', label: 'GitHub' },
            { Icon: Linkedin, href: 'https://linkedin.com/in/aashirwad26', color: '#0ea5e9', label: 'LinkedIn' },
            { Icon: Mail, href: 'mailto:aashirwad2626@gmail.com', color: '#06b6d4', label: 'Email' },
          ].map(({ Icon, href, color, label }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, rotate: [-1, 1, 0] as unknown as number }}
              title={label}
              style={{
                width: 42, height: 42,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: '#111',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 3,
                color: '#6b7280',
                textDecoration: 'none',
                boxShadow: '2px 2px 10px rgba(0,0,0,0.4)',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = color;
                (e.currentTarget as HTMLAnchorElement).style.color = color;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.08)';
                (e.currentTarget as HTMLAnchorElement).style.color = '#6b7280';
              }}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </motion.div>

        {/* Tech tags — scattered collage style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.95 }}
        >
          <p style={{
            fontFamily: "'Courier New', monospace",
            fontSize: '0.62rem',
            color: '#374151',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: 12,
          }}>
             stack
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {tags.map((tag, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.05, duration: 0.3 }}
                whileHover={{ y: -3, rotate: '0deg', scale: 1.06 }}
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: '0.68rem',
                  padding: '4px 12px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 2,
                  color: '#6b7280',
                  transform: `rotate(${(i % 3 === 0 ? -1 : i % 3 === 1 ? 0.8 : -0.5)}deg)`,
                  cursor: 'default',
                  transition: 'border-color 0.2s, color 0.2s',
                  letterSpacing: '0.05em',
                }}
                onMouseEnter={e => {
                  const colors = ['#06b6d4','#8b5cf6','#10b981','#f59e0b','#ec4899'];
                  const c = colors[i % colors.length];
                  (e.currentTarget as HTMLSpanElement).style.borderColor = `${c}60`;
                  (e.currentTarget as HTMLSpanElement).style.color = c;
                  (e.currentTarget as HTMLSpanElement).style.background = `${c}10`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLSpanElement).style.borderColor = 'rgba(255,255,255,0.08)';
                  (e.currentTarget as HTMLSpanElement).style.color = '#6b7280';
                  (e.currentTarget as HTMLSpanElement).style.background = 'rgba(255,255,255,0.04)';
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Stats — pinned cards bottom right */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="hidden lg:flex"
        style={{
          position: 'absolute',
          right: '5%',
          top: '50%',
          transform: 'translateY(-50%)',
          flexDirection: 'column',
          gap: 16,
          zIndex: 5,
        }}
      >
        {[
          { value: '1+', label: 'Years Exp', color: '#06b6d4', rotate: '-2deg' },
          { value: '15+', label: 'Projects', color: '#8b5cf6', rotate: '1.5deg' },
          { value: '100%', label: 'Dedication', color: '#f59e0b', rotate: '-1deg' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ rotate: '0deg', scale: 1.06, zIndex: 10 }}
            style={{
              transform: `rotate(${stat.rotate})`,
              background: 'linear-gradient(145deg, #131313, #0e0e0e)',
              border: `1px solid rgba(255,255,255,0.07)`,
              borderTop: `3px solid ${stat.color}`,
              borderRadius: 3,
              padding: '14px 20px',
              textAlign: 'center',
              boxShadow: '4px 4px 18px rgba(0,0,0,0.5)',
              position: 'relative',
              minWidth: 90,
              cursor: 'default',
            }}
          >
            {/* Tape */}
            <div style={{
              position: 'absolute', top: -8, left: '50%',
              transform: 'translateX(-50%) rotate(-3deg)',
              width: 36, height: 13,
              background: 'rgba(255,255,240,0.09)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 2,
            }} />
            <div style={{
              fontFamily: "'Georgia', serif",
              fontSize: '1.8rem',
              fontWeight: 900,
              color: stat.color,
              lineHeight: 1,
              marginBottom: 4,
            }}>
              {stat.value}
            </div>
            <div style={{
              fontFamily: "'Courier New', monospace",
              fontSize: '0.6rem',
              color: '#4b5563',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
        style={{ fontFamily: "'Courier New', monospace", fontSize: '0.62rem', color: '#374151', letterSpacing: '0.15em' }}
      >
        <span>scroll</span>
        <ChevronDown size={12} className="animate-bounce" />
      </div>

      {/* Scroll to top */}
      <a href="#home">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 z-20"
          style={{
            width: 42, height: 42,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: '#0e0e0e',
            border: '1px solid rgba(6,182,212,0.3)',
            borderRadius: 3,
            color: '#06b6d4',
            boxShadow: '0 0 14px rgba(6,182,212,0.15)',
            cursor: 'pointer',
          }}
        >
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </a>

      <style jsx>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(6,182,212,0.3); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(6,182,212,0.6); }
      `}</style>
    </div>
  );
};

export default Landing;