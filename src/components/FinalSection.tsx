import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';

export const FinalSection = ({ name }: { name: string }) => {
  return (
    <section className="py-32 px-4 relative flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="max-w-3xl"
      >
        <h2 className="text-5xl md:text-7xl font-serif mb-12 italic text-glow">
          Stay Gold, <br /> Forever.
        </h2>
        
        <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed mb-16">
          No matter where life takes us, or how many years pass by, you will always be my favorite person to share a laugh, a cry, and a dream with.
        </p>
        
        <div className="flex flex-col items-center gap-4">
           <p className="font-cursive text-3xl md:text-4xl text-primary">I love you always, {name} 💕</p>
           <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mt-4 opacity-50 italic">Your Best Friend Forever</span>
        </div>
      </motion.div>

      {/* Background decoration */}
      <div className="absolute -z-10 bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent" />
    </section>
  );
};
