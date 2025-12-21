/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { listProject } from "@/projects";

export default function Projects() {
  // Helper untuk mendapatkan icon path berdasarkan nama teknologi
  const getIconForTech = (techName: string) => {
    const iconMap: Record<string, string> = {
      "Next.js": "/assets/tools/next.svg",
      "Tailwind CSS": "/assets/tools/tailwind.svg",
      "Tailwind": "/assets/tools/tailwind.svg",
      "TypeScript": "/assets/tools/ts.svg",
      "Laravel": "/assets/tools/laravel.svg",
      "PHP": "/assets/tools/php.svg",
      "MySQL": "/assets/tools/mysql.svg",
      "Bootstrap": "/assets/tools/bootstrap.svg",
      "JavaScript": "/assets/tools/js.svg",
      "jQuery": "/assets/tools/jquery.svg",
      "HTML": "/assets/tools/html.svg",
      "CSS": "/assets/tools/css3.svg",
      "CSS3": "/assets/tools/css3.svg",
      "Telegram": "/assets/tools/telegram.svg",
      "Astro JS": "/assets/tools/astro.svg",
      "React": "/assets/tools/react.svg",
      "Ubuntu": "/assets/tools/ubuntu.svg"
    };
    return iconMap[techName] || "/assets/tools/default.svg";
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f5f1ea]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#8b4513]"></div>
            <span className="text-sm font-medium text-[#8b4513] tracking-widest uppercase">
              作品集
            </span>
            <div className="h-px w-8 bg-[#8b4513]"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#2d2d2d] tracking-tight">
            Projects
          </h2>
          <p className="text-[#403D39] text-lg font-light max-w-2xl mx-auto">
            A curated collection of my crafted digital experiences
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listProject.slice(0, 6).map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden"
            >
              {/* Project Card */}
              <div className="h-full flex flex-col bg-white/80 backdrop-blur-sm border border-[#e0d8ce] 
                            hover:border-[#8b4513] transition-all duration-500
                            hover:shadow-lg">
                
                {/* Header with Japanese Pattern */}
                <div className="relative p-8 border-b border-[#e0d8ce] min-h-[140px] bg-linear-to-br from-[#f5f1ea]/50 to-[#e0d8ce]/30">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-px bg-[#8b4513]"></div>
                        <h3 className="text-xl font-bold text-[#2d2d2d] tracking-tight">
                          {project.nama}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-[#403D39] text-sm leading-relaxed font-light">
                      {project.desk}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col grow">
                  {/* Tech Stack */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="mb-8">
                      <div className="text-xs font-medium text-[#777] tracking-wider uppercase mb-4 
                                    flex items-center gap-2">
                        <div className="h-px w-4 bg-[#8b4513]"></div>
                        Technologies
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => {
                          const iconPath = getIconForTech(tech);
                          return (
                              <div 
                                key={index}
                                className="group/tech flex items-center gap-2 px-3 py-2 
                                        border border-[#e0d8ce] bg-white/50 hover:border-[#8b4513] 
                                        hover:bg-white transition-all duration-300"
                                title={tech}
                            >
                              {/* Icon */}
                              <div className="w-4 h-4 flex items-center justify-center">
                                <img 
                                  src={iconPath} 
                                  alt={tech}
                                  className="w-3 h-3 object-contain grayscale group-hover/tech:grayscale-0 
                                           transition-all duration-300"
                                />
                              </div>
                              
                              {/* Tech Name */}
                              <span className="text-xs text-[#403D39] group-hover/tech:text-[#8b4513] 
                                             transition-colors duration-300 font-medium">
                                {tech}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Action Button */}
                  <div className="mt-auto">
                    <Link
                      href={project.url}
                      target={project.type === "code" ? "_blank" : "_self"}
                      rel={project.type === "code" ? "noopener noreferrer" : undefined}
                      className={`group/btn relative inline-flex items-center justify-center gap-2 
                               w-full py-3 border font-medium transition-all duration-300 
                               text-sm tracking-wide border-[#8b4513] text-[#8b4513] hover:bg-[#8b4513] hover:text-white`}
                    >
                      <span>
                        {project.type === "code" 
                          ? "View Code" 
                          : project.url === "#" 
                            ? "Coming Soon" 
                            : "Live Preview"}
                      </span>
                        <i className="ri-arrow-right-up-line transition-transform duration-300 
                                    group-hover/btn:rotate-45"></i>
                        <div className="absolute inset-0 border border-[#8b4513] transform translate-x-1 
                                      translate-y-1 group-hover/btn:translate-x-0 group-hover/btn:translate-y-0 
                                      transition-transform duration-300"></div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

       {/* GitHub & All Projects CTA */}
<div className="mt-20 pt-16 border-t border-[#e0d8ce] text-center">
  <div className="max-w-2xl mx-auto">
    <div className="mb-8">
      <span className="text-6xl text-[#8b4513]/20 block mb-4">続</span>
      <p className="text-[#403D39] font-light mb-6">
        Explore more of my work and ongoing experiments
      </p>
    </div>
    
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      {/* View All Projects Button */}
      <Link
        href="/projects"
        className="group relative inline-flex items-center gap-3 px-10 py-4 border border-[#8b4513] text-[#8b4513] hover:text-white hover:bg-[#8b4513] transition-all duration-500 font-medium tracking-wide w-full sm:w-auto"
      >
        <span>View All Projects</span>
        <i className="ri-layout-grid-fill text-lg"></i>
      </Link>

      {/* GitHub Profile Button */}
      <Link
        href="https://github.com/AbdFaiz"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-3 px-10 py-4 border-2 border-[#2d2d2d] 
                 text-[#2d2d2d] hover:bg-[#2d2d2d] hover:text-[#f5f1ea] 
                 transition-all duration-500 font-medium tracking-wide w-full sm:w-auto"
      >
        <span>GitHub Profile</span>
        <i className="ri-github-fill text-lg transition-transform duration-300 
                    group-hover:scale-110"></i>
      </Link>
    </div>

    {/* Decorative Dots */}
    <div className="flex justify-center gap-2 mt-12">
      {[...Array(3)].map((_, i) => (
        <div 
          key={i}
          className="w-1.5 h-1.5 bg-[#8b4513] rounded-full opacity-40"
        ></div>
      ))}
    </div>
  </div>
</div>
      </div>
    </section>
  );
}