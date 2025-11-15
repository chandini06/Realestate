'use client';

import { motion } from 'framer-motion';
import { Calendar, DollarSign, Home, TrendingUp, CheckCircle } from 'lucide-react';

const timelineSteps = [
  {
    step: 1,
    icon: Home,
    title: 'Property Selection',
    description: 'Choose from our curated RERA-registered properties in prime locations',
    duration: 'Day 1',
  },
  {
    step: 2,
    icon: DollarSign,
    title: '10% Down Payment',
    description: 'Secure your investment with just 10% of the property value',
    duration: 'Day 1-7',
  },
  {
    step: 3,
    icon: TrendingUp,
    title: 'Receive 50% Cashback',
    description: 'Get 50% cashback credited to your account, reducing your effective investment',
    duration: 'Within 30 days',
  },
  {
    step: 4,
    icon: Calendar,
    title: 'Start Earning Rentals',
    description: 'Begin receiving 40% annual rental returns from pre-rented properties',
    duration: 'Month 1 onwards',
  },
  {
    step: 5,
    icon: CheckCircle,
    title: 'Ongoing Returns',
    description: 'Enjoy continuous passive income and property appreciation',
    duration: 'Long-term',
  },
];

export default function InvestmentTimeline() {
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A1929] mb-4">
            Your Investment Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how simple and profitable your investment journey with Opti Realty can be
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Connecting Line */}
            <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/50 to-[#D4AF37]"></div>
            
            <div className="space-y-12">
              {timelineSteps.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className={`flex items-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    {/* Icon Circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-32 h-32 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-xl relative border-4 border-white"
                      >
                        <Icon className="w-12 h-12 text-white" />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#0A1929] rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-sm font-bold text-white">{item.step}</span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Content Card */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className={`flex-1 ${isEven ? 'text-right' : 'text-left'}`}
                    >
                      <div className={`inline-block p-6 bg-white rounded-xl shadow-lg border border-gray-200 max-w-md ${isEven ? 'ml-auto' : 'mr-auto'}`}>
                        <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-[#D4AF37] text-white">
                          {item.duration}
                        </div>
                        <h3 className="text-2xl font-bold text-[#0A1929] mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {timelineSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 rounded-xl bg-[#D4AF37] flex items-center justify-center shadow-lg"
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                      <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-[#D4AF37] text-white">
                        {item.duration}
                      </div>
                      <h3 className="text-xl font-bold text-[#0A1929] mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                  {index < timelineSteps.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-8 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
