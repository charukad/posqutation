"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Star, Coffee } from "lucide-react";

export function LoyaltyDemo() {
  const [points, setPoints] = useState(420);
  const [justPurchased, setJustPurchased] = useState(false);

  const simulatePurchase = () => {
    setJustPurchased(true);
    setTimeout(() => {
      setPoints(427);
    }, 600);
  };

  const reset = () => {
    setPoints(420);
    setJustPurchased(false);
  };

  const progress = Math.min(100, (points / 500) * 100);
  const unlocked = points >= 427 && justPurchased;

  return (
    <section id="loyalty-demo" className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Customer <span className="text-gradient">Loyalty System</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Reward your best customers and encourage repeat visits with an integrated loyalty program.
          </p>
        </div>

        <div className="max-w-md mx-auto glass-card rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
            <motion.div 
              className="h-full bg-brand"
              initial={{ width: `${(420/500)*100}%` }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center text-2xl border border-white/5">
              🧑🏽
            </div>
            <div>
              <h3 className="text-xl font-bold">John Silva</h3>
              <p className="text-foreground-muted text-sm">Premium Member</p>
            </div>
            <div className="ml-auto text-right">
              <div className="flex items-center justify-end gap-1 text-brand-light font-bold text-xl">
                <Star className="w-5 h-5 fill-brand-light" />
                {points}
              </div>
              <p className="text-foreground-muted text-xs">Points</p>
            </div>
          </div>

          <div className="bg-surface/50 rounded-2xl p-6 mb-8 border border-white/5">
            <p className="text-center text-foreground-muted text-sm mb-4">
              {500 - points} points until free birthday cake!
            </p>
            <div className="h-3 bg-background-dark rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-brand-light to-brand"
                initial={{ width: `${(420/500)*100}%` }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
            
            <AnimatePresence>
              {unlocked && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="mt-6 flex items-center justify-center gap-3 text-green-400 font-semibold bg-green-400/10 py-3 rounded-xl border border-green-400/20"
                >
                  <Gift className="w-5 h-5" /> Reward Unlocked: Free Coffee!
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={simulatePurchase}
              disabled={justPurchased}
              className="flex-1 py-3 rounded-xl bg-brand hover:bg-brand-dark text-white font-semibold transition-colors disabled:opacity-50 flex justify-center items-center gap-2"
            >
              <Coffee className="w-5 h-5" /> Simulate Purchase
            </button>
            {justPurchased && (
              <button onClick={reset} className="px-4 py-3 rounded-xl glass hover:bg-white/5 transition-colors">
                Reset
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
