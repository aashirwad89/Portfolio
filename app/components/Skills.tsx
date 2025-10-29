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

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      gradient: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'React.js', icon: FaReact, level: 90, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, level: 85, color: '#000000' },
        { name: 'JavaScript', icon: FaJs, level: 90, color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, level: 70, color: '#3178C6', tag: 'Intermediate' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: '#06B6D4' },
        { name: 'Bootstrap', icon: FaBootstrap, level: 85, color: '#7952B3' },
        { name: 'Framer Motion', icon: SiFramer, level: 80, color: '#FF0055' }
      ]
    },
    {
      title: 'Backend Development',
      gradient: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 90, color: '#339933' },
        { name: 'Express.js', icon: SiExpress, level: 85, color: '#000000' },
        { name: 'MongoDB', icon: SiMongodb, level: 88, color: '#47A248' },
        { name: 'Firebase', icon: FaFire, level: 80, color: '#FFCA28' },
        { name: 'Socket.IO', icon: SiSocketdotio, level: 70, color: '#010101', tag: 'Intermediate' },
        { name: 'WebRTC', icon: SiWebrtc, level: 70, color: '#333333', tag: 'Intermediate' }
      ]
    },
    {
      title: 'Management & Leadership',
      gradient: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Scrum', icon: FaTasks, level: 82, color: '#FF6B6B' },
        { name: 'Management', icon: FaChartLine, level: 88, color: '#A855F7' },
        { name: 'Leadership', icon: FaUsers, level: 90, color: '#EC4899' },
        { name: 'Communication', icon: FaComments, level: 92, color: '#F43F5E' }
      ]
    },
    {
      title: 'Currently Learning',
      gradient: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Java', icon: FaJava, level: 50, color: '#007396', tag: 'Learning' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div id='skills' className="min-h-screen bg-black text-white py-16 px-4 sm:px-8">
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
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-gray-400">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              variants={categoryVariants}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-1 h-8 bg-linear-to-b ${category.gradient} rounded-full`}></div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillVariants}
                    className="relative"
                  >
                    {/* Skill Info */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon 
                          className="text-2xl" 
                          style={{ color: skill.color }}
                        />
                        <span className="font-medium">{skill.name}</span>
                        {skill.tag && (
                          <span className="text-xs px-2 py-1 bg-gray-800 border border-gray-700 rounded-full text-gray-400">
                            {skill.tag}
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className={`h-full bg-linear-to-r ${category.gradient} rounded-full`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            Constantly exploring new technologies and improving existing skills
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;