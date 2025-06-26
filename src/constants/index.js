import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `Hi, I’m Arvind Nataraj builder of smart apps, lover of clean code, and a Master’s student shaping the future of tech from Germany. I turn everyday problems into elegant web solutions that don’t just work - they resonate.`;


export const ABOUT_TEXT = `I'm a developer with a mission: to make tech meaningful. Currently pursuing my Master’s in Applied Computer Science at SRH University, Germany, I bring a hands-on approach to solving complex challenges through clean code, smart design, and scalable systems. With experience in full-stack development, microservices, and UI engineering, I love building apps that simplify life and spark delight. Beyond the screen, I’m constantly learning, collaborating, and staying curious because great code starts with great thinking.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: " Software Developer",
    company: "Bnet Global Solutions pvt ltd.",
    description: `Developing front-end components for the project "Sarve Suraksha" in a product-based company specializing in insurance solutions .`,
    technologies: ["Javascript", "React.js", "Node.js"],
  },
];

export const PROJECTS = [
  {
    title: "Personal Event Schedule Application",
    

    image: project1,
    description:
      "Built a React-based event scheduling app with interactive calendar, event creation, and search/filter features. Integrated email invites and automated tests (Jest & Cypress) to ensure a smooth and reliable user experience.",
    technologies: ["React", "Figma", "Cypress", "Jest"],
  },
  {
    title: "Smart Pantry Microservices Development",
    image: project2,
    description:
      "Built a system that suggests recipes based on available ingredients to reduce food waste and simplify meal planning. Contributed to the User Management Microservice, enabling admin control and ensuring data consistency across user and recipe modules.",
    technologies: ["Vue.js", "Node.js", "Figma", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
];

export const CONTACT = {
  address: " Heidelberg, Germany ",
  phoneNo: "+49 1577 2177293 ",
  email: "arvindaru6287@gmail.com",
};
