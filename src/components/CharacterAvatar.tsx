import { motion } from 'motion/react';

export function CharacterAvatar() {
  return (
    <motion.div
      className="relative w-32 h-32"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Avatar circle with gradient */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 via-blue-400 to-purple-500 p-1">
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
          {/* Illustrated character */}
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Face */}
            <circle cx="50" cy="45" r="35" fill="#ffd6b8" />
            
            {/* Hair */}
            <path
              d="M 20 35 Q 15 20, 25 15 Q 35 10, 50 12 Q 65 10, 75 15 Q 85 20, 80 35 Q 75 25, 70 30 Q 65 20, 60 25 Q 55 18, 50 20 Q 45 18, 40 25 Q 35 20, 30 30 Q 25 25, 20 35"
              fill="#2d1b00"
            />
            
            {/* Eyes */}
            <motion.g
              animate={{ scaleY: [1, 0.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            >
              <ellipse cx="38" cy="42" rx="4" ry="6" fill="#000" />
              <ellipse cx="62" cy="42" rx="4" ry="6" fill="#000" />
            </motion.g>
            
            {/* Sparkle in eyes */}
            <circle cx="40" cy="40" r="1.5" fill="#fff" />
            <circle cx="64" cy="40" r="1.5" fill="#fff" />
            
            {/* Smile */}
            <path
              d="M 35 55 Q 50 62, 65 55"
              stroke="#000"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            
            {/* Rosy cheeks */}
            <circle cx="30" cy="50" r="5" fill="#ffb3ba" opacity="0.5" />
            <circle cx="70" cy="50" r="5" fill="#ffb3ba" opacity="0.5" />
            
            {/* Laptop in hands */}
            <g transform="translate(50, 75)">
              <rect x="-15" y="-5" width="30" height="18" rx="2" fill="#6366f1" stroke="#4f46e5" strokeWidth="1" />
              <rect x="-13" y="-3" width="26" height="14" fill="#93c5fd" />
              <line x1="-10" y1="0" x2="-6" y2="0" stroke="#4f46e5" strokeWidth="0.5" />
              <line x1="-10" y1="2" x2="-4" y2="2" stroke="#4f46e5" strokeWidth="0.5" />
              <line x1="-10" y1="4" x2="-7" y2="4" stroke="#4f46e5" strokeWidth="0.5" />
            </g>
          </svg>
        </div>
      </div>
      
      {/* Magical glow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-purple-400/30 blur-xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
}
