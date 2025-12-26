import { listExperience, type Experience } from "@/data";
import Image from "next/image";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-(--c-bg)">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-(--c-acc)"></div>
            <span className="text-sm font-medium text-(--c-acc) tracking-widest uppercase">
              職業歴
            </span>
            <div className="h-px w-10 bg-(--c-acc)"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-(--c-text) tracking-tight">
            Professional Journey
          </h2>
          <p className="text-(--c-ink) text-lg font-light max-w-2xl mx-auto">
            A timeline of growth and contribution in the digital landscape
          </p>
        </div>

        {/* Japanese Inspired Vertical Scroll Layout */}
        <div className="relative">
          {/* Decorative Japanese Elements */}
          <div className="absolute left-1 top-0 bottom-0 w-px bg-linear-to-b from-(--c-acc)/20 via-(--c-acc)/10 to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-px bg-linear-to-b from-(--c-acc)/20 via-(--c-acc)/10 to-transparent"></div>

          {/* Experience Cards Container */}
          <div className="space-y-12 pl-6 md:pl-8">
            {listExperience.map((exp, index) => (
              <div key={exp.id} className="group relative">
                {/* Timeline Indicator */}
                <div className="absolute -left-6 md:-left-9 top-0 flex items-start">
                  <div className="w-4 h-4 bg-(--c-acc) rounded-full relative z-10">
                    <div className="absolute inset-0 bg-(--c-acc) rounded-full animate-ping opacity-30"></div>
                  </div>
                  <div className="h-full w-px bg-linear-to-b from-(--c-acc) to-transparent ml-1.5"></div>
                </div>

                {/* Main Experience Card */}
                <div className="ml-0 md:ml-4">
                  <div className="bg-white/90 backdrop-blur-sm border border-(--c-border) 
                                  hover:border-(--c-acc) transition-all duration-500 
                                  overflow-hidden group-hover:shadow-2xl">

                    {/* Card Header */}
                    <div className="p-8 border-b border-(--c-border) relative">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                        {/* Title and Company */}
                        <div className="flex-1">
                          <div className="flex items-center gap-4">
                            <div>
                              <h3 className="text-2xl md:text-3xl font-bold text-(--c-text) 
                                             tracking-tight mb-2">
                                {exp.title}
                              </h3>
                              <div className="flex items-center gap-2">
                                <div className="w-4 h-px bg-(--c-acc)"></div>
                                <span className="text-lg text-(--c-acc) font-medium tracking-wide">
                                  {exp.company}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Date */}
                        <div className="flex gap-2">
                          <div className="p-2 border border-(--c-acc) text-(--c-acc) bg-white/50 rounded-lg group text-sm">
                            <i className="ri-calendar-line me-2"></i>
                            {exp.period}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-8">
                      {/* Description */}
                      <div className="mb-10">
                        <p className="text-(--c-ink) text-lg leading-relaxed font-light">
                          {exp.description}
                        </p>
                      </div>

                      {/* Full Tech Stack */}
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-8 h-px bg-(--c-acc)"></div>
                          <h4 className="text-sm font-medium text-(--c-muted) tracking-wider uppercase">
                            Technologies Mastered
                          </h4>
                          <div className="w-8 h-px bg-(--c-acc)"></div>
                        </div>

                        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
                          {exp.technologies.map((tech, idx) => (
                            <div
                              key={idx}
                              className="group/tech relative p-4 border border-(--c-border) 
                                         bg-white/50 hover:bg-white transition-all duration-300"
                            >
                              {/* Border Effect */}
                              <div className="absolute inset-0 border border-(--c-acc) 
                                              transform translate-x-1 translate-y-1 
                                              group-hover/tech:translate-x-0 group-hover/tech:translate-y-0 
                                              transition-transform duration-300"></div>

                              {/* Icon */}
                              <div className="relative z-10 flex items-center justify-center">
                                <Image
                                  src={tech}
                                  alt="tech"
                                  width={32}
                                  height={32}
                                  className="object-contain grayscale group-hover/tech:grayscale-0 
                                             transition-all duration-300"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="border-t border-(--c-border) p-6 bg-(--c-bg)/30">
                      <div className="flex items-center justify-end">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            {[...Array(3).map((_, i) => (
                              <div
                                key={i}
                                className="w-1 h-1 bg-(--c-acc) rounded-full opacity-40"
                              ></div>
                            ))]}
                          </div>
                          <span className="text-xs text-(--c-muted) tracking-widest">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connection Line between Cards */}
                  {index < listExperience.length - 1 && (
                    <div className="h-12 w-px bg-linear-to-b from-(--c-acc)/20 to-transparent 
                                    ml-6 md:ml-10"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Japanese Wisdom Footer */}
        <div className="mt-24 text-center">
          <div className="inline-block relative">
            <div className="absolute -top-6 -left-6 w-12 h-12 border border-(--c-acc)/10 rounded-full"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border border-[#8b4513]/10 rounded-full"></div>

            <div className="relative z-10">
              <span className="text-7xl text-[#8b4513]/10 block mb-4">歩</span>
              <p className="text-sm text-[#777] tracking-wider uppercase mb-2">AYUMU • TO WALK</p>
              <div className="h-px w-20 bg-[#8b4513] mx-auto my-4"></div>
              <p className="text-lg text-[#403D39] font-light max-w-md mx-auto">
                Every step in the journey shapes the path forward
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}