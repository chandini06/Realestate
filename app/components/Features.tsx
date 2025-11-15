'use client';

import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, LogIn, Shield, FileCheck, CheckCircle } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const features = [
  {
    icon: TrendingUp,
    title: '50% Cashback on Property',
    description: 'Receive a guaranteed 50% cashback on your property value, making ownership more affordable than ever.',
  },
  {
    icon: BarChart3,
    title: '40% Rental Return',
    description: 'Enjoy a steady passive income with a 40% rental return, pre-rented and guaranteed.',
  },
  {
    icon: LogIn,
    title: 'Only 10% Entry Cost',
    description: 'Start your real estate investment journey with just 10% of the property`s value.',
  },
  {
    icon: Shield,
    title: 'RERA Registered Projects',
    description: 'Invest with confidence through RERA registered projects that ensure full transparency and compliance.',
  },
  {
    icon: FileCheck,
    title: 'Pre-approved Legal Structure',
    description: 'Our legal framework is pre-vetted and approved, providing a secure and hassle-free investment.',
  },
  {
    icon: CheckCircle,
    title: 'Defined Exit Strategy',
    description: 'A clear and defined exit strategy ensures your investment is liquid and profitable in the long term.',
  },
];

export default function Features() {
  return (
    <div className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-6 py-2 bg-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-semibold rounded-full mb-4 tracking-wider uppercase">
            Unique Advantages
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A1929] mb-4">
            The Opti Realty Difference
          </h2>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-600 mx-auto leading-relaxed">
            We've reimagined real estate to make it more accessible, profitable, and secure for everyone. Experience the future of property investment.
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="mt-16 hidden lg:grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="relative group"
              >
                <div className="relative bg-white p-8 rounded-2xl shadow-lg h-full border border-gray-200 hover:border-[#D4AF37]/30 hover:shadow-xl transition-all duration-500">
                  <div className="flex items-center justify-center h-20 w-20 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-10 w-10 text-[#D4AF37]" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#0A1929] mb-4">{feature.title}</h4>
                  <p className="text-base text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="mt-16 lg:hidden">
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="features-swiper"
            style={{ paddingBottom: '50px' }}
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <SwiperSlide key={feature.title} style={{ width: '85%' }}>
                  <div className="bg-white p-8 rounded-2xl shadow-xl h-full border border-gray-200">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 mx-auto mb-6">
                      <Icon className="h-8 w-8 text-[#D4AF37]" />
                    </div>
                    <h4 className="text-xl font-bold text-[#0A1929] mb-3">{feature.title}</h4>
                    <p className="text-base text-gray-600">{feature.description}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
