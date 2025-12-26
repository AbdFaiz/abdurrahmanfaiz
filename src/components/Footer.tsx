'use client';

import { useEffect, useState } from "react";

export default function Footer() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="bg-(--c-bg) text-(--c-text) py-12 px-4 sm:px-6 lg:px-8 border-t border-(--c-text)/10">
      {/* Japanese pattern divider */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-(--c-acc)"></div>
          <div className="text-(--c-acc) text-xl">•</div>
          <div className="h-px w-16 bg-(--c-acc)"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand section */}
          <div>
            <h3 className="text-xl font-medium text-(--c-text) mb-4 tracking-wide">
              <span className="text-(--c-acc)">安部</span>
              <span className="ml-2">Portfolio</span>
            </h3>
            <p className="text-sm leading-relaxed text-(--c-muted-2) max-w-xs">
              Crafting digital experiences with precision and minimalist elegance.
              精密でミニマルな優雅さを持つデジタル体験を創造します。
            </p>
          </div>

          {/* Navigation links */}
          <div>
            <h4 className="text-sm font-medium text-(--c-text) mb-5 tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="space-y-3">
              {['Experience', 'Skills', 'Projects', 'Contact', 'Hobby'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-(--c-muted-2) hover:text-(--c-acc) transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-px bg-(--c-acc) mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-medium text-(--c-text) mb-5 tracking-wider uppercase">
              Connect
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:abdurrahmanfaiz187@gmail.com"
                className="block text-(--c-muted-2) hover:text-(--c-acc) transition-colors duration-300"
              >
                abdurrahmanfaiz187@gmail.com
              </a>
              <a
                href="https://github.com/AbdFaiz"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-(--c-muted-2) hover:text-(--c-acc) transition-colors duration-300"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/abdurrahman-faiz-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-(--c-muted-2) hover:text-(--c-acc) transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-(--c-ink)/30 pt-8 text-center">
          <p className="text-sm text-(--c-muted-3) tracking-wide">
            &copy; 2025 
            <span className="mx-2 text-(--c-acc)">•</span>
            Crafted with precision
            <span className="mx-2 text-(--c-acc)">•</span>
            All rights reserved
          </p>
          <p className="text-xs text-(--c-muted-4) mt-2 tracking-wider">
            精巧に作られた
          </p>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`${scrolled ? 'fixed' : 'hidden'} z-999 bottom-6 right-6 w-10 h-10 bg-(--c-acc) text-(--c-text) rounded-full flex items-center justify-center hover:bg-(--c-acc-dark) transition-colors duration-300 opacity-80 hover:opacity-100`}
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}