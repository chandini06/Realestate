'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      setIsAtTop(scrollY < 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/projects', label: 'Projects' },
    { href: '/legal', label: 'Legal' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'shadow-[0_8px_32px_rgba(0,0,0,0.12)] bg-white/80 backdrop-blur-xl border-b border-white/20'
          : isAtTop
          ? 'bg-transparent'
          : 'bg-white/70 backdrop-blur-xl'
      } min-h-[80px]`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center min-h-[80px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            {/* <Link href="/" className="flex items-center group">
              <div className={`px-6 py-3 rounded-2xl font-bold text-xl transition-all duration-300 ${
                isAtTop && !isScrolled
                  ? 'bg-white/10 backdrop-blur-md border border-white/30 text-white shadow-lg'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl'
              }`}>
                Opti Realty
              </div>
            </Link> */}
          </motion.div>

          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                href={link.href}
                className={`relative px-5 py-2.5 rounded-xl transition-all duration-300 group ${
                  isAtTop && !isScrolled
                    ? 'text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                    : 'text-gray-800 hover:text-blue-600 hover:bg-blue-50/80 backdrop-blur-sm'
                }`}
              >
                <span className="relative">
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isAtTop && !isScrolled ? 'bg-white' : 'bg-blue-600'
                  }`}></span>
                </span>
              </motion.a>
            ))}
          </nav>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors focus:outline-none ${
                isAtTop && !isScrolled
                  ? 'text-white/90 hover:text-white'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <nav className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

