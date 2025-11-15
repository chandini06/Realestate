'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Building2, Award } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    value: '500+',
    label: 'Properties',
    description: 'RERA Registered Projects',
  },
  {
    icon: Users,
    value: '1000+',
    label: 'Happy Investors',
    description: 'Trusted by families',
  },
  {
    icon: TrendingUp,
    value: '40%',
    label: 'Rental Returns',
    description: 'Guaranteed annually',
  },
  {
    icon: Award,
    value: '50%',
    label: 'Cashback',
    description: 'On property value',
  },
];

export default function StatsSection() {
  return (
    <section className="py-24 bg-[#0A1929] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 bg-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-semibold rounded-full mb-4 tracking-wider uppercase">
            Trusted by Investors
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Opti Realty by the Numbers
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Delivering exceptional returns and building trust, one property at a time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-500 text-center h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/30 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
                  <div className="text-sm text-white/70">{stat.description}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
