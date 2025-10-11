import React from 'react';
import { Link } from "react-router-dom";

const App = () => {
  return (
   <div className="bg-[#111] text-white px-6 py-10 md:px-20 flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-between items-start gap-10">  
      
      <div className="flex flex-col gap-5 w-full md:w-1/4">
        <h2 className="text-xl font-bold w-fit pb-1 bg-gradient-to-r from-[#4973f2] via-[#5a49cf] to-[#7633d5] bg-clip-text text-white border-b-3 border-transparent [border-image:linear-gradient(to_right,#4973f2,#5a49cf,#7633d5)_1] ">Yumaris Agency</h2>
        <p className="text-[#bbb] leading-relaxed">
          Empowering businesses and students with innovative educational, web, video, and business growth solutions.
        </p>
        <div className="flex gap-4 mt-2 flex-wrap">
          <a href="https://www.instagram.com/yumaris_agency/" className="text-[#ccc] text-2xl hover:text-blue-500 transition-colors">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/yumarisagency/" className="text-[#ccc] text-2xl hover:text-blue-500 transition-colors">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://www.youtube.com/@yumarisagency" className="text-[#ccc] text-2xl hover:text-blue-500 transition-colors">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="https://www.facebook.com/people/Yumaris-Agency/61581189101296/?mibextid=ZbWKwL" className="text-[#ccc] text-2xl hover:text-blue-500 transition-colors">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/4">
        <h2 className="mb-5  text-xl w-fit pb- bg-gradient-to-r from-[#4973f2] via-[#5a49cf] to-[#7633d5] bg-clip-text text-white border-b-3 border-transparent [border-image:linear-gradient(to_right,#4973f2,#5a49cf,#7633d5)_1] ">Our Services</h2>
        <ul className="space-y-2">
          <li><a href="" className="text-[#ccc] hover:text-blue-500 transition-colors">Website Service</a></li>
          <li><a href="" className="text-[#ccc] hover:text-blue-500 transition-colors">Educational Service</a></li>
          <li><a href="" className="text-[#ccc] hover:text-blue-500 transition-colors">Video Editing</a></li>
          <li><a href="" className="text-[#ccc] hover:text-blue-500 transition-colors">Digital Marketing</a></li>
        </ul>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/4">
        <h2 className="mb-5 text-xl w-fit pb-1 bg-gradient-to-r  from-[#4973f2] via-[#5a49cf] to-[#7633d5] bg-clip-text text-white border-b-3 border-transparent [border-image:linear-gradient(to_right,#4973f2,#5a49cf,#7633d5)_1] ">Quick Link</h2>
        <ul className="space-y-2">
           <li><Link to="/" className="text-[#ccc] hover:text-blue-500 transition-colors">Home</Link></li>
           <li><Link to="/about" className="text-[#ccc] hover:text-blue-500 transition-colors">About Us</Link></li>
           <li><Link to="/services" className="text-[#ccc] hover:text-blue-500 transition-colors">Services</Link></li>
           <li><Link to="/contact" className="text-[#ccc] hover:text-blue-500 transition-colors">Contact Us</Link></li>
        </ul>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/4">
        <h2 className="mb-5 text-xl font-bold w-fit pb-1 bg-gradient-to-r from-[#4973f2] via-[#5a49cf] to-[#7633d5] bg-clip-text text-white border-b-3 border-transparent [border-image:linear-gradient(to_right,#4973f2,#5a49cf,#7633d5)_1] ">Contact Us</h2>
        <ul className="space-y-3">
          <li className="flex items-center gap-2 text-[#ccc]">
            <i className="fa-solid fa-phone text-blue-500"></i>
            <p>91+ 9750129532 </p>
          </li>
          <li className="flex items-center gap-2 text-[#ccc]">
            <i className="fa-regular fa-envelope text-blue-500"></i>
            <p>yumarisagency@gmail.com </p>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default App;
