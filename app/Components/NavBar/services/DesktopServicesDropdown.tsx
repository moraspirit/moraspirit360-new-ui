import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from "next/navigation";
import "../LinkStyle.css";

const DesktopServicesDropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
  
    const serviceLinks = [
      { 
        name: 'Marketing', 
        href: '/marketing' 
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
  
    return (
      <div 
        className="relative group"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className={`cursor-pointer ${pathname.startsWith('/services') ? 'active' : ''}`}>
          Services
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="inline-block ml-1 text-xs"
          >
            ▼
          </motion.span>
        </div>
  
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.2,
                  ease: "easeInOut"
                }
              }}
              exit={{ 
                opacity: 0, 
                y: -10,
                transition: { 
                  duration: 0.1,
                  ease: "easeInOut"
                }
              }}
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 text-white bg-black rounded-lg shadow-lg z-50 overflow-hidden"
            >
              {serviceLinks.map((service) => (
                <Link 
                  key={service.href}
                  href={service.href}
                  className="block px-4 py-2 hover:bg-red-500 hover:text-white transition-colors duration-300"
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

export default DesktopServicesDropdown;