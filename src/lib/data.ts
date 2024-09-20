import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const personalInformation = {
  name: "Chau Nong",
  title: "Fullstack Web Developer",
  summary:
    "I develop end-to-end, engaging, and user-friendly fullstack applications.",
  about: [
    "Back in 2019, I dove headfirst into the world of Computer Science at National Economics University, igniting a passion that would shape my career trajectory. Fast-forward to today, and I've had the privilege of developing high-performance e-commerce platforms, crafting microservice-based applications, and even publishing papers at national conferences.",
    "My ultimate goal? To become a Solution Architect. I'm driven by the desire to leverage my in-depth knowledge of technology, coupled with my growing analytical and solution design skills, to contribute meaningfully to an organization's development and success. This aspiration fuels my continuous learning and pushes me to tackle complex challenges head-on.",
    "Outside the digital realm, I'm constantly expanding my horizons. Whether it's participating in international conferences on future language learning or snagging awards for scientific research, I'm always eager to learn and grow. And when I need a break from the screen, you might catch me brushing up on my English skills or diving into the latest tech literature, always ready for the next coding adventure.",
  ],
};

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
    name: "E-commerce Store",
    href: "https://github.com/chau0301/ecommerce-store",
    description: "E-commerce store with Shopify integration",
    image: "/project/ecommerce.png",
    stacks: ["NextJS", "TailwindCSS", "Shadcn", "Shopify-Api", "NestJS", "NodeJs"],
  },
  {
    name: "Barcode to PDF",
    href: "https://www.piccygifts.com/",
    description: "Simple app to convert multiple barcode to PDF for printing",
    image: "/project/barcode-to-pdf.png",
    stacks: ["NextJS"],
  },
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
