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
  docker,
  threejs,
  carrent,
  jobit,
  tripguide,
  scorchetech,
  buyenergy,
  gookway,
  hng,
  hedreg,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Full-Stack Web Developer", icon: web },
  { title: "React Native Developer", icon: mobile },
  { title: "Backend Engineer (Node.js / Express)", icon: backend },
  { title: "Tech Content Creator", icon: creator },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "Git", icon: git },
  { name: "Docker", icon: docker },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "HNG Internship",
    icon: hng,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Oct 2023",
    points: [
      "Collaborated on frontend challenges using React and Tailwind CSS.",
      "Completed weekly coding tasks under time constraints.",
      "Ranked among the top participants and completed assigned projects.",
    ],
  },
  {
    title: "Flutter Developer Intern",
    company_name: "Hedreg Solutions",
    icon: hedreg,
    iconBg: "#383E56",
    date: "July 2023 - Sept 2023",
    points: [
      "Built custom UI screens and navigation flows using Flutter.",
      "Integrated REST APIs and handled state using Provider.",
      "Tested and deployed features in a team-based Agile environment.",
    ],
  },
  {
    title: "Fullstack Developer Intern",
    company_name: "Buy Energy Units Ltd",
    icon: buyenergy,
    iconBg: "#383E56",
    date: "Feb 2024 - Present",
    points: [
      "Developing and maintaining React applications for utility payments.",
      "Building scalable UI with Tailwind CSS and reusable components.",
      "Working closely with backend engineers to consume Express APIs securely.",
    ],
  },
  {
    title: "Founder & Lead Developer",
    company_name: "ScorcheTech",
    icon: scorchetech,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Spearheading the development of ScorcheJS and ScorcheStore.",
      "Built secure backend APIs using Node.js, Express, JWT, and MySQL.",
      "Integrated Paystack for secure fintech transactions in ScorchePay and VivaTax.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "GookWay",
    icon: gookway,
    iconBg: "#383E56",
    date: "Oct 2023 - Jan 2024",
    points: [
      "Built authentication and cart merge logic for guest-to-user sessions.",
      "Integrated product listing and category APIs using Express and MySQL.",
      "Implemented Nodemailer and secure password reset flows.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Abu Issa worked closely with our mobile team and helped us ship key features on time. His understanding of Flutter and state management made collaboration seamless.",
    name: "Mr. John Adeyemi",
    designation: "Chief Executive Officer",
    company: "Hedreg Group",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    testimonial:
      "He translated complex UI mockups into smooth, responsive Flutter screens. Always proactive, always reliable.",
    name: "Zainab Yusuf",
    designation: "Product Manager",
    company: "Hedreg Group",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    testimonial:
      "From system architecture to API security, Abu Issa built ScorchePay with long-term scalability in mind. His attention to detail helped prevent major issues before they happened.",
    name: "ScorchePay DevOps Team",
    designation: "Backend, DevOps & QA",
    company: "ScorcheTech",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
  },
  {
    testimonial:
      "I had the pleasure of mentoring Abu during the HNG Internship. He stood out for his quick learning and his ability to solve React challenges under time pressure.",
    name: "Blessing Adedeji",
    designation: "Mentor & Engineer",
    company: "HNG Internship",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    testimonial:
      "Abu's frontend development work helped boost customer retention for GookWay. His Keen Slider implementation and user-friendly cart logic were game changers.",
    name: "Farouk Idris",
    designation: "Product Designer",
    company: "GookWay",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    testimonial:
      "When we needed secure payment flows integrated quickly into our Buy Energy Units app, Abu delivered a clean, well-documented codebase that passed all testing stages.",
    name: "Ruqayya Mohammed",
    designation: "Software QA Analyst",
    company: "Buy Energy Units Ltd",
    image: "https://randomuser.me/api/portraits/women/64.jpg",
  },
];


const projects = [
  {
    name: "ScorchePay",
    description:
      "A fintech platform for secure transactions and utility payments built with Flutter, Node.js, Express, and MySQL. It features JWT authentication and Paystack integration.",
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mysql", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/blackscorche/scorchedata",
  },
  {
    name: "GookWay",
    description:
      "A stylish modern e-commerce UI built with React and Tailwind CSS for tech gadgets like phones and laptops.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "keen-slider", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/blackscorche/gookway",
  },
  {
    name: "Buy Energy Units",
    description:
      "A Flutter app for buying energy units, featuring secure authentication, payment integration, and a user-friendly interface.",
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "paystack", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/blackscorche/buyenergyunits",
  },
];

export { services, technologies, experiences, testimonials, projects };
