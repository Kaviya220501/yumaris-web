import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import WebsiteService from "./Components/Services/WebsiteService.jsx";
import EducationService from "./Components/Services/EducationService.jsx";
import VideoEditing from "./Components/Services/VideoEditing.jsx";
import DigitalMarketing from "./Components/Services/DigitalMarket.jsx";

import { ServicesContext } from "./Components/Services/ServicesContext.jsx";

const Services = [
  {
    title: "Web Development Mastery",
    description:
      "Complete full-stack development training from HTML/CSS basics to advanced frameworks and deployment.",
    features: [
      "HTML, CSS & JavaScript",
      "React & Node.js",
      "Database Management",
      "API Development",
    ],
    weeks: "12 Weeks",
  },
  {
    title: "Digital Marketing Excellence",
    description:
      "Comprehensive digital marketing training covering SEO, social media, content marketing, and analytics.",
    features: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "Email Marketing"],
    weeks: "8 Weeks",
  },
  {
    title: "Java Full Stack",
    description:
      "In-depth Java programming and full-stack development using Spring Boot, Hibernate, and front-end technologies.",
    features: ["Core Java", "Spring Boot", "Hibernate", "Front-end Technologies"],
    weeks: "8 Weeks",
  },
  {
    title: "Soft Skill",
    description:
      "Develop confidence and skills to deliver impactful presentations and communicate effectively.",
    features: ["Speech Writing", "Body Language", "Audience Engagement", "Handling Q&A"],
    weeks: "6 Weeks",
  },
];



createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ServicesContext.Provider value={Services}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/services/website" element={<WebsiteService />} />
        <Route path="/services/education" element={<EducationService />} />
        <Route path="/services/video" element={<VideoEditing />} />
        <Route path="/services/marketing" element={<DigitalMarketing />} />
      </Routes>
    </ServicesContext.Provider>
  </BrowserRouter>
);
