import { motion } from 'motion/react';
import { ComicPanel } from './ComicPanel';
import { Code, Database, Wrench, Cpu, Award, BookOpen } from 'lucide-react';

export function SkillsPanel() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="w-8 h-8" />,
      skills: ['C', 'Python', 'Java', 'JavaScript', 'HTML', 'SQL'],
      color: 'from-blue-100 to-cyan-100',
      borderColor: 'border-blue-500',
      emoji: '💻'
    },
    {
      title: 'Frameworks',
      icon: <Database className="w-8 h-8" />,
      skills: ['React', 'Node.js', 'Bootstrap'],
      color: 'from-purple-100 to-pink-100',
      borderColor: 'border-purple-500',
      emoji: '⚛️'
    },
    {
      title: 'Developer Tools',
      icon: <Wrench className="w-8 h-8" />,
      skills: ['VS Code', 'Git', 'Problem Solving'],
      color: 'from-green-100 to-emerald-100',
      borderColor: 'border-green-500',
      emoji: '🛠️'
    },
    {
      title: 'Operating Systems',
      icon: <Cpu className="w-8 h-8" />,
      skills: ['Windows', 'Linux'],
      color: 'from-yellow-100 to-orange-100',
      borderColor: 'border-yellow-500',
      emoji: '🖥️'
    },
    {
      title: 'Soft Skills',
      icon: <Award className="w-8 h-8" />,
      skills: ['Leadership', 'Event Management', 'Teamwork', 'Mentorship'],
      color: 'from-pink-100 to-rose-100',
      borderColor: 'border-pink-500',
      emoji: '🌟'
    },
    {
      title: 'Coursework',
      icon: <BookOpen className="w-8 h-8" />,
      skills: ['Data Structures', 'Algorithms', 'Operating Systems', 'OOP', 'AI/ML', 'React'],
      color: 'from-indigo-100 to-purple-100',
      borderColor: 'border-indigo-500',
      emoji: '📚'
    }
  ];

  const certifications = [
    { title: 'Machine Learning with AI', provider: 'Oracle', date: 'Sept 2025' },
    { title: 'Generative AI Fundamentals', provider: 'Google Cloud Skills Boost', date: 'July 2025' },
    { title: 'Complete Web Developer Course', provider: 'Infosys SpringBoard', date: 'March 2025' },
    { title: 'Artificial Intelligence - Gen AI', provider: 'Udemy', date: 'Oct 2024' },
    { title: 'Web Development Courses', provider: 'Udemy', date: 'Oct 2024' },
    { title: 'Ethical Hacking', provider: 'Udemy', date: 'Oct 2024' },
    { title: 'Python Complete Course', provider: 'Infosys SpringBoard', date: 'Nov 2024' }
  ];

  return (
    <ComicPanel
      title="Power Arsenal"
      subtitle="Skills & abilities unlocked"
      borderColor="border-purple-500"
      bgGradient="from-white/90 to-purple-50/90"
    >
      <div className="space-y-8">
        {/* Skill Tree */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl text-purple-900 mb-6 font-comic flex items-center gap-2"
          >
            <span className="text-4xl">🎯</span>
            Skill Tree
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: categoryIndex * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className={`bg-gradient-to-br ${category.color} p-5 rounded-2xl border-4 ${category.borderColor} shadow-xl relative overflow-hidden`}>
                  {/* Emoji badge */}
                  <motion.div
                    className="absolute -top-3 -right-3 text-4xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: categoryIndex * 0.2 }}
                  >
                    {category.emoji}
                  </motion.div>
                  
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/80 rounded-lg text-gray-700">
                      {category.icon}
                    </div>
                    <h4 className="text-xl text-gray-900 font-comic">{category.title}</h4>
                  </div>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-white/80 border-2 border-gray-400 rounded-full text-sm text-gray-700 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Sparkle on hover */}
                  <motion.div
                    className="absolute top-3 left-3 text-xl opacity-0 group-hover:opacity-100"
                    animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✦
                  </motion.div>
                  
                  {/* Comic lines decoration */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 opacity-10">
                    <svg viewBox="0 0 100 100">
                      <line x1="0" y1="80" x2="100" y2="80" stroke="currentColor" strokeWidth="6" />
                      <line x1="0" y1="90" x2="100" y2="90" stroke="currentColor" strokeWidth="4" />
                      <line x1="0" y1="100" x2="100" y2="100" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h3 className="text-3xl text-purple-900 mb-6 font-comic flex items-center gap-2">
            <span className="text-4xl">🏆</span>
            Certifications Earned
          </h3>
          
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl border-4 border-yellow-400 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-3 p-4 bg-white/80 rounded-xl border-2 border-yellow-300 shadow-md group"
                >
                  <motion.div
                    className="text-2xl mt-1"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
                  >
                    📜
                  </motion.div>
                  <div className="flex-1">
                    <h5 className="text-gray-900 font-semibold">{cert.title}</h5>
                    <p className="text-sm text-purple-600">{cert.provider}</p>
                    <p className="text-xs text-gray-500 mt-1">📅 {cert.date}</p>
                  </div>
                  <motion.div
                    className="text-yellow-500 opacity-0 group-hover:opacity-100"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ⭐
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -right-6 top-1/4 text-5xl opacity-10 transform rotate-12">
        🎨
      </div>
      <div className="absolute -left-6 bottom-1/3 text-4xl opacity-10 transform -rotate-12">
        🔧
      </div>
    </ComicPanel>
  );
}
