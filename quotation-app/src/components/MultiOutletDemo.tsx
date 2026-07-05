"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, TrendingUp, Package, Users } from "lucide-react";

const OUTLETS = [
  {
    id: "colombo",
    name: "Colombo Branch",
    stats: { revenue: "LKR 85,000", orders: 120, inventory: "Healthy", staff: 8 },
  },
  {
    id: "kandy",
    name: "Kandy Branch",
    stats: { revenue: "LKR 42,000", orders: 65, inventory: "Reorder Soon", staff: 5 },
  },
  {
    id: "galle",
    name: "Galle Branch",
    stats: { revenue: "LKR 55,000", orders: 82, inventory: "Healthy", staff: 6 },
  },
];

export function MultiOutletDemo() {
  const [activeOutlet, setActiveOutlet] = useState(OUTLETS[0].id);

  const activeData = OUTLETS.find((o) => o.id === activeOutlet)!;

  return (
    <section id="multi-outlet-demo" className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Multi-Outlet <span className="text-gradient">Management</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Manage all your bakery branches from a single dashboard. Toggle between locations to view specific analytics.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {OUTLETS.map((outlet) => (
              <button
                key={outlet.id}
                onClick={() => setActiveOutlet(outlet.id)}
                className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${
                  activeOutlet === outlet.id
                    ? "bg-brand text-white shadow-[0_0_20px_rgba(232,93,4,0.3)]"
                    : "glass text-foreground-muted hover:text-white hover:bg-white/5"
                }`}
              >
                <MapPin className="w-4 h-4" />
                {outlet.name}
              </button>
            ))}
          </div>

          {/* Outlet Dashboard */}
          <div className="glass-card rounded-3xl p-8 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeOutlet}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                  <div>
                    <h3 className="text-2xl font-bold">{activeData.name}</h3>
                    <p className="text-green-400 text-sm mt-1">● Online & Operating</p>
                  </div>
                  <div className="text-right">
                    <p className="text-foreground-muted text-sm">Today's Revenue</p>
                    <p className="text-3xl font-bold text-brand-light">{activeData.stats.revenue}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="bg-surface/50 rounded-2xl p-6 border border-white/5">
                    <TrendingUp className="w-6 h-6 text-brand mb-3" />
                    <p className="text-foreground-muted text-sm">Orders Today</p>
                    <p className="text-2xl font-bold mt-1">{activeData.stats.orders}</p>
                  </div>
                  
                  <div className="bg-surface/50 rounded-2xl p-6 border border-white/5">
                    <Package className="w-6 h-6 text-brand mb-3" />
                    <p className="text-foreground-muted text-sm">Inventory Status</p>
                    <p className={`text-xl font-bold mt-1 ${activeData.stats.inventory === 'Healthy' ? 'text-green-400' : 'text-yellow-400'}`}>
                      {activeData.stats.inventory}
                    </p>
                  </div>

                  <div className="bg-surface/50 rounded-2xl p-6 border border-white/5">
                    <Users className="w-6 h-6 text-brand mb-3" />
                    <p className="text-foreground-muted text-sm">Active Staff</p>
                    <p className="text-2xl font-bold mt-1">{activeData.stats.staff}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
