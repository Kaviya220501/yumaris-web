import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../Layout/NavBar";
import Footer from "../../Layout/Footer";

const VideoEditing = () => {
  const sectionRefs = useRef([]);
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);


  useEffect(() => {
    setVisibleSections(new Array(sectionRefs.current.length).fill(false));

    const observer = new IntersectionObserver((entries) => {
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

  const edittool = [
    {
      title: "Adobe Premiere Pro",
      desc: "Editing",
    },
    {
      title: "After Effects",
      desc: "Motion Graphics",
    },
    {
      title: "Final Cut PRo",
      desc: "Editing",
    },
    {
      title: "Audition",
      desc: "Audio Editing",
    },
  ];

  const Capabilities = [
    {
      icon: "fa-solid fa-film",
      title: "Professional Editing",
      desc: "Eye-catching animated graphics, lower thirds, titles, and visual effects that enhance your video's impact and professionalism.",
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "Motion Graphics",
      desc: "Cinematic-quality video editing with seamless transitions, perfect timing, and storytelling that captivates your audience.",
    },
    {
      icon: "fa-solid fa-wand-magic-sparkles",
      title: "3D Animation",
      desc: "Advanced 3D modeling, animation, and visual effects that bring your creative vision to life with stunning realism..",
    },
    {
      icon: "fa-solid fa-palette",
      title: "Color Grading",
      desc: "Professional color correction and grading that gives your videos a polished, cinematic look and consistent brand aesthetic",
    },
    {
      icon: "fa-solid fa-music",
      title: "Audio Enhancement",
      desc: "Crystal-clear audio mixing, noise reduction, sound effects, and music integration for professional-quality soundtracks.",
    },
    {
      icon: "fa-solid fa-desktop",
      title: "Multi-Format Export",
      desc: "Optimized video delivery in multiple formats and resolutions for all platforms, from social media to 4K displays.",
    },
  ];

  const service = [
    "Increase engagement and audience retention",
    "Professional quality that builds brand credibility",
    "Faster turnaround times with efficient workflows",
    "Unlimited revisions until you're satisfied",
    "Multi-platform optimization for maximum reach",
    "Consistent brand aesthetic across all videos",
    "Cost-effective compared to in-house production",
    "Access to professional-grade tools and techniques",
  ];

  const servicekey = [
    {
      title: "Fast",
      desc: "Quick turnaround without compromising quality",
    },
    { title: "Creative", desc: "Innovative editing that stands out" },
    {
      title: "Reliable",
      desc: "Consistent delivery on time, every time",
    },
    {
      title: "Affordable",
      desc: "Professional quality at competitive rates",
    },
  ];
return (
  <div className="min-h-screen text-white" style={{ background: "#0B0E16" }}>
    <NavBar />

    <div className="overflow-hidden flex flex-col p-1 items-center justify-center gap-10 text-center">

      
      <div className="p-0 min-w-screen text-center w-full px-4 sm:px-8 md:px-16 py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#2E102F] via-[#261034] to-[#181C39] text-white flex flex-col items-center gap-6 sm:gap-8">

       
        <i
          ref={addToRefs}
          className={`fa-solid fa-video text-4xl md:text-5xl p-5 rounded-3xl bg-gradient-to-r from-[#7b4b90] to-[#454e94] shadow-lg transition-all duration-[1200ms]
            ${visibleSections[0] ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
        ></i>

        
        <h2
          ref={addToRefs}
          className={`text-3xl sm:text-5xl font-extrabold transition-all duration-[1200ms]
            ${visibleSections[1] ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
        >
          Video Editing &{" "}
          <span className="bg-gradient-to-r from-[#4973f2] via-[#5a49cf] to-[#7633d5] bg-clip-text text-transparent">
            Multimedia
          </span>
        </h2>

        
        <p
          ref={addToRefs}
          className={`text-base sm:text-lg max-w-2xl text-gray-100 transition-all duration-[1200ms]
            ${visibleSections[2] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          Transform your raw footage into compelling visual stories.
        </p>

       
        <Link to="/contact">
          <button
            ref={addToRefs}
            className={`w-[200px] py-3 rounded-lg bg-gradient-to-r from-[#4973f2] via-[#5a49cf] to-[#7633d5] font-semibold transition-all duration-[1200ms]
              ${visibleSections[3] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Contact Us
          </button>
        </Link>
      </div>

     
      <p
        ref={addToRefs}
        className={`text-4xl sm:text-5xl font-extrabold transition-all duration-[1200ms]
          ${visibleSections[4] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        Professional{" "}
        <span className="bg-gradient-to-r from-[#4973f2] via-[#5a49cf] to-[#7633d5] bg-clip-text text-transparent">
          Tools
        </span>
      </p>

     
      <div
        ref={addToRefs}
        className={`py-12 flex flex-wrap gap-8 justify-center transition-all duration-[1400ms]
          ${visibleSections[5] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        {edittool.map((item, index) => (
          <div
            key={index}
            className="bg-[#2b2b2d] w-60 p-6 rounded-xl shadow-md hover:scale-105 hover:shadow-[0_0_25px_rgba(120,70,255,0.5)] transition-all"
          >
            <i className="fa-solid fa-sliders text-4xl text-blue-500"></i>
            <p className="text-xl font-bold text-white mt-2">{item.title}</p>
            <p className="text-gray-300 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      
      <div className="bg-[#09090B] w-full py-10 px-10 border-t border-b border-gray-800">
        <p
          ref={addToRefs}
          className={`text-4xl sm:text-5xl font-extrabold transition-all duration-[1200ms]
            ${visibleSections[6] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          Our{" "}
          <span className="bg-gradient-to-r from-[#4973f2] via-[#5a49cf] to-[#7633d5] bg-clip-text text-transparent">
            Capabilities
          </span>
        </p>

       
        <div
          ref={addToRefs}
          className={`mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-[1400ms]
            ${visibleSections[7] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          {Capabilities.map((item, index) => (
            <div
              key={index}
              className="bg-[#16171A] p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-[0_0_25px_rgba(120,70,255,0.5)] transition-all"
            >
              <i className={`${item.icon} text-3xl p-3 bg-[#321678] rounded-xl`}></i>
              <p className="text-2xl font-semibold mt-3">{item.title}</p>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

     
      <div
        ref={addToRefs}
        className={`px-10 py-16 transition-all duration-[1500ms]
          ${visibleSections[8] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        <h2 className="text-5xl font-extrabold text-center mb-4">
          Why Choose Our{" "}
          <span className="bg-gradient-to-r from-[#4973f2] via-[#5a49cf] to-[#7633d5] bg-clip-text text-transparent">
            Video Services
          </span>
        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto text-center mb-6">
          Professional video editing transforms your content from ordinary to extraordinary.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {servicekey.map((card, index) => (
            <div
              key={index}
              className="bg-[#18181B] border border-gray-700 rounded-2xl px-8 py-6 shadow-md hover:scale-105 transition-all"
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-400">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

};
export default VideoEditing;
