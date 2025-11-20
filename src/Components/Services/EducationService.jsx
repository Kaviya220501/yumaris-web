  import React, { useEffect, useRef, useState } from "react";
  import NavBar from "../../Layout/NavBar";
  import Footer from "../../Layout/Footer";
  import { useContext } from "react";
  import { ServicesContext } from "../Services/ServicesContext";

  const EducationService = () => {
    const Services = useContext(ServicesContext); 
    const sectionRefs = useRef([]);
    const [visibleSections, setVisibleSections] = useState([]);

    const addToRefs = (el) => {
      if (el && !sectionRefs.current.includes(el)) sectionRefs.current.push(el);
    };

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


    const feature = [
      {
        content: "Live 1-on-1 Tutoring",
        desc: "Personalized one-on-one sessions with expert instructors who adapt to your learning pace and style for maximum knowledge retention.",
      },
      {
        content: "Online Courses",
        desc: "Comprehensive self-paced courses with video lessons, practical exercises, and real-world projects to build your skills.",
      },
      {
        content: "Professional Certifications",
        desc: "Industry-recognized certificates that validate your skills and enhance your professional credibility in the job market.",
      },
      {
        content: "Career Mentoring",
        desc: "Expert guidance and mentorship to help you navigate your career path, set goals, and achieve professional success.",
      },
      {
        content: "Workshops & Bootcamps",
        desc: "Intensive, hands-on training programs designed to fast-track your learning and prepare you for real-world challenges.",
      },
      {
        content: "Interactive Learning",
        desc: "Engaging learning experiences with quizzes, assignments, projects, and peer collaboration to reinforce knowledge.",
      },
    ];

    const Process = [
      {
        num: "01",
        topic: "Skill Assessment",
        desc: "We evaluate your current skill level and learning goals to create a personalized learning plan.",
      },
      {
        num: "02",
        topic: "Structured Learning",
        desc: "Follow a carefully designed curriculum with video lessons, practical exercises, and hands-on projects.",
      },
      {
        num: "03",
        topic: "Practice & Projects",
        desc: "Apply your knowledge through real-world projects that build your portfolio and practical experience.",
      },
      {
        num: "04",
        topic: "Certification & Career Support",
        desc: "Earn your certificate and receive ongoing career guidance, job placement assistance opportunities.",
      },
    ];

    return (
      <>
        <div className="w-full bg-gradient-to-r from-[#102a39] via-[#181b38] to-[#201236] text-white">
          <NavBar />

          <div
            ref={addToRefs}
            className={`min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#102a39] via-[#181b38] to-[#201236] transform transition-all duration-1000 ease-out ${
              visibleSections[0] ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <p className="font-bold text-5xl sm:text-7xl text-center">
              Educational <span className="text-blue-500">Services</span>
            </p>
            <p className="pt-5 sm:pt-10 text-base sm:text-lg text-gray-400 text-center px-4 sm:px-0">
              Empower yourself with comprehensive learning solutions designed to advance
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center px-4 sm:px-0">
              your skills, accelerate your career growth, and unlock new opportunities.
            </p>
            <button className="mt-6 sm:mt-8 bg-gradient-to-r from-[#4973f2] to-[#652bb5] rounded-md px-4 sm:px-6 py-2 text-sm sm:text-xl font-medium text-white shadow-md hover:scale-105 transition-transform duration-200">
              Start Learning Today
            </button>
          </div>

          <div className="bg-[#080b25] pt-16 sm:pt-20 px-2 sm:px-0">
            <div
              ref={addToRefs}
              className={`flex flex-col justify-center items-center transform transition-all duration-1000 ease-out ${
                visibleSections[1] ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
            >
              <p className="font-bold text-3xl sm:text-4xl text-center">
                Learning <span className="text-blue-500">Features</span>
              </p>
              <p className="pt-3 sm:pt-5 text-base sm:text-lg text-gray-400 text-center">
                Our education services combine innovative teaching methods with practical applications to ensure
              </p>
              <p className="text-base sm:text-lg text-gray-400 text-center">
                you gain skills that make a real difference.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-10 pb-10 sm:pb-12 px-2 sm:px-10">
              {feature.map((item, index) => (
                <div
                  key={index}
                  ref={addToRefs}
                  className={`group bg-gradient-to-r from-[#212121] to-[#1c1a1a] p-3 sm:p-6 rounded-lg shadow-lg hover:shadow-[0_0_20px_4px_rgba(59,130,246,0.6)] transform transition-all duration-1000 ease-out ${
                    visibleSections[index + 2] ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                  }`}
                >
                  <p className="text-lg sm:text-xl font-bold pb-2">{item.content}</p>
                  <h2 className="text-gray-400 text-sm sm:text-base">{item.desc}</h2>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#000000] pt-10 sm:pt-12 px-2 sm:px-0">
            <div
              ref={addToRefs}
              className={`flex flex-col justify-center items-center transform transition-all duration-1000 ease-out ${
                visibleSections[8] ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
            >
              <p className="font-bold text-3xl sm:text-4xl text-center">
                Featured <span className="text-blue-500">Programs</span>
              </p>
              <p className="pt-3 sm:pt-5 text-base sm:text-lg text-gray-400 text-center">
                Carefully crafted programs that combine theory with hands-on practice to prepare you
              </p>
              <p className="text-base sm:text-lg text-gray-400 text-center">
                for success in your chosen field.
              </p>
            </div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
  {Services.map((items, index) => (
    <div
      key={index}
      ref={addToRefs}
      className={`group bg-gradient-to-r from-[#212121] to-[#1c1a1a] p-3 sm:p-6 rounded-lg shadow-lg hover:shadow-[0_0_20px_4px_rgba(59,130,246,0.6)] transform transition-all duration-1000 ease-out ${
        visibleSections[index + 9] ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <p className="text-lg sm:text-xl font-bold pb-2">
        {items.title}
      </p>

      <p className="text-sm sm:text-3px text-gray-400 pt-1 pb-4">
        {items.description}
      </p>

      <h3 className="text-white font-semibold mb-1">Key Topics</h3>
      <ul className="list-disc list-inside text-white marker:text-[#5277e7] text-xs sm:text-sm pb-3">
        {items.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>

      {items.weeks && (
        <p className="text-blue-400 font-semibold text-sm">
          Duration: {items.weeks}
        </p>
      )}
    </div>
  ))}


  </div>

          </div>

          <div className="bg-[#080b25] pt-8 sm:pt-10 px-2 sm:px-0">
            <div
              ref={addToRefs}
              className={`flex flex-col justify-center items-center transform transition-all duration-1000 ease-out ${
                visibleSections[13] ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
            >
              <p className="font-bold text-3xl sm:text-4xl text-center">
                Your Learning <span className="text-blue-500">Journey</span>
              </p>
              <p className="pt-3 sm:pt-5 text-base sm:text-lg text-gray-400 text-center">
                A structured approach that takes you from beginner to expert, step by step.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-10 pb-10 sm:pb-12 px-2 sm:px-10">
              {Process.map((process, index) => (
                <div
                  key={index}
                  ref={addToRefs}
                  className={`relative group bg-gradient-to-r from-[#212121] to-[#1c1a1a] p-3 sm:p-4 rounded-lg shadow-lg hover:shadow-[0_0_20px_4px_rgba(59,130,246,0.6)] transform transition-all duration-1000 ease-out ${
                    visibleSections[index + 14] ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                  }`}
                >
                  <div className="absolute -top-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold text-base sm:text-lg">
                    {process.num}
                  </div>
                  <p className="text-lg sm:text-xl font-bold pb-2 mt-6">{process.topic}</p>
                  <p className="text-sm sm:text-1xs text-gray-400 pt-1">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={addToRefs}
            className={`pt-10 pb-10 flex flex-col justify-center items-center bg-gradient-to-r from-[#12112e] via-[#12112e] to-[#3a1135] transform transition-all duration-1000 ease-out ${
              visibleSections[18] ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <p className="font-bold text-3xl sm:text-4xl text-center">
              Ready to <span className="text-blue-500">Transform</span> Your Future?
            </p>
            <p className="pt-5 sm:pt-5 text-base sm:text-lg text-gray-400 text-center px-4 sm:px-0">
              Join thousands of students who have already taken the first step towards achieving their dreams. Your journey starts here.
            </p>
            <button className="mt-6 sm:mt-8 bg-gradient-to-r from-[#4973f2] to-[#652bb5] rounded-md px-4 sm:px-6 py-2 text-sm sm:text-xl font-medium text-white shadow-md hover:scale-105 transition-transform duration-200">
              Enroll Now
            </button>
          </div>

          <Footer />
        </div>
      </>
    );
  };

  export default EducationService;
