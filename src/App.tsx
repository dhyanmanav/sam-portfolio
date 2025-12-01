import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { AboutPanel } from './components/AboutPanel';
import { ProjectsPanel } from './components/ProjectsPanel';
import { ExperiencePanel } from './components/ExperiencePanel';
import { SkillsPanel } from './components/SkillsPanel';
import { ContactPanel } from './components/ContactPanel';
import { FloatingElements } from './components/FloatingElements';

type Chapter = 'about' | 'projects' | 'experience' | 'skills' | 'contact';

export default function App() {
  const [activeChapter, setActiveChapter] = useState<Chapter | null>(null);

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-gradient-to-br from-[#cfe0ff] via-[#eef2ff] to-[#e0d4ff]">
      {/* Watercolor texture overlay */}
      <div className="fixed inset-0 opacity-30 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOCIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuNSIvPjwvc3ZnPg==')]" />
      
      {/* Floating decorative elements */}
      <FloatingElements />
      
      {/* Main content */}
      <div className="relative z-10">
        <Hero />
        
        {/* Navigation */}
        <Navigation 
          activeChapter={activeChapter} 
          onChapterSelect={setActiveChapter} 
        />
        
        {/* Story Panels */}
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <AnimatePresence mode="wait">
            {activeChapter === 'about' && <AboutPanel key="about" />}
            {activeChapter === 'projects' && <ProjectsPanel key="projects" />}
            {activeChapter === 'experience' && <ExperiencePanel key="experience" />}
            {activeChapter === 'skills' && <SkillsPanel key="skills" />}
            {activeChapter === 'contact' && <ContactPanel key="contact" />}
          </AnimatePresence>
          
          {!activeChapter && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="inline-block bg-white/60 backdrop-blur-sm px-8 py-6 rounded-3xl border-4 border-dashed border-purple-300 shadow-lg">
                <p className="text-2xl text-purple-800 font-comic">
                  ✦ Select a chapter above to begin the adventure ✦
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="relative z-10 py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block">
            <svg className="w-full h-2 mb-4" viewBox="0 0 400 2">
              <path
                d="M0,1 Q50,0 100,1 T200,1 T300,1 T400,1"
                stroke="#9ca3af"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            <p className="text-gray-600 italic">
              Turn the page to explore my journey ✦
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
