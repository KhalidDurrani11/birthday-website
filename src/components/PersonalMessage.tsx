import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export const PersonalMessage = ({ name }: { name: string }) => {
  return (
    <section className="py-24 px-4 max-w-4xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Card className="glass border-none shadow-2xl shadow-primary/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
          <CardContent className="pt-16 pb-12 px-8 md:px-16 text-center">
            <Heart className="w-8 h-8 text-primary mx-auto mb-8 fill-primary/20" />
            
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-foreground italic">
              Dearest {name},
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-foreground/80">
              <p>
                As I sit here thinking about all the years we've spent together, I realized that some of my most beautiful memories have you in them. You are more than just a best friend; you are a sister I got to choose.
              </p>
              <p>
                From the late-night heart-to-hearts to the endless laughter over things only we understand, you've been my constant. You have this incredible way of knowing exactly what I need without me saying a word.
              </p>
              <p>
                Thank you for being your authentic, wonderful self. Thank you for the support, the honesty, and the magic you bring into every room you enter.
              </p>
              <p className="font-cursive text-2xl md:text-3xl text-primary pt-4">
                Today, the world celebrates the gift that is you.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};
