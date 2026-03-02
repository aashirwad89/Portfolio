/* eslint-disable react/no-unescaped-entities */
"use client"
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/aashirwad89', color: '#e5e7eb' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/aashirwad26', color: '#0ea5e9' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/aashirwad26', color: '#ec4899' },
    { name: 'Email', icon: FaEnvelope, url: 'mailto:aashirwad2626@gmail.com', color: '#06b6d4' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <footer
      id='footer'
      className="text-white relative overflow-hidden"
      style={{
        background: '#060606',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />

      {/* Top ruled lines */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: 3,
        background: 'linear-gradient(90deg, transparent, #06b6d4, #8b5cf6, #06b6d4, transparent)',
        opacity: 0.4,
      }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 relative z-10">

        {/* Main grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand — like a pinned name card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ rotate: '0deg' }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{
              transform: 'rotate(-1deg)',
              position: 'relative',
            }}
          >
            {/* Tape on name card */}
            <div style={{
              position: 'absolute', top: -10, left: 24,
              width: 52, height: 16,
              background: 'rgba(255,255,240,0.1)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 2,
              transform: 'rotate(-4deg)',
            }} />

            <div style={{
              background: 'linear-gradient(145deg, #111, #0d0d0d)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderTop: '3px solid #06b6d4',
              borderRadius: '3px',
              padding: '22px',
              boxShadow: '4px 4px 20px rgba(0,0,0,0.5)',
            }}>
              <h3 style={{
                fontFamily: "'Georgia', serif",
                fontSize: '1.8rem',
                fontWeight: 800,
                marginBottom: 8,
                color: '#f0f0f0',
              }}>
                {'<'}
                <span style={{ color: '#06b6d4', fontStyle: 'italic' }}>AS</span>
                {' />'}
              </h3>
              <p style={{
                fontFamily: "'Courier New', monospace",
                fontSize: '0.72rem',
                color: '#6b7280',
                lineHeight: 1.7,
                marginBottom: 10,
              }}>
                Full Stack Developer — crafting clean code & modern digital experiences.
              </p>
              <p style={{
                fontFamily: "'Courier New', monospace",
                fontSize: '0.65rem',
                color: '#374151',
                letterSpacing: '0.1em',
              }}>
                📍 Bhopal, Madhya Pradesh
              </p>
            </div>
          </motion.div>

          {/* Quick Links — notebook list style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div style={{
              fontFamily: "'Courier New', monospace",
              fontSize: '0.62rem',
              color: '#06b6d4',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: 14,
              borderBottom: '1px dashed rgba(6,182,212,0.2)',
              paddingBottom: 8,
            }}>
             Navigate
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {quickLinks.map((link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    style={{
                      fontFamily: "'Georgia', serif",
                      fontSize: '0.9rem',
                      color: '#9ca3af',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#06b6d4')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}
                  >
                    <span style={{ color: '#374151', fontSize: '0.7rem', fontFamily: "'Courier New', monospace" }}>→</span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Hire Me — styled like a sticky note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ rotate: '0deg', scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{ transform: 'rotate(1.5deg)', position: 'relative' }}
          >
            {/* Tape */}
            <div style={{
              position: 'absolute', top: -10, right: 28,
              width: 52, height: 16,
              background: 'rgba(255,255,240,0.1)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 2,
              transform: 'rotate(5deg)',
            }} />

            <div style={{
              background: 'linear-gradient(145deg, #111, #0e0e0e)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderTop: '3px solid #8b5cf6',
              borderRadius: '3px',
              padding: '22px',
              boxShadow: '4px 4px 20px rgba(0,0,0,0.5)',
            }}>
              <div style={{
                fontFamily: "'Courier New', monospace",
                fontSize: '0.62rem',
                color: '#8b5cf6',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: 10,
              }}>
                 Open to work
              </div>
              <h4 style={{
                fontFamily: "'Georgia', serif",
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#f0f0f0',
                marginBottom: 10,
              }}>
                Let's Work <span style={{ fontStyle: 'italic', color: '#8b5cf6' }}>Together</span>
              </h4>
              <p style={{
                fontFamily: "'Courier New', monospace",
                fontSize: '0.7rem',
                color: '#6b7280',
                lineHeight: 1.65,
                marginBottom: 16,
              }}>
                Available for freelance projects & full-time opportunities.
              </p>
              <motion.a
                href="mailto:aashirwad2626@gmail.com"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-block',
                  padding: '8px 22px',
                  background: 'rgba(139,92,246,0.12)',
                  border: '1px solid rgba(139,92,246,0.4)',
                  borderRadius: '3px',
                  fontFamily: "'Courier New', monospace",
                  fontSize: '0.72rem',
                  color: '#8b5cf6',
                  textDecoration: 'none',
                  letterSpacing: '0.1em',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(139,92,246,0.22)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = '#8b5cf6';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(139,92,246,0.12)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(139,92,246,0.4)';
                }}
              >
                Hire Me →
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Dashed divider */}
        <div style={{ borderTop: '1px dashed rgba(255,255,255,0.07)', marginBottom: 28 }} />

        {/* Social icons */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, rotate: [-2, 2, 0] as unknown as number, scale: 1.12 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.35 }}
                style={{
                  width: 46,
                  height: 46,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#111',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '4px',
                  color: '#6b7280',
                  textDecoration: 'none',
                  boxShadow: '2px 2px 10px rgba(0,0,0,0.4)',
                  transition: 'border-color 0.2s, color 0.2s',
                  position: 'relative',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = social.color;
                  (e.currentTarget as HTMLAnchorElement).style.color = social.color;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.08)';
                  (e.currentTarget as HTMLAnchorElement).style.color = '#6b7280';
                }}
              >
                <Icon style={{ fontSize: '1.1rem' }} />
              </motion.a>
            );
          })}
        </div>

        {/* Bottom bar */}
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontFamily: "'Courier New', monospace",
            fontSize: '0.68rem',
            color: '#374151',
            letterSpacing: '0.1em',
            marginBottom: 6,
          }}>
            © {new Date().getFullYear()} Aashirwad Singh · All rights reserved.
          </p>
          <p style={{
            fontFamily: "'Courier New', monospace",
            fontSize: '0.62rem',
            color: '#1f2937',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
          }}>
            built by me, with{' '}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
            >
              <FaHeart style={{ color: '#ef4444', fontSize: '0.65rem' }} />
            </motion.span>
            {' '}& way too much coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;