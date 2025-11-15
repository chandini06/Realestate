'use client';

import { motion } from 'framer-motion';
import { Check, X, TrendingUp } from 'lucide-react';

const traditionalFeatures = [
  { text: '100% upfront payment required', check: false },
  { text: 'No cashback on purchase', check: false },
  { text: 'Uncertain rental income', check: false },
  { text: 'High entry barrier', check: false },
  { text: 'Long waiting period for returns', check: false },
];

const optiFeatures = [
  { text: 'Only 10% entry cost', check: true },
  { text: '50% cashback guaranteed', check: true },
  { text: '40% guaranteed rental returns', check: true },
  { text: 'Pre-rented properties', check: true },
  { text: 'Immediate returns', check: true },
];

export default function ComparisonTool() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-4">
            <TrendingUp className="w-8 h-8 text-[#D4AF37]" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A1929] mb-4">
            Traditional vs Opti Realty
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the difference between traditional real estate investment and our revolutionary model
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-200 relative"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Traditional Real Estate</h3>
            <div className="space-y-4">
              {traditionalFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-gray-700">{feature.text}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-gray-100 rounded-xl">
              <div className="text-sm text-gray-600 mb-2">Example: ₹50L Property</div>
              <div className="text-2xl font-bold text-gray-800">₹50L Investment</div>
              <div className="text-sm text-gray-500 mt-2">No cashback, uncertain returns</div>
            </div>
          </motion.div>

          {/* Opti Realty */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0A1929] to-[#1a2f47] p-8 rounded-2xl shadow-xl text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#D4AF37]/5"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <h3 className="text-2xl font-bold">Opti Realty Model</h3>
                <span className="px-3 py-1 bg-[#D4AF37]/20 backdrop-blur-sm rounded-full text-xs font-semibold border border-[#D4AF37]/30">
                  ✨ Revolutionary
                </span>
              </div>
              <div className="space-y-4">
                {optiFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span>{feature.text}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-[#D4AF37]/10 backdrop-blur-sm rounded-xl border border-[#D4AF37]/20">
                <div className="text-sm text-white/80 mb-2">Example: ₹50L Property</div>
                <div className="text-2xl font-bold mb-1">₹5L Investment</div>
                <div className="text-sm text-white/70">
                  ₹25L cashback + ₹20L/year rental = ₹45L returns in 1 year!
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Savings Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] p-8 rounded-2xl shadow-xl text-[#0A1929] text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">
              Save 90% on Entry Cost
            </div>
            <div className="text-lg text-[#0A1929]/80">
              With Opti Realty, you invest just 10% and get 50% cashback, making your effective investment only 5% of property value!
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
