"use client"
import { useEffect, useRef } from 'react';
import { 
  FaHotel, FaVideo, FaRobot, FaLightbulb, FaGithub, FaLinkedin,
   FaGithubAlt,
   FaCloudscale
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

      // Draw code editor/terminal
      ctx.save();
      ctx.translate(centerX, centerY);

      // Terminal window
      const termWidth = 180;
      const termHeight = 120;
      
      // Window background
      const gradient = ctx.createLinearGradient(0, -termHeight/2, 0, termHeight/2);
      gradient.addColorStop(0, 'rgba(30, 30, 30, 0.9)');
      gradient.addColorStop(1, 'rgba(20, 20, 20, 0.9)');
      ctx.fillStyle = gradient;
      ctx.fillRect(-termWidth/2, -termHeight/2, termWidth, termHeight);
      
      // Window border
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 2;
      ctx.strokeRect(-termWidth/2, -termHeight/2, termWidth, termHeight);

      // Title bar
      ctx.fillStyle = 'rgba(6, 182, 212, 0.2)';
      ctx.fillRect(-termWidth/2, -termHeight/2, termWidth, 20);
      
      // Window buttons
      const buttonY = -termHeight/2 + 10;
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(-termWidth/2 + 15, buttonY, 4, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath();
      ctx.arc(-termWidth/2 + 30, buttonY, 4, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      ctx.arc(-termWidth/2 + 45, buttonY, 4, 0, Math.PI * 2);
      ctx.fill();

      // Code lines with typing effect
      const codeLines = [
        '> const project = {',
        '>   name: "App",',
        '>   tech: ["React"]',
        '> };',
      ];

      ctx.font = '12px monospace';
      ctx.fillStyle = '#06b6d4';
      
      let yOffset = -40;
      codeLines.forEach((line, i) => {
        const chars = Math.floor((Math.sin(time + i) + 1) * line.length / 2);
        const displayText = line.substring(0, chars);
        ctx.fillText(displayText, -termWidth/2 + 15, yOffset);
        yOffset += 20;
      });

      // Blinking cursor
      if (Math.floor(time * 2) % 2 === 0) {
        ctx.fillStyle = '#06b6d4';
        ctx.fillRect(-termWidth/2 + 15 + ctx.measureText(codeLines[3]).width, yOffset - 20, 8, 14);
      }

      // Floating brackets and symbols
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

      // Keyboard keys animation at bottom
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

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const projects = [
    {
      title: 'WanderBook',
      description: 'Hotel booking platform with real-time availability and owner-based feature.',
      icon: FaHotel,
      color: '#06b6d4',
      tags: ['Node.js', 'MongoDB', 'ExpressJS', 'Passport'],
      status: 'completed'
    },
    {
      title: 'EchoMeet',
      description: 'Video conferencing with screen sharing powered by WebRTC.',
      icon: FaVideo,
      color: '#8b5cf6',
      tags: ['WebRTC', 'Socket.IO', 'MERN'],
      status: 'completed'
    },
    {
      title: 'Tutorly-AI',
      description: 'AI chatbot for personalized tutoring and learning assistance.',
      icon: FaRobot,
      color: '#10b981',
      tags: ['Next.js', 'Gemini API', 'ReactJs'],
      status: 'completed'
    },
    {
      title: 'AdarshSetu',
      description: 'Smart India Hackathon prototype for digital infrastructure.',
      icon: FaLightbulb,
      color: '#f59e0b',
      tags: ['Firebase', 'MERN', 'Real time Data'],
      status: 'completed'
    },
    {
      title: 'Dev-Sync',
      description: 'In progress',
      icon: FaCloudscale,
      color: '#6366f1',
      tags: ['Future Project'],
      status: 'progress'
    },
    {
      title: 'ProConnect',
      description: 'In Progress',
      icon: FaCloudscale,
      color: '#0ea5e9',
      tags: ['Future Project'],
      status: 'progress'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div id='projects' className="min-h-screen bg-black text-white py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-3">
              My <span className="text-cyan-400">Projects</span>
            </h2>
            <p className="text-gray-400">
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
            <canvas ref={canvasRef} className="w-full max-w-xs" />
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-gray-900 border border-gray-800 rounded-lg p-5"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${project.color}15` }}
                >
                  <project.icon className="text-2xl" style={{ color: project.color }} />
                </div>
                {project.status === 'progress' && (
                  <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/30">
                    WIP
                  </span>
                )}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 h-10 line-clamp-2">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-2">
                <a
                  href='https://github.com/aashirwad89/'
                  target='_blank'
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-800 rounded text-sm"
                >
                  <FaGithubAlt className="text-sm" />
                  Code
                </a>
                 
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;