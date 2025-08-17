import frontendFusion from "./assets/projectCover/frontend-fusion.png";
import cheffest from "./assets/projectCover/cheffest.png";
import towerBuddy from "./assets/projectCover/towerbuddy.png";
import i4sight from "./assets/projectCover/i4sight.png";
import todo from "./assets/projectCover/todo.png";

export const projects = [
  {
    name: "cheffest",
    image: cheffest,
    projectLink: "https://cheffest.netlify.app/",
    githubLink: "https://github.com/SujayGowdaa/cheffest",
    description:
      "Cheffest is a food ordering app where users can order for food. The remote state of the application is managed with react query and the form validation using react hook form. The backend is powered by supabase.",
    skills: [
      "html",
      "css",
      "javaScript",
      "react JS",
      "react hook form",
      "react query",
      "tailwind css",
      "supabase",
      "figma",
    ],
  },
  {
    name: "tower buddy",
    image: towerBuddy,
    projectLink: "https://towerbuddy.tel/",
    githubLink: "",
    description:
      'The Tower Buddy website serves as the primary promotional platform for the "Tower Buddy" web application. At its core, Tower Buddy is a marketplace for telecom infrastructure real estate. It aims to revolutionize how property owners and telecom entities connect and transact.',
    skills: [
      "html",
      "css",
      "javaScript",
      "react JS",
      "hubspot",
      "google tag manager",
      "google analytics",
      "figma",
    ],
  },
  {
    name: "frontend fusion",
    image: frontendFusion,
    projectLink: "https://frontend-fusion.netlify.app/",
    githubLink: "https://github.com/SujayGowdaa/front-end-fusion",
    description:
      "Frontend Fusion is a frontend application that functions essentially as a quiz app, allowing users to customise the topic and difficulty level to suit their interests. Redux is utilised to manage the application state.",
    skills: ["html", "css", "javaScript", "react JS", "redux", "figma"],
  },
  {
    name: "todo app",
    image: todo,
    projectLink: "https://todo-list-pure-js.netlify.app/",
    githubLink: "https://github.com/SujayGowdaa/ToDoList",
    description:
      "A simple, classic to-do list application for managing daily tasks. It allows users to add, mark as completed, and remove tasks from a list. The application is built with vanilla JavaScript, demonstrating fundamental DOM manipulation and event handling.",
    skills: [
      "HTML",
      "CSS",
      "vanilla JavaScript",
      "DOM Manipulation",
      "Event Handling",
      "OOP",
    ],
  },
  {
    name: "i4Sight",
    image: i4sight,
    projectLink: "https://www.i4sight.net/",
    githubLink: "",
    description:
      "Designed and developed my first static real-world project from scratch during my internship at the company. One of the first B2B2C platforms of its kind is i4Sight.",
    skills: ["html", "css", "javaScript", "figma"],
  },
];
