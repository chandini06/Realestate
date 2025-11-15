'use client';

import { motion } from 'framer-motion';
import { Search, FileCheck, Handshake, Home } from 'lucide-react';

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Choose Your Property',
    description: 'Browse our curated selection of RERA-registered properties in prime locations.',
  },
  {
    icon: FileCheck,
    step: '02',
    title: '10% Down Payment',
    description: 'Secure your investment with just 10% of the property value. No hidden costs.',
  },
  {
    icon: Handshake,
    step: '03',
    title: 'Get 50% Cashback',
    description: 'Receive 50% cashback on your property value, making ownership incredibly affordable.',
  },
  {
    icon: Home,
    step: '04',
    title: 'Earn 40% Rental Returns',
    description: 'Enjoy guaranteed 40% rental returns from pre-rented properties. Passive income starts immediately.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 bg-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-semibold rounded-full mb-4 tracking-wider uppercase">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A1929] mb-4">
            How Opti Realty Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four simple steps to property ownership and guaranteed returns
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="relative group"
              >
                {/* Connecting line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gray-200 z-0">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                      className="h-full bg-[#D4AF37] origin-left"
                    />
                  </div>
                )}

                <div className="relative p-8 bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-[#D4AF37]/30 hover:shadow-xl transition-all duration-500 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-[#D4AF37]" />
                    </div>
                    <span className="text-4xl font-bold text-gray-200">{step.step}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A1929] mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
