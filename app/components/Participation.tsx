"use client"
import  { useEffect, useRef } from 'react';
import { FaTrophy, FaLightbulb, FaAward, FaCheckCircle, FaRocket } from 'react-icons/fa';
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

      // Trophy base
      ctx.save();
      ctx.translate(centerX, centerY);

      // Trophy cup - main body
      ctx.beginPath();
      ctx.moveTo(-40, 0);
      ctx.quadraticCurveTo(-45, -60, -30, -80);
      ctx.lineTo(30, -80);
      ctx.quadraticCurveTo(45, -60, 40, 0);
      ctx.closePath();
      
      const cupGradient = ctx.createLinearGradient(-40, -80, 40, 0);
      cupGradient.addColorStop(0, '#fbbf24');
      cupGradient.addColorStop(0.5, '#f59e0b');
      cupGradient.addColorStop(1, '#d97706');
      ctx.fillStyle = cupGradient;
      ctx.fill();
      ctx.strokeStyle = '#b45309';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Trophy handles
      ctx.beginPath();
      ctx.arc(-40, -40, 15, Math.PI, Math.PI * 1.5);
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(40, -40, 15, Math.PI * 1.5, Math.PI * 2);
      ctx.stroke();

      // Trophy stem
      ctx.fillStyle = '#d97706';
      ctx.fillRect(-15, 0, 30, 30);
      ctx.strokeStyle = '#b45309';
      ctx.strokeRect(-15, 0, 30, 30);

      // Trophy base
      ctx.fillStyle = '#78716c';
      ctx.fillRect(-35, 30, 70, 8);
      ctx.strokeStyle = '#57534e';
      ctx.strokeRect(-35, 30, 70, 8);

      // Star on trophy
      ctx.save();
      ctx.translate(0, -40);
      ctx.rotate(rotation * 2);
      ctx.fillStyle = '#fef3c7';
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
        const x = Math.cos(angle) * 10;
        const y = Math.sin(angle) * 10;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Floating particles
      for (let i = 0; i < 12; i++) {
        const angle = (rotation * 1.5 + (i * Math.PI * 2) / 12);
        const radius = 100 + Math.sin(rotation * 2 + i) * 15;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        const colors = ['#fbbf24', '#06b6d4', '#8b5cf6', '#ec4899'];
        ctx.fillStyle = colors[i % 4];
        ctx.fill();
      }

      // Orbital rings
      ctx.strokeStyle = 'rgba(251, 191, 36, 0.2)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(0, 0, 120, 50, rotation * 0.5, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(6, 182, 212, 0.2)';
      ctx.beginPath();
      ctx.ellipse(0, 0, 120, 50, -rotation * 0.5, 0, Math.PI * 2);
      ctx.stroke();

      ctx.restore();

      animationFrameId = requestAnimationFrame(drawTrophyAnimation);
    };

    drawTrophyAnimation();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const participations = [
    {
      title: 'Smart India Hackathon 2025',
      subtitle: 'Internal Hackathon - Qualified',
      description: 'Successfully cracked the internal hackathon round and qualified for SIH 2025 nationals.',
      icon: FaTrophy,
      color: '#fbbf24',
      status: 'Qualified',
      year: '2025',
    },
    {
      title: 'Idea Hackathon',
      subtitle: 'BGI (Bansal Group of Institutes)',
      description: 'Participated in innovative idea presentation hackathon, showcasing creative solutions.',
      icon: FaLightbulb,
      color: '#8b5cf6',
      status: 'Participated',
      year: '2025',
      achievement: 'Participant'
    },
    {
      title: 'Smart India Hackathon 2024',
      subtitle: 'Internal Hackathon - Qualified',
      description: 'Participated and successfully qualified through the internal selection round for SIH 2024.',
      icon: FaAward,
      color: '#06b6d4',
      status: 'Qualified',
      year: '2024',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div id='participation' className="min-h-screen bg-black text-white py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with 3D Model */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FaRocket className="text-4xl text-cyan-400" />
              <h2 className="text-4xl md:text-5xl font-bold">
                Hackathon <span className="text-cyan-400">Journey</span>
              </h2>
            </div>
            <p className="text-gray-400 text-lg mb-6">
              Competing and winning at prestigious national-level hackathons
            </p>
            
            {/* Quick Stats */}
            <div className="flex gap-4">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
                <h4 className="text-2xl font-bold text-yellow-400">3</h4>
                <p className="text-xs text-gray-500">Hackathons</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
                <h4 className="text-2xl font-bold text-green-400">2</h4>
                <p className="text-xs text-gray-500">Qualified</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
                <h4 className="text-2xl font-bold text-cyan-400">SIH</h4>
                <p className="text-xs text-gray-500">2024 & 2025</p>
              </div>
            </div>
          </motion.div>

          {/* Right - 3D Trophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <canvas ref={canvasRef} className="w-full max-w-sm" />
          </motion.div>
        </div>

        {/* Participation Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {participations.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden"
            >
              {/* Header */}
              <div className="p-5 border-b border-gray-800">
                <div className="flex items-start justify-between mb-3">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon className="text-2xl" style={{ color: item.color }} />
                  </div>
                  <div className="text-right">
                    <span className="text-xs px-3 py-1 bg-gray-800 rounded-full text-gray-400">
                      {item.year}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.subtitle}</p>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-sm text-gray-400 mb-4">
                  {item.description}
                </p>

                {/* Status Badge */}
                <div className="flex items-center justify-between">
                  <span 
                    className="text-xs px-3 py-1 rounded-full font-semibold"
                    style={{ 
                      backgroundColor: `${item.color}20`,
                      color: item.color,
                      border: `1px solid ${item.color}40`
                    }}
                  >
                    {item.achievement}
                  </span>
                  {item.status === 'Qualified' && (
                    <FaCheckCircle className="text-green-400 text-lg" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

       
      </div>
    </div>
  );
};

export default Participation;