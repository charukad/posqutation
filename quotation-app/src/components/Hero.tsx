"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-brand-light/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand/30 text-brand-light mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-light animate-pulse" />
          Quotation Ref: Q-2026-001
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight max-w-4xl"
        >
          Smart POS Solution for <br className="hidden md:block" />
          <span className="text-gradient">Growing Bakeries</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-foreground-muted mb-10 max-w-2xl leading-relaxed"
        >
          A premium point-of-sale system designed specifically for bakeries.
          Manage multiple outlets, track analytics, and reward loyal customers from a single dashboard.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <Link href="/demo" className="px-8 py-4 rounded-xl bg-brand hover:bg-brand-dark text-white font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-brand/25">
            Experience the System <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/quotation" className="px-8 py-4 rounded-xl glass hover:bg-white/5 font-semibold flex items-center justify-center gap-2 transition-colors">
            <FileText className="w-5 h-5" /> View Quotation
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 text-sm md:text-base text-foreground-muted"
        >
          <div className="flex items-center gap-2 font-bold text-white">
            <CheckCircle2 className="w-5 h-5 text-brand" /> LKR 90,000 - 110,000
          </div>
          <div className="flex items-center gap-2 font-bold text-brand-light">
            <CheckCircle2 className="w-5 h-5 text-brand" /> Free Business Website
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-brand" /> Advanced Analytics
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-brand" /> Loyalty Program
          </div>
        </motion.div>
      </div>
    </section>
  );
}
