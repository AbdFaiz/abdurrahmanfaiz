"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulasi pengiriman form
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f5f1ea]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#8b4513]"></div>
            <span className="text-sm font-medium text-[#8b4513] tracking-widest uppercase">
              連絡先
            </span>
            <div className="h-px w-8 bg-[#8b4513]"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#2d2d2d] tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-[#403D39] text-lg font-light max-w-2xl mx-auto">
            Reach out to discuss collaborations, opportunities, or just to say hello
          </p>
        </div>

        {/* Main Layout - Japanese ZEN Inspired */}
        <div className="relative">
          {/* Decorative Circles - Japanese Ensō Style */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border border-[#8b4513]/10 rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 border border-[#8b4513]/10 rounded-full"></div>

          {/* Contact Content - Centered Layout */}
          <div className="relative z-10">
            {/* Main Contact Info - Horizontal Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {/* Email Card */}
              <a 
                href="mailto:abdurrahmanfaiz187@gmail.com"
                className="group block"
              >
                <div className="h-full border border-[#e0d8ce] bg-white/80 backdrop-blur-sm p-8 
                              hover:border-[#8b4513] transition-all duration-500
                              hover:shadow-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center 
                                border border-[#8b4513]/20 bg-[#8b4513]/10 group-hover:bg-[#8b4513]/20 
                                transition-all duration-300">
                    <i className="ri-mail-line text-2xl text-[#8b4513]"></i>
                  </div>
                  <h3 className="text-lg font-medium text-[#2d2d2d] mb-3 tracking-wide">
                    Email
                  </h3>
                  <p className="text-[#8b4513] font-light mb-2">abdurrahmanfaiz187@gmail.com</p>
                  <p className="text-sm text-[#777] font-light">
                    Feel free to reach out
                  </p>
                  {/* Bottom Line */}
                  <div className="mt-6 h-0.5 w-16 mx-auto bg-[#8b4513] transform scale-x-0 
                                group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a 
                href="https://linkedin.com/in/abdurrahman-faiz-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="h-full border border-[#e0d8ce] bg-white/80 backdrop-blur-sm p-8 
                              hover:border-[#8b4513] transition-all duration-500
                              hover:shadow-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center 
                                border border-[#8b4513]/20 bg-[#8b4513]/10 group-hover:bg-[#8b4513]/20 
                                transition-all duration-300">
                    <i className="ri-linkedin-box-fill text-2xl text-[#8b4513]"></i>
                  </div>
                  <h3 className="text-lg font-medium text-[#2d2d2d] mb-3 tracking-wide">
                    LinkedIn
                  </h3>
                  <p className="text-[#8b4513] font-light mb-2">abdurrahman-faiz-dev</p>
                  <p className="text-sm text-[#777] font-light">
                    Connect professionally
                  </p>
                  {/* Bottom Line */}
                  <div className="mt-6 h-0.5 w-16 mx-auto bg-[#8b4513] transform scale-x-0 
                                group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </a>

              {/* GitHub Card */}
              <a 
                href="https://github.com/AbdFaiz"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="h-full border border-[#e0d8ce] bg-white/80 backdrop-blur-sm p-8 
                              hover:border-[#8b4513] transition-all duration-500
                              hover:shadow-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center 
                                border border-[#8b4513]/20 bg-[#8b4513]/10 group-hover:bg-[#8b4513]/20 
                                transition-all duration-300">
                    <i className="ri-github-fill text-2xl text-[#8b4513]"></i>
                  </div>
                  <h3 className="text-lg font-medium text-[#2d2d2d] mb-3 tracking-wide">
                    GitHub
                  </h3>
                  <p className="text-[#8b4513] font-light mb-2">AbdFaiz</p>
                  <p className="text-sm text-[#777] font-light">
                    Explore my projects
                  </p>
                  {/* Bottom Line */}
                  <div className="mt-6 h-0.5 w-16 mx-auto bg-[#8b4513] transform scale-x-0 
                                group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Closing Japanese Element */}
        <div className="mt-20 text-center">
          <div className="inline-block">
            <span className="text-6xl text-[#8b4513]/10 block mb-4">結</span>
            <p className="text-xs text-[#777] tracking-widest uppercase">MUSUBI</p>
            <div className="mt-4 h-px w-20 bg-[#8b4513] mx-auto"></div>
            <p className="text-sm text-[#403D39] font-light mt-4 max-w-md mx-auto">
              The art of creating meaningful connections through technology and design
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}