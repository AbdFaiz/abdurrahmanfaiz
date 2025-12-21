// =========================
// Types
// =========================
export interface Artwork {
  id: number;
  title: string;
  description: string;
  category: string;
  year: string;
  image: string;
  medium: string;
}

export interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  type: string;
  description: string;
  technologies: string[];
}

export interface Tool {
  id: number;
  name: string;
  icon: string;
}

// =========================
// Artworks Data
// =========================
export const listArtworks: Artwork[] = [
  {
    id: 1,
    title: "Japan Castle",
    description:
      "A detailed architectural drawing of a traditional Japanese castle under the moon. Features intricate roofing details and stonework textures created through cross-hatching techniques.",
    category: "Architecture Sketch",
    year: "2024",
    image: "/assets/artworks/temple.jpeg",
    medium: "Fine Liner on Paper",
  },
  {
    id: 2,
    title: "Bokuto - Haikyuu",
    description:
      "A clean line-art sketch of Bokuto Koutarou from the anime Haikyuu!! capturing his energetic expression. Drawn with precise ink lines emphasizing his spiky hair and upward gaze.",
    category: "Fan Art / Anime",
    year: "2024",
    image: "/assets/artworks/bokuto.jpeg",
    medium: "Pen & Ink on Paper",
  },
  {
    id: 3,
    title: "Doodle Art",
    description:
      "A vibrant and packed doodle composition featuring a chaotic mix of pop-culture characters, skulls, and whimsical shapes. Colored with markers to make specific elements pop against the busy background.",
    category: "Doodle Art",
    year: "2024",
    image: "/assets/artworks/doodle.jpeg",
    medium: "Markers & Pen on Paper",
  },
  {
    id: 4,
    title: "Sanji - Luffy - Zoro",
    description:
      "An intense, high-contrast ink illustration of the 'Monster Trio' from One Piece. The artwork uses heavy shading and scratching techniques to depict a gritty, battle-worn aesthetic.",
    category: "Fan Art / Manga",
    year: "2023",
    image: "/assets/artworks/trio-monster.jpeg",
    medium: "Ink & Marker on Paper",
  },
];


// =========================
// Social Links
// =========================
export const listSocial: SocialLink[] = [
  {
    icon: "ri-github-fill",
    url: "https://github.com/AbdFaiz",
    label: "GitHub",
  },
  {
    icon: "ri-linkedin-box-fill",
    url: "https://linkedin.com/in/abdurrahman-faiz-dev",
    label: "LinkedIn",
  },
  {
    icon: "ri-instagram-line",
    url: "https://instagram.com/4o4nf_",
    label: "Instagram",
  },
  {
    icon: "ri-mail-line",
    url: "mailto:abdurrahmanfaiz187@gmail.com",
    label: "Email",
  },
];


// =========================
// Experience
// =========================
export const listExperience: Experience[] = [
  {
    id: 1,
    title: "IT Programmer & Digital Support Specialist",
    company: "Perwira Steel",
    period: "Jul 2025 - Dec 2025",
    type: "On Site",
    description:
      "Developed internal application architecture based on a microservices-style structure, including a Laravel backend API, a Vue.js admin dashboard, and a Flutter mobile app. Handled company website maintenance, on-page SEO optimization, and created business design assets such as Mill Certificates, banners, official documents, and visual content. Also provided setup and troubleshooting support for Windows OS to ensure smooth internal operations.",
    technologies: [
      "/assets/tools/laravel.svg",
      "/assets/tools/css3.svg",
      "/assets/tools/tailwind.svg",
      "/assets/tools/vue.svg",
      "/assets/tools/js.svg",
      "/assets/tools/ts.svg",
      "/assets/tools/flutter.svg",
      "/assets/tools/wordpress.svg",
    ],
  },
  {
    id: 2,
    title: "Freelance Web Developer",
    company: "PT. Adidata Global Sistem",
    period: "Apr 2025 - Oct 2025",
    type: "Remote",
    description:
      "Built responsive landing pages with modern and SEO-friendly design. Developed a CMS for efficient email and user management, helping improve the company's internal operational productivity.",
    technologies: [
      "/assets/tools/laravel.svg",
      "/assets/tools/css3.svg",
      "/assets/tools/bootstrap.svg",
      "/assets/tools/js.svg",
      "/assets/tools/ubuntu.svg",
    ],
  },
  {
    id: 3,
    title: "Web Developer Intern",
    company: "PT. Solusi Intek Indonesia",
    period: "Sep 2024 - Feb 2025",
    type: "On Site",
    description:
      "Developed a web-based inventory system with QR scanning, a Telegram-based attendance & permission system, as well as IoT dashboards and real-time monitoring systems. Improved internal documentation, deployed applications on Linux servers, and optimized existing Livewire-based platforms.",
    technologies: [
      "/assets/tools/laravel.svg",
      "/assets/tools/css3.svg",
      "/assets/tools/bootstrap.svg",
      "/assets/tools/tailwind.svg",
      "/assets/tools/nodered.svg",
      "/assets/tools/php.svg",
      "/assets/tools/ubuntu.svg",
      "/assets/tools/js.svg",
      "/assets/tools/mysql.svg",
    ],
  },
];


// =========================
// Tools
// =========================
export const listTools: Tool[] = [
  { id: 1, name: "CSS3", icon: "/assets/tools/css3.svg" },
  { id: 2, name: "Tailwind", icon: "/assets/tools/tailwind.svg" },
  { id: 3, name: "Bootstrap", icon: "/assets/tools/bootstrap.svg" },
  { id: 4, name: "JavaScript", icon: "/assets/tools/js.svg" },
  { id: 5, name: "TypeScript", icon: "/assets/tools/ts.svg" },
  { id: 6, name: "React", icon: "/assets/tools/react.svg" },
  { id: 7, name: "NextJS", icon: "/assets/tools/next.svg" },
  { id: 7, name: "Astro", icon: "/assets/tools/astro.svg" },
  { id: 7, name: "jQuery", icon: "/assets/tools/jquery.svg" },
  { id: 8, name: "Node.js", icon: "/assets/tools/nodejs.svg" },
  { id: 9, name: "Laravel", icon: "/assets/tools/laravel.svg" },
  { id: 10, name: "Python", icon: "/assets/tools/python.svg" },
  { id: 11, name: "Node-red", icon: "/assets/tools/nodered.svg" },
  { id: 12, name: "Ubuntu", icon: "/assets/tools/ubuntu.svg" },
];
