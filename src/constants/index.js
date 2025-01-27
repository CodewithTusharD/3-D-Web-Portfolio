import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    IntelliJ,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    MySql,
    figma,
    PowerBi,
    docker,
    Java,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    Cpp,
    zipzap,
    blinkIt,
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
      title: "Full-Stack Development",
      icon: web,
    },
    {
      title: "Java Development",
      icon: mobile,
    },
    {
      title: "Backend Development",
      icon: backend,
    },
    {
      title: "Data Analysis",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "C++",
      icon: Cpp,
    },
    {
      name: "Java",
      icon: Java,
    },
    {
      name:"MySql",
      icon: MySql,
    },
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
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
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
      name: "IntelliJ",
      icon: IntelliJ,
    },
    {
      name: "git",
      icon: git,
    },
    
    // {
    //   name: "Power Bi",
    //   icon: PowerBi,
    // },
    

  ];
  
  const experiences = [
    {
      title: "Mentor in Web-Dev department",
      company_name: "IETE",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Aug 2022 - Aug 2024",
      points: [
        "Mentored juniors in web development, focusing on HTML, CSS, JavaScript, React, and Node.js.",
        "Organized and led technical workshops, coding events, and hackathons for skill-building.",
        "Guided team members on real-world web projects, promoting best practices like version control.",
        "Fostered teamwork and innovation, inspiring members to explore new technologies and frameworks",
      ],
    },
    {
      title: "Full-Stack Developer Trainee",
      company_name: "Sun-Soft Technologies",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jun 2023 - Jul 2023",
      points: [
        "Gained hands-on experience in Full-Stack Web Development, focusing on creating dynamic and responsive web applications.",
        "Developed CommunityCare-Connect, a dynamic platform using HTML, CSS, JavaScript, Node.js, and Express.js, enabling real-time coordination for users.",
        "Learned about Relational Database Management Systems (RDBMS) and integrated MySQL with web platforms for efficient data storage and retrieval.",
        "Explored web hosting techniques, deploying applications to ensure accessibility and scalability across platforms.",
      ],
    },
    {
      title: "Java Developer Trainee",
      company_name: "Sun-Soft Technologies",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jun 2024 - Jul 2024",
      points: [
        "Acquired in-depth knowledge of Java Development, mastering concepts like Object-Oriented Programming (OOP) and multi-threading",
"Built a business management software application for a real-world tailoring business, streamlining operations and automating workflows",
"Achieved significant impacts, including reducing paperwork by 90% and enhancing data accuracy by 85% through seamless database integration using MySQL",
"Utilized JavaFX, J2SE, and Scene Builder to create user-friendly interfaces, boosting productivity and operational efficiency by 40%",
      ],
    },
    // {
    //   title: "Backend Developer intern",
    //   company_name: "ImpactMindz Solutions",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2025 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  
  
  const projects = [
    {
      name: "CommunityCare Connect",
      description:
        "Web-based platform that bridges the gap between the Surplus & Scarcity of Medicines by connecting Local Medicine donars to the Recipients in need.",
      tags: [
        {
          name: "NodeJS",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "orange-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "purple-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },        
      ],
      image: carrent,
      source_code_link: "https://github.com/CodewithTusharD/CCC",
    },
    {
      name: "StitchWorks",
      description:
        "A Business Management Desktop Application to streamline various business operations. Automated updates, reduced paperwork by 90%, and improved data accuracy by 85%. Added real-time order tracking with email notifications and Excel export to simplify decision-making.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "JavaFx",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
        {
          name: "IntelliJ",
          color: "orange-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/CodewithTusharD/StitchWorks_Project",
    },
    {
      name: "Binary Tree Visualizer",
      description:
        "A dynamic web-based tool built with HTML, CSS, and JavaScript that allows users to visualize and interact with tree data structures like Binary Trees, Binary Search Trees, and Max Heaps, making complex concepts easy to understand.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/CodewithTusharD/Tree_Visualizer",
    },
    {
      name: "Zipzap.com",
      description:
        "A robust MERN-stack platform where customers can explore and order a wide range of items like Electronics, Fashion, Home Essentials, and more. Features include real-time order tracking, and an admin dashboard for managing listings, fulfilling orders, and overseeing operations",
      tags: [
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "ExpressJs",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "NodeJs",
          color: "orange-text-gradient",
        },
      ],
      image: zipzap,
      source_code_link: "https://github.com/CodewithTusharD/ZipZap",
    },
    {
      name: "Blinkit Sales Analysis Dashboard",
      description:
        "A dynamic Power BI dashboard developed using Blinkit's sales data prepared in Excel with advanced DAX calculations. It visualizes key metrics like total and average sales, with interactive filters and charts for real-time decision-making.",
      tags: [
        {
          name: "Power Bi",
          color: "blue-text-gradient",
        },
        {
          name: "Excel",
          color: "green-text-gradient",
        },
       
      ],
      image: blinkIt,
      source_code_link: "https://github.com/CodewithTusharD/Blinkit_Sales_Bashboard",
    },
  ];
  
  export { services, technologies, experiences, projects };
