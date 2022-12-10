import React from "react";

// react icons
import { FiGrid, FiLinkedin } from "react-icons/fi";
import { VscProject } from "react-icons/vsc";
import {
  BsBootstrapFill,
  BsPersonLinesFill,
  BsGithub,
  BsGoogle,
} from "react-icons/bs";
import { RiContactsLine, RiReactjsLine } from "react-icons/ri";
import { SiSass, SiJquery, SiExpress, SiRedux } from "react-icons/si";

import { GrGithub, GrTwitter, GrInstagram } from "react-icons/gr";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiMongodb } from "react-icons/di";
import { IoLogoJavascript, IoLogoGameControllerB } from "react-icons/io";
import { FaNodeJs, FaGit } from "react-icons/fa";

// sidebar menu list and icons
const sideBarMenu = [
  {
    text: "Home",
    icon: <FiGrid className="link-icon" />,
    url: "/",
  },
  {
    text: "About",
    icon: <BsPersonLinesFill className="link-icon" />,
    url: "/about",
  },
  {
    text: "Projects",
    icon: <VscProject className="link-icon" />,
    url: "/project",
  },
  {
    text: "Contacts",
    icon: <RiContactsLine className="link-icon" />,
    url: "/contact",
  },
  {
    text: "Gaming",
    icon: <IoLogoGameControllerB className="link-icon" />,
    url: "/gaming",
  },
];
// social media icons and url
const socialIcons = [
  {
    icon: <GrGithub className="icon switch__color" />,
    url: "https://github.com/Mavrickj9 ",
  },
  {
    icon: <GrTwitter className="icon switch__color" />,
    url: "https://twitter.com/AundreyMooghrer",
  },
  {
    icon: <GrInstagram className="icon switch__color" />,
    url: "https://www.instagram.com/t_mavrick/",
  },
  {
    icon: <FiLinkedin className="icon switch__color" />,
    url: "https://www.linkedin.com/in/tinotenda-mupasiri-663ab4203/",
  },
];
// programming lanuages (spanText), icons and url
const skillSet = [
  {
    icon: <AiFillHtml5 className="skills-icon switch__color" />,
    spanText: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: <DiCss3 className="skills-icon switch__color" />,
    spanText: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    icon: <IoLogoJavascript className="skills-icon switch__color" />,
    spanText: "JAVASCRIPT",
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript",
  },
  {
    icon: <SiSass className="skills-icon switch__color" />,
    spanText: "SASS",
    url: "",
  },

  {
    icon: <BsBootstrapFill className="skills-icon switch__color" />,
    spanText: "BOOTSTRAP",
    url: "",
  },

  {
    icon: <SiJquery className="skills-icon switch__color" />,
    spanText: "JQUERY",
    url: "",
  },
  {
    icon: <FaGit className="skills-icon switch__color" />,
    spanText: "GIT",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub",
  },
  {
    icon: <BsGithub className="skills-icon switch__color" />,
    spanText: "GITHUB",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub",
  },
  {
    icon: <RiReactjsLine className="skills-icon switch__color" />,
    spanText: "REACT JS",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started",
  },

  {
    icon: <FaNodeJs className="skills-icon switch__color" />,
    spanText: "NODE",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
  },

  {
    icon: <DiMongodb className="skills-icon switch__color" />,
    spanText: "MONGO DB",
    url: "",
  },
  {
    icon: <SiExpress className="skills-icon switch__color" />,
    spanText: "EXPRESS JS",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Express",
  },
  {
    icon: <SiRedux className="skills-icon switch__color" />,
    spanText: "Redux",
    url: "https://redux.js.org/introduction/getting-started",
  },
  {
    icon: <BsGoogle className="skills-icon switch__color" />,
    spanText: "Googling",
    url: "https://google.com",
  },
];

export { sideBarMenu, socialIcons, skillSet };
