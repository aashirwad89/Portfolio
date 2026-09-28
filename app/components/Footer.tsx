/* eslint-disable react/no-unescaped-entities */
"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { name: "GitHub", icon: FaGithub, url: "https://github.com/aashirwad89" },
    { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/aashirwad26" },
    { name: "Email", icon: FaEnvelope, url: "mailto:aashirwad2626@gmail.com" },
    { name: "Phone", icon: FaPhoneAlt, url: "tel:+917024913839" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
  ];

  return (
    <footer
      id="footer"
      className="bg-[#F7F9F6] text-slate-900 relative overflow-hidden"
    >
      {/* Background subtle micro-dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(61, 85, 12, 0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 relative z-10">
        {/* Main Grid */}
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          {/* Brand Card (5 cols) */}
          <div className="md:col-span-5 bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-7 shadow-xs">
            <h3
              style={{ fontFamily: "'Georgia', serif" }}
              className="text-2xl font-black text-slate-900 mb-2"
            >
              {'<'}
              <span className="text-[#3D550C] italic">AS</span>
              {' />'}
            </h3>
            <p className="font-mono text-xs font-semibold text-[#3D550C] uppercase tracking-wider mb-3">
              Software Developer · Team Lead &amp; Full Stack
            </p>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-4 font-sans">
              Crafting scalable web systems, clean architecture, and intuitive digital experiences.
            </p>
            <div className="border-t border-stone-100 pt-3 text-xs font-mono text-slate-500 space-y-1">
              <p>📍 Bhopal, Madhya Pradesh</p>
              <p>📞 +91 7024913839 · aashirwad2626@gmail.com</p>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-center">
            <p className="font-mono text-xs font-bold text-[#3D550C] uppercase tracking-wider mb-4 border-b border-[#CEDBBA]/50 pb-2">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm font-medium text-slate-600 hover:text-[#3D550C] flex items-center gap-2 transition-colors"
                  >
                    <span className="text-[#3D550C] text-xs font-mono">→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hire Me / Contact Card (4 cols) */}
          <div className="md:col-span-4 bg-white rounded-2xl border border-stone-200/90 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EFF4EA] border border-[#CEDBBA] text-[#3D550C] font-mono text-[10px] font-bold uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3D550C] animate-pulse" />
                Available Worldwide
              </div>
              <h4
                style={{ fontFamily: "'Georgia', serif" }}
                className="text-lg font-bold text-slate-900 mb-2"
              >
                Let's Build <span className="text-[#3D550C] italic">Together</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-5 font-sans">
                Open to full-time engineering roles, team lead positions &amp; impactful software collaborations.
              </p>
            </div>

            <a
              href="mailto:aashirwad2626@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#3D550C] hover:bg-[#2F4307] text-white font-mono text-xs font-bold shadow-xs transition-all"
            >
              <span>Get In Touch</span>
              <FaArrowRight size={11} />
            </a>
          </div>
        </div>

        {/* Dashed Divider */}
        <div className="border-t border-dashed border-stone-200 mb-8" />

        {/* Social Icons Row */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl bg-white border border-stone-200/90 text-slate-600 hover:text-[#3D550C] hover:border-[#CEDBBA] hover:bg-[#EFF4EA] flex items-center justify-center text-base shadow-2xs transition-all"
                aria-label={social.name}
              >
                <Icon />
              </motion.a>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <div className="text-center font-mono text-xs text-slate-500 space-y-1">
          <p>© {new Date().getFullYear()} Aashirwad Singh · All rights reserved.</p>
          <p className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
            designed &amp; built with{" "}
            <FaHeart className="text-[#3D550C] text-[10px]" /> for high-performance web
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;