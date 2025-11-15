'use client';

import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Users, Award, Zap } from 'lucide-react';
import { useState } from 'react';

const interactiveCards = [
  {
    icon: TrendingUp,
    title: 'Coming Soon',
    description: 'Growth strategies',
    color: 'from-[#D4AF37] to-[#F4D03F]',
  },
  {
    icon: Users,
    title: 'Coming Soon',
    description: 'Customer stories',
    color: 'from-[#0A1929] to-[#1a2f47]',
  },
  {
    icon: Award,
    title: 'Coming Soon',
    description: 'Awards & recognition',
    color: 'from-[#D4AF37] to-[#F4D03F]',
  },
  {
    icon: Zap,
    title: 'Coming Soon',
    description: 'Latest updates',
    color: 'from-[#0A1929] to-[#1a2f47]',
  },
];

export default function MarketingPlaceholder() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#0A1929]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#D4AF37]/3 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          {/* Animated Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#F4D03F]/20 border-2 border-[#D4AF37]/30 mb-6 cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Sparkles className="w-12 h-12 text-[#D4AF37]" />
            </motion.div>
          </motion.div>

          {/* Heading with animated gradient */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-[#0A1929] via-[#D4AF37] to-[#0A1929] bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_ease_infinite]">
              Marketing Content
            </span>
          </motion.h2>

          {/* Description with typing effect */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Exciting marketing content will be added here soon.{' '}
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="font-semibold text-[#D4AF37]"
            >
              Stay tuned for updates!
            </motion.span>
          </motion.p>

          {/* Animated Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 h-1 w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37]"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </motion.div>
        </motion.div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {interactiveCards.map((card, index) => {
            const Icon = card.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative group cursor-pointer"
              >
                {/* Glow effect on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${card.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                
                {/* Card */}
                <div className="relative p-8 bg-white rounded-2xl shadow-lg border-2 border-gray-200 group-hover:border-[#D4AF37]/50 transition-all duration-500 h-full">
                  {/* Icon Container */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${card.color} mb-4 shadow-lg`}
                    animate={isHovered ? { rotate: [0, 10, -10, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-xl font-bold text-[#0A1929] mb-2"
                    animate={isHovered ? { x: [0, 5, 0] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {card.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm">{card.description}</p>

                  {/* Animated indicator */}
                  <motion.div
                    className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                  >
                    <motion.div
                      className={`h-full bg-gradient-to-r ${card.color} rounded-full`}
                      animate={isHovered ? { width: ['0%', '100%'] } : { width: '0%' }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating Action Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-4"
        >
          {['Interactive', 'Engaging', 'Dynamic'].map((word, index) => (
            <motion.div
              key={word}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="px-6 py-3 bg-gradient-to-r from-[#D4AF37]/10 to-[#F4D03F]/10 border border-[#D4AF37]/30 rounded-full backdrop-blur-sm cursor-pointer"
            >
              <span className="text-sm font-semibold text-[#0A1929]">{word}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
}
