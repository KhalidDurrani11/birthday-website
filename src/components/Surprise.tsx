import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Surprise = ({ name }: { name: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f8c8dc', '#e6e6fa', '#fffafa', '#fce4ec']
      });
    }
  };

  return (
    <section className="py-24 text-center px-4 overflow-hidden">
      <div className="max-w-2xl mx-auto">
        <motion.div
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
           className="inline-block"
        >
          <button
            onClick={handleClick}
            className="group relative px-12 py-6 bg-primary text-primary-foreground rounded-full font-serif text-2xl italic tracking-wide shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              {isOpen ? "Close the Magic" : "Open Your Surprise"}
              <Sparkles className={`w-6 h-6 transition-transform duration-700 ${isOpen ? 'rotate-180' : ''}`} />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: 20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: 20 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="mt-16"
            >
              <div className="glass p-12 rounded-[3rem] relative overflow-hidden ring-1 ring-primary/20 shadow-2xl">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[40px]"
                />
                
                <Heart className="w-12 h-12 text-primary mx-auto mb-8 fill-primary/20" />
                
                <h3 className="text-3xl md:text-4xl font-serif mb-6 italic text-glow">You Are So Loved, {name}</h3>
                
                <p className="text-xl md:text-2xl font-cursive text-foreground/80 leading-relaxed mb-8">
                  "A friend is one that knows you as you are, understands where you have been, accepts what you have become, and still, gently allows you to grow."
                </p>
                
                <div className="flex justify-center gap-4 text-primary">
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}><Heart className="w-6 h-6 fill-current" /></motion.div>
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}><Heart className="w-6 h-6 fill-current" /></motion.div>
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}><Heart className="w-6 h-6 fill-current" /></motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
