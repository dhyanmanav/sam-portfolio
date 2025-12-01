import { motion } from 'motion/react';

export function FloatingElements() {
  const elements = [
    { emoji: '✨', size: 'text-2xl', delay: 0, x: '10vw', y: '20vh' },
    { emoji: '⭐', size: 'text-3xl', delay: 0.5, x: '80vw', y: '30vh' },
    { emoji: '💫', size: 'text-xl', delay: 1, x: '15vw', y: '70vh' },
    { emoji: '✦', size: 'text-2xl', delay: 1.5, x: '85vw', y: '60vh' },
    { emoji: '🌟', size: 'text-xl', delay: 2, x: '50vw', y: '80vh' },
    { emoji: '⚡', size: 'text-2xl', delay: 2.5, x: '70vw', y: '15vh' },
    { emoji: '💻', size: 'text-xl', delay: 3, x: '25vw', y: '50vh' },
    { emoji: '🚀', size: 'text-2xl', delay: 3.5, x: '90vw', y: '85vh' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} opacity-40`}
          style={{
            left: element.x,
            top: element.y,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
        >
          {element.emoji}
        </motion.div>
      ))}
    </div>
  );
}
