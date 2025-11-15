'use client';

import { motion } from 'framer-motion';
import { Target, Rocket } from 'lucide-react';

export default function VisionMission() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A1929] mb-12">
            Our Vision & Mission
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -10 }}
            className="text-left bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-[#D4AF37]/30 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#D4AF37]/10 rounded-xl border border-[#D4AF37]/20">
                <Target className="h-8 w-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A1929]">Our Vision</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              To unlock the hidden potential of underutilized real estate assets, creating value for both investors and the community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -10 }}
            className="text-left bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-[#D4AF37]/30 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#D4AF37]/10 rounded-xl border border-[#D4AF37]/20">
                <Rocket className="h-8 w-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A1929]">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              To empower homeowners with innovative and cost-effective ownership solutions that disrupt traditional real estate models.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
