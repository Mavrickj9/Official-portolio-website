import { GrGithub } from "react-icons/gr";
import { TbWorld } from "react-icons/tb";

import { prog1, prog2, prog3, prog4, prog5, prog6 } from "../../assets/images";

// projects data
export const projects = [
  {
    id: 2,
    name: "Dashboard Project",
    desc: "System dashboard with components, charts, animations, user data",
    stack: "React JS",
    imgUrl: prog1,

    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/Mavrickj9/Dashboard-Website",
    },
    website: {
      icon: <TbWorld />,
      url: "https://dashboard-website.pages.dev/",
    },
  },
  {
    id: 3,
    name: "Portfolio Project",
    desc: "My personal portfolio of skills, services provided and projects done",
    stack: "React JS",
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/Mavrickj9/Portolio-Website",
    },
    website: {
      icon: <TbWorld />,
      url: "https://first-portfolio.pages.dev/",
    },
    imgUrl: prog2,
  },

  {
    id: 4,
    name: "Advanced dashboard App",
    desc: "Advanced dashboard application with dynamic data,charts,calendars etc",
    stack: "React JS",
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/Mavrickj9/advanced-dashboard-app",
    },
    website: {
      icon: <TbWorld />,
      url: "https://advanced-dashboard-app.netlify.app",
    },
    imgUrl: prog3,
  },
  {
    id: 5,
    name: "FitClub Gym Website",
    desc: "A fitness gym website with animations, payment plans and testimonials",
    stack: "React js, SCSS",
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/Mavrickj9/FitClub-Gym-Website",
    },
    website: {
      icon: <TbWorld />,
      url: "https://fitclub-gym-website.pages.dev/",
    },
    imgUrl: prog4,
  },
  {
    id: 4,
    name: "Pizzashop in Newyork",
    desc: "Pizza shop online delivery website application",
    stack: "React JS",
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/Mavrickj9/Pizzashop-in-newyork",
    },
    website: {
      icon: <TbWorld />,
      url: "https://pizzashop-in-newyork.vercel.app/",
    },
    imgUrl: prog5,
  },
  {
    id: 2,
    name: "Static Ecommerce app",
    desc: "Static e-commerce website using react",
    stack: "React JS",
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/Mavrickj9/Static-Ecommerce-app",
    },
    website: {
      icon: <TbWorld />,
      url: "https://static-ecommerce-website.pages.dev/",
    },
    imgUrl: prog6,
  },
];
