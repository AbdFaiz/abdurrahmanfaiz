import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-(--c-bg) text-(--c-text) relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Japanese character accent */}
        <div className="mb-8">
          <span className="text-6xl sm:text-7xl md:text-8xl font-bold text-(--c-acc) opacity-20 tracking-widest">
            創
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 text-(--c-text) tracking-tight">
          <span className="block mb-2">Full Stack</span>
          <span className="block text-(--c-acc) relative">
            Developer
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-(--c-acc)"></span>
          </span>
        </h1>

        <div className="my-12">
          <p className="text-lg sm:text-xl text-(--c-ink) mb-3 font-light tracking-wide">
            優雅な解決策を紡ぐ
          </p>
          <p className="text-base sm:text-lg text-(--c-muted) italic font-light">
            Crafting elegant solutions that bridge frontend and backend
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <Link
            target="_blank"
            href="/my-resume.pdf"
            className="group relative px-10 py-4 border-2 border-(--c-acc) text-(--c-acc) rounded-none font-medium
                     hover:bg-(--c-acc) hover:text-(--c-bg) transition-all duration-300 
                     transform hover:scale-[1.02] min-w-[180px] text-center"
          >
            <span className="relative z-10">My Resume</span>
            <div className="absolute inset-0 border border-(--c-acc) transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
          </Link>

          <Link
            href="#contact"
            className="group px-10 py-4 border border-(--c-ink) text-(--c-ink) rounded-none font-medium 
                     hover:border-(--c-acc) hover:text-(--c-acc) transition-all duration-300 
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
          <div className="w-px h-16 bg-linear-to-b from-(--c-acc) to-transparent animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}