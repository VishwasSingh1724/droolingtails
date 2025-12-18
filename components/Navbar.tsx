
import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NavLink } from '../types';

const LINKS: NavLink[] = [
  { label: 'Homepage', href: '#', isActive: true },
  { label: 'About Us', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Pages', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact Us', href: '#' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#fffcf0]/90 backdrop-blur-sm pt-4 pb-2">
      <div className="w-full px-6 md:px-12 lg:px-10 lg:w-[80%] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
           <div className="relative w-10 h-10">
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#0d5f73] w-full h-full">
                  <path d="M12 2a3 3 0 0 0-3 3v1a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                  <path d="M19 8a3 3 0 0 0-3 3v1a3 3 0 0 0 6 0V11a3 3 0 0 0-3-3Z" />
                  <path d="M5 8a3 3 0 0 0-3 3v1a3 3 0 0 0 6 0V11a3 3 0 0 0-3-3Z" />
                  <path d="M18.6 15.6a6 6 0 0 1-13.2 0c-1.1.9-1.4 3-.4 4.1A5 5 0 0 0 12 22a5 5 0 0 0 7-2.3c1-1.1.7-3.2-.4-4.1Z" />
              </svg>
              <div className="absolute top-0 right-0 w-3 h-3 bg-[#ff5454] rounded-full animate-bounce"></div>
           </div>
           <div className="flex flex-col">
             <span className="text-2xl font-bold text-[#0d5f73] brand-font leading-none">Drooling</span>
             <span className="text-sm font-semibold text-[#dba135] tracking-wider uppercase">Tails</span>
           </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-bold transition-colors hover:text-[#dba135] ${
                link.isActive ? 'text-[#0d5f73]' : 'text-gray-500'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Contact Button */}
        <div className="hidden lg:flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#eb2f5f] flex items-center justify-center text-white shadow-lg shadow-[#ffd9d9]">
                <Phone size={20} fill="white" />
            </div>
            <div className="flex flex-col">
                <span className="text-xs text-gray-500 font-bold">Contact us</span>
                <span className="text-sm text-[#dba135] font-extrabold">+123 121 1234</span>
            </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-[#0d5f73]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#fffcf0] shadow-xl p-4 flex flex-col gap-4 border-t border-[#ffe7a6]">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#0d5f73] font-bold hover:text-[#dba135]"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
