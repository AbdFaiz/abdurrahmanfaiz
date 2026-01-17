/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { listProject } from "@/projects";

export default function AllProjectsPage() {
  const getIconForTech = (techName: string) => {
    const iconMap: Record<string, string> = {
      "Next.js": "/assets/tools/next.svg",
      "Tailwind CSS": "/assets/tools/tailwind.svg",
      "Tailwind": "/assets/tools/tailwind.svg",
      "TypeScript": "/assets/tools/ts.svg",
      "Laravel": "/assets/tools/laravel.svg",
      "PHP": "/assets/tools/php.svg",
      "MySQL": "/assets/tools/mysql.svg",
      "Supabase": "/assets/tools/supa.svg",
      "Supa": "/assets/tools/supa.svg",
      "Bootstrap": "/assets/tools/bootstrap.svg",
      "JavaScript": "/assets/tools/js.svg",
      "jQuery": "/assets/tools/jquery.svg",
      "HTML": "/assets/tools/html.svg",
      "CSS": "/assets/tools/css3.svg",
      "CSS3": "/assets/tools/css3.svg",
      "Telegram": "/assets/tools/telegram.svg",
      "Astro JS": "/assets/tools/astro.svg",
      "React": "/assets/tools/react.svg",
      "Ubuntu": "/assets/tools/ubuntu.svg",
      "Shadcn UI": "/assets/tools/shadcn.svg",
      "Motion": "/assets/tools/motion.svg",
    };
    return iconMap[techName] || "/assets/tools/default.svg";
  };

  return (
    <main className="min-h-screen bg-(--c-bg) py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation Back */}
        <Link href="/" className="inline-flex items-center gap-2 text-(--c-acc) hover:gap-4 transition-all duration-300 mb-12 group">
          <i className="ri-arrow-left-line"></i>
          <span className="text-sm font-medium tracking-widest uppercase">Back to Home</span>
        </Link>

        {/* Header Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-(--c-acc)"></div>
            <span className="text-sm font-medium text-(--c-acc) tracking-[0.3em] uppercase">
              全プロジェクト
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-(--c-text) mb-6">
            Archive <span className="text-(--c-acc)/30 font-light italic">/</span> Library
          </h1>
          <p className="text-(--c-ink) text-xl font-light max-w-3xl leading-relaxed">
            A comprehensive list of everything I&apos;ve built, from production-ready applications to experimental prototypes and visual studies.
          </p>
        </div>

        {/* Grid Display - Show all projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listProject.map((project) => (
            <div key={project.id} className="group relative overflow-hidden">
              <div className="h-full flex flex-col bg-white/80 backdrop-blur-sm border border-(--c-border) hover:border-(--c-acc) transition-all duration-500 hover:shadow-lg">
                
                {/* Header */}
                <div className="relative p-8 border-b border-(--c-border) min-h-[140px] bg-linear-to-br from-(--c-bg)/50 to-(--c-border)/30">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-px bg-(--c-acc)"></div>
                        <h3 className="text-xl font-bold text-(--c-text) tracking-tight line-clamp-1">
                          {project.nama}
                        </h3>
                      </div>
                    </div>
                    <p className="text-(--c-ink) text-sm leading-relaxed font-light line-clamp-3">
                      {project.desk}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col grow">
                  {/* Tech Stack */}
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <div key={index} className="group/tech flex items-center gap-2 px-3 py-1.5 border border-(--c-border) bg-white/50 transition-all duration-300">
                          <img src={getIconForTech(tech)} alt={tech} className="w-3 h-3 object-contain grayscale group-hover/tech:grayscale-0" />
                          <span className="text-[10px] text-(--c-muted) uppercase tracking-wider font-semibold">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Button */}
                  <div className="mt-auto">
                    <Link
                      href={project.url}
                      target="_blank"
                      className="relative inline-flex items-center justify-center gap-2 w-full py-3 border border-(--c-acc) text-(--c-acc) hover:bg-(--c-acc) hover:text-white transition-all duration-300 text-sm font-medium"
                    >
                      <span>{project.type === "code" ? "Source Code" : "View Live"}</span>
                      <i className="ri-arrow-right-up-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-24 text-center">
          <p className="text-(--c-muted) text-sm italic">
            Currently working on more experiments. Check back soon.
          </p>
        </div>
      </div>
    </main>
  );
}