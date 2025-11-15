'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BottomBanner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('banner-dismissed');
    if (stored === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-40 w-full"
        >
          <div className="relative w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 md:py-6 min-h-[80px] bg-gradient-to-r from-[#0A1929] to-[#1a2f47] shadow-[0_-8px_32px_rgba(0,0,0,0.3)] border-t border-[#D4AF37]/30 overflow-hidden">
            {/* Close button */}
            <button
              onClick={handleClose}
              aria-label="Close banner"
              className="absolute top-3 right-3 text-white/60 hover:text-white focus:outline-none z-20 transition-colors duration-200"
            >
              <X className="text-xl" />
            </button>

            {/* Content */}
            <div className="flex items-center gap-4 md:gap-8 text-white relative z-10 flex-1 w-full md:w-auto">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative"
                >
                  <Gift className="text-2xl text-[#D4AF37]" />
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-[#D4AF37] tracking-wide uppercase">
                    Exclusive Offer
                  </span>
                  <span className="text-lg font-semibold text-white">
                    18L Cashback on 3BHK Flats
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
                {[
                  { label: '10% Down Payment' },
                  { label: 'Free Interiors', delay: 0.5 },
                  { label: '50% Off Amenities', delay: 1 },
                ].map((feature, index) => (
                  <motion.span
                    key={feature.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center gap-2"
                  >
                    <motion.div
                      className="w-2 h-2 bg-[#D4AF37] rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: feature.delay || 0,
                      }}
                    />
                    {feature.label}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="relative flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] hover:from-[#F4D03F] hover:to-[#D4AF37] text-[#0A1929] font-semibold text-sm shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 z-10 mt-4 md:mt-0"
            >
              <motion.span
                className="flex items-center gap-2"
                animate={{
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                View Offer
                <ArrowRight className="text-lg" />
              </motion.span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
