export interface Project {
  id: number;
  nama: string;
  desk: string;
  type: "preview" | "code";
  url: string;
  technologies: string[];
}

export const listProject: Project[] = [
  {
    id: 1,
    nama: "Landing Page Company",
    desk: "A landing page for a startup offering tracking and insurance.",
    type: "preview",
    url: "#",
    technologies: ["Laravel", "CSS", "JavaScript"],
  },
  {
    id: 2,
    nama: "Inventory Management",
    desk: "A Laravel-based system for managing and monitoring inventory within a single division at the company.",
    type: "code",
    url: "https://github.com/AbdFaiz/inventory_management",
    technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
  },
  {
    id: 3,
    nama: "Stuck InCode",
    desk: "A Stack Overflow clone built with Laravel, featuring question and answer functionality.",
    type: "code",
    url: "https://github.com/AbdFaiz/stuck-incode",
    technologies: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
  },
  {
    id: 4,
    nama: "Weather App",
    desk: "Real-time weather forecasting application using OpenWeather API.",
    type: "preview",
    url: "https://weather-apps-sage.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: 5,
    nama: "Web CMS & WebMail",
    desk: "A web-based Content Management System for managing company user accounts and emails. Includes authentication, user management, and a modern webmail interface for sending and receiving internal emails.",
    type: "code",
    url: "#",
    technologies: ["Laravel", "MySQL", "Bootstrap", "Ubuntu"],
  },
  {
    id: 6,
    nama: "Bank Mini Web App",
    desk: "A minimalist banking web application built with Laravel. Features include balance tracking, and transaction history, offering a smooth and modern user experience.",
    type: "code",
    url: "https://github.com/AbdFaiz/prausk-fintech",
    technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
  },
  {
    id: 7,
    nama: "UI Slicing - Pinterest Ref",
    desk: "Slicing UI design from Pinterest reference into a responsive web interface.",
    type: "preview",
    url: "https://nx-trv.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS"],
  },
   {
    id: 8,
    nama: "Prayers Time",
    desk: "A responsive web app that displays daily prayer times for cities across Indonesia using a public API, with a clean and minimalist interface.",
    type: "preview",
    url: "https://jws-abdurrahman.vercel.app",
    technologies: ["Tailwind", "JavaScript"],
  },
  {
    id: 9,
    nama: "Chaewon (LE SSERAFIM) Fanpage",
    desk: "A fan-made website built as a visual and layout exploration.",
    type: "preview",
    url: "https://chae-won.vercel.app/",
    technologies: ["Astro JS","React", "Tailwind CSS", "JavaScript"],
  },
  {
    id: 10,
    nama: "Portfolio V1",
    desk: "My first portfolio website focused on clean HTML and CSS fundamentals.",
    type: "code",
    url: "https://github.com/AbdFaiz/portfolio-html",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind"],
  },
  {
    id: 11,
    nama: "Portfolio V2",
    desk: "Second iteration of my personal brand using React for component-based architecture.",
    type: "code",
    url: "https://react-fz.vercel.app/",
    technologies: ["React", "CSS", "JavaScript"],
  },
  {
    id: 12,
    nama: "Portfolio V3 (Current)",
    desk: "The latest version of my portfolio with NextJS and optimized performance.",
    type: "code",
    url: "https://github.com/AbdFaiz/abdurrahmanfaiz",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: 13,
    nama: "Telegram Message Filter Bot",
    desk: "Automated bot to bridge and filter messages between multiple groups and bots.",
    type: "code",
    url: "https://github.com/AbdFaiz/laravel-bot-tg-message-filter",
    technologies: ["Laravel", "PHP", "Telegram"],
  },
  {
    id: 14,
    nama: "Micro Division Attendance Dashboard",
    desk: "Internal dashboard to track attendance, lateness trends, and weekly/monthly reports.",
    type: "preview",
    url: "https://github.com/AbdFaiz/absensi-micro",
    technologies: ["Laravel", "MySQL", "Bootstrap"],
  },
  {
    id: 15,
    nama: "Flappy Bird JS",
    desk: "A classic Flappy Bird clone with physics and collision detection built with vanilla JS.",
    type: "preview",
    url: "https://fz-flappybird.vercel.app/",
    technologies: ["JavaScript", "HTML", "CSS3"],
  },
  {
    id: 16,
    nama: "Virtual Music Instruments",
    desk: "Playable Piano, Guitar, and Drum using keyboard inputs and high-quality audio samples.",
    type: "code",
    url: "https://github.com/AbdFaiz/fz_music",
    technologies: ["JavaScript", "HTML", "CSS3"],
  },
];