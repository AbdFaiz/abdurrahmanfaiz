import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#f5f1ea] text-[#2d2d2d] relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Japanese character accent */}
        <div className="mb-8">
          <span className="text-6xl sm:text-7xl md:text-8xl font-bold text-[#8b4513] opacity-20 tracking-widest">
            創
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 text-[#2d2d2d] tracking-tight">
          <span className="block mb-2">Full Stack</span>
          <span className="block text-[#8b4513] relative">
            Developer
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-[#8b4513]"></span>
          </span>
        </h1>

        <div className="my-12">
          <p className="text-lg sm:text-xl text-[#403D39] mb-3 font-light tracking-wide">
            優雅な解決策を紡ぐ
          </p>
          <p className="text-base sm:text-lg text-[#777] italic font-light">
            Crafting elegant solutions that bridge frontend and backend
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <Link
            target="_blank"
            href="/my-resume.pdf"
            className="group relative px-10 py-4 border-2 border-[#8b4513] text-[#8b4513] rounded-none font-medium 
                     hover:bg-[#8b4513] hover:text-[#f5f1ea] transition-all duration-300 
                     transform hover:scale-[1.02] min-w-[180px] text-center"
          >
            <span className="relative z-10">My Resume</span>
            <div className="absolute inset-0 border border-[#8b4513] transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
          </Link>

          <Link
            href="#contact"
            className="group px-10 py-4 border border-[#403D39] text-[#403D39] rounded-none font-medium 
                     hover:border-[#8b4513] hover:text-[#8b4513] transition-all duration-300 
                     transform hover:scale-[1.02] min-w-[180px] text-center"
          >
            <span className="flex items-center justify-center gap-2">
              More
              <i className="ri-arrow-right-line inline-block transition-all duration-300 group-hover:translate-x-1"></i>
            </span>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-[#8b4513] to-transparent animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}