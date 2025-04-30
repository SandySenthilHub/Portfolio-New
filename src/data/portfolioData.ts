import { Project, Skill, Experience, Education, SocialLink } from '../types';
import Batcave from './Batcave.webp'
import Invicious from './Invicious.svg'
import Volans from './volans.jpg'
import Buytown from './Buytown.webp'
import Bootcamp from './Bootcamp.jpg'
import Scrible from './ScribleForge.avif'

// Replace with your personal information
export const personalInfo = {
  name: "Sandhya",
  title: "Full Stack Developer",
  email: "sandysenthil9234@gmail.com",
  phone: "+91 90878 33685",
  location: "Coimbatore",
  bio: "I'm a passionate and adaptable Full-Stack Developer with 2+ years of experience in building scalable web applications using the MERN stack. I specialize in creating responsive, user-centric interfaces and robust backend services.",
  longBio :"Currently expanding my backend capabilities with Microsoft SQL Server, Python, FastAPI, and exploring Azure cloud services, machine learning, AI, and speech transcription using tools like Deepgram. I also work with Docker to ensure containerized, scalable deployments across development pipelines. Keen to grow in roles that blend full-stack development with modern DevOps and AI innovation."
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Car Automotive",
    description: "A dynamic automotive event platform for showcasing car shows, organizing race events, and managing participant registrations and schedules.",
    image: Batcave,
    technologies: ["React", "Node.js", "MongoDB", "Phonepe"],
    category: "fullstack",
    url: "http://batcave.club/",
    github: "https://github.com/SandySenthilHub/Batcave-rewamp"
  },
  {
    id: 2,
    title: "Invicious",
    description: "A modern software development company website showcasing services, project portfolios, tech expertise, and contact options to attract and engage potential clients.",
    image: Invicious,
    technologies: ["React", "Nodejs", "MongoDB"],
    category: "fullstack",
    url: "https://invicious-main.netlify.app/#home",
    github: "https://github.com/SandySenthilHub/InviWebsite"
  },
  {
    id: 3,
    title: "Volans Infomatics",
    description: "A corporate website for Volans Infomatics, specializing in outsourcing and offshoring consulting services, highlighting business solutions, global delivery capabilities, and client success stories.",
    image: Volans,
    technologies: ["React"],
    category: "frontend",
    url: "https://volansinfo.com/",
    github: "https://github.com/SandySenthilHub/kozuzitech.com"
  },
  {
    id: 4,
    title: "Buytown Hardware Market",
    description: "An eCommerce platform for BuyTown Hardware Market, offering a wide range of hardware tools and supplies with seamless browsing, cart management, and secure online purchasing.",
    image: Buytown,
    technologies: ["ReactNatie", "Nodejs", "MongoDB", "RazorPay"],
    category: "fullstack",
    url: "https://play.google.com/store/apps/details?id=com.BuyTown&hl=en-US",
    github: "https://github.com/SandySenthilHub/Backend_BuyTown"
  },
  {
    id: 5,
    title: "Bootcamp180",
    description: "A career-focused platform where students upskill through intensive training programs, build real-world projects, and successfully launch their careers in tech and other industries.",
    image: Bootcamp,
    technologies: ["React.js"],
    category: "frontend",
    url: "http://www.bootcamp180.com/",
    github: "https://github.com/SandySenthilHub/Bootcamp180-Client"
  },
  {
    id: 6,
    title: "Scrible Forge",
    description: "Daily Journals To Inspire Happiness Build Positive Habits & Nurture Curious Minds",
    image: Scrible,
    technologies: ["Reactjs", "Nodejs", "MongoDB", "RazorPay"],
    category: "fullstack",
    url: "https://scribleforge.com/",
  
  }
];

export const skills: Skill[] = [
  { name: "React", level: 90, category: 'frontend' },
  { name: "TypeScript", level: 85, category: 'frontend' },
  { name: "JavaScript", level: 95, category: 'frontend' },
  { name: "HTML/CSS", level: 90, category: 'frontend' },
  { name: "Metronic", level: 75, category: 'frontend' },
  
  { name: "Node.js", level: 85, category: 'backend' },
  { name: "Express", level: 80, category: 'backend' },
  { name: "MongoDB", level: 75, category: 'backend' },
  { name: "PostgreSQL", level: 70, category: 'backend' },
  { name: "MySQL", level: 70, category: 'backend' },
  { name: "Microsoft SQL Server", level: 30, category: 'backend' }, // Learning phase
  { name: "Python", level: 20, category: 'backend' }, // Learning phase
  { name: "AI/ML", level: 10, category: 'backend' }, // Learning phase

  { name: "Docker", level: 65, category: 'tools' },
  { name: "Git", level: 85, category: 'tools' },

  { name: "AWS", level: 60, category: 'devops' },
  { name: "UpCloud", level: 60, category: 'devops' },

  { name: "UI/UX Design", level: 75, category: 'design' },
  { name: "Responsive Design", level: 85, category: 'design' }
];


export const experiences: Experience[] = [
  {
    company: "Cerulean Solutions",
    position: "Senior Full Stack Developer",
    duration: "April 2025 – Present",
    description: [
      "Developing full-stack applications with React, Node.js, and SQL Server",
      "Learning Python and AI/ML technologies to enhance backend services",
      "Contributing to the development and deployment of scalable solutions"
    ]
  },
  {
    company: "FICTION MASTER",
    position: "Lead Developer (Part-time)",
    duration: "February 2025 – Present",
    description: [
      "Conducted seminars and one-day workshops at colleges",
      "Led development teams for web-based projects",
      "Developed interactive applications using various technologies"
    ]
  },
  {
    company: "Invicious Metacorp Pvt. Ltd.",
    position: "Full Stack Developer - Lead Developer",
    duration: "October 2023 – March 2025",
    description: [
      "Developed full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js)",
      "Built and maintained scalable admin panels using Metronic UI and TypeScript",
      "Integrated PhonePe and Razorpay payment systems into live applications",
      "Implemented JWT-based authentication and secure backend APIs with SQL Server",
      "Used Docker for containerized deployments across AWS and UpCloud",
      "Explored Python and FastAPI for AI/ML-driven backend services including Deepgram speech transcription"
    ]
  },
  {
    company: "Ling Infotech",
    position: "Software Developer Intern",
    duration: "January 2023 – September 2023",
    description: [
      "Worked on full-stack projects using React.js, Node.js, and MongoDB",
      "Enhanced backend APIs and implemented authentication mechanisms",
      "Developed REST APIs for smooth frontend-backend communication",
      "Collaborated with senior developers in an Agile environment"
    ]
  },
  {
    company: "Intelect Technologies",
    position: "Tender Quoting Executive",
    duration: "July 2021 – January 2023",
    description: [
      "Managed documentation and quoting for government project tenders",
      "Improved tender accuracy and submission efficiency",
      "Coordinated with teams to streamline bid processes"
    ]
  }
];


export const education: Education[] = [
  {
    institution: "Government Arts College, Coimbatore",
    degree: "Bachelor of Computer Science",
    duration: "2018 - 2021",
    description: "Graduated with honors in Computer Science, focusing on core subjects such as software engineering, algorithms, database management, and web development. Gained practical experience through projects involving full-stack development."
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/SandySenthilHub",
    icon: "Github"
  },
  {
    name: "LinkedIn",
    url: "www.linkedin.com/in/sandhya-s-bb457120a",
    icon: "Linkedin"
  },
  // {
  //   name: "Twitter",
  //   url: "https://twitter.com/johndoe",
  //   icon: "Twitter"
  // },
  // {
  //   name: "Instagram",
  //   url: "https://instagram.com/johndoe",
  //   icon: "Instagram"
  // }
];

export const categories = [
  { value: "all", label: "All" },
  { value: "frontend", label: "Frontend" },
  // { value: "backend", label: "Backend" },
  { value: "fullstack", label: "Full Stack" }
];