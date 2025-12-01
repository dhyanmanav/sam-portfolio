import { motion } from 'motion/react';
import { CharacterAvatar } from './CharacterAvatar';

export function Hero() {
  return (
    <div className="relative min-h-screen md:min-h-[600px] flex items-center justify-center overflow-hidden py-8 md:py-20 px-4">
      {/* Open Book Illustration */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full max-w-6xl"
      >
        {/* Book Base - Responsive Layout */}
        <div className="relative flex flex-col md:flex-row gap-4 md:gap-0">
          {/* Left Page - Avatar Section */}
          <motion.div
            initial={{ rotateY: -30, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full md:w-1/2 h-64 md:h-96 bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-3xl md:rounded-l-3xl md:rounded-r-none shadow-2xl border-2 md:border-r-0 md:border-r-2 border-purple-200"
            style={{ transformOrigin: 'right center' }}
          >
            <div className="p-6 md:p-8 h-full flex flex-col justify-center items-center relative">
              {/* Decorative corner */}
              <div className="absolute top-2 left-2 md:top-4 md:left-4">
                <svg width="40" height="40" viewBox="0 0 60 60" className="text-purple-300 md:w-[60px] md:h-[60px]">
                  <path
                    d="M 10 10 Q 10 30, 30 30 T 50 50"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <circle cx="10" cy="10" r="3" fill="currentColor" />
                  <circle cx="30" cy="30" r="3" fill="currentColor" />
                  <circle cx="50" cy="50" r="3" fill="currentColor" />
                </svg>
              </div>
              
              {/* Character Avatar */}
              <CharacterAvatar />
              
              {/* Sparkles around avatar */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute hidden md:block"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  <span className="text-2xl">✦</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right Page - Text Content */}
          <motion.div
            initial={{ rotateY: 30, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full md:w-1/2 min-h-[400px] md:h-96 bg-gradient-to-br from-blue-50 via-purple-50 to-white rounded-3xl md:rounded-r-3xl md:rounded-l-none shadow-2xl border-2 md:border-l-0 md:border-l-2 border-purple-200"
            style={{ transformOrigin: 'left center' }}
          >
            <div className="p-6 md:p-8 pb-16 md:pb-12 h-full flex flex-col justify-center relative">
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="space-y-3 md:space-y-4"
              >
                <div className="relative">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-purple-900 mb-2 font-comic relative inline-block">
                    Hi, I'm
                    <motion.span
                      className="absolute -top-6 -right-8 md:-top-8 md:-right-12"
                      animate={{ rotate: [0, 10, 0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-2xl md:text-4xl">👋</span>
                    </motion.span>
                  </h1>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent font-comic">
                  Sammita Abhay
                </h2>
                
                <div className="space-y-1 md:space-y-2 text-gray-700">
                  <p className="text-base sm:text-lg md:text-xl">Software Developer & AI/ML Enthusiast</p>
                  <p className="text-sm sm:text-base md:text-lg opacity-80">Global Academy Of Technology</p>
                </div>
                
                {/* Subtitle with comic effect */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                  className="inline-block bg-yellow-100 px-3 py-2 md:px-4 md:py-2 rounded-2xl border-2 border-yellow-400 shadow-md relative max-w-full"
                >
                  <p className="text-sm sm:text-base md:text-lg text-gray-800 italic">
                    "Turning code into magical experiences ✨"
                  </p>
                </motion.div>
              </motion.div>
              
              {/* Code symbols decoration */}
              <div className="absolute bottom-4 right-4 opacity-20">
                <svg width="60" height="60" viewBox="0 0 80 80" className="text-purple-600 md:w-[80px] md:h-[80px]">
                  <text x="10" y="30" fontSize="30" fill="currentColor" fontFamily="monospace">{'<>'}</text>
                  <text x="15" y="60" fontSize="20" fill="currentColor" fontFamily="monospace">{'{ }'}</text>
                </svg>
              </div>
            </div>
          </motion.div>
          
          {/* Book spine shadow - Desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 w-4 h-96 bg-gradient-to-r from-purple-300/50 to-purple-400/50 transform -translate-x-1/2 shadow-xl rounded-sm" />
        </div>
        
        {/* Floating island base (subtle) - Desktop only */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:block absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-[500px] h-32 bg-gradient-to-b from-purple-200/40 to-transparent rounded-full blur-xl"
        />
      </motion.div>
    </div>
  );
}