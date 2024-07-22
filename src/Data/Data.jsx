export const Bio = {
    name: "GAURAV DEVRANI",
    roles: [
      "Frontend Developer",
      "UI/UX Designer",
      "Programmer",
    ],
    description:
"     I am proficient in React.js for dynamic UIs, skilled in responsive design and JavaScript functionality, adept at utilizing various CSS styling techniques for enhanced web aesthetics.",

    github: "https://github.com/rishavchanda",
    resume:
      "https://drive.google.com/file/d/1ffZrcMcn8UatXGIaautbbqpV7ADNaETA/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
    twitter: "https://twitter.com/RishavChanda"
  };

  // skills
  import React from 'react';
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact, FaTools, FaSass } from "react-icons/fa"; // Using FaTools as a generic icon for GSAP
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux, SiGit, SiTailwindcss } from "react-icons/si";
// Additional imports
import { SiFirebase, SiFigma, SiBootstrap, SiMongodb } from "react-icons/si";

  
   export const skills = [
    {
      title: 'React',
      icon: <FaReact className='animate-spin hover:animate-none'/>,
    },
    {
      title: 'HTML5',
      icon: <AiOutlineHtml5 />,
    },
    {
      title: 'CSS3',
      icon: <FaCss3Alt />,
    },
    {
      title: 'Redux',
      icon: <SiRedux className='hover:animate-spin'/>,
    },

    {
      title: 'JavaScript',
      icon: <IoLogoJavascript className='animate-pulse'/>,
    },
    {
      title: 'Tailwind CSS',
      icon: <SiTailwindcss />,
    },
    {
      title: 'GitHub',
      icon: <SiGit className='hover:scale-125 hover:duration-700'/>,
    },
    // Additional skills
    {
      title: 'Firebase',
      icon: <SiFirebase className='hover:animate-ping'/>,
    },
    {
      title: 'Figma',
      icon: <SiFigma />,
    },
    {
      title: 'Bootstrap',
      icon: <SiBootstrap className='hover:animate-spin'/>,
    },
    {
      title: 'Sass',
      icon: <FaSass className='animate-bounce'/>,
    },
    {
      title: 'GSAP',
      icon: <FaTools />, // Using FaTools as a generic icon for GSAP
    },
   ];
  
  // education
  export const education = [
    {
      id: 0,
      college: "DAV Centenary College, MDU",
      date: "Aug 2021 - May 2024",
      degree: "Bachelor of Computer Application ",
    },
  ];
  
  // projects
  export const projects = [
    {
      id: 9,
      title: "LuxeLoom",
      date: "April 2024 - May 2024",
      description:"e-commerce platform fro shopping ",
      image:
      "https://i.ibb.co/tK2hFky/Screenshot-2024-07-08-154347.png",
      
      tags: [
        "React",
        "Firebase",
        "Tailwind",
        "Redux",
      ],
      github: "https://github.com/gauravdevrani8/LuxeLoom-e-commerce-website/tree/main",
      webapp: "https://luxe-loom.vercel.app/",
    },
    {
      id: 8,
      title: "Portfolio",
      date: "May 2024 - May 2024, 3days" ,
      description:"Explore my personal portfolio, a curated showcase of my diverse range of projects",
      image:
      "https://i.ibb.co/Pm9hPLW/Screenshot-2024-07-08-154258.png",
      
      tags: [
        "React",
        "Tailwind",
        "Acernity Ui",
      ],
      github: "https://github.com/gauravdevrani8/Portfolio",
      webapp: "https://portfolio-gauravdevrani8s-projects.vercel.app/",
    },
    {
      id: 7,
      title: "BikeBuddy",
      date: "june 2024 - june 2024, 3days" ,
      description:"Bike Rental Website",
      image:
      "https://github.com/gauravdevrani8/Bike-Buddy/assets/151192508/b68a1fab-1d20-467c-8942-642873d5676a",
      
      tags: [
        "React",
        "Scss",
      ],
      github: "https://github.com/gauravdevrani8/Bike-Buddy",
      webapp: "https://bike-buddy.vercel.app/",
    },

    {
      id: 8,
      title: "Intelligennie",
      date: "july 2024 - july 2024, 1day" ,
      description:"ChatBot",
      image:
      "https://i.ibb.co/7KdRpQ3/Screenshot-2024-07-08-154756.png",
      
      tags: [
        "React",
        "Tailwind CSS",
        "Google Gemini API",
      ],
      github: "https://github.com/gauravdevrani8/Intelligenie",
      webapp: "https://intelligenie-ten.vercel.app/",
    },
     { id: 8,
      title: "GuestHouse UI",
      date: "july 2024 - july 2024, 1day" ,
      description:"UI",
      image:
      "https://i.ibb.co/sqnqpqz/Screenshot-2024-07-08-173246.png",
      
      tags: [
        "React",
        "Tailwind CSS",
      ],
      github: "https://github.com/gauravdevrani8/GuestHouse",
      webapp: "https://guest-house1-five.vercel.app/",
    },
  ];
  