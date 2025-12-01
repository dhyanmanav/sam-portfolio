import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ComicPanelProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  borderColor?: string;
  bgGradient?: string;
}

export function ComicPanel({ 
  children, 
  title, 
  subtitle,
  borderColor = 'border-purple-400',
  bgGradient = 'from-white/80 to-purple-50/80'
}: ComicPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -20, scale: 0.9 }}
      animate={{ opacity: 1, rotateY: 0, scale: 1 }}
      exit={{ opacity: 0, rotateY: 20, scale: 0.9 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      {/* Panel container with comic border */}
      <div className={`relative bg-gradient-to-br ${bgGradient} backdrop-blur-sm rounded-3xl border-4 ${borderColor} shadow-2xl overflow-hidden`}>
        {/* Comic-style corner decorations */}
        <div className="absolute top-0 left-0 w-16 h-16">
          <svg viewBox="0 0 50 50" className={`w-full h-full ${borderColor.replace('border-', 'text-')}`}>
            <circle cx="5" cy="5" r="3" fill="currentColor" />
            <line x1="5" y1="5" x2="20" y2="5" stroke="currentColor" strokeWidth="2" />
            <line x1="5" y1="5" x2="5" y2="20" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        
        <div className="absolute top-0 right-0 w-16 h-16">
          <svg viewBox="0 0 50 50" className={`w-full h-full ${borderColor.replace('border-', 'text-')}`}>
            <circle cx="45" cy="5" r="3" fill="currentColor" />
            <line x1="45" y1="5" x2="30" y2="5" stroke="currentColor" strokeWidth="2" />
            <line x1="45" y1="5" x2="45" y2="20" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        
        {/* Header */}
        {(title || subtitle) && (
          <div className="relative px-8 py-6 border-b-4 border-dashed border-purple-300">
            {title && (
              <motion.h2
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl text-purple-900 font-comic relative inline-block"
              >
                {title}
                {/* Underline decoration */}
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 10">
                  <path
                    d="M 0 5 Q 50 2, 100 5 T 200 5"
                    stroke="#a78bfa"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-purple-600 mt-2 italic"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        
        {/* Content */}
        <div className="p-8">
          {children}
        </div>
        
        {/* Bottom corner decorations */}
        <div className="absolute bottom-0 left-0 w-16 h-16">
          <svg viewBox="0 0 50 50" className={`w-full h-full ${borderColor.replace('border-', 'text-')}`}>
            <circle cx="5" cy="45" r="3" fill="currentColor" />
            <line x1="5" y1="45" x2="20" y2="45" stroke="currentColor" strokeWidth="2" />
            <line x1="5" y1="45" x2="5" y2="30" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        
        <div className="absolute bottom-0 right-0 w-16 h-16">
          <svg viewBox="0 0 50 50" className={`w-full h-full ${borderColor.replace('border-', 'text-')}`}>
            <circle cx="45" cy="45" r="3" fill="currentColor" />
            <line x1="45" y1="45" x2="30" y2="45" stroke="currentColor" strokeWidth="2" />
            <line x1="45" y1="45" x2="45" y2="30" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
