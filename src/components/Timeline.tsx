import { motion } from 'motion/react';

const milestones = [
  {
    year: "Day One",
    title: "How It All Started",
    description: "That random conversation in the hallway that turned into a lifetime of friendship.",
    color: "bg-primary/30"
  },
  {
    year: "The Summer",
    title: "The Road Trip",
    description: "Windows down, music up, and absolutely no plan. The best days we ever had.",
    color: "bg-secondary/30"
  },
  {
    year: "The Milestone",
    title: "Growing Together",
    description: "Supporting each other through big changes, new jobs, and all of life's curveballs.",
    color: "bg-accent/30"
  },
  {
    year: "Always",
    title: "Forever Friends",
    description: "No matter where we go, we always find our way back to our favorite person.",
    color: "bg-primary/20"
  }
];

export const Timeline = () => {
  return (
    <section className="py-24 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Journey</h2>
        <p className="text-muted-foreground font-light italic">The chapters we've written together</p>
      </div>

      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="space-y-24">
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
            >
              {/* Content Card */}
              <div className="w-full md:w-1/2 px-8">
                <div className={`p-8 rounded-3xl ${item.color} backdrop-blur-sm shadow-sm border border-white/50 hover:shadow-lg transition-shadow duration-500`}>
                  <span className="text-xs uppercase tracking-widest text-foreground/60 mb-2 block">{item.year}</span>
                  <h3 className="text-2xl font-serif mb-4 text-foreground italic">{item.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{item.description}</p>
                </div>
              </div>

              {/* Dot on line */}
              <div className="relative flex items-center justify-center my-8 md:my-0">
                <div className="w-4 h-4 rounded-full bg-primary border-4 border-background z-10 shadow-glow" />
              </div>

              {/* Spacer for other side */}
              <div className="w-full md:w-1/2 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
