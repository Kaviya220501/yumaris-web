import React from 'react';

const App = () => {
  return (
    <div className="bg-[#111] text-white px-20 py-10 flex flex-wrap md:flex-nowrap justify-between items-start gap-10 border-t-[3.5px] border-transparent border-t-[3.5px] [border-image:linear-gradient(to_right,transparent,#681cb0,#206fbd,transparent)_1]">
      
      {/* Company Info */}
      <div className="flex flex-col gap-5">
        <h2 className="text-xl border-b-2 border-purple-600 inline-block pb-1">Yumaris Agency</h2>
        <p className="w-[300px] text-[#bbb] leading-relaxed">
          Empowering businesses and students with innovative educational, web, video, and business growth solutions.
        </p>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/yumaris_agency/" className="text-[#ccc] text-2xl hover:text-blue-500 transition-colors">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="" className="text-[#ccc] text-2xl hover:text-blue-500 transition-colors">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Our Services */}
      <div>
        <h2 className="text-xl border-b-2 border-purple-600 inline-block pb-1 mb-4">Our Services</h2>
        <ul className="space-y-2">
          <li><a href="" className="text-[#ccc] hover:text-blue-500 transition-colors">Website Service</a></li>
          <li><a href="" className="text-[#ccc] hover:text-blue-500 transition-colors">Educational Service</a></li>
          <li><a href="" className="text-[#ccc] hover:text-blue-500 transition-colors">Video Editing</a></li>
          <li><a href="" className="text-[#ccc] hover:text-blue-500 transition-colors">Digital Marketing</a></li>
        </ul>
      </div>

      {/* Quick Links */}
      <div>
        <h2 className="text-xl border-b-2 border-purple-600 inline-block pb-1 mb-4">Quick Link</h2>
        <ul className="space-y-2">
          <li><a href="" className="text-[#ccc] hover:text-blue-500 transition-colors">Home</a></li>
          <li><a href="" className="text-[#ccc] hover:text-blue-500 transition-colors">About Us</a></li>
          <li><a href="" className="text-[#ccc] hover:text-blue-500 transition-colors">Services</a></li>
          <li><a href="" className="text-[#ccc] hover:text-blue-500 transition-colors">Contact Us</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h2 className="text-xl border-b-2 border-purple-600 inline-block pb-1 mb-4">Contact Us</h2>
        <ul className="space-y-3">
          <li className="flex items-center gap-2 text-[#ccc]">
            <i className="fa-solid fa-phone text-blue-500"></i>
            <p>91+ 1234567890</p>
          </li>
          <li className="flex items-center gap-2 text-[#ccc]">
            <i className="fa-regular fa-envelope text-blue-500"></i>
            <p>yumaris@gmail.com</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
