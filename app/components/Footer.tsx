'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/projects', label: 'Projects' },
    { href: '/products', label: 'Products' },
    { href: '/legal', label: 'Legal' },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      href: 'https://www.google.com/maps?q=SY:+11,+KRISHE+EMERALD,+KONDAPUR+MAIN+ROAD,+LAXMI+CYBER+CITY,+WHITEFIELDS,+HYDERABAD,+500081',
      text: 'SY: 11, KRISHE EMERALD, KONDAPUR MAIN ROAD, LAXMI CYBER CITY, WHITEFIELDS, HYDERABAD, 500081',
    },
    { icon: Phone, href: 'tel:+919515943506', text: '+91 95159 43506' },
    { icon: Phone, href: 'tel:+917893436702', text: '+91 78934 36702' },
    { icon: Phone, href: 'tel:+918121060707', text: '+91 81210 60707' },
    { icon: Mail, href: 'mailto:info@optirealty.com', text: 'info@optirealty.com' },
  ];

  return (
    <footer className="bg-[#0A1929] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 lg:gap-32">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center group">
              Opti Realty
              <ExternalLink className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity w-4 h-4" />
            </h3>
            <p className="text-white/70 text-sm max-w-md leading-relaxed">
              Pioneering real estate investment with our unique 50% cashback and 40% rental return model, making property ownership accessible and profitable.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center text-white/70 hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span>
                    <span className="relative group-hover:after:scale-x-100 after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#D4AF37] after:scale-x-0 after:origin-left after:transition-transform after:duration-300">
                      {link.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold tracking-wider mb-6">Contact Info</h3>
            <div className="space-y-4 text-sm">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={index}
                    href={contact.href}
                    className="block"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-start space-x-3 group">
                      <Icon className="mt-1 flex-shrink-0 text-[#D4AF37] group-hover:text-[#F4D03F] transition-colors duration-300 w-5 h-5" />
                      <span className="text-white/70 group-hover:text-white transition-colors duration-300">
                        {contact.text}
                      </span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-6 border-t border-white/10 text-center"
        >
          <p className="text-sm text-white/50">
            © {currentYear} Opti Realty. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
