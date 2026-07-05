"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Globe, Sparkles } from "lucide-react";

const INCLUDED = [
  "Custom Next.js Frontend",
  "Node.js/Express Backend API",
  "Database Setup (PostgreSQL/MongoDB)",
  "Authentication & Role Management",
  "Customer Loyalty System",
  "Sales & Inventory Reports",
  "Employee & User Management",
  "Initial Setup & Configuration",
  "User Training",
];

export function FeatureComparison() {
  return (
    <section id="features" className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Project <span className="text-gradient">Scope</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Everything you need to launch and scale your bakery.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Highlighted Free Website Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 p-1 rounded-2xl bg-gradient-to-r from-brand via-brand-light to-brand animate-pulse-slow"
          >
            <div className="bg-background-dark rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-brand/20 flex items-center justify-center shrink-0">
                  <Globe className="w-8 h-8 text-brand" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    Free Business Website <Sparkles className="w-5 h-5 text-yellow-400" />
                  </h3>
                  <p className="text-foreground-muted mt-1">A fully responsive, modern landing page for your bakery included at absolutely no extra cost.</p>
                </div>
              </div>
              <div className="px-6 py-2 rounded-full bg-brand text-white font-bold text-sm tracking-wide shrink-0">
                INCLUDED
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 border-t-4 border-brand"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <CheckCircle2 className="text-brand w-6 h-6" /> What's Included
            </h3>
            <ul className="space-y-4 grid md:grid-cols-2 gap-x-8">
              {INCLUDED.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span className="text-foreground-muted">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
