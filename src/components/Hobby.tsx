"use client";

import { useState } from "react";
import Image from "next/image";
import { listArtworks, type Artwork } from "@/data";

export default function Hobby() {
  const [activeImage, setActiveImage] = useState(0);
  const playlistId = "4WjDzt4dbsDuLeyTj6Sspe";

  const activeArtwork = listArtworks[activeImage];

  return (
    <section id="hobby" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f5f1ea]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#8b4513]"></div>
            <span className="text-sm font-medium text-[#8b4513] tracking-widest uppercase">
              創造と音楽
            </span>
            <div className="h-px w-8 bg-[#8b4513]"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#2d2d2d] tracking-tight">
            Creative & Music Space
          </h2>
          <p className="text-[#5a5a5a] text-lg font-light max-w-2xl mx-auto">
            Where visual art meets auditory inspiration - My personal creative
            sanctuary
          </p>
        </div>

        {/* Main Gallery Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Side - Art Gallery (3/4 width) */}
          <div className="lg:w-4/6">
            <div className="border border-[#e0d8ce] bg-white/80 backdrop-blur-sm overflow-hidden hover:shadow-xl transition-all duration-500">
              {/* Gallery Header */}
              <div className="p-8 border-b border-[#e0d8ce] bg-white/50">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#2d2d2d] tracking-tight mb-2">
                      Art Gallery
                    </h3>
                    <p className="text-[#5a5a5a] font-light">
                      A collection of my visual creations
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      {listArtworks.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImage(idx)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            activeImage === idx
                              ? "bg-[#8b4513] w-4"
                              : "bg-[#e0d8ce] hover:bg-[#8b4513]/50"
                          }`}
                          aria-label={`View artwork ${idx + 1}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-[#777] font-medium tracking-wide">
                      {activeImage + 1}/{listArtworks.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Art Display */}
              <div className="p-8 md:p-12">
                <div className="h-64 md:h-96 rounded-xl relative overflow-hidden mb-8 group bg-gradient-to-br from-[#8b4513]/5 to-[#5a5a5a]/5">
                  {/* Art Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={activeArtwork.image}
                      alt={activeArtwork.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                      priority={activeImage === 0}
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Japanese Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-[#8b4513] rounded-full"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-[#8b4513] rounded-full"></div>
                    </div>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#8b4513]/30"></div>
                  <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#8b4513]/30"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#8b4513]/30"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#8b4513]/30"></div>
                </div>

                {/* Art Info */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-2xl font-bold text-[#2d2d2d] mb-2 tracking-tight">
                      {activeArtwork.title}
                    </h4>
                    <p className="text-[#5a5a5a] text-lg leading-relaxed font-light">
                      {activeArtwork.description}
                    </p>
                  </div>

                  {/* Art Metadata */}
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 border border-[#e0d8ce] bg-white/50 rounded-lg">
                      <i className="ri-calendar-line text-[#8b4513]"></i>
                      <span className="text-sm text-[#5a5a5a] font-medium">
                        {activeArtwork.year}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 border border-[#e0d8ce] bg-white/50 rounded-lg">
                      <i className="ri-palette-line text-[#8b4513]"></i>
                      <span className="text-sm text-[#5a5a5a] font-medium">
                        {activeArtwork.category}
                      </span>
                    </div>
                    {activeArtwork.medium && (
                      <div className="flex items-center gap-2 px-4 py-2 border border-[#e0d8ce] bg-white/50 rounded-lg">
                        <i className="ri-brush-line text-[#8b4513]"></i>
                        <span className="text-sm text-[#5a5a5a] font-medium">
                          {activeArtwork.medium}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="mt-8 pt-8 border-t border-[#e0d8ce] flex justify-between">
                  <button
                    onClick={() =>
                      setActiveImage(
                        (prev) =>
                          (prev - 1 + listArtworks.length) % listArtworks.length
                      )
                    }
                    className="flex items-center gap-2 px-6 py-3 border border-[#e0d8ce] text-[#5a5a5a] hover:border-[#8b4513] hover:text-[#8b4513] transition-all duration-300"
                  >
                    <i className="ri-arrow-left-line"></i>
                    <span className="font-medium tracking-wide">Previous</span>
                  </button>

                  <button
                    onClick={() =>
                      setActiveImage((prev) => (prev + 1) % listArtworks.length)
                    }
                    className="flex items-center gap-2 px-6 py-3 border border-[#8b4513] text-[#8b4513] hover:bg-[#8b4513] hover:text-white transition-all duration-300"
                  >
                    <span className="font-medium tracking-wide">Next</span>
                    <i className="ri-arrow-right-line"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Music Recommendations (1/4 width) */}
          <div className="lg:w-2/6">
            <div className="sticky top-8 border border-[#e0d8ce] bg-white/80 backdrop-blur-sm h-fit hover:shadow-xl transition-all duration-500">
              <iframe data-testid="embed-iframe" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/5xAvqVkRNCU6xFMKVNjgoj?utm_source=generator" width="100%"    height="480" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/>
            </div>
          </div>
        </div>

        {/* Japanese Closing Element */}
        <div className="mt-20 pt-16 border-t border-[#e0d8ce] text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <span className="text-6xl text-[#8b4513]/20 block mb-4">響</span>
              <p className="text-[#5a5a5a] font-light mb-2">
                Where visual rhythm meets auditory harmony
              </p>
              <p className="text-sm text-[#777] tracking-widest">
                KYŌ • Resonance
              </p>
            </div>

            <div className="inline-flex items-center gap-4">
              <div className="h-px w-12 bg-[#8b4513]"></div>
              <span className="text-sm text-[#777] tracking-widest">
                創造的共鳴
              </span>
              <div className="h-px w-12 bg-[#8b4513]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Animation Style */}
      <style jsx>{`
        @keyframes wave {
          0% {
            height: 30%;
          }
          100% {
            height: 90%;
          }
        }
      `}</style>
    </section>
  );
}
