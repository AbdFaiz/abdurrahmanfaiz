/* eslint-disable @next/next/no-img-element */
import { listTools } from "@/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-(--c-bg)">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-6 bg-(--c-acc)"></div>
            <span className="text-sm font-medium text-(--c-acc) tracking-widest uppercase">
              道具箱
            </span>
            <div className="h-px w-6 bg-(--c-acc)"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-(--c-text) tracking-tight">
            Tech Stack
          </h2>
          <p className="text-(--c-ink) text-lg font-light">
            Tools I wield with precision and care
          </p>
        </div>

        {/* Tools Grid - Japanese Minimalist */}
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-(--c-acc) rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-(--c-acc) rounded-full"></div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 relative z-10">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                className="group relative"
              >
                {/* Card Container */}
                <div className="aspect-square bg-white/90 backdrop-blur-sm border border-(--c-border) p-6 flex flex-col items-center justify-center 
                              hover:border-(--c-acc) hover:bg-white transition-all duration-500 
                              overflow-hidden relative">
                  
                  {/* Border Accent - Japanese Style */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-(--c-acc)/30 transition-all duration-500"></div>
                  
                  {/* Icon Container */}
                  <div className="relative mb-4 transform group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 bg-(--c-acc)/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                    <img 
                      src={tool.icon} 
                      alt={tool.name} 
                      className="h-12 w-12 relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  {/* Tool Name */}
                  <span className="text-sm text-(--c-ink) group-hover:text-(--c-acc) font-medium tracking-wide text-center 
                                 transition-colors duration-500 leading-tight">
                    {tool.name}
                  </span>

                  {/* Japanese Hover Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-(--c-acc) transform scale-x-0 group-hover:scale-x-100 
                                transition-transform duration-500 origin-center"></div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-(--c-acc) opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-(--c-acc) opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-(--c-acc) opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-(--c-acc) opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Japanese Divider */}
        <div className="mt-20 flex items-center justify-center">
          <div className="h-px w-16 bg-(--c-acc)"></div>
          <div className="mx-4 text-(--c-acc) text-sm tracking-widest">・</div>
          <div className="h-px w-16 bg-(--c-acc)"></div>
          <div className="mx-4 text-(--c-acc) text-sm tracking-widest">・</div>
          <div className="h-px w-16 bg-(--c-acc)"></div>
        </div>

        {/* Japanese Wisdom */}
        <div className="mt-20 text-center max-w-2xl mx-auto">
          <div className="mb-6">
            <span className="text-6xl text-(--c-acc)/20 block mb-2">器</span>
            <p className="text-xs text-(--c-muted) tracking-widest uppercase">UTSUWA</p>
          </div>
          <p className="text-(--c-ink) italic font-light mb-3">
            &quot;A craftsman is known by his tools&quot;
          </p>
          <p className="text-sm text-(--c-acc) tracking-wide">
            道具は職人の鏡
          </p>
          <div className="mt-8">
            <div className="inline-block h-px w-8 bg-(--c-acc)"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed left-4 bottom-4 hidden lg:block pointer-events-none">
        <div className="text-(--c-acc)/10 text-sm rotate-90 origin-left translate-x-4 tracking-widest">
          技術・道具・匠
        </div>
      </div>
    </section>
  );
}