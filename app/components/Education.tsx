"use client"
import { FaGraduationCap, FaSchool, FaBook } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science & Engineering',
      institution: 'LNCT Group of Colleges',
      period: 'Sept 2023 - June 2027',
      status: 'Pursuing',
      icon: FaGraduationCap,
      color: '#06b6d4'
    },
    {
      degree: 'Higher Secondary (12th)',
      field: 'PCM (Physics, Chemistry, Mathematics)',
      institution: 'Secondary School',
      period: '2023',
      status: 'Completed',
      icon: FaBook,
      color: '#8b5cf6'
    },
    {
      degree: 'Secondary School (10th)',
      field: 'General Education',
      institution: 'Secondary School',
      period: '2021',
      status: 'Completed',
      icon: FaSchool,
      color: '#10b981'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div id='education' className="min-h-screen bg-black text-white py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="text-cyan-400">Education</span>
          </h2>
          <p className="text-gray-400">
            My academic journey and qualifications
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gray-800"></div>

          {/* Education Cards */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Dot */}
                <div 
                  className="hidden md:block absolute left-8 top-6 w-4 h-4 rounded-full border-4 border-black -ml-2"
                  style={{ backgroundColor: edu.color }}
                ></div>

                {/* Card */}
                <div className="md:ml-20 bg-gray-900 border border-gray-800 rounded-lg p-5">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${edu.color}15` }}
                    >
                      <edu.icon className="text-xl" style={{ color: edu.color }} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                          <p className="text-sm text-gray-400">{edu.field}</p>
                        </div>
                        {edu.status === 'Pursuing' && (
                          <span className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                            Pursuing
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-2">
                        <span>📍 {edu.institution}</span>
                        <span>📅 {edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            Continuously learning and expanding my knowledge in technology
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;