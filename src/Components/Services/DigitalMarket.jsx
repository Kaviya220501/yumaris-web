import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../Layout/NavBar";
import Footer from "../../Layout/Footer";

const DigitalMarket = () => {
  const sectionRefs = useRef([]);
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);


  useEffect(() => {
    setVisibleSections(new Array(sectionRefs.current.length).fill(false));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setVisibleSections((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) sectionRefs.current.push(el);
  };

  const MarketServices = [
    {
      icon: "fa-solid fa-magnifying-glass",
      count: "SEO Optimization",
      desc: "Improve your search engine rankings with strategic SEO practices that drive organic traffic and increase visibility.",
    },
    {
      icon: "fa-solid fa-share-nodes",
      count: "Social Media Marketing",
      desc: "Build and engage your community across all major social platforms with content that resonates and converts.",
    },
    {
      icon: "fa-solid fa-globe",
      count: "Content Marketing",
      desc: "Strategic content creation and distribution that builds authority, trust, and long-term customer relationships.",
    },
    {
      icon: "fa-solid fa-bolt",
      count: "Email Marketing",
      desc: "Nurture leads and retain customers with personalized email campaigns that drive engagement and sales.",
    },
  ];

  const Approach = [
    {
      num: "01",
      title: "Audit & Research",
      desc: "Comprehensive analysis of your current marketing, competitors, and target audience to identify opportunities.",
    },
    {
      num: "02",
      title: "Strategy Development",
      desc: "Create a customized digital marketing strategy aligned with your business goals and target market.",
    },
    {
      num: "03",
      title: "Implementation",
      desc: "Execute campaigns across channels with professional content, targeting, and optimization.",
    },
    {
      num: "04",
      title: "Optimize & Scale",
      desc: "Continuously monitor, analyze, and refine campaigns to maximize performance and ROI.",
    },
  ];

  const channels = [
    {
      icon: "fa-solid fa-rectangle-ad",
      title: "Google Ads",
      desc: "Search, Display, Shopping & YouTube advertising",
    },
    {
      icon: "fa-solid fa-mobile-retro",
      title: "Facebook & Instagram",
      desc: "Social advertising and organic growth",
    },
    {
      icon: "fa-solid fa-briefcase",
      title: "LinkedIn",
      desc: "B2B marketing and professional networking",
    },
    {
      icon: "fa-solid fa-envelope",
      title: "Email Platforms",
      desc: "Mailchimp, HubSpot, ActiveCampaign",
    },
    {
      icon: "fa-regular fa-newspaper",
      title: "Content Platform",
      desc: "Blogs, YouTube, podcasts, and more",
    },
    {
      icon: "fa-solid fa-magnifying-glass-chart",
      title: "Analytics Tolls",
      desc: "Google Analytics, Data Studio, SEMrush",
    },
  ];

  return (
    <div className="min-h-screen text-white " style={{ background: "#0B0E16" }}>
      <NavBar />
      <div className="overflow-hidden flex flex-col p-1 items-center justify-center gap-10 text-center">
        {/* title */}
        <div className="p-0 min-w-screen text-center w-full px-4 sm:px-8 md:px-16 py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#2A1031] via-[#32102D] to-[#190B17] text-white flex flex-col items-center gap-6 sm:gap-8 border-b-[3.5px] border-transparent [border-image:linear-gradient(to_right,transparent,#681cb0,#206fbd,transparent)_1]">
          <i
            ref={addToRefs}
            className={`fa-solid fa-magnifying-glass-chart text-white text-3xl sm:text-4xl md:text-5xl p-4 sm:p-5 md:p-6 rounded-3xl bg-gradient-to-r from-[#7b4b90] to-[#454e94] shadow-lg transform transition-all duration-[1200ms] ease-in-out ${
              visibleSections[0]
                ? "translate-x-0 opacity-100"
                : "-translate-x-32 opacity-0"
            }`}
          ></i>

          <h2
            ref={addToRefs}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold transform transition-all duration-[1200ms] ease-in-out ${
              visibleSections[1]
                ? "translate-x-0 opacity-100"
                : "translate-x-32 opacity-0"
            }`}
          >
            Digital{" "}
            <span className="bg-gradient-to-r from-[#4973f2] via-[#5a49cf] to-[#7633d5] bg-clip-text text-transparent">
              Marketing
            </span>
          </h2>

          <p
            ref={addToRefs}
            className={`text-base sm:text-lg md:text-2xl font-light max-w-md sm:max-w-xl md:max-w-2xl mx-auto text-gray-100 transform transition-all duration-[1200ms] ease-in-out ${
              visibleSections[0]
                ? "translate-x-0 opacity-100"
                : "-translate-x-32 opacity-0"
            }`}
          >
            Amplify your brand with data-driven marketing strategies that
            deliver measurable results, increase revenue, and accelerate
            business growth.
          </p>

          <Link to="/contact" className="w-full flex justify-center">
            <button
              ref={addToRefs}
              className={`w-[180px] sm:w-[200px] md:w-[220px] cursor-pointer py-2 sm:py-3 text-lg sm:text-xl font-semibold text-white rounded-lg bg-gradient-to-r from-[#4973f2] via-[#5a49cf] to-[#7633d5] transform transition-all duration-[1200ms] ease-in-out ${
                visibleSections[1]
                  ? "translate-x-0 opacity-100"
                  : "translate-x-32 opacity-0"
              }`}
            >
              Contact Us
            </button>
          </Link>
        </div>

        <div className="py-6">
          <p
            ref={addToRefs}
            className={`text-4xl sm:text-5xl font-extrabold text-center pb-4 transform transition-all duration-1000 ease-in-out ${
              visibleSections[4]
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            Our Marketing{" "}
            <span className="bg-gradient-to-r from-[#4973f2] via-[#5a49cf] to-[#7633d5] bg-clip-text text-transparent">
              Services
            </span>
          </p>

          <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto px-4">
            Comprehensive digital marketing solutions that cover every aspect of
            your online presence and growth strategy.
          </p>

          <div className="flex flex-wrap gap-8 justify-center">
            {MarketServices.map((item, index) => (
              <div
                ref={addToRefs}
                key={index}
                className={`bg-[#2b2b2d] w-64 sm:w-56 md:w-60 p-6 flex flex-col items-center text-center hover:duration-300 hover:ease-linear rounded-2xl shadow-md cursor-pointer transform transition-all duration-1200 ease-in-out hover:scale-105 hover:shadow-[0_0_25px_rgba(120,70,255,0.5)] ${
                  visibleSections[4]
                    ? "scale-100 opacity-100"
                    : "scale-50 opacity-0"
                }`}
              >
                <i
                  className={`${item.icon} text-2xl text-white p-3 rounded-full bg-gradient-to-r from-[#34166b] via-[#6e2694] to-[#7633d5] shadow-md transition-all duration-700 ease-in-out`}
                ></i>

                <p className="text-xl font-bold text-white">{item.count}</p>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#09090B] text-white px-4 sm:px-8 md:px-16 lg:px-20 py-12 sm:py-16 border-b-[3.5px] border-transparent border-t-[3.5px] [border-image:linear-gradient(to_right,transparent,#681cb0,#206fbd,transparent)_1]">
          <h2
            ref={addToRefs}
            className={`text-center text-3xl sm:text-4xl md:text-5xl font-bold transform transition-all duration-1200 ease-in-out ${
              visibleSections[5]
                ? "translate-x-0 opacity-100"
                : "translate-x-30 opacity-0"
            }`}
          >
            Our <span className="bg-gradient-to-r from-[#4973f2] via-[#5a49cf] to-[#7633d5] bg-clip-text text-transparent">
              Approach
            </span>
          </h2>

          <p
            ref={addToRefs}
            className={`text-center text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-10 transform transition-all duration-1200 ease-in-out ${
              visibleSections[5]
                ? "translate-x-0 opacity-100"
                : "-translate-x-30 opacity-0"
            }`}
          >
            A systematic approach to digital marketing that ensures consistent
            growth and measurable success.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-center">
            {Approach.map((item, index) => (
              <div
                ref={addToRefs}
                key={index}
                className={`relative bg-[#16171A] text-start cursor-pointer p-5 sm:p-6 md:p-7 rounded-xl shadow-md hover:shadow-[0_0_25px_rgba(120,70,255,0.6)] hover:scale-105 transform transition-all duration-1200 ease-in-out ${
                  visibleSections[6]
                    ? "scale-100 opacity-100"
                    : "scale-50 opacity-0"
                }`}
              >
                <div className="absolute -left-2 sm:-left-3 -top-2 sm:-top-3 bg-gradient-to-r from-[#4973f2] to-[#7633d5] text-white font-bold rounded-full w-9 h-9 sm:w-11 sm:h-11 md:w-13 md:h-13 flex items-center justify-center text-base sm:text-lg md:text-xl shadow-md">
                  {item.num}
                </div>

                <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pb-10 border-transparent border-b-[3.5px] [border-image:linear-gradient(to_right,transparent,#681cb0,#206fbd,transparent)_1]">
          <p
            ref={addToRefs}
            className={`text-4xl sm:text-5xl font-extrabold pb-4 transform transition-all duration-1200 ease-in-out ${
              visibleSections[6]
                ? "translate-x-0 opacity-100"
                : "-translate-x-30 opacity-0"
            }`}
          >
            Marketing <span className="bg-gradient-to-r from-[#4973f2] via-[#5a49cf] to-[#7633d5] bg-clip-text text-transparent">
              Channels
            </span>
          </p>

          <p
            ref={addToRefs}
            className={`text-center text-lg text-gray-400 mb-10 transform transition-all duration-1200 ease-in-out  ${
              visibleSections[6]
                ? "translate-x-0 opacity-100"
                : "translate-x-30 opacity-0"
            } `}
          >
            We provide high-quality services with a focus on customer
            satisfaction, innovation, and reliability.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {channels.map((item, index) => (
              <div
                ref={addToRefs}
                key={index}
                className={`bg-[#2b2b2d] w-64 p-6 flex flex-col items-center text-center rounded-xl shadow-md hover:shadow-[0_0_25px_rgba(120,70,255,0.5)] hover:scale-105 hover:duration-300 hover:ease-linear cursor-pointer text-lg text-gray-400 mb-10 transform transition-all duration-1200 ease-in-out  ${
                  visibleSections[6]
                    ? "scale-100 opacity-100"
                    : "scale-50 opacity-0"
                }`}
              >
                <i
                  className={`${item.icon} text-5xl text-transparent bg-gradient-to-r from-[#4973f2] via-[#5a49cf] to-[#7633d5] bg-clip-text mb-3`}
                ></i>
                <p className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </p>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default DigitalMarket;
