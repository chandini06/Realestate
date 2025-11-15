'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Home, DollarSign, Calendar } from 'lucide-react';

export default function Hero() {
  const stats = [
    { value: '50%', label: 'Cashback', icon: DollarSign },
    { value: '40%', label: 'Rental Return', icon: TrendingUp },
    { value: '10%', label: 'Entry Cost', icon: Home },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80)',
          }}
        />
        {/* Dark overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1929]/95 via-[#0A1929]/85 to-[#0A1929]/90" />
        {/* Subtle additional gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1929]/60 via-transparent to-[#0A1929]/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen py-20">
          {/* Main Content */}
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge/Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full mb-8"
            >
              <span className="text-[#D4AF37] text-sm font-semibold tracking-wider uppercase">
                Premium Real Estate Investment
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="block text-white mb-2">
                Own Your Dream
              </span>
              <span className="block bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] bg-clip-text text-transparent">
                Property Today
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Real Estate reimagined with{' '}
              <span className="font-semibold text-[#D4AF37]">50% Cashback</span> and{' '}
              <span className="font-semibold text-[#D4AF37]">40% Rental Returns</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Start your investment journey with just <span className="font-semibold text-white">10% of the property value</span>
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Link
                href="/contact"
                className="group relative px-10 py-5 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] hover:from-[#F4D03F] hover:to-[#D4AF37] text-[#0A1929] font-bold rounded-lg text-lg md:text-xl shadow-2xl transition-all duration-300 hover:shadow-[#D4AF37]/50 hover:scale-105 flex items-center justify-center gap-3 overflow-hidden min-w-[240px]"
              >
                <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="relative z-10">Book a Site Visit</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                <motion.div
                  className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
              </Link>
              <Link
                href="/projects"
                className="group px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-xl border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-lg text-lg md:text-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-xl min-w-[240px]"
              >
                Explore Projects
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Stats Section - Premium Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-6 md:p-8 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300 hover:bg-white/10"
                  >
                    <div className="flex items-center justify-center mb-4">
                      <div className="p-3 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/30">
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-[#D4AF37]" />
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm md:text-base text-white/80 font-medium">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Premium Design */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/60 text-sm font-medium tracking-wider uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
