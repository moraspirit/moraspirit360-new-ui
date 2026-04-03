"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

interface ServicesDropdownProps {
  onServiceSelect?: () => void;
}

const MobileServicesDropdown: React.FC<ServicesDropdownProps> = ({ onServiceSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const serviceLinks = [
    { 
      name: 'Marketing', 
      href: '/marketing' 
    },
    { 
      name: 'Web Development', 
      href: '/web-development' 
    },
    { 
      name: 'Photography', 
      href: '/photography' 
    },
    { 
      name: 'Videography', 
      href: '/videography' 
    }
  ];

  const handleServiceClick = (href: string) => {
    setIsOpen(false);
    onServiceSelect && onServiceSelect();
  };

  return (
    <div className="relative w-full">
      {/* Services Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-2xl font-bold my-4 hover:text-red-500 focus:outline-none flex items-center justify-center w-full"
      >
        Services 
        <FontAwesomeIcon 
          icon={isOpen ? faChevronUp : faChevronDown} 
          className="ml-2 w-4 h-4"
        />
      </button>

      {/* Dropdown List with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1, 
              height: 'auto',
              transition: { 
                duration: 0.3,
                ease: "easeInOut"
              }
            }}
            exit={{ 
              opacity: 0, 
              height: 0,
              transition: { 
                duration: 0.2,
                ease: "easeInOut"
              }
            }}
            className="w-full bg-black text-white rounded-lg shadow-lg overflow-hidden"
          >
            {serviceLinks.map((service) => (
              <Link 
                key={service.href}
                href={service.href}
                className="block px-4 py-3 hover:bg-red-500 hover:text-white transition-colors duration-300 text-center"
                onClick={() => handleServiceClick(service.href)}
              >
                {service.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileServicesDropdown;
