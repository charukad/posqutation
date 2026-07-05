"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Smartphone, WifiOff, PackageOpen, Truck, Monitor } from "lucide-react";

const EXPERIENCES = [
  { icon: WifiOff, title: "Offline Mode", desc: "Continue ringing up sales even when the internet goes down." },
  { icon: Monitor, title: "Kitchen Display System (KDS)", desc: "Send orders directly to the kitchen screens instantly." },
  { icon: PackageOpen, title: "Ingredient-Level Inventory", desc: "Track flour, sugar, and eggs to prevent waste." },
  { icon: Truck, title: "Supplier Management", desc: "Manage purchase orders and supplier payments." },
  { icon: Smartphone, title: "Owner Mobile App", desc: "Check real-time sales from your phone anywhere." },
];

export function MoreExperiences() {
  return (
    <section className="py-20 bg-surface/30 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Even More to <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            The full POS system is packed with powerful features designed for bakeries.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:bg-white/5 transition-colors border-l-2 border-l-brand"
            >
              <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-4">
                <exp.icon className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
              <p className="text-foreground-muted text-sm leading-relaxed">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
