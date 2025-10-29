"use client"
import { useEffect, useRef } from 'react';
import { Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Landing = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId: number;
    let time = 0;

    // Matrix-style code rain
    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const codeChars = '01{}[]<>/();.,abcdefghijklmnopqrstuvwxyz';

    const draw3DScene = () => {
      // Semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width * 0.75;
      const centerY = canvas.height * 0.45;

      time += 0.01;

      // Matrix rain effect
      ctx.font = '14px monospace';
      ctx.fillStyle = 'rgba(6, 182, 212, 0.5)';
      for (let i = 0; i < drops.length; i++) {
        const char = codeChars[Math.floor(Math.random() * codeChars.length)];
        ctx.fillText(char, i * 20, drops[i] * 20);
        
        if (drops[i] * 20 > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      ctx.save();
      ctx.translate(centerX, centerY);

      // Main 3D Computer/Monitor structure
      const monitorWidth = 180;
      const monitorHeight = 120;
      const depth = 30;

      // Monitor screen (main display)
      ctx.save();
      ctx.rotate(Math.sin(time * 0.5) * 0.1);

      // Screen glow
      const screenGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, monitorWidth);
      screenGlow.addColorStop(0, 'rgba(6, 182, 212, 0.3)');
      screenGlow.addColorStop(1, 'rgba(6, 182, 212, 0)');
      ctx.fillStyle = screenGlow;
      ctx.fillRect(-monitorWidth * 0.6, -monitorHeight * 0.6, monitorWidth * 1.2, monitorHeight * 1.2);

      // Monitor frame
      ctx.fillStyle = 'rgba(30, 30, 30, 0.9)';
      ctx.fillRect(-monitorWidth/2, -monitorHeight/2, monitorWidth, monitorHeight);
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 3;
      ctx.strokeRect(-monitorWidth/2, -monitorHeight/2, monitorWidth, monitorHeight);

      // Screen inner content
      ctx.fillStyle = 'rgba(6, 182, 212, 0.1)';
      ctx.fillRect(-monitorWidth/2 + 10, -monitorHeight/2 + 10, monitorWidth - 20, monitorHeight - 20);

      // Terminal text lines
      ctx.font = 'bold 12px monospace';
      ctx.fillStyle = '#06b6d4';
      const terminalLines = [
        '> npm run dev',
        '> Starting server...',
        '> ✓ Ready on port 3000',
        '> Building...'
      ];
      let yPos = -40;
      terminalLines.forEach((line, i) => {
        const chars = Math.floor((Math.sin(time + i) + 1) * line.length / 2);
        ctx.fillText(line.substring(0, chars), -monitorWidth/2 + 20, yPos);
        yPos += 20;
      });

      // Cursor blink
      if (Math.floor(time * 3) % 2 === 0) {
        ctx.fillStyle = '#06b6d4';
        ctx.fillRect(-monitorWidth/2 + 20 + ctx.measureText(terminalLines[3]).width, yPos - 20, 8, 12);
      }

      // Monitor stand (3D effect)
      ctx.fillStyle = 'rgba(60, 60, 60, 0.8)';
      ctx.fillRect(-15, monitorHeight/2, 30, 40);
      
      // Base
      ctx.fillStyle = 'rgba(40, 40, 40, 0.8)';
      ctx.fillRect(-50, monitorHeight/2 + 40, 100, 10);

      ctx.restore();

      // Floating binary numbers
      const binaryCount = 8;
      for (let i = 0; i < binaryCount; i++) {
        const angle = time + (i * Math.PI * 2 / binaryCount);
        const radius = 200 + Math.sin(time * 2 + i) * 20;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        ctx.save();
        ctx.translate(x, y);
        ctx.font = 'bold 16px monospace';
        ctx.fillStyle = `rgba(6, 182, 212, ${0.6 + Math.sin(time + i) * 0.3})`;
        ctx.fillText(Math.random() > 0.5 ? '1' : '0', -5, 5);
        ctx.restore();
      }

      // Circuit board lines
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.2)';
      ctx.lineWidth = 2;
      
      // Horizontal lines
      for (let i = -3; i <= 3; i++) {
        ctx.beginPath();
        ctx.moveTo(-250, i * 60);
        ctx.lineTo(250, i * 60);
        ctx.stroke();
      }

      // Vertical lines
      for (let i = -4; i <= 4; i++) {
        ctx.beginPath();
        ctx.moveTo(i * 60, -200);
        ctx.lineTo(i * 60, 200);
        ctx.stroke();
      }

      // Circuit nodes
      for (let i = -3; i <= 3; i++) {
        for (let j = -4; j <= 4; j++) {
          const nodeX = j * 60;
          const nodeY = i * 60;
          const pulse = Math.sin(time * 2 + i + j) * 2 + 3;
          
          ctx.beginPath();
          ctx.arc(nodeX, nodeY, pulse, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(6, 182, 212, 0.6)';
          ctx.fill();
        }
      }

      // Data packets moving
      const packets = 6;
      for (let i = 0; i < packets; i++) {
        const progress = (time * 0.5 + i / packets) % 1;
        const packetX = -250 + progress * 500;
        const packetY = (i % 3 - 1) * 60;
        
        ctx.fillStyle = '#06b6d4';
        ctx.fillRect(packetX - 10, packetY - 5, 20, 10);
        
        // Trail
        ctx.fillStyle = 'rgba(6, 182, 212, 0.3)';
        ctx.fillRect(packetX - 30, packetY - 3, 20, 6);
      }

      // Code brackets orbiting
      const brackets = ['{ }', '[ ]', '< >', '( )'];
      brackets.forEach((bracket, i) => {
        const angle = -time * 1.2 + (i * Math.PI / 2);
        const radius = 160;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius * 0.5;
        
        ctx.save();
        ctx.translate(x, y);
        ctx.font = 'bold 20px monospace';
        ctx.fillStyle = '#06b6d4';
        ctx.shadowColor = '#06b6d4';
        ctx.shadowBlur = 15;
        ctx.fillText(bracket, -15, 5);
        ctx.shadowBlur = 0;
        ctx.restore();
      });

      // Scanning line effect
      const scanY = ((time * 50) % 400) - 200;
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.5)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-250, scanY);
      ctx.lineTo(250, scanY);
      ctx.stroke();

      ctx.restore();

      animationFrameId = requestAnimationFrame(draw3DScene);
    };

    draw3DScene();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
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
      <nav className="relative z-10 flex justify-between items-center px-8 py-6">
        <div className="text-cyan-400 text-xl font-mono">&lt;AS /&gt;</div>
        <div className="flex gap-8 text-sm">
          {['Home', 'About', 'Experience', 'Education', 'Skills', 'Projects', 'Participation'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`transition-colors ${
                item === 'Home' ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-between px-16 pt-20">
        <div className="max-w-2xl">
          {/* Available Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 border border-gray-800 mb-8">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-300">Available for work</span>
          </div>

          {/* Hero Text */}
          <h1 className="text-7xl font-bold mb-4">
            Hi, This is <span className="text-cyan-400">Aashirwad</span>
          </h1>
          <p className="text-xl text-gray-400 mb-2">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          <p className="text-gray-500 mb-2">
            I craft exceptional digital experiences with clean code and elegant design.
          </p>
          <p className="text-gray-500 mb-8">
            Specialized in MERN Stack, Java, and Web architecture.
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-500 mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Bhopal, Madhya Pradesh</span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mb-12">
            <button  className="flex cursor-pointer items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-600 rounded-lg transition-colors">
              <Download className="w-5 h-5" />
             <a  href="/Aashirwad_Resume_Updated.docx"  download="Aashirwad_Singh_Resume.docx" >Download Resume</a> 
            </button>
            <button className="px-6 py-3 cursor-pointer border border-gray-700 hover:border-gray-500 rounded-lg transition-colors">
             <a href="#projects"> View Projects </a>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { icon: Github, href: 'https://github.com/aashirwad89' },
              { icon: Linkedin, href: 'https://linkedin.com/in/aashirwad26' },
              { icon: Mail, href: 'aashirwad2626@gmail.com' }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="w-12 h-12 flex items-center justify-center bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-lg transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col gap-8 mr-32">
          <div className="text-center p-6 bg-gray-900/50 border border-gray-800 rounded-xl backdrop-blur-sm">
            <div className="text-4xl font-bold text-cyan-400 mb-2">1+</div>
            <div className="text-sm text-gray-400">Years Exp.</div>
          </div>
          <div className="text-center p-6 bg-gray-900/50 border border-gray-800 rounded-xl backdrop-blur-sm">
            <div className="text-4xl font-bold text-pink-400 mb-2">5+</div>
            <div className="text-sm text-gray-400">Projects</div>
          </div>
        </div>
      </main>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-sm">Scroll to explore</span>
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </div>

      {/* Scroll to top button */}
      <a href="#home">
      <button className="fixed bottom-8 right-8 w-12 h-12 flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 rounded-full transition-colors z-20">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
      </a>
    </div>
  );
};

export default Landing;