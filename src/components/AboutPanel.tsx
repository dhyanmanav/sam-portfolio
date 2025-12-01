import { motion } from 'motion/react';
import { ComicPanel } from './ComicPanel';
import { GraduationCap, Heart, Sparkles, Zap } from 'lucide-react';

export function AboutPanel() {
  const facts = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      label: 'Education',
      value: 'B.E in Computer Science',
      detail: 'Global Academy Of Technology',
      extra: 'CGPA: 8.9/10.0',
      color: 'bg-blue-100 border-blue-400 text-blue-700'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      label: 'USN',
      value: '1GA23CS144',
      detail: '2023-2027',
      color: 'bg-purple-100 border-purple-400 text-purple-700'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      label: 'Passionate About',
      value: 'AI/ML & Web Development',
      detail: 'Creating magical experiences with code',
      color: 'bg-pink-100 border-pink-400 text-pink-700'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      label: 'Quick Learner',
      value: 'Always Evolving',
      detail: 'Eager to contribute to real-world projects',
      color: 'bg-yellow-100 border-yellow-400 text-yellow-700'
    }
  ];

  return (
    <ComicPanel
      title="Origin Story"
      subtitle="The beginning of an epic journey"
      borderColor="border-blue-400"
      bgGradient="from-white/90 to-blue-50/90"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-2xl border-3 border-purple-300"
        >
          <p className="text-xl text-gray-800 leading-relaxed">
            Motivated Software Intern with a foundation in software development, web programming, and debugging. 
            Passionate about <span className="text-purple-600 font-semibold">AI/ML</span>, quick to adapt, and eager to contribute to real-world 
            projects while continuously learning and improving.
          </p>
          {/* Speech bubble tail */}
          <div className="absolute -top-3 left-12 w-0 h-0 border-l-6 border-r-6 border-b-6 border-l-transparent border-r-transparent border-b-purple-300" />
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className={`${fact.color} p-6 rounded-2xl border-3 shadow-lg relative overflow-hidden group`}
            >
              {/* Background pattern */}
              <div className="absolute top-0 right-0 opacity-10 transform rotate-12 scale-150">
                {fact.icon}
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white/50 rounded-lg">
                    {fact.icon}
                  </div>
                  <div className="text-sm opacity-75">{fact.label}</div>
                </div>
                <div className="text-2xl mb-1">{fact.value}</div>
                <div className="text-sm opacity-80">{fact.detail}</div>
                {fact.extra && (
                  <div className="text-xs mt-2 opacity-70 italic">{fact.extra}</div>
                )}
              </div>
              
              {/* Hover sparkle */}
              <motion.div
                className="absolute top-2 right-2 text-2xl opacity-0 group-hover:opacity-100"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✦
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border-3 border-purple-300"
        >
          <h3 className="text-2xl text-purple-900 mb-4 font-comic">Areas of Interest ✨</h3>
          <div className="flex flex-wrap gap-3">
            {['Artificial Intelligence', 'Machine Learning', 'Web Development', 'IoT'].map((interest, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="px-4 py-2 bg-white border-2 border-purple-400 rounded-full shadow-md text-purple-700 cursor-default"
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Doodles */}
        <div className="absolute -right-4 top-20 text-6xl opacity-20 transform rotate-12">
          {'</>'}
        </div>
        <div className="absolute -left-4 bottom-20 text-4xl opacity-20">
          🤖
        </div>
      </div>
    </ComicPanel>
  );
}
