import frontendFusion from "./assets/projectCover/frontend-fusion.png";
import cheffest from "./assets/projectCover/cheffest.png";
import towerBuddy from "./assets/projectCover/towerbuddy.png";
import i4sight from "./assets/projectCover/i4sight.png";

export const projects = [
  {
    name: "cheffest",
    image: cheffest,
    projectLink: "https://cheffest.netlify.app/",
    githubLink: "https://github.com/SujayGowdaa/cheffest",
    description:
      "Cheffest elevates food ordering with user-friendly design. With React Query for agile state management, React Hook Form for precise validation, and Supabase for robust backend support, it delivers an unparalleled experience of efficiency, reliability, and security.",
    skills: [
      "html",
      "css",
      "javaScript",
      "react",
      "react hook form",
      "react query",
      "tailwind css",
      "supabase",
    ],
  },
  {
    name: "frontend fusion",
    image: frontendFusion,
    projectLink: "https://frontend-fusion.netlify.app/",
    githubLink: "https://github.com/SujayGowdaa/front-end-fusion",
    description:
      "Frontend Fusion is a frontend application that functions essentially as a quiz app, allowing users to customise the topic and difficulty level to suit their interests. Redux is utilised to manage the application state.",
    skills: ["html", "css", "javaScript", "react", "redux"],
  },
  // {
  //   name: 'tower buddy',
  //   image: towerBuddy,
  //   projectLink: 'https://towerbuddy.tel/',
  //   githubLink: '',
  //   description:
  //     'TowerBuddy provides the landowners a platform to list the available property, increasing the chances of the property being monetized at optimum rate.',
  //   skills: ['html', 'css', 'javaScript', 'react', 'email JS'],
  // },
  // {
  //   name: 'i4Sight',
  //   image: i4sight,
  //   projectLink: 'https://www.i4sight.net/',
  //   githubLink: '',
  //   description:
  //     'Designed and developed my first static real-world project from scratch during my internship at the company. One of the first B2B2C platforms of its kind is i4Sight.',
  //   skills: ['html', 'css', 'javaScript'],
  // },
];
