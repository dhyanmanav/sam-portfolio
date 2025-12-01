import { motion } from 'motion/react';

type Chapter = 'about' | 'projects' | 'experience' | 'skills' | 'contact';

interface NavigationProps {
  activeChapter: Chapter | null;
  onChapterSelect: (chapter: Chapter) => void;
}

const chapters = [
  { id: 'about' as Chapter, number: 1, title: 'About', subtitle: 'Origin Story' },
  { id: 'projects' as Chapter, number: 2, title: 'Projects', subtitle: 'Creations' },
  { id: 'experience' as Chapter, number: 3, title: 'Experience', subtitle: 'Quests' },
  { id: 'skills' as Chapter, number: 4, title: 'Skills', subtitle: 'Powers' },
  { id: 'contact' as Chapter, number: 5, title: 'Contact', subtitle: 'Connect' },
];

export function Navigation({ activeChapter, onChapterSelect }: NavigationProps) {
  return (
    <div className="sticky top-4 z-50 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {chapters.map((chapter, index) => (
            <motion.button
              key={chapter.id}
              onClick={() => onChapterSelect(chapter.id)}
              className="relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Bookmark shape */}
              <div
                className={`relative px-6 py-3 transition-all duration-300 ${
                  activeChapter === chapter.id
                    ? 'bg-gradient-to-br from-purple-500 to-blue-500 shadow-xl'
                    : 'bg-white/80 hover:bg-white shadow-lg'
                } backdrop-blur-sm rounded-t-2xl border-2 border-purple-300`}
              >
                {/* Chapter number badge */}
                <div
                  className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-xs border-2 transition-colors ${
                    activeChapter === chapter.id
                      ? 'bg-yellow-400 border-yellow-600 text-yellow-900'
                      : 'bg-purple-200 border-purple-400 text-purple-700'
                  }`}
                >
                  {chapter.number}
                </div>
                
                <div className="text-left min-w-[120px]">
                  <div
                    className={`text-sm transition-colors ${
                      activeChapter === chapter.id ? 'text-white' : 'text-purple-600'
                    }`}
                  >
                    Chapter {chapter.number}
                  </div>
                  <div
                    className={`transition-colors ${
                      activeChapter === chapter.id ? 'text-white' : 'text-gray-800'
                    }`}
                  >
                    {chapter.title}
                  </div>
                  <div
                    className={`text-xs italic transition-colors ${
                      activeChapter === chapter.id ? 'text-purple-100' : 'text-gray-500'
                    }`}
                  >
                    {chapter.subtitle}
                  </div>
                </div>
                
                {/* Active indicator - bookmark point */}
                {activeChapter === chapter.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-purple-500"
                  />
                )}
                
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-t-2xl bg-gradient-to-br from-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  initial={false}
                />
                
                {/* Sparkle on hover */}
                <motion.div
                  className="absolute -top-2 -right-2 text-yellow-400 opacity-0 group-hover:opacity-100"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  ✦
                </motion.div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
