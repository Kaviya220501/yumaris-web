import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import WebsiteService from "./Components/Services/WebsiteService.jsx";
import EducationService from "./Components/Services/EducationService";
import VideoEditing from "./Components/Services/VideoEditing";
import DigitalMarketing from "./Components/Services/DigitalMarket";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/services/website" element={<WebsiteService />} />
        <Route path="/services/education" element={<EducationService />} />
        <Route path="/services/video" element={<VideoEditing />} />
        <Route path="/services/marketing" element={<DigitalMarketing />} />
      </Routes>
    </BrowserRouter>
);