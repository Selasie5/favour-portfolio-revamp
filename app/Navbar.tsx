'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, Clock as ClockIcon, MapPin } from 'lucide-react';

// Location Component remains the same
const Location = () => {
  const [location, setLocation] = useState('Loading...');
  const [error, setError] = useState('');

  useEffect(() => {
    const getLocation = async () => {
      try {
        const position:any = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}&zoom=10`
        );
        const data = await response.json();
        
        const city = data.address.city || data.address.town || data.address.village || '';
        const country = data.address.country || '';
        
        setLocation(`${city}${city && country ? ', ' : ''}${country}`);
      } catch (err) {
        setError('Location unavailable');
        setLocation('Location unavailable');
      }
    };

    getLocation();
  }, []);

  return (
    <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-full">
      <MapPin className="w-4 h-4 text-blue-600" />
      <span className="text-sm font-medium text-blue-600 truncate max-w-[150px]">
        {location}
      </span>
    </div>
  );
};

// Clock Component remains the same
const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const meridiem = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;

  return (
    <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-full">
      <ClockIcon className="w-4 h-4 text-blue-600" />
      <span className="text-sm font-medium text-blue-600">
        {`${formattedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${meridiem}`}
      </span>
    </div>
  );
};

// Updated Navbar Component
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Interests', href: '#interests' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const updateNavbar = () => {
      setIsScrolled(scrollY.get() > 50);
    };

    const unsubscribe = scrollY.onChange(updateNavbar);
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center h-16">
          {/* Logo/Name - Left */}
          <div className="flex-shrink-0">
            <Link href="#home">
              <span className="text-xl font-bold text-blue-600">FM.</span>
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex flex-grow justify-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Clock and Location - Right */}
          <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            <Clock />
            <Location />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button
              className="p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pb-4 space-y-2">
            {/* Clock and Location in mobile menu */}
            <div className="px-4 py-2 space-y-2">
              <Clock />
              <Location />
            </div>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default NavBar;