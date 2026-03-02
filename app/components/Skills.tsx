/* eslint-disable react/no-unescaped-entities */
"use client"
import { 
  FaReact, FaNodeJs, FaJs, FaJava, FaBootstrap, FaFire, 
  FaUsers, FaComments, FaChartLine, FaTasks 
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiFramer, SiSocketdotio, SiWebrtc
} from 'react-icons/si';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const allSkills = [
    // Frontend
    { name: 'React.js', icon: FaReact, level: 90, color: '#61DAFB', category: 'Frontend', size: 'large' },
    { name: 'JavaScript', icon: FaJs, level: 90, color: '#F7DF1E', category: 'Frontend', size: 'large' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: '#06B6D4', category: 'Frontend', size: 'medium' },
    { name: 'Next.js', icon: SiNextdotjs, level: 85, color: '#000000', category: 'Frontend', size: 'medium' },
    { name: 'TypeScript', icon: SiTypescript, level: 70, color: '#3178C6', category: 'Frontend', size: 'small', tag: 'Intermediate' },
    { name: 'Bootstrap', icon: FaBootstrap, level: 85, color: '#7952B3', category: 'Frontend', size: 'small' },
    { name: 'Framer Motion', icon: SiFramer, level: 80, color: '#FF0055', category: 'Frontend', size: 'medium' },
    
    // Backend
    { name: 'Node.js', icon: FaNodeJs, level: 90, color: '#339933', category: 'Backend', size: 'large' },
    { name: 'MongoDB', icon: SiMongodb, level: 88, color: '#47A248', category: 'Backend', size: 'large' },
    { name: 'Express.js', icon: SiExpress, level: 85, color: '#000000', category: 'Backend', size: 'medium' },
    { name: 'Firebase', icon: FaFire, level: 80, color: '#FFCA28', category: 'Backend', size: 'medium' },
    { name: 'Socket.IO', icon: SiSocketdotio, level: 70, color: '#010101', category: 'Backend', size: 'small', tag: 'Intermediate' },
    { name: 'WebRTC', icon: SiWebrtc, level: 70, color: '#333333', category: 'Backend', size: 'small', tag: 'Intermediate' },
    
    // Management
    { name: 'Leadership', icon: FaUsers, level: 90, color: '#EC4899', category: 'Management', size: 'medium' },
    { name: 'Management', icon: FaChartLine, level: 88, color: '#A855F7', category: 'Management', size: 'medium' },
    { name: 'Communication', icon: FaComments, level: 92, color: '#F43F5E', category: 'Management', size: 'medium' },
    { name: 'Scrum', icon: FaTasks, level: 82, color: '#FF6B6B', category: 'Management', size: 'small' },
    
    // Learning
    { name: 'Java', icon: FaJava, level: 50, color: '#007396', category: 'Learning', size: 'small', tag: 'Learning' }
  ];

  const getCardClasses = (size: string) => {
    switch(size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-1 md:row-span-1';
      case 'small':
        return 'col-span-1 row-span-1';
      default:
        return 'col-span-1';
    }
  };

  const getCategoryGradient = (category: string) => {
    switch(category) {
      case 'Frontend':
        return 'from-cyan-500 to-blue-500';
      case 'Backend':
        return 'from-green-500 to-emerald-500';
      case 'Management':
        return 'from-purple-500 to-pink-500';
      case 'Learning':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div id='skills' className="min-h-screen bg-black text-white py-24 px-4 sm:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full mb-6 max-w-xs mx-auto"
          />

          <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
            My <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
            A diverse set of technologies and tools I've mastered and continue to explore
          </p>
        </motion.div>

        {/* Skills Collage Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-max gap-4 md:gap-6"
        >
          {allSkills.map((skill, index) => {
            const gradient = getCategoryGradient(skill.category);
            const cardClasses = getCardClasses(skill.size);
            const Icon = skill.icon;
            const isHovered = hoveredSkill === skill.name;

            return (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`${cardClasses} group relative h-32 md:h-40 cursor-default`}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Card Background */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 group-hover:opacity-15 transition-opacity duration-300`} />
                  
                  {/* Glass Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl border border-gray-700/50 group-hover:border-gray-600/80 rounded-2xl transition-all duration-300" />

                  {/* Content */}
                  <div className="relative w-full h-full p-5 md:p-6 flex flex-col justify-between">
                    {/* Icon */}
                    <motion.div
                      animate={{ 
                        scale: isHovered ? 1.1 : 1,
                        y: isHovered ? -4 : 0
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      className="flex items-start justify-between"
                    >
                      <Icon className="text-4xl md:text-5xl opacity-90" style={{ color: skill.color }} />
                      {skill.tag && (
                        <span className={`text-xs px-2 py-1 rounded-full font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                          {skill.tag}
                        </span>
                      )}
                    </motion.div>

                    {/* Skill Name & Level */}
                    <motion.div
                      animate={{ 
                        y: isHovered ? -2 : 0,
                        opacity: isHovered ? 1 : 0.95
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <h3 className="font-bold text-white text-sm md:text-base mb-2 leading-tight">
                        {skill.name}
                      </h3>
                      
                      {/* Mini Progress Bar */}
                      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.05 }}
                          className={`h-full bg-gradient-to-r ${gradient} rounded-full`}
                        />
                      </div>
                      
                      {/* Level Text */}
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-500">{skill.category}</span>
                        <span className={`text-xs font-bold transition-all duration-300 ${isHovered ? 'text-white' : 'text-gray-400'}`}>
                          {skill.level}%
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    animate={{ 
                      opacity: isHovered ? 0.3 : 0,
                      scale: isHovered ? 1 : 0.8
                    }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl blur-xl -z-10`}
                  />
                </div>

                {/* Border Accent on Hover */}
                <motion.div
                  animate={{ 
                    opacity: isHovered ? 1 : 0,
                    boxShadow: isHovered ? `0 0 30px rgba(6, 182, 212, 0.4)` : `0 0 0px rgba(6, 182, 212, 0)`
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 rounded-2xl border border-cyan-500/50 pointer-events-none"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full mb-6 max-w-xs mx-auto"
          />
          <p className="text-gray-500 text-base font-light">
            Constantly learning and improving my craft with emerging technologies
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;