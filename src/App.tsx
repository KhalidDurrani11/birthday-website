/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MagicBackground } from './components/MagicBackground';
import { Hero } from './components/Hero';
import { PersonalMessage } from './components/PersonalMessage';
import { PhotoGallery } from './components/PhotoGallery';
import { Timeline } from './components/Timeline';
import { Surprise } from './components/Surprise';
import { MusicPlayer } from './components/MusicPlayer';
import { FinalSection } from './components/FinalSection';
import { WishForm } from './components/WishForm';
import { motion, useScroll, useSpring } from 'motion/react';
import { useEffect } from 'react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const BIRTHDAY_GIRL = "Seraphina";

  useEffect(() => {
    // Smoother page transitions
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-primary/30 selection:text-primary-foreground">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      <MagicBackground />
      <MusicPlayer />
      
      <main className="relative z-10">
        <Hero name={BIRTHDAY_GIRL} />
        
        <div className="space-y-12">
          <PersonalMessage name={BIRTHDAY_GIRL} />
          
          <PhotoGallery />
          
          <Timeline />
          
          <Surprise name={BIRTHDAY_GIRL} />
          
          <div className="px-4 py-24 flex justify-center">
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="text-center opacity-40 hover:opacity-100 transition-opacity"
            >
              <div className="w-12 h-[1px] bg-primary mx-auto mb-8" />
              <p className="font-serif italic text-2xl">"To more years of magic..."</p>
              <div className="w-12 h-[1px] bg-primary mx-auto mt-8" />
            </motion.div>
          </div>
          
          <WishForm />
          
          <FinalSection name={BIRTHDAY_GIRL} />
        </div>
      </main>

      {/* Floating Sparkles Decoration */}
      <div className="fixed top-20 right-10 w-2 h-2 bg-primary rounded-full blur-[1px] animate-pulse pointer-events-none" />
      <div className="fixed bottom-40 left-5 w-3 h-3 bg-secondary rounded-full blur-[2px] animate-pulse delay-500 pointer-events-none" />
      <div className="fixed top-1/2 left-2 w-2 h-2 bg-accent rounded-full blur-[1px] animate-pulse delay-1000 pointer-events-none" />
    </div>
  );
}
