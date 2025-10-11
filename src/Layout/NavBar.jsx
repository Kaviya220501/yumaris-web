import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const services = [
    { name: "🌐 Website Service", path: "/services/website" },
    { name: "🧾 Educational Service", path: "/services/education" },
    { name: "🎬 Video Editing", path: "/services/video" },
    { name: "🎯 Digital Marketing", path: "/services/marketing" },
  ];

  return (
    <div className="sticky top-0 z-50 bg-white/10 backdrop-blur-sm border-b border-white/10 shadow-md">
      <div className="relative flex items-center px-6 py-4 md:px-12">
        
        <div className="text-2xl font-bold bg-gradient-to-r from-[#4973f2] via-[#5a49cf] to-[#7633d5] bg-clip-text text-transparent z-20">
          Yumaris Agency
        </div>

        <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-10 items-center z-10">
          <li>
            <Link to="/" className="text-white hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-blue-500">
              About
            </Link>
          </li>

          <li className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="text-white hover:text-blue-500"
            >
              Service ▾
            </button>
            {open && (
              <ul className="absolute top-8 left-1/2 -translate-x-1/2 w-56 bg-white/10 backdrop-blur-md rounded-md shadow-lg space-y-2 p-2 text-center">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.path}
                      className="block text-white p-2 hover:text-blue-800 hover:bg-gray-500 rounded duration-300"
                      onClick={() => setOpen(false)}
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link to="/contact" className="text-white hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul>

        <div className="hidden md:block ml-auto z-20">
          <button className="border-none bg-gradient-to-r from-[#4973f2] to-[#652bb5] rounded-md px-4 py-2 text-white hover:text-black hover:scale-105 transition">
            Get in Touch
          </button>
        </div>

        <div className="md:hidden flex items-center ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center gap-1"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className="absolute top-full left-0 w-full flex flex-col items-center bg-white/20 backdrop-blur-xl border-t border-white/10 shadow-lg py-4 z-40 md:hidden">
          <li>
            <Link
              to="/"
              className="text-white hover:text-blue-500 text-lg py-2 block"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white hover:text-blue-500 text-lg py-2 block"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>

          <li className="relative flex flex-col items-center w-full">
            <button
              onClick={() => setOpen(!open)}
              className="text-white hover:text-blue-500 text-lg py-2 w-full"
            >
              Service
            </button>
            {open && (
              <ul className="absolute top-12 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-xl rounded-md w-64 text-center shadow-lg">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.path}
                      className="block text-white p-2 hover:text-blue-800 hover:bg-gray-500 rounded duration-300"
                      onClick={() => {
                        setIsOpen(false);
                        setOpen(false);
                      }}
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {!open && (
            <>
              <li>
                <Link
                  to="/contact"
                  className="text-white hover:text-blue-500 text-lg py-2 block"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>

              <li>
                <button
                  className="w-30 bg-gradient-to-r from-[#4973f2] to-[#652bb5] rounded-md p-2 text-white hover:text-black hover:scale-105 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Get in Touch
                </button>
              </li>
            </>
          )}
        </ul>
      )}
    </div>
  );
};
  );
};

export default NavBar;
export default NavBar;
