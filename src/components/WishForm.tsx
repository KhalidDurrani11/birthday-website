import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const WishForm = () => {
    const [wish, setWish] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (wish.trim()) {
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 5000);
            setWish("");
        }
    };

    return (
        <section className="py-24 px-4 max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-8 italic">Leave a Little Sparkle</h2>
            <Card className="glass overflow-hidden">
                <CardContent className="p-8">
                    <AnimatePresence mode="wait">
                        {!submitted ? (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                                className="space-y-4"
                            >
                                <div className="relative group">
                                    <Input
                                        value={wish}
                                        onChange={(e) => setWish(e.target.value)}
                                        placeholder="Type your birthday wish here..."
                                        className="rounded-full bg-white/50 border-primary/20 h-14 px-8 focus-visible:ring-primary/40 focus-visible:border-primary/40 transition-all"
                                    />
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="absolute right-2 top-2 p-3 bg-primary text-primary-foreground rounded-full shadow-lg"
                                    >
                                        <Send className="w-5 h-5" />
                                    </motion.button>
                                </div>
                                <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-4">Your message will brighten her day</p>
                            </motion.form>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="py-8"
                            >
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                    className="text-4xl mb-4"
                                >
                                    💖
                                </motion.div>
                                <h3 className="text-xl font-serif italic mb-2">Message Sent with Love!</h3>
                                <p className="text-sm text-muted-foreground">Thank you for making her day extra special.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </CardContent>
            </Card>
        </section>
    );
};
