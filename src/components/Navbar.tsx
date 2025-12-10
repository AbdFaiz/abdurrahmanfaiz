"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
    { label: "Hobby", href: "#hobby" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3 bg-white/80 backdrop-blur-md border-b border-[#e0d8ce] shadow-sm`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo with Japanese style */}
            <Link 
              href="/" 
              className="group flex items-center gap-3"
            >
              <div className="flex flex-col">
                <span className="text-[#2d2d2d] text-sm font-medium tracking-wider group-hover:text-[#8b4513] transition-colors duration-300">
                  ABDURRAHMAN FAIZ
                </span>
                <span className="text-xs text-[#777] font-light tracking-widest">
                  Full Stack Developer
                </span>
              </div>
            </Link>

            {/* Desktop Menu Items */}
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group relative py-2"
                >
                  <span className="text-sm text-[#403D39] font-medium tracking-wide 
                                 group-hover:text-[#8b4513] transition-colors duration-300">
                    {item.label}
                  </span>
                  <div className="absolute -bottom-5 left-0 right-0 h-0.5 bg-[#8b4513] 
                                transform scale-x-0 group-hover:scale-x-100 
                                transition-transform duration-300 origin-left"></div>
                </Link>
              ))}
              
              {/* Japanese Accent Button */}
              <Link
                target="_blank"
                href="mailto:abdurrahmanfaiz187@gmail.com"
                className="group relative px-6 py-2 border border-[#8b4513] text-[#8b4513] 
                         hover:bg-[#8b4513] hover:text-white transition-all duration-300"
              >
                <span className="text-sm font-medium tracking-wide">Get in Touch</span>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-[#8b4513] 
                              group-hover:border-white transition-colors duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Japanese Minimalist */}
      <nav className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md border-b border-[#e0d8ce] shadow-sm" 
          : "bg-transparent"
      }`}>
        <div className="px-4 py-3">
          <div className="flex items-center justify-end">

            {/* Mobile Menu Button - Japanese Style */}
            <button
              className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-0.5 bg-[#403D39] transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}></div>
              <div className={`w-6 h-0.5 bg-[#403D39] transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}></div>
              <div className={`w-6 h-0.5 bg-[#403D39] transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}></div>
              
              {/* Hover Circle */}
              <div className="absolute inset-0 border border-[#8b4513] rounded-full 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Japanese Sliding Panel */}
        <div
          className={`absolute inset-x-0 top-full 
                      bg-white/95 backdrop-blur-md
                      border-b border-[#e0d8ce]
                      transition-all duration-300 ease-out
                      ${
                        isOpen
                          ? "max-h-96 opacity-100 visible shadow-lg"
                          : "max-h-0 opacity-0 invisible overflow-hidden"
                      }`}
          style={{
            // Fallback untuk browser yang tidak support backdrop-blur
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          <div className="px-4 py-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center justify-between py-3 px-4 
                           text-[#403D39] hover:text-[#8b4513] hover:bg-[#f5f1ea]/50
                           transition-all duration-300 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-sm font-medium tracking-wide">
                  {item.label}
                </span>

                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-0.5 bg-[#8b4513] opacity-0 
                               group-hover:opacity-100 transition-opacity duration-300"
                  ></div>
                  <i
                    className="ri-arrow-right-s-line text-lg 
                               transition-transform duration-300 group-hover:translate-x-1"
                  ></i>
                </div>
              </Link>
            ))}

            {/* Decorative Middle Separator Line */}
            <div className="w-full flex justify-center py-4">
              <div className="w-20 h-px bg-[#8b4513]/30"></div>
            </div>

            {/* Japanese Decorative 3 Circles */}
            <div className="flex justify-center">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 border border-[#8b4513]/30 rounded-full"></div>
                <div className="w-4 h-4 border border-[#8b4513]/50 rounded-full"></div>
                <div className="w-4 h-4 border border-[#8b4513] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}