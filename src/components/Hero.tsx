import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export const Hero = ({ name }: { name: string }) => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10"
      >
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-6 block"
        >
          A Celebration of You
        </motion.span>
        
        <h1 className="text-5xl md:text-8xl font-serif mb-6 text-foreground tracking-tight">
          Happy Birthday, <br />
          <span className="font-cursive text-primary text-glow italic px-4">
            {name}
          </span>
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block ml-4"
          >
            ✨
          </motion.span>
        </h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed"
        >
          To the one who makes life brighter just by being in it. <br/>
          May your day be as magical as the friendship we share.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">The Journey</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-primary/50" />
        </motion.div>
      </motion.div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};
