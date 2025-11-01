"use client"
import { useEffect, useRef, useState } from 'react';
import { Download, Github, Linkedin, Mail, ChevronDown, X, Menu } from 'lucide-react';

const Landing = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    updateCanvasSize();

    let animationFrameId: number;
    let time = 0;

    const draw3DScene = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Adjust center based on screen size
      const isMobile = window.innerWidth < 768;
      const centerX = isMobile ? canvas.width * 0.5 : canvas.width * 0.7;
      const centerY = canvas.height * 0.5;
      const scale = isMobile ? 0.6 : 1;

      time += 0.008;

      ctx.save();
      ctx.translate(centerX, centerY);

      // Rotating 3D wireframe cube with nested structures
      const drawWireframeCube = (size: number, rotation: number, color: string, alpha: number) => {
        ctx.save();
        
        const rotX = rotation;
        const rotY = rotation * 1.5;
        const rotZ = rotation * 0.7;

        // 3D vertices of a cube
        const vertices = [
          [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
          [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
        ].map(v => v.map(c => c * size * scale));

        // Rotate vertices
        const rotated = vertices.map(v => {
          let [x, y, z] = v;
          
          // Rotate X
          let y1 = y * Math.cos(rotX) - z * Math.sin(rotX);
          let z1 = y * Math.sin(rotX) + z * Math.cos(rotX);
          y = y1;
          z = z1;
          
          // Rotate Y
          let x1 = x * Math.cos(rotY) + z * Math.sin(rotY);
          z1 = -x * Math.sin(rotY) + z * Math.cos(rotY);
          x = x1;
          z = z1;
          
          // Rotate Z
          x1 = x * Math.cos(rotZ) - y * Math.sin(rotZ);
          y1 = x * Math.sin(rotZ) + y * Math.cos(rotZ);
          
          return [x1, y1, z1];
        });

        // Project to 2D
        const perspective = 600;
        const projected = rotated.map(v => {
          const factor = perspective / (perspective + v[2]);
          return [v[0] * factor, v[1] * factor];
        });

        // Draw edges
        const edges = [
          [0,1],[1,2],[2,3],[3,0], // front
          [4,5],[5,6],[6,7],[7,4], // back
          [0,4],[1,5],[2,6],[3,7]  // connecting
        ];

        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.globalAlpha = alpha;

        edges.forEach(([i, j]) => {
          ctx.beginPath();
          ctx.moveTo(projected[i][0], projected[i][1]);
          ctx.lineTo(projected[j][0], projected[j][1]);
          ctx.stroke();
        });

        // Draw vertices with glow
        ctx.fillStyle = color;
        projected.forEach(p => {
          ctx.beginPath();
          ctx.arc(p[0], p[1], 4 * scale, 0, Math.PI * 2);
          ctx.fill();
          
          // Glow effect
          ctx.shadowColor = color;
          ctx.shadowBlur = 15;
          ctx.beginPath();
          ctx.arc(p[0], p[1], 2 * scale, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        });

        ctx.restore();
      };

      // Multiple nested cubes
      drawWireframeCube(120, time, '#06b6d4', 0.8);
      drawWireframeCube(80, -time * 1.3, '#a855f7', 0.6);
      drawWireframeCube(50, time * 1.7, '#ec4899', 0.5);

      // Orbiting particles
      const particleCount = isMobile ? 12 : 20;
      for (let i = 0; i < particleCount; i++) {
        const angle = (i / particleCount) * Math.PI * 2 + time;
        const radius = (100 + i * 10) * scale;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius * 0.6;
        const size = (3 + Math.sin(time * 2 + i) * 2) * scale;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${0.4 + Math.sin(time + i) * 0.3})`;
        ctx.fill();
        
        // Connection lines
        if (i > 0) {
          const prevAngle = ((i-1) / particleCount) * Math.PI * 2 + time;
          const prevX = Math.cos(prevAngle) * radius;
          const prevY = Math.sin(prevAngle) * radius * 0.6;
          
          ctx.beginPath();
          ctx.moveTo(prevX, prevY);
          ctx.lineTo(x, y);
          ctx.strokeStyle = 'rgba(6, 182, 212, 0.2)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Grid background
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.1)';
      ctx.lineWidth = 1;
      const gridSize = isMobile ? 40 : 50;
      const gridRange = isMobile ? 200 : 300;
      
      for (let i = -gridRange; i <= gridRange; i += gridSize) {
        ctx.beginPath();
        ctx.moveTo(-gridRange * scale, i * scale);
        ctx.lineTo(gridRange * scale, i * scale);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(i * scale, -gridRange * scale);
        ctx.lineTo(i * scale, gridRange * scale);
        ctx.stroke();
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(draw3DScene);
    };

    draw3DScene();

    const handleResize = () => {
      updateCanvasSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <div id='home' className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Canvas for 3D shape */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none"
      />

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-4 md:px-8 py-4 md:py-6">
        <div className="text-blue-400 text-lg md:text-xl font-mono">&lt;AS /&gt;</div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 xl:gap-8 text-sm">
          {['Home', 'About', 'Experience', 'Education', 'Skills', 'Projects', 'Participation'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`transition-colors ${
                item === 'Home' ? 'text-blue-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              {item}
            </a>
          ))}
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white z-50"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-black/95 backdrop-blur-lg lg:hidden transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex  flex-col items-center justify-center h-full gap-8">
            {['Home', 'About', 'Experience', 'Education', 'Skills', 'Projects', 'Participation'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl transition-colors ${
                  item === 'Home' ? 'text-blue-600' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-16 pt-8 md:pt-12 lg:pt-20 pb-20 gap-8 lg:gap-0">
        <div className="max-w-2xl w-full lg:w-auto">
          {/* Available Badge */}
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-gray-900 border border-gray-800 mb-6 md:mb-8">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs md:text-sm text-gray-300">Available for work</span>
          </div>

          {/* Hero Text */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4 leading-tight">
            Hi, This is <span className="text-blue-600">Aashirwad</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-2">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          <p className="text-sm md:text-base text-gray-400 mb-2">
            I craft exceptional digital experiences with clean code and elegant design.
          </p>
          <p className="text-sm md:text-base text-gray-400 mb-6 md:mb-8">
            Specialized in MERN Stack and Java.
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-400 mb-6 md:mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm md:text-base">Bhopal, Madhya Pradesh</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
            <button className="flex cursor-pointer items-center justify-center gap-2 px-5 md:px-6 py-3 bg-blue-700 hover:bg-blue-600 rounded-lg transition-colors text-sm md:text-base">
              <Download className="w-4 h-4 md:w-5 md:h-5" />
              <a href="/Aashirwad_Resume_Updated.docx" download="Aashirwad_Singh_Resume.docx">Download Resume</a>
            </button>
            <button className="px-5 md:px-6 py-3 cursor-pointer border border-gray-700 hover:border-gray-500 rounded-lg transition-colors text-sm md:text-base">
              <a href="#projects">View Projects</a>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 md:gap-4">
            {[
              { icon: Github, href: 'https://github.com/aashirwad89' },
              { icon: Linkedin, href: 'https://linkedin.com/in/aashirwad26' },
              { icon: Mail, href: 'mailto:aashirwad2626@gmail.com' }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-lg transition-colors"
              >
                <social.icon className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-row lg:flex-col gap-4 md:gap-6 lg:gap-8 lg:mr-32 mt-8 lg:mt-0">
          <div className="text-center p-4 md:p-6 bg-gray-900/50 border border-gray-800 rounded-xl backdrop-blur-sm flex-1 lg:flex-none">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1 md:mb-2">1+</div>
            <div className="text-xs md:text-sm text-gray-400">Years Exp.</div>
          </div>
          <div className="text-center p-4 md:p-6 bg-gray-900/50 border border-gray-800 rounded-xl backdrop-blur-sm flex-1 lg:flex-none">
            <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-1 md:mb-2">5+</div>
            <div className="text-xs md:text-sm text-gray-400">Projects</div>
          </div>
        </div>
      </main>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hidden md:flex">
        <span className="text-sm">Scroll to explore</span>
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </div>

      {/* Scroll to top button */}
      <a href="#home">
        <button className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 rounded-full transition-colors z-20 shadow-lg">
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </a>
    </div>
  );
};

export default Landing;