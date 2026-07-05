"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";

export function PricingBreakdown() {
  const [includeAnalytics, setIncludeAnalytics] = useState(false);
  const [includeLoyalty, setIncludeLoyalty] = useState(false);

  const basePrice = 90000;
  const analyticsPrice = 10000;
  const loyaltyPrice = 10000;

  const total = basePrice + (includeAnalytics ? analyticsPrice : 0) + (includeLoyalty ? loyaltyPrice : 0);

  return (
    <section id="pricing-breakdown" className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Investment <span className="text-gradient">Breakdown</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Transparent pricing showing exactly where your investment goes. Customize your package below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          
          <div className="space-y-4">
            {/* Base Package */}
            <div className="glass-card rounded-2xl p-6 border border-brand/50">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Base Software License</h3>
                  <p className="text-foreground-muted text-sm mt-1">Core POS, Multi-Outlet, Reports</p>
                </div>
                <span className="text-brand-light font-bold">LKR 90,000</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-400">
                <CheckCircle2 className="w-4 h-4" /> Included by default
              </div>
            </div>

            {/* Optional Add-on 1 */}
            <div 
              onClick={() => setIncludeAnalytics(!includeAnalytics)}
              className={`glass-card rounded-2xl p-6 border cursor-pointer transition-colors ${includeAnalytics ? 'border-brand bg-brand/5' : 'border-white/5 hover:border-white/20'}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    Advanced AI Analytics
                  </h3>
                  <p className="text-foreground-muted text-sm mt-1">Detailed Dashboards & Insights</p>
                </div>
                <span className="text-brand-light font-bold">+ LKR 10,000</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                {includeAnalytics ? <CheckCircle2 className="w-4 h-4 text-brand" /> : <Circle className="w-4 h-4 text-foreground-muted" />}
                <span className={includeAnalytics ? "text-brand" : "text-foreground-muted"}>Add this feature</span>
              </div>
            </div>

            {/* Optional Add-on 2 */}
            <div 
              onClick={() => setIncludeLoyalty(!includeLoyalty)}
              className={`glass-card rounded-2xl p-6 border cursor-pointer transition-colors ${includeLoyalty ? 'border-brand bg-brand/5' : 'border-white/5 hover:border-white/20'}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    Customer Loyalty System
                  </h3>
                  <p className="text-foreground-muted text-sm mt-1">Points, Rewards, Retention Tools</p>
                </div>
                <span className="text-brand-light font-bold">+ LKR 10,000</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                {includeLoyalty ? <CheckCircle2 className="w-4 h-4 text-brand" /> : <Circle className="w-4 h-4 text-foreground-muted" />}
                <span className={includeLoyalty ? "text-brand" : "text-foreground-muted"}>Add this feature</span>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8 flex flex-col">
            <h3 className="text-2xl font-bold mb-8">Summary</h3>
            
            <div className="space-y-4 flex-1">
              <div className="flex justify-between text-foreground-muted">
                <span>Base Package</span>
                <span>LKR 90,000</span>
              </div>
              
              <AnimatePresence>
                {includeAnalytics && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex justify-between text-foreground-muted"
                  >
                    <span>Advanced Analytics</span>
                    <span>+ LKR 10,000</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {includeLoyalty && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex justify-between text-foreground-muted"
                  >
                    <span>Loyalty System</span>
                    <span>+ LKR 10,000</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="border-t border-white/10 pt-6 mt-6">
              <div className="flex justify-between items-end">
                <span className="text-xl text-foreground-muted">Total Cost</span>
                <span className="text-4xl font-bold text-gradient">LKR {total.toLocaleString()}</span>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-brand-light font-bold">Estimated Implementation: 2–4 Weeks</p>
                <p className="text-foreground-muted mt-2 text-xs">
                  Subject to final requirements and timely feedback.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
