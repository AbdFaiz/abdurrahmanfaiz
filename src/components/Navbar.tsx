"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Lock body scroll saat menu kebuka
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Experience", jp: "経験", href: "#experience" },
    { label: "Skills", jp: "技能", href: "#skills" },
    { label: "Projects", jp: "制作", href: "#projects" },
    { label: "Hobby", jp: "趣味", href: "#hobby" },
    { label: "Contact", jp: "連絡", href: "#contact" },
  ];

  const socialLinks = [
    { label: "LN", href: "https://www.linkedin.com/in/abdurrahman-faiz-dev/" },
    { label: "GH", href: "https://github.com/AbdFaiz/" },
    { label: "IG", href: "https://www.instagram.com/4o4nf_/" },
  ]

  return (
    <>
      {/* --- DESKTOP NAVBAR --- */}
      <nav className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4 bg-white/90 backdrop-blur-md border-b border-(--c-border) shadow-sm" : "py-8 bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-10 flex items-center justify-between">
          <Link href="/" className="group flex flex-col">
            <span className="text-sm font-bold tracking-[0.3em] text-(--c-text)">ABDURRAHMAN FAIZ</span>
            <div className="flex items-center gap-2">
              <div className="h-px w-0 group-hover:w-4 bg-(--c-acc) transition-all duration-500"></div>
              <span className="text-[10px] text-(--c-muted) tracking-[0.2em] uppercase">Fullstack Artisan</span>
            </div>
          </Link>

          <div className="flex items-center gap-10">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="group relative overflow-hidden py-1">
                <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-(--c-ink) group-hover:text-(--c-acc) transition-colors">
                  {item.label}
                </span>
                <div className="absolute bottom-0 left-0 w-full h-px bg-(--c-acc) -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-500"></div>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* --- MOBILE HEADER --- */}
      <nav className={`md:hidden fixed top-0 left-0 right-0 z-100 transition-all duration-300 px-6 py-5 flex justify-between items-center ${
        scrolled || isOpen ? "bg-white border-b border-(--c-border)" : "bg-transparent"
      }`}>
        <div className={`transition-all duration-500 ${isOpen ? "opacity-0 -translate-x-5" : "opacity-100 translate-x-0"}`}>
          <span className="text-xl font-bold tracking-tighter">AF.</span>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-110 w-12 h-12 flex flex-col items-center justify-center transition-all duration-300 active:scale-90"
        >
          {/* Tombol Close/Burger yang menyatu */}
          <div className="relative w-6 h-6">
            <span className={`absolute top-1/2 left-0 w-6 h-[1.5px] bg-(--c-text) transition-all duration-500 ${
              isOpen ? "rotate-225 top-3" : "-translate-y-1"
            }`}></span>
            <span className={`absolute top-1/2 left-0 w-6 h-[1.5px] bg-(--c-text) transition-all duration-500 ${
              isOpen ? "-rotate-225 top-3" : "translate-y-1"
            }`}></span>
          </div>
          {/* Label estetik kecil di bawah icon */}
          <span className="text-[8px] tracking-[0.3em] uppercase mt-1 text-(--c-muted)">
            {isOpen ? "Close" : "Menu"}
          </span>
        </button>
      </nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div className={`fixed inset-0 z-90 md:hidden transition-all duration-700 ${
        isOpen ? "visible" : "invisible"
      }`}>
        {/* Backdrop Hitam Transparan */}
        <div 
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-700 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Panel Menu */}
        <div className={`absolute right-0 top-0 bottom-0 w-[85%] bg-[#FDFCFB] transition-transform duration-700 cubic-bezier(0.77, 0, 0.175, 1) ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          {/* Aksen Garis Jepang */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-(--c-border) opacity-50"></div>

          <div className="h-full flex flex-col justify-center px-16">
            <div className="space-y-12">
              {navItems.map((item, i) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group block relative"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className={`transition-all duration-700 transform ${isOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
                    <span className="absolute -left-10 top-1 text-[10px] font-serif italic text-(--c-acc)">0{i + 1}</span>
                    <div className="flex flex-col">
                      <span className="text-3xl font-light tracking-widest text-(--c-text) group-hover:text-(--c-acc) transition-colors">
                        {item.label}
                      </span>
                      <span className="text-[10px] tracking-[0.5em] uppercase text-(--c-muted) mt-1">
                        {item.jp}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

           {/* Bottom Section */}
            <div className="mt-8 border-t border-(--c-border)">
              <div className="flex gap-6 text-(--c-ink) text-sm mt-4">
                {socialLinks.map(link => (
                  <Link key={link.label} target="_blank" href={link.href} className="hover:text-(--c-acc)">{link.label}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}