import { motion } from 'motion/react';
import { ComicPanel } from './ComicPanel';
import { Briefcase, Award, Users, Lightbulb } from 'lucide-react';

export function ExperiencePanel() {
  const experiences = [
    {
      type: 'internship',
      title: 'AI/ML Intern',
      company: 'Labmentix',
      period: 'Jul 2025 - Sep 2025',
      icon: <Briefcase className="w-8 h-8" />,
      achievements: [
        'Worked on real-world AI/ML projects, focusing on model building, data preprocessing, and performance tuning',
        'Achieved improved prediction accuracy and contributed to automation of workflows'
      ],
      color: 'from-purple-100 to-blue-100',
      borderColor: 'border-purple-500'
    }
  ];

  const responsibilities = [
    {
      title: 'Head - Incubation Center',
      organization: 'Global Academy',
      year: '2024',
      icon: <Lightbulb className="w-8 h-8" />,
      description: 'Led initiatives encouraging innovation and entrepreneurship among students; mentored project development and coordinated startup ideas. Strengthened leadership, strategic thinking, and actionable execution.',
      color: 'from-yellow-100 to-orange-100',
      borderColor: 'border-yellow-500'
    },
    {
      title: 'Member - IET Chapter',
      organization: 'Global Academy of Technology',
      year: '2024',
      icon: <Users className="w-8 h-8" />,
      description: 'Engaged in leadership development, public speaking, debates, and startup idealization through student chapter initiatives.',
      color: 'from-green-100 to-emerald-100',
      borderColor: 'border-green-500'
    },
    {
      title: 'Technical Team Member',
      organization: 'IT Virtuoso CSE Club',
      year: '2025',
      icon: <Users className="w-8 h-8" />,
      description: 'Contributed to the development and organization of technical events, workshops, and coding competitions, strengthening skills in software development, teamwork, and innovation.',
      color: 'from-blue-100 to-cyan-100',
      borderColor: 'border-blue-500'
    },
    {
      title: 'Creative Team Member',
      organization: 'Cultural and Academic Events',
      year: '2024',
      icon: <Award className="w-8 h-8" />,
      description: 'Contributed to planning, coordination, and execution of cross-functional college-wide programs to enhance student engagement.',
      color: 'from-pink-100 to-purple-100',
      borderColor: 'border-pink-500'
    }
  ];

  return (
    <ComicPanel
      title="Quest Log"
      subtitle="Adventures & achievements along the way"
      borderColor="border-blue-500"
      bgGradient="from-white/90 to-blue-50/90"
    >
      <div className="space-y-8">
        {/* Experience Timeline */}
        <div className="relative">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl text-purple-900 mb-6 font-comic"
          >
            Professional Journey 🚀
          </motion.h3>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.2 }}
              className="relative"
            >
              <div className={`bg-gradient-to-br ${exp.color} p-6 rounded-2xl border-4 ${exp.borderColor} shadow-xl`}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/80 rounded-xl text-purple-700">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl text-gray-900 font-comic">{exp.title}</h4>
                    <p className="text-lg text-purple-700">{exp.company}</p>
                    <p className="text-sm text-gray-600 mb-3">📅 {exp.period}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">✦</span>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Level up badge */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-yellow-400 border-4 border-yellow-600 rounded-full w-16 h-16 flex items-center justify-center"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-2xl">⭐</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Positions of Responsibility */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl text-purple-900 mb-6 font-comic"
          >
            Leadership Quests 🏆
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {responsibilities.map((resp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="group relative"
              >
                <div className={`bg-gradient-to-br ${resp.color} p-5 rounded-2xl border-3 ${resp.borderColor} shadow-lg`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-white/80 rounded-lg text-gray-700">
                      {resp.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl text-gray-900">{resp.title}</h4>
                      <p className="text-sm text-gray-600">{resp.organization}</p>
                    </div>
                    <div className="px-2 py-1 bg-white border-2 border-gray-400 rounded-lg text-sm text-gray-600">
                      {resp.year}
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {resp.description}
                  </p>
                  
                  {/* Hover effect */}
                  <motion.div
                    className="absolute top-2 right-2 text-xl opacity-0 group-hover:opacity-100"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✦
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-2xl border-4 border-yellow-500 shadow-xl"
        >
          <h3 className="text-2xl text-gray-900 mb-4 font-comic flex items-center gap-2">
            <span className="text-3xl">🏅</span>
            Achievements Unlocked
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-yellow-600 text-xl">⭐</span>
              <p className="text-gray-700">
                <strong>Student Head of Incubation Center</strong> - Successfully mentored startups and innovative projects (2024)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-600 text-xl">⭐</span>
              <p className="text-gray-700">
                <strong>VTU Karnataka Fest 2025</strong> - Led musical events with wide participation, enhancing event management skills
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </ComicPanel>
  );
}
