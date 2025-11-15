'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    alt: 'Luxury modern apartment complex with glass facades',
    title: 'Premium Living Spaces',
    subtitle: 'Experience luxury redefined',
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    alt: 'Contemporary high-rise residential towers',
    title: 'Smart Investment Opportunities',
    subtitle: 'Where growth meets returns',
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    alt: 'Elegant residential building architecture',
    title: 'RERA Certified Projects',
    subtitle: 'Trusted and transparent',
  },
  {
    url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    alt: 'Modern urban development',
    title: 'Strategic Locations',
    subtitle: 'Prime real estate investments',
  },
  {
    url: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80',
    alt: 'Luxury residential complex',
    title: 'Guaranteed Returns',
    subtitle: 'Pre-rented properties ready for income',
  },
];

const benefits = [
  {
    icon: '💰',
    title: 'Pre-Rented, Guaranteed Returns',
    description: 'Invest in properties that are already generating income, providing you with immediate and guaranteed rental returns. No waiting period, no vacancy risks.',
  },
  {
    icon: '📈',
    title: 'Real Asset Growth with Passive Income',
    description: 'Benefit from the dual advantages of capital appreciation on a real asset and a consistent stream of passive income. Build wealth while you sleep.',
  },
];

export default function CashbackModel() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block px-6 py-2 bg-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-semibold rounded-full mb-4 tracking-wider uppercase">
            Revolutionary Model
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A1929] mb-6">
            India's First Real Estate Cashback Model
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pioneering real estate investment with our unique <span className="font-bold text-[#D4AF37]">50% cashback</span> and <span className="font-bold text-[#0A1929]">40% rental return</span> model, making property ownership accessible and profitable.
          </p>
        </motion.div>

        {/* Enhanced Image Carousel with Overlay Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 max-w-6xl mx-auto"
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            loop={true}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[450px] md:h-[600px] group">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929]/90 via-[#0A1929]/50 to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-white">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-3xl md:text-5xl font-bold mb-2">{image.title}</h3>
                      <p className="text-lg md:text-xl text-[#D4AF37]">{image.subtitle}</p>
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Enhanced Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="relative group"
            >
              <div className="relative p-8 md:p-10 bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-[#D4AF37]/30 hover:shadow-xl transition-all duration-500">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0A1929] mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
