import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const personalInformation = {
  name: "Chau Nong",
  title: "Fullstack Web Developer",
  summary: "I develop end-to-end, engaging, and user-friendly fullstack applications."
}

export const socials = [
  {
    name: "GitHub",
    title: "github",
    icon: FaGithub,
    url: "https://github.com/chau0301",
  },
  {
    name: "LinkedIn",
    title: "linkedin",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/chau0301/",
  },
  {
    name: "Mail",
    title: "mail",
    icon: SiGmail,
    url: "mailto:nongngocchau1@gmail.com",
  },
];

export const experiences = [
  {
    time: {
      from: "2023",
      to: "Present",
    },
    name: "Fullstack Developer at TEBGROUP",
    description: [
      "Developed a high-performance e-commerce platform for handmade products. Used Nest.js for backend, Cloudflare for optimization, and Astro/React for frontend.",
      "Set up Elasticsearch and Kibana, visually integrated with Kibana, using Docker to manage user actions.",
      "Implemented ElectronJs to interface with Python and NodeJS for working with PSD, SVG, and AI files.",
    ],
    stacks: [
      "NestJS",
      "PostgresSQL",
      "Drizzle",
      "kysely",
      "Docker",
      "Docker Compose",
      "Elasticsearch",
      "Kafka",
      "Astro",
      "ElectronJS",
      "TailwindCSS",
      "Python",
    ],
  },
  {
    time: {
      from: "2022",
      to: "2023",
    },
    name: "Backend Developer at CYFEER JSC.",
    description: [
      "Developed a microservice-based application using Node.js Express as part of the development team",
      "Successfully integrated the application with 4 third-party services using APIs and hooks, demonstrating strong API design and integration skills.",
      "Created comprehensive and user-friendly RESTful API documentation using Swagger for the website, mobile, and services partners, ensuring clear communication and understanding among developers and stakeholders.",
      "Working with Sumitomo, the Japan-based company",
    ],
    stacks: [
      "NodeJS",
      "NestJS",
      "PostgreSQL",
      "Microservice",
      "Third-party",
      "RabbitMQ",
      "Redis",
    ],
  },
];

export const projects = [
  {
    name: "Set Random Team League of Legends",
    href: "https://chia-team.chaau.vn/",
    description:
      "Idea from my friend when we usually play game together but wasting too much time when split team. I came up with a solution to this problem.",
    stacks: ["NextJS", "TailwindCSS"],
    image: "/project/set-team-lol.png",
  },
  {
    name: "Vua Tieng Viet",
    href: "https://www.vuatiengviet.online/",
    description:
      "Build a MiniGame Vua Tieng Viet based on TV shows. Guess the correct words from the scrambled letters.",
    stacks: ["NextJS", "TailwindCSS", "Vercel"],
    image: "/project/vtv.png",
  },
];

