"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function AcceptProposalForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="accept-proposal" className="min-h-[80vh] flex items-center justify-center py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand to-brand-light" />
          
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Quotation Accepted</h3>
              <p className="text-foreground-muted text-lg">
                Thank you! We have received your acceptance. <br />
                Our team will contact you shortly to begin the onboarding process.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Ready to Transform Your Bakery?</h2>
              <p className="text-foreground-muted mb-8">
                Accept this quotation to start the implementation process.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground-muted mb-1">Full Name</label>
                    <input required type="text" className="w-full bg-background-dark border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground-muted mb-1">Bakery Name</label>
                    <input required type="text" className="w-full bg-background-dark border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors" placeholder="Sweet Treats Bakery" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground-muted mb-1">Email Address</label>
                    <input required type="email" className="w-full bg-background-dark border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground-muted mb-1">Phone Number</label>
                    <input required type="tel" className="w-full bg-background-dark border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors" placeholder="+94 77 123 4567" />
                  </div>
                </div>
                
                <div className="pt-6">
                  <button 
                    type="submit" 
                    className="w-full py-4 rounded-xl bg-brand hover:bg-brand-dark text-white font-bold text-lg transition-colors flex items-center justify-center gap-2 group"
                  >
                    Accept Quotation 
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-xs text-foreground-muted mt-4">
                    By clicking accept, you agree to the terms and conditions outlined in this proposal.
                  </p>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
