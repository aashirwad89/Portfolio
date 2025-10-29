"use client"
import { useEffect, useRef } from 'react';
import { FaCode, FaLaptopCode,  FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 400;

    let animationFrameId: number;
    let rotation = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left - canvas.width / 2) / 50;
      mouseY = (e.clientY - rect.top - canvas.height / 2) / 50;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const draw3DModel = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      rotation += 0.01;

      // Draw 3D Cube/Box representing developer workspace
      const cubeSize = 80;
      const depth = 40;

      ctx.save();
      ctx.translate(centerX + mouseX, centerY + mouseY);

      // Face 1 (front) - Monitor/Screen
      ctx.beginPath();
      const x1 = Math.cos(rotation) * cubeSize;
      const y1 = Math.sin(rotation) * cubeSize;
      const x2 = Math.cos(rotation + Math.PI / 2) * cubeSize;
      const y2 = Math.sin(rotation + Math.PI / 2) * cubeSize;

      const gradient1 = ctx.createLinearGradient(-cubeSize, -cubeSize, cubeSize, cubeSize);
      gradient1.addColorStop(0, '#06b6d4');
      gradient1.addColorStop(1, '#3b82f6');

      ctx.moveTo(x1, y1 - depth);
      ctx.lineTo(x2, y2 - depth);
      ctx.lineTo(-x1, -y1 - depth);
      ctx.lineTo(-x2, -y2 - depth);
      ctx.closePath();
      ctx.fillStyle = gradient1;
      ctx.fill();
      ctx.strokeStyle = '#0891b2';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Face 2 (top)
      const gradient2 = ctx.createLinearGradient(-cubeSize, -cubeSize, cubeSize, 0);
      gradient2.addColorStop(0, '#8b5cf6');
      gradient2.addColorStop(1, '#a855f7');

      ctx.beginPath();
      ctx.moveTo(x1, y1 - depth);
      ctx.lineTo(x1, y1);
      ctx.lineTo(-x2, -y2);
      ctx.lineTo(-x2, -y2 - depth);
      ctx.closePath();
      ctx.fillStyle = gradient2;
      ctx.fill();
      ctx.strokeStyle = '#7c3aed';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Face 3 (side)
      const gradient3 = ctx.createLinearGradient(0, -cubeSize, cubeSize, cubeSize);
      gradient3.addColorStop(0, '#ec4899');
      gradient3.addColorStop(1, '#f43f5e');

      ctx.beginPath();
      ctx.moveTo(x2, y2 - depth);
      ctx.lineTo(x2, y2);
      ctx.lineTo(-x1, -y1);
      ctx.lineTo(-x1, -y1 - depth);
      ctx.closePath();
      ctx.fillStyle = gradient3;
      ctx.fill();
      ctx.strokeStyle = '#db2777';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Add code symbols on the front face
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.font = 'bold 24px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('</>', 0, -depth);

      // Floating particles around
      for (let i = 0; i < 8; i++) {
        const angle = (rotation * 2 + (i * Math.PI) / 4);
        const radius = 120 + Math.sin(rotation + i) * 10;
        const px = Math.cos(angle) * radius;
        const py = Math.sin(angle) * radius;
        
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#8b5cf6' : '#ec4899';
        ctx.fill();
      }

      // Orbital rings
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.3)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(0, 0, 140, 60, rotation, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)';
      ctx.beginPath();
      ctx.ellipse(0, 0, 140, 60, -rotation, 0, Math.PI * 2);
      ctx.stroke();

      ctx.restore();

      animationFrameId = requestAnimationFrame(draw3DModel);
    };

    draw3DModel();

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const stats = [
    { icon: FaCode, value: '5+', label: 'Projects Completed' },
    { icon: FaLaptopCode, value: '10+', label: 'Technologies' },
    { icon: FaUsers, value: '95%', label: 'Client Satisfaction' }
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div id='about' className="min-h-screen bg-black text-white py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-gray-400">
            Get to know more about my journey and expertise
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left - 3D Model */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <canvas
                ref={canvasRef}
                className="w-full max-w-md"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold mb-4">
              Hi, My name is <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Aashirwad Singh</span>
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              A passionate Full Stack Developer specializing in building exceptional digital experiences. 
              I combine clean code with elegant design to create applications that not only work flawlessly 
              but also delight users.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              With expertise in modern web technologies, 
              I have successfully delivered 5+ projects ranging from dynamic web applications to 
              complex full-stack solutions.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Currently working as a Project Manager at BodhaSoft, I lead teams in building innovative 
              solutions while continuously learning and exploring new technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4">
                <motion.a
    href="/Aashirwad_Resume_Updated.docx" // public folder me rakha hua file path
    download="Aashirwad_Singh_Resume.docx" // file download name
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-white"
  >
    Download CV
  </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-gray-700 rounded-lg font-semibold"
              >
              <a href="#footer">Contact Me</a>  
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center"
            >
              <stat.icon className="text-3xl text-cyan-400 mx-auto mb-3" />
              <h4 className="text-2xl font-bold mb-1">{stat.value}</h4>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

       
      </div>
    </div>
  );
};

export default About;