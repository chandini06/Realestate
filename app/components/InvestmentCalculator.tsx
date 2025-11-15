'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Home } from 'lucide-react';

export default function InvestmentCalculator() {
  const [propertyValue, setPropertyValue] = useState(5000000);
  const [years, setYears] = useState(5);

  // Calculations
  const entryCost = propertyValue * 0.1;
  const cashback = propertyValue * 0.5;
  const annualRentalReturn = propertyValue * 0.4;
  const totalRentalReturns = annualRentalReturn * years;
  const totalReturns = cashback + totalRentalReturns;
  const netInvestment = entryCost;
  const roi = ((totalReturns - netInvestment) / netInvestment) * 100;
  const effectiveCost = entryCost - cashback;

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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-4">
            <Calculator className="w-8 h-8 text-[#D4AF37]" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A1929] mb-4">
            Calculate Your Returns
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how much you can earn with Opti Realty's unique investment model
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Input Panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-[#0A1929] mb-6">Investment Details</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Property Value (₹)
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="2000000"
                    max="20000000"
                    step="500000"
                    value={propertyValue}
                    onChange={(e) => setPropertyValue(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹20L</span>
                    <span>₹2Cr</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-xl">
                  <div className="text-3xl font-bold text-[#0A1929]">
                    ₹{(propertyValue / 100000).toFixed(1)}L
                  </div>
                  <input
                    type="number"
                    value={propertyValue}
                    onChange={(e) => setPropertyValue(Number(e.target.value))}
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none"
                    min="2000000"
                    max="20000000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Investment Period (Years)
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 Year</span>
                    <span>10 Years</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-[#0A1929]/5 border border-[#0A1929]/10 rounded-xl text-center">
                  <div className="text-3xl font-bold text-[#0A1929]">{years} Years</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                key={`entry-${entryCost}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0A1929] p-6 rounded-xl text-white shadow-lg"
              >
                <Home className="w-6 h-6 mb-2 text-[#D4AF37]" />
                <div className="text-sm text-white/80 mb-1">Entry Cost (10%)</div>
                <div className="text-2xl font-bold">₹{(entryCost / 100000).toFixed(1)}L</div>
              </motion.div>

              <motion.div
                key={`cashback-${cashback}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="bg-[#D4AF37] p-6 rounded-xl text-white shadow-lg"
              >
                <DollarSign className="w-6 h-6 mb-2" />
                <div className="text-sm text-white/90 mb-1">Cashback (50%)</div>
                <div className="text-2xl font-bold">₹{(cashback / 100000).toFixed(1)}L</div>
              </motion.div>
            </div>

            {/* Total Returns */}
            <motion.div
              key={`returns-${totalReturns}`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-br from-[#0A1929] to-[#1a2f47] p-8 rounded-2xl text-white shadow-xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#D4AF37]/5"></div>
              <div className="relative z-10">
                <TrendingUp className="w-8 h-8 mb-4 text-[#D4AF37]" />
                <div className="text-sm text-white/80 mb-2">Total Returns ({years} Years)</div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  ₹{(totalReturns / 100000).toFixed(1)}L
                </div>
                <div className="text-sm text-white/70">
                  ₹{(annualRentalReturn / 100000).toFixed(1)}L/year rental + ₹{(cashback / 100000).toFixed(1)}L cashback
                </div>
              </div>
            </motion.div>

            {/* ROI & Effective Cost */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                key={`roi-${roi}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg border-2 border-[#D4AF37]/30"
              >
                <div className="text-sm text-gray-600 mb-1">ROI</div>
                <div className="text-3xl font-bold text-[#D4AF37]">{roi.toFixed(0)}%</div>
              </motion.div>

              <motion.div
                key={`effective-${effectiveCost}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-lg border-2 border-[#0A1929]/30"
              >
                <div className="text-sm text-gray-600 mb-1">Effective Cost</div>
                <div className="text-2xl font-bold text-[#0A1929]">
                  ₹{(effectiveCost / 100000).toFixed(1)}L
                </div>
                <div className="text-xs text-gray-500 mt-1">After cashback</div>
              </motion.div>
            </div>

            {/* Visual Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-200"
            >
              <div className="text-sm font-semibold text-gray-700 mb-4">Investment Breakdown</div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Your Investment</span>
                    <span>₹{(entryCost / 100000).toFixed(1)}L</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(entryCost / propertyValue) * 100}%` }}
                      transition={{ duration: 0.8 }}
                      className="h-full bg-[#0A1929]"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Cashback Return</span>
                    <span>₹{(cashback / 100000).toFixed(1)}L</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(cashback / propertyValue) * 100}%` }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-full bg-[#D4AF37]"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Rental Returns ({years} years)</span>
                    <span>₹{(totalRentalReturns / 100000).toFixed(1)}L</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min((totalRentalReturns / propertyValue) * 100, 100)}%` }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="h-full bg-gradient-to-r from-[#0A1929] to-[#1a2f47]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
