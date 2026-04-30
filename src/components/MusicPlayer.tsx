import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Pause, Play, Volume2 } from 'lucide-react';

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Autoplay blocked", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isPlaying && (
           <motion.div 
             initial={{ opacity: 0, scale: 0.8, x: 20 }}
             animate={{ opacity: 1, scale: 1, x: 0 }}
             exit={{ opacity: 0, scale: 0.8, x: 20 }}
             className="absolute bottom-16 right-0 glass px-4 py-2 rounded-full flex items-center gap-3 whitespace-nowrap mb-2 shadow-lg"
           >
             <div className="flex gap-1 h-3 items-end">
               {[1, 2, 3, 4].map(i => (
                 <motion.div
                   key={i}
                   animate={{ height: ["20%", "100%", "20%"] }}
                   transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.1 }}
                   className="w-1 bg-primary rounded-full"
                 />
               ))}
             </div>
             <span className="text-xs font-medium text-foreground/70 tracking-tight">Soft Instrumental</span>
           </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-primary border border-primary/20 relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        {isPlaying ? <Pause className="w-6 h-6 relative z-10" /> : <Play className="w-6 h-6 ml-1 relative z-10" />}
      </motion.button>
      
      <audio 
        ref={audioRef}
        loop
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Placeholder soft music
      />
    </div>
  );
};
