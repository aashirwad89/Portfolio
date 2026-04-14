"use client"
import { useEffect, useRef } from 'react';
import { 
  FaHotel, FaVideo, FaRobot, FaLightbulb, FaGithub,
  FaCloudscale, FaExternalLinkAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 300;
    canvas.height = 300;

    let animationFrameId: number;
    let time = 0;

    const drawCodingAnimation = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      time += 0.02;

      ctx.save();
      ctx.translate(centerX, centerY);

      const termWidth = 180;
      const termHeight = 120;
      const gradient = ctx.createLinearGradient(0, -termHeight/2, 0, termHeight/2);
      gradient.addColorStop(0, 'rgba(30, 30, 30, 0.9)');
      gradient.addColorStop(1, 'rgba(20, 20, 20, 0.9)');
      ctx.fillStyle = gradient;
      ctx.fillRect(-termWidth/2, -termHeight/2, termWidth, termHeight);
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 2;
      ctx.strokeRect(-termWidth/2, -termHeight/2, termWidth, termHeight);

      ctx.fillStyle = 'rgba(6, 182, 212, 0.2)';
      ctx.fillRect(-termWidth/2, -termHeight/2, termWidth, 20);

      const buttonY = -termHeight/2 + 10;
      [['#ef4444', 15], ['#fbbf24', 30], ['#10b981', 45]].forEach(([color, x]) => {
        ctx.fillStyle = color as string;
        ctx.beginPath();
        ctx.arc(-termWidth/2 + (x as number), buttonY, 4, 0, Math.PI * 2);
        ctx.fill();
      });

      const codeLines = ['> const project = {', '>   name: "App",', '>   tech: ["React"]', '> };'];
      ctx.font = '12px monospace';
      ctx.fillStyle = '#06b6d4';
      let yOffset = -40;
      codeLines.forEach((line, i) => {
        const chars = Math.floor((Math.sin(time + i) + 1) * line.length / 2);
        ctx.fillText(line.substring(0, chars), -termWidth/2 + 15, yOffset);
        yOffset += 20;
      });

      if (Math.floor(time * 2) % 2 === 0) {
        ctx.fillStyle = '#06b6d4';
        ctx.fillRect(-termWidth/2 + 15 + ctx.measureText(codeLines[3]).width, yOffset - 20, 8, 14);
      }

      const symbols = ['{ }', '< >', '( )', '[ ]', '< />'];
      symbols.forEach((symbol, i) => {
        const angle = time + (i * Math.PI * 2 / symbols.length);
        const radius = 100 + Math.sin(time + i) * 10;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.font = 'bold 16px monospace';
        ctx.fillStyle = `rgba(139, 92, 246, ${0.6 + Math.sin(time + i) * 0.2})`;
        ctx.fillText(symbol, -15, 5);
        ctx.restore();
      });

      const keys = ['ctrl', 'alt', 'del'];
      keys.forEach((key, i) => {
        const keyY = 80 + Math.sin(time + i * 0.5) * 5;
        const keyX = -60 + i * 50;
        ctx.fillStyle = 'rgba(6, 182, 212, 0.1)';
        ctx.fillRect(keyX - 20, keyY, 40, 25);
        ctx.strokeStyle = '#06b6d4';
        ctx.lineWidth = 1;
        ctx.strokeRect(keyX - 20, keyY, 40, 25);
        ctx.font = '10px monospace';
        ctx.fillStyle = '#06b6d4';
        ctx.textAlign = 'center';
        ctx.fillText(key, keyX, keyY + 16);
      });

      ctx.restore();
      animationFrameId = requestAnimationFrame(drawCodingAnimation);
    };

    drawCodingAnimation();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const projects = [
    {
      title: 'WanderBook',
      description: 'Hotel booking platform with real-time availability and owner-based feature.',
      icon: FaHotel,
      color: '#06b6d4',
      tags: ['Node.js', 'MongoDB', 'ExpressJS', 'Passport'],
      status: 'completed',
      github: 'https://github.com/aashirwad89/',
      live: '', // replace with real URL
      rotate: '-2deg',
      tape: 'top-left',
    },
    {
      title: 'EchoMeet',
      description: 'Video conferencing with screen sharing powered by WebRTC.',
      icon: FaVideo,
      color: '#8b5cf6',
      tags: ['WebRTC', 'Socket.IO', 'MERN'],
      status: 'completed',
      github: 'https://github.com/aashirwad89/',
      live: 'https://echomeet-2-0-frontend.onrender.com/',
      rotate: '1.5deg',
      tape: 'top-right',
    },
    {
      title: 'Tutorly-AI',
      description: 'AI chatbot for personalized tutoring and learning assistance.',
      icon: FaRobot,
      color: '#10b981',
      tags: ['Next.js', 'Gemini API', 'ReactJs'],
      status: 'completed',
      github: 'https://github.com/aashirwad89/',
      live: 'https://tutorly-aichat.vercel.app/',
      rotate: '-1deg',
      tape: 'top-center',
    },
    {
      title: 'AdarshSetu',
      description: 'Smart India Hackathon prototype for digital infrastructure.',
      icon: FaLightbulb,
      color: '#f59e0b',
      tags: ['Firebase', 'MERN', 'Real time Data'],
      status: 'completed',
      github: 'https://github.com/aashirwad89/',
      live: 'https://adarsh-setu.vercel.app/',
      rotate: '2deg',
      tape: 'top-left',
    },
    {
      title: 'Dev-Sync',
      description: 'Real-time developer collaboration platform — in the works.',
      icon: FaCloudscale,
      color: '#6366f1',
      tags: ['Future Project'],
      status: 'completed',
      github: 'https://github.com/aashirwad89/',
      live: 'https://dev-sync-phi.vercel.app/',
      rotate: '-2.5deg',
      tape: 'top-right',
    },
    {
      title: 'Jobbr -- ',
      description: 'Get a job in just 7 steps',
      icon: FaCloudscale,
      color: '#0ea5e9',
      tags: ['Future Project'],
      status: 'progress',
      github: 'https://github.com/aashirwad89/',
      live: '',
      rotate: '1deg',
      tape: 'top-left',
    }
  ];

  // Tape piece positions per card
  const tapeStyles: Record<string, React.CSSProperties> = {
    'top-left': { top: -10, left: 20, transform: 'rotate(-8deg)' },
    'top-right': { top: -10, right: 20, transform: 'rotate(8deg)' },
    'top-center': { top: -10, left: '50%', transform: 'translateX(-50%) rotate(-3deg)' },
  };

  return (
    <div id='projects' className="min-h-screen bg-[#0a0a0a] text-white py-16 px-4 sm:px-8 relative overflow-hidden">
      
      {/* Scattered background dots / noise texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none'
      }} />

      {/* Faint grid lines */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        pointerEvents: 'none'
      }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Title styled like a torn label */}
            <div className="inline-block relative mb-4">
              <span style={{
                fontFamily: "'Courier New', monospace",
                fontSize: '0.75rem',
                letterSpacing: '0.25em',
                color: '#06b6d4',
                textTransform: 'uppercase',
                borderBottom: '1px dashed rgba(6,182,212,0.4)',
                paddingBottom: '4px'
              }}>
                — Portfolio
              </span>
            </div>
            <h2 style={{ fontFamily: "'Georgia', serif" }} className="text-5xl md:text-6xl font-bold mb-3 leading-none">
              My <span className="text-cyan-400 italic">Projects</span>
            </h2>
            <p className="text-gray-500 mt-3 text-sm" style={{ fontFamily: "'Courier New', monospace" }}>
               Building innovative solutions with modern technologies
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center md:justify-end"
          >
            <canvas ref={canvasRef} className="w-full max-w-xs opacity-80" />
          </motion.div>
        </div>

        {/* Collage Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: project.rotate as unknown as number }}
              whileHover={{ 
                rotate: '0deg', 
                scale: 1.04, 
                zIndex: 20,
                boxShadow: `0 20px 60px ${project.color}30`
              }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              style={{
                transform: `rotate(${project.rotate})`,
                position: 'relative',
                cursor: 'pointer',
              }}
              className="group"
            >
              {/* Tape strip */}
              <div style={{
                position: 'absolute',
                width: 60,
                height: 18,
                background: 'rgba(255,255,240,0.18)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(2px)',
                zIndex: 10,
                borderRadius: 2,
                ...tapeStyles[project.tape],
              }} />

              {/* Card */}
              <div style={{
                background: 'linear-gradient(145deg, #161616, #111)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderBottom: `3px solid ${project.color}50`,
                borderRadius: '4px',
                padding: '20px',
                boxShadow: '4px 4px 20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Corner torn effect */}
                <div style={{
                  position: 'absolute',
                  bottom: 0, right: 0,
                  width: 0, height: 0,
                  borderStyle: 'solid',
                  borderWidth: '0 0 28px 28px',
                  borderColor: `transparent transparent ${project.color}20 transparent`,
                }} />

                {/* Subtle color bleed top */}
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0,
                  height: 2,
                  background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                  opacity: 0.6
                }} />

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: `${project.color}18`,
                    border: `1px solid ${project.color}30`,
                    boxShadow: `0 0 12px ${project.color}20`
                  }}>
                    <project.icon style={{ color: project.color, fontSize: '1.2rem' }} />
                  </div>

                  <div className="flex items-center gap-2">
                    {project.status === 'progress' && (
                      <span style={{
                        fontSize: '0.65rem',
                        padding: '2px 8px',
                        background: 'rgba(245,158,11,0.15)',
                        color: '#fbbf24',
                        borderRadius: '20px',
                        border: '1px solid rgba(245,158,11,0.3)',
                        fontFamily: "'Courier New', monospace",
                        letterSpacing: '0.05em'
                      }}>
                        WIP
                      </span>
                    )}
                    {project.status === 'completed' && (
                      <span style={{
                        fontSize: '0.65rem',
                        padding: '2px 8px',
                        background: 'rgba(16,185,129,0.12)',
                        color: '#10b981',
                        borderRadius: '20px',
                        border: '1px solid rgba(16,185,129,0.25)',
                        fontFamily: "'Courier New', monospace",
                      }}>
                        done ✓
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  marginBottom: '6px',
                  color: '#f0f0f0'
                }}>
                  {project.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: '0.75rem',
                  color: '#6b7280',
                  lineHeight: 1.6,
                  minHeight: '40px',
                  marginBottom: '14px'
                }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} style={{
                      fontSize: '0.65rem',
                      padding: '2px 8px',
                      background: 'rgba(255,255,255,0.05)',
                      color: '#9ca3af',
                      borderRadius: '3px',
                      border: '1px solid rgba(255,255,255,0.08)',
                      fontFamily: "'Courier New', monospace",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Dashed divider — feels like a cut line */}
                <div style={{
                  borderTop: '1px dashed rgba(255,255,255,0.08)',
                  marginBottom: '12px'
                }} />

                {/* Links */}
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target='_blank'
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '7px 12px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      color: '#d1d5db',
                      textDecoration: 'none',
                      fontFamily: "'Courier New', monospace",
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = `${project.color}20`;
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = project.color;
                      (e.currentTarget as HTMLAnchorElement).style.color = project.color;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.05)';
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.1)';
                      (e.currentTarget as HTMLAnchorElement).style.color = '#d1d5db';
                    }}
                  >
                    <FaGithub style={{ fontSize: '0.9rem' }} />
                    Code
                  </a>

                  {project.live ? (
                    <a
                      href={project.live}
                      target='_blank'
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        padding: '7px 12px',
                        background: `${project.color}15`,
                        border: `1px solid ${project.color}40`,
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        color: project.color,
                        textDecoration: 'none',
                        fontFamily: "'Courier New', monospace",
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLAnchorElement).style.background = `${project.color}30`;
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLAnchorElement).style.background = `${project.color}15`;
                      }}
                    >
                      <FaExternalLinkAlt style={{ fontSize: '0.75rem' }} />
                      Live
                    </a>
                  ) : (
                    <div style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '7px 12px',
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px dashed rgba(255,255,255,0.07)',
                      borderRadius: '4px',
                      fontSize: '0.7rem',
                      color: '#4b5563',
                      fontFamily: "'Courier New', monospace",
                      cursor: 'not-allowed',
                    }}>
                      <FaExternalLinkAlt style={{ fontSize: '0.7rem' }} />
                      No Demo
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;