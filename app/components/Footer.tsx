"use client"
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/aashirwad89',
      color: '#ffffff'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/aashirwad26',
      color: '#0077b5'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://instagram.com/aashirwad26',
      color: '#E4405F'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'aashirwad2626@gmail.com',
      color: '#06b6d4'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' }
  ];

  return (
    <footer id='footer' className="bg-black border-t border-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-cyan-400">&lt;AS /&gt;</span>
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Full Stack Developer crafting exceptional digital experiences with clean code and modern design.
            </p>
            <p className="text-gray-500 text-xs">
              Based in Bhopal, Madhya Pradesh
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Let's Work Together</h4>
            <p className="text-gray-400 text-sm mb-4">
              I'm available for freelance projects and full-time opportunities.
            </p>
            <motion.a
              href="mailto:aashirwad@example.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-sm font-semibold transition-colors"
            >
              Hire Me
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 flex items-center justify-center bg-gray-900 border border-gray-800 rounded-lg hover:border-cyan-500 transition-all group"
              >
                <social.icon 
                  className="text-xl text-gray-400 group-hover:text-cyan-400 transition-colors" 
                />
              </motion.a>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-2">
              © {new Date().getFullYear()} Aashirwad Singh. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs flex items-center justify-center gap-1">
              Built by me <FaHeart className="text-red-500 text-xs" /> 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;