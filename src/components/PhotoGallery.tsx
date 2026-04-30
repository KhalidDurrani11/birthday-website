import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';

const memories = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2000&auto=format&fit=crop",
    caption: "Sunset Laughs",
    location: "Malibu Beach"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?q=80&w=2000&auto=format&fit=crop",
    caption: "Coffee & Secrets",
    location: "Little Paris Café"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2000&auto=format&fit=crop",
    caption: "Dance 'Til Dawn",
    location: "Summer Festival"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=2000&auto=format&fit=crop",
    caption: "Picnic Days",
    location: "Central Park"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2000&auto=format&fit=crop",
    caption: "Starry Nights",
    location: "The Observatory"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1522673607200-1648832cee98?q=80&w=2000&auto=format&fit=crop",
    caption: "Cozy Afternoons",
    location: "Library Corner"
  }
];

export const PhotoGallery = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedPhoto = memories.find(m => m.id === selectedId);

  return (
    <section className="py-24 px-4 bg-white/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 italic">Moments Frozen in Time</h2>
          <p className="text-muted-foreground font-light tracking-widest uppercase text-xs">A collection of our favorite snippets</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((photo) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white p-4 shadow-xl rotate-1 odd:-rotate-2 hover:rotate-0 transition-transform duration-500 cursor-pointer group"
              onClick={() => setSelectedId(photo.id)}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-4">
                <img 
                  src={photo.url} 
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <p className="font-cursive text-xl text-center text-foreground/80">{photo.caption}</p>
              <p className="text-[10px] text-center text-muted-foreground mt-1 uppercase tracking-tighter">{photo.location}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && selectedPhoto && (
          <Dialog open={!!selectedId} onOpenChange={() => setSelectedId(null)}>
            <DialogContent className="max-w-4xl p-0 overflow-hidden border-none bg-transparent shadow-none [&>button]:hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative flex flex-col items-center"
              >
                <img 
                  src={selectedPhoto.url} 
                  alt={selectedPhoto.caption}
                  className="max-h-[85vh] w-auto shadow-2xl rounded-sm"
                />
                <div className="glass mt-4 px-8 py-4 rounded-full flex flex-col items-center">
                  <h3 className="font-serif text-2xl italic">{selectedPhoto.caption}</h3>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{selectedPhoto.location}</p>
                </div>
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute -top-12 right-0 p-2 text-white hover:text-primary transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
};
