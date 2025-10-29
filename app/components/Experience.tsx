"use client"
import {  FaCalendarAlt, FaMapMarkerAlt, FaCode, FaChalkboardTeacher, FaTasks, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: 'Project Manager',
      company: 'BodhaSoft',
      duration: '2 Months',
      period: 'Oct 2025 - Present',
      location: 'Remote',
      type: 'Current Position',
      description: [
        'Leading and managing multiple development projects from conception to deployment',
        'Coordinating cross-functional teams and ensuring timely project delivery',
        'Implementing agile methodologies and sprint planning'
      ],
      skills: ['Project Management', 'Agile', 'Team Leadership', 'Scrum'],
      icon: FaTasks,
      gradient: 'from-cyan-500 to-blue-500',
      current: true
    },
    {
      role: 'MERN Stack Tutor',
      company: 'BodhaSoft',
      duration: '1 Month',
      period: 'Sep 2025 - Oct 2025',
      location: 'Remote',
      type: 'Internship',
      description: [
        'Taught MERN stack development to students and professionals',
        'Created comprehensive learning materials and code examples',
        'Conducted live Zoom hands-on coding sessions and project guidance'
      ],
      skills: ['MongoDB', 'Express', 'React', 'Node.js', 'Teaching', 'TypeScript'],
      icon: FaChalkboardTeacher,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      role: 'Full Stack Developer',
      company: 'CareerHub',
      duration: '3 Months',
      period: 'July 2025 - Sep 2025',
      location: 'Remote',
      type: 'Full-time',
      description: [
        'Developed a full-stack web applications with the team',
        'Implemented responsive UI components and RESTful APIs',
        'Optimized application Interface and database queries'
      ],
      skills: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Framer-Motion'],
      icon: FaCode,
      gradient: 'from-green-500 to-teal-500'
    },
    {
      role: 'Freelance Developer',
      company: 'Self-Employed',
      duration: '5 Months',
      period: 'Dec 2024 - Apr 2024',
      location: 'Remote',
      type: 'Freelance',
      description: [
        'Built custom web applications for various clients',
        'Delivered end-to-end solutions from design to deployment',
        'Managed client relationships and project timelines'
      ],
      skills: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Firebase', 'TypeScript', 'JavaScript'],
      icon: FaLaptopCode,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div id='experience' className="min-h-screen bg-black text-white py-16 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Work <span className="text-cyan-400">Experience</span>
          </h2>
          <p className="text-gray-400">
            My journey through 2024-2025
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-cyan-500 via-purple-500 to-pink-500"></div>

          {/* Experience Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative mb-12 ${
                    index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 top-6 transform -translate-x-1/2 z-10">
                    <div className={`w-4 h-4 bg-linear-to-r ${exp.gradient} rounded-full border-4 border-black`}></div>
                  </div>

                  {/* Card */}
                  <div
                    className={`bg-gray-900 border border-gray-800 rounded-lg p-5 ${
                      index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'
                    }`}
                  >
                    {/* Current Badge */}
                    {exp.current && (
                      <div className="absolute -top-2 -right-2 bg-green-500 px-3 py-1 rounded-full text-xs font-bold">
                        CURRENT
                      </div>
                    )}

                    {/* Icon & Company */}
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                      <div className={`w-12 h-12 bg-linear-to-r ${exp.gradient} rounded-lg flex items-center justify-center shrink-0`}>
                        <Icon className="text-xl text-white" />
                      </div>
                      
                      <div className={index % 2 === 1 ? 'text-right' : ''}>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-cyan-400">
                            {exp.company}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">{exp.type}</span>
                      </div>
                    </div>

                    {/* Role */}
                    <h3 className={`text-xl font-bold mb-3 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                      {exp.role}
                    </h3>

                    {/* Meta Info */}
                    <div className={`flex flex-wrap gap-3 mb-4 text-xs text-gray-400 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                      <div className="flex items-center gap-1">
                        <FaCalendarAlt />
                        <span>{exp.duration} • {exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaMapMarkerAlt />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className={`space-y-2 mb-4 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-400 flex items-start gap-2"
                        >
                          <span className={`text-cyan-400 mt-0.5 shrink-0 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                            •
                          </span>
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs text-gray-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;