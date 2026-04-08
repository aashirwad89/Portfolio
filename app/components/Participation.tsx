"use client"
import { useEffect, useRef } from 'react';
import { FaTrophy, FaLightbulb, FaAward, FaRocket, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Participation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = 350;
    canvas.height = 350;
    let animationFrameId: number;
    let rotation = 0;

    const drawTrophyAnimation = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      rotation += 0.01;
      ctx.save();
      ctx.translate(centerX, centerY);

      const cupGradient = ctx.createLinearGradient(-40, -80, 40, 0);
      cupGradient.addColorStop(0, '#fbbf24');
      cupGradient.addColorStop(0.5, '#f59e0b');
      cupGradient.addColorStop(1, '#d97706');

      ctx.beginPath();
      ctx.moveTo(-40, 0);
      ctx.quadraticCurveTo(-45, -60, -30, -80);
      ctx.lineTo(30, -80);
      ctx.quadraticCurveTo(45, -60, 40, 0);
      ctx.closePath();
      ctx.fillStyle = cupGradient;
      ctx.fill();
      ctx.strokeStyle = '#b45309';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(-40, -40, 15, Math.PI, Math.PI * 1.5);
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(40, -40, 15, Math.PI * 1.5, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = '#d97706';
      ctx.fillRect(-15, 0, 30, 30);
      ctx.fillStyle = '#78716c';
      ctx.fillRect(-35, 30, 70, 8);

      ctx.save();
      ctx.translate(0, -40);
      ctx.rotate(rotation * 2);
      ctx.fillStyle = '#fef3c7';
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
        if (i === 0) ctx.moveTo(Math.cos(angle) * 10, Math.sin(angle) * 10);
        else ctx.lineTo(Math.cos(angle) * 10, Math.sin(angle) * 10);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      for (let i = 0; i < 12; i++) {
        const angle = rotation * 1.5 + (i * Math.PI * 2) / 12;
        const radius = 100 + Math.sin(rotation * 2 + i) * 15;
        ctx.beginPath();
        ctx.arc(Math.cos(angle) * radius, Math.sin(angle) * radius, 3, 0, Math.PI * 2);
        ctx.fillStyle = ['#fbbf24', '#06b6d4', '#8b5cf6', '#ec4899'][i % 4];
        ctx.fill();
      }

      ctx.strokeStyle = 'rgba(251,191,36,0.2)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(0, 0, 120, 50, rotation * 0.5, 0, Math.PI * 2);
      ctx.stroke();
      ctx.strokeStyle = 'rgba(6,182,212,0.2)';
      ctx.beginPath();
      ctx.ellipse(0, 0, 120, 50, -rotation * 0.5, 0, Math.PI * 2);
      ctx.stroke();

      ctx.restore();
      animationFrameId = requestAnimationFrame(drawTrophyAnimation);
    };

    drawTrophyAnimation();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const participations = [
    {
      title: 'TIC Hackathon 2026',
      subtitle: 'Technocrates Institute of Technology, Bhopal',
      description: 'Participated into the 36 hours long hackathon and secured a position in the top 10 teams under innovation category.',
      icon: FaTrophy,
      color: '#fbbf24',
      status: 'Qualified',
      year: '2026',
      rotate: '-2deg',
      tape: 'left',
    },
    {
      title: 'Idea Hackathon',
      subtitle: 'BGI — Bansal Group of Institutes',
      description: 'Showcased creative solutions at an innovative idea presentation hackathon.',
      icon: FaLightbulb,
      color: '#8b5cf6',
      status: 'Participated',
      year: '2025',
      rotate: '1.5deg',
      tape: 'right',
    },
    {
      title: 'Smart India Hackathon 2024',
      subtitle: 'Internal Hackathon',
      description: 'Participated and qualified through the internal selection round for SIH 2024.',
      icon: FaAward,
      color: '#06b6d4',
      status: 'Qualified',
      year: '2024',
      rotate: '-1.2deg',
      tape: 'left',
    }
  ];

  const stats = [
    { value: '3', label: 'Hackathons', color: '#fbbf24' },
    { value: '2', label: 'Qualified', color: '#10b981' },
    { value: 'SIH', label: '2024 & 2025', color: '#06b6d4' },
  ];

  return (
    <div
      id='participation'
      className="min-h-screen text-white py-20 px-4 sm:px-8 relative overflow-hidden"
      style={{ background: '#080808' }}
    >
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />
      {/* Diagonal lines */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,255,255,0.01) 40px, rgba(255,255,255,0.01) 41px)',
      }} />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block mb-4">
              <div style={{
                background: 'rgba(251,191,36,0.08)',
                border: '1px solid rgba(251,191,36,0.2)',
                padding: '3px 18px',
                fontFamily: "'Courier New', monospace",
                fontSize: '0.7rem',
                color: '#fbbf24',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}>
                Competitive
              </div>
            </div>

            <h2 style={{ fontFamily: "'Georgia', serif", fontSize: '3.2rem', fontWeight: 800, lineHeight: 1 }}
              className="mb-3">
              Hackathon <span className="italic" style={{ color: '#fbbf24' }}>Journey</span>
            </h2>

            <p style={{ fontFamily: "'Courier New', monospace", fontSize: '0.75rem', color: '#4b5563', marginBottom: '28px' }}>
               competing, building & qualifying at national level
            </p>

            {/* Stats — collage style sticky notes */}
            <div className="flex gap-4 flex-wrap">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ rotate: '0deg', scale: 1.06 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  style={{
                    transform: `rotate(${[-2, 2, -1.5][i]}deg)`,
                    background: `${s.color}10`,
                    border: `1px solid ${s.color}30`,
                    borderTop: `3px solid ${s.color}`,
                    padding: '12px 18px',
                    minWidth: 70,
                    textAlign: 'center',
                    borderRadius: '2px',
                    boxShadow: '3px 3px 12px rgba(0,0,0,0.4)',
                    position: 'relative',
                    cursor: 'default',
                  }}
                >
                  {/* tape on stat card */}
                  <div style={{
                    position: 'absolute', top: -8, left: '50%',
                    transform: 'translateX(-50%) rotate(-3deg)',
                    width: 36, height: 14,
                    background: 'rgba(255,255,240,0.1)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 2,
                  }} />
                  <h4 style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: '1.6rem',
                    fontWeight: 800,
                    color: s.color,
                    lineHeight: 1,
                  }}>{s.value}</h4>
                  <p style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: '0.62rem',
                    color: '#4b5563',
                    marginTop: 4,
                    letterSpacing: '0.08em',
                  }}>{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <canvas ref={canvasRef} className="w-full max-w-sm opacity-90" />
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {participations.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ rotate: '0deg', scale: 1.04, zIndex: 20 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                style={{ transform: `rotate(${item.rotate})`, position: 'relative' }}
              >
                {/* Tape */}
                <div style={{
                  position: 'absolute',
                  top: -10,
                  left: item.tape === 'left' ? 24 : undefined,
                  right: item.tape === 'right' ? 24 : undefined,
                  width: 52,
                  height: 16,
                  background: 'rgba(255,255,240,0.11)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 2,
                  transform: item.tape === 'left' ? 'rotate(-6deg)' : 'rotate(6deg)',
                  zIndex: 10,
                }} />

                {/* Card */}
                <div style={{
                  background: 'linear-gradient(150deg, #131313, #0e0e0e)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderTop: `3px solid ${item.color}`,
                  borderRadius: '3px',
                  overflow: 'hidden',
                  boxShadow: '5px 5px 24px rgba(0,0,0,0.55)',
                  position: 'relative',
                }}>
                  {/* Glow top */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: 1,
                    background: `linear-gradient(90deg, ${item.color}70, transparent)`,
                  }} />

                  {/* Torn corner */}
                  <div style={{
                    position: 'absolute', bottom: 0, right: 0,
                    width: 0, height: 0,
                    borderStyle: 'solid',
                    borderWidth: '0 0 28px 28px',
                    borderColor: `transparent transparent ${item.color}15 transparent`,
                  }} />

                  {/* Top section */}
                  <div style={{ padding: '20px 20px 14px', borderBottom: '1px dashed rgba(255,255,255,0.06)' }}>
                    <div className="flex items-start justify-between mb-3">
                      <div style={{
                        width: 48, height: 48,
                        borderRadius: '5px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: `${item.color}12`,
                        border: `1px solid ${item.color}30`,
                        boxShadow: `0 0 14px ${item.color}15`,
                      }}>
                        <Icon style={{ color: item.color, fontSize: '1.2rem' }} />
                      </div>

                      <div style={{ textAlign: 'right' }}>
                        <span style={{
                          fontFamily: "'Courier New', monospace",
                          fontSize: '0.65rem',
                          color: item.color,
                          border: `1px solid ${item.color}40`,
                          padding: '2px 8px',
                          borderRadius: 2,
                          letterSpacing: '0.1em',
                        }}>
                          {item.year}
                        </span>
                      </div>
                    </div>

                    <h3 style={{
                      fontFamily: "'Georgia', serif",
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: '#f0f0f0',
                      marginBottom: 4,
                      lineHeight: 1.3,
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: '0.68rem',
                      color: '#4b5563',
                      letterSpacing: '0.04em',
                    }}>
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Bottom section */}
                  <div style={{ padding: '14px 20px 18px' }}>
                    <p style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: '0.72rem',
                      color: '#6b7280',
                      lineHeight: 1.6,
                      marginBottom: '14px',
                    }}>
                      {item.description}
                    </p>

                    {/* Status */}
                    <div className="flex items-center justify-between">
                      <span style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: '0.62rem',
                        padding: '2px 10px',
                        borderRadius: 2,
                        background: `${item.color}12`,
                        color: item.color,
                        border: `1px solid ${item.color}35`,
                        letterSpacing: '0.1em',
                      }}>
                        {item.status}
                      </span>
                      {item.status === 'Qualified' && (
                        <FaCheckCircle style={{ color: '#10b981', fontSize: '1rem' }} />
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            marginTop: '48px',
            textAlign: 'center',
            fontFamily: "'Courier New', monospace",
            fontSize: '0.7rem',
            color: '#374151',
            letterSpacing: '0.15em',
          }}
        >
           more to come — the grind never stops
        </motion.p>
      </div>
    </div>
  );
};

export default Participation;