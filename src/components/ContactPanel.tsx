import { motion } from 'motion/react';
import { ComicPanel } from './ComicPanel';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

export function ContactPanel() {
  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      label: 'Email',
      value: 'sammitaabhay05@gmail.com',
      link: 'mailto:sammitaabhay05@gmail.com',
      color: 'from-blue-100 to-cyan-100',
      borderColor: 'border-blue-500',
      emoji: '📧'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      label: 'Phone',
      value: '7899823266 / 7019857512',
      link: 'tel:7899823266',
      color: 'from-green-100 to-emerald-100',
      borderColor: 'border-green-500',
      emoji: '📱'
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: '#',
      color: 'from-purple-100 to-blue-100',
      borderColor: 'border-purple-500',
      emoji: '💼'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      label: 'Location',
      value: 'Global Academy Of Technology',
      link: '#',
      color: 'from-pink-100 to-rose-100',
      borderColor: 'border-pink-500',
      emoji: '📍'
    }
  ];

  return (
    <ComicPanel
      title="Let's Connect!"
      subtitle="Ready to embark on new adventures together"
      borderColor="border-blue-500"
      bgGradient="from-white/90 to-blue-50/90"
    >
      <div className="space-y-8">
        {/* Speech bubble intro */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="relative bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-3xl border-4 border-purple-400 shadow-xl mx-auto max-w-2xl"
        >
          <div className="text-center space-y-4">
            <motion.div
              className="text-6xl mb-4"
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              👋
            </motion.div>
            <p className="text-2xl text-gray-800">
              Have an exciting project or opportunity?
            </p>
            <p className="text-xl text-purple-700 italic">
              Let's create something magical together! ✨
            </p>
          </div>
          
          {/* Speech bubble tail */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-12 border-r-12 border-t-12 border-l-transparent border-r-transparent border-t-purple-400" />
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              initial={{ opacity: 0, y: 30, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: 2, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative block"
            >
              <div className={`bg-gradient-to-br ${method.color} p-6 rounded-2xl border-4 ${method.borderColor} shadow-xl relative overflow-hidden`}>
                {/* Emoji badge */}
                <motion.div
                  className="absolute -top-3 -right-3 text-4xl"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {method.emoji}
                </motion.div>
                
                {/* Content */}
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/80 rounded-xl text-gray-700 group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-600 mb-1">{method.label}</div>
                    <div className="text-lg text-gray-900 break-all">{method.value}</div>
                  </div>
                </div>
                
                {/* Hover arrow */}
                <motion.div
                  className="absolute bottom-3 right-3 text-2xl opacity-0 group-hover:opacity-100"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.div>
                
                {/* Sparkle effect */}
                <motion.div
                  className="absolute top-3 left-3 text-xl opacity-0 group-hover:opacity-100"
                  animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✦
                </motion.div>
                
                {/* Comic speed lines */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1/2 opacity-0 group-hover:opacity-10 pointer-events-none"
                  initial={false}
                >
                  <svg viewBox="0 0 200 100" className="w-full h-full">
                    <line x1="0" y1="20" x2="200" y2="20" stroke="currentColor" strokeWidth="4" />
                    <line x1="0" y1="40" x2="200" y2="40" stroke="currentColor" strokeWidth="3" />
                    <line x1="0" y1="60" x2="200" y2="60" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Illustrated laptop/mail scene */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative bg-gradient-to-br from-yellow-50 to-purple-50 p-8 rounded-3xl border-4 border-dashed border-purple-300 mt-8"
        >
          <div className="text-center space-y-4">
            <motion.div
              className="flex justify-center gap-4 text-6xl mb-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span>💌</span>
              <span>💻</span>
              <span>🚀</span>
            </motion.div>
            <h3 className="text-3xl text-purple-900 font-comic">
              Open to Opportunities
            </h3>
            <p className="text-xl text-gray-700 max-w-xl mx-auto">
              Currently seeking exciting opportunities in <strong>AI/ML</strong>, <strong>Web Development</strong>, 
              and <strong>Software Engineering</strong>. Let's build the future together!
            </p>
            
            {/* Sticker-style badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {['Available', 'Quick Learner', 'Team Player', 'Innovation Driven'].map((badge, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="px-4 py-2 bg-white border-3 border-purple-500 rounded-full shadow-lg text-purple-700 cursor-default"
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -right-8 top-1/4 text-6xl opacity-10 transform rotate-12">
        📮
      </div>
      <div className="absolute -left-8 bottom-1/4 text-5xl opacity-10 transform -rotate-12">
        💡
      </div>
    </ComicPanel>
  );
}
