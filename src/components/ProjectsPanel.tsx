import { motion } from 'motion/react';
import { ComicPanel } from './ComicPanel';
import { Cloud, Brain, Star, Gamepad2 } from 'lucide-react';

export function ProjectsPanel() {
  const projects = [
    {
      title: 'AquaHarvest Pro',
      subtitle: 'Rooftop Rainwater Harvesting Assessment Tool',
      icon: <Cloud className="w-12 h-12" />,
      tech: ['React.js', 'Tailwind CSS', 'GIS', 'AI', 'PWA'],
      date: 'Oct 2025',
      description: 'An AI-powered web application for Smart India Hackathon 2025 to assess rooftop rainwater harvesting potential, providing real-time feasibility analysis, engineering recommendations, and economic insights for sustainable water management.',
      color: 'from-blue-100 to-cyan-100',
      borderColor: 'border-blue-500',
      emoji: '💧'
    },
    {
      title: 'Driver Distraction Detection',
      subtitle: 'Web App with ML Integration',
      icon: <Brain className="w-12 h-12" />,
      tech: ['Python', 'XGBoost', 'Flask/FastAPI', 'CNN', 'Deep Learning'],
      date: 'Sep 2025',
      description: 'A production-ready web application integrating a pre-trained ML model with DeepLearning CNN and heatmaps for real-time prediction APIs using Flask/FastAPI for seamless deployment.',
      color: 'from-purple-100 to-pink-100',
      borderColor: 'border-purple-500',
      emoji: '🚗'
    },
    {
      title: 'Flipkart CSAT Score',
      subtitle: 'Customer Satisfaction Prediction',
      icon: <Star className="w-12 h-12" />,
      tech: ['AI', 'Machine Learning', 'NLP', 'Python', 'Scikit-learn'],
      date: 'Jun 2025',
      description: 'Built a customer satisfaction (CSAT) prediction system using three ML models. Used NLP techniques to analyze reviews and trained ensemble models for accurate CSAT score classification. Automated analysis pipeline enhances customer feedback insights.',
      color: 'from-yellow-100 to-orange-100',
      borderColor: 'border-yellow-500',
      emoji: '⭐'
    },
    {
      title: 'MatchMoji Game',
      subtitle: 'Interactive Memory Game',
      icon: <Gamepad2 className="w-12 h-12" />,
      tech: ['HTML', 'CSS', 'JavaScript', 'Node'],
      date: 'Feb 2025',
      description: 'Developed a fully working interactive game focusing on responsive design, engaging visuals, and intuitive controls that helps in focusing and memory building. Implemented animations, event handling, and real-time interactivity using JavaScript.',
      color: 'from-green-100 to-emerald-100',
      borderColor: 'border-green-500',
      emoji: '🎮'
    }
  ];

  return (
    <ComicPanel
      title="Epic Creations"
      subtitle="Projects that bring ideas to life"
      borderColor="border-purple-500"
      bgGradient="from-white/90 to-purple-50/90"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.2 + index * 0.15, type: "spring" }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="group relative"
          >
            {/* Comic-style project card */}
            <div className={`relative bg-gradient-to-br ${project.color} p-6 rounded-2xl border-4 ${project.borderColor} shadow-xl overflow-hidden`}>
              {/* Emoji badge */}
              <motion.div
                className="absolute -top-3 -right-3 text-5xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {project.emoji}
              </motion.div>
              
              {/* Icon */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 bg-white/80 rounded-xl ${project.borderColor.replace('border-', 'text-')}`}>
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl text-gray-900 font-comic mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-600 italic">{project.subtitle}</p>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-white/70 border-2 border-gray-300 rounded-full text-xs text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Date badge */}
              <div className="inline-block px-3 py-1 bg-white border-2 border-gray-400 rounded-lg text-sm text-gray-600">
                📅 {project.date}
              </div>
              
              {/* Comic effect lines */}
              <motion.div
                className="absolute bottom-0 right-0 w-32 h-32 opacity-10"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <svg viewBox="0 0 100 100">
                  <line x1="20" y1="80" x2="80" y2="80" stroke="currentColor" strokeWidth="8" />
                  <line x1="30" y1="90" x2="90" y2="90" stroke="currentColor" strokeWidth="6" />
                  <line x1="40" y1="100" x2="100" y2="100" stroke="currentColor" strokeWidth="4" />
                </svg>
              </motion.div>
              
              {/* Hover sparkle */}
              <motion.div
                className="absolute top-4 left-4 text-2xl opacity-0 group-hover:opacity-100"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✦
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Decorative doodles */}
      <div className="absolute -right-8 top-1/4 text-6xl opacity-10 transform rotate-12">
        💻
      </div>
      <div className="absolute -left-8 bottom-1/4 text-5xl opacity-10 transform -rotate-12">
        🚀
      </div>
    </ComicPanel>
  );
}
