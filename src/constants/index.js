import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    fotohive,
    task,
    portfolio,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Invento Crew",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Invento Crew",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Invento Crew",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Performed Exhibition in City College and Get award or certificates.",
      name: "City College",
      company: "City Co",
      image: "https://play-lh.googleusercontent.com/SjbQVvQ6JoayQk0uaW3HChH6Nw3r1zvoBb1A7XSEi7PCqq0bviZ3BUmsEN4uDQDesLM",
    },
    {
      testimonial:
        "I never thought that my site will optimeze but he did it",
      name: "Ayurveda Medics",
      company: "Ayurveda",
      image: "https://www.shutterstock.com/image-vector/vector-ayurveda-illustration-mountains-landscape-600nw-561087484.jpg",
    },
    {
      testimonial:
        "He performs many projects in our company As SEO and custom coding and we are satisfied with him.",
      name: "Inventocrew",
      company: "Crew",
      image: "https://inventocrew.com/wp-content/uploads/2023/01/Invento-Crew-Logo-JPG-77x77.jpg",
    },
   
  ];
  
  const projects = [
    {
      name: "Fotohive",
      description:
        "Social Media platform that allows users to posts, chatting, and interact with each other.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "appwrite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "shadcn",
          color: "pink-text-gradient",
        },
      ],
      image: fotohive,
      source_code_link: "https://github.com/",
    },
    {
      name: "Portfolio Project",
      description:
        "Web application that users can copy my code and make their portfolio. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "three js",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/",
    },
    {
      name: "iTask Planner",
      description:
        "A comprehensive web based platform for users to manage their todo tasks for daily activites.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: task,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };