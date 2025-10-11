import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const sectionRefs = useRef([]);
  const [visibleSections, setVisibleSections] = useState([]);

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

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // slow motion
    }
  }, []);

  const services = [
    {
      img: "education icon.png",
      title: "Education Services",
      description:
        "Unlock learning opportunities with interactive courses, live sessions, and certifications.",
      features: [
        "Live Tutoring for school students",
        "Skill Courses with certifications",
        "Public speaking & skill development",
        "Coding & Interactive workshops",
      ],
    },
    {
      img: "web icon.png",
      title: "Website Design & Development",
      description:
        "Modern, responsive, and business-focused websites tailored for growth.",
      features: [
        "Business & Portfolio Websites",
        "E-commerce Solutions",
        "SEO & Digital Marketing",
        "Branding & Strategy",
      ],
    },
    {
      img: "video icon.png",
      title: "Video Editing & Multimedia",
      description: "High-quality video production, editing, and creative storytelling.",
      features: [
        "Social Media & YouTube Edits",
        "Event Video Production",
        "Motion Graphics & Animation",
        "Corporate Branding Videos",
      ],
    },
  ];

  const results = [
    { num: "15+", title: "Students Trained", desc: "Empowered learners worldwide" },
    { num: "2+", title: "Websites Delivered", desc: "Professional web solutions" },
    { num: "10+", title: "Videos Produced", desc: "Creative visual content" },
    { num: "2+", title: "Education Workshop", desc: "Conducted in schools and colleges" },
  ];

  const courses = [
    {
      title: "Full-Stack Web Development",
      desc: "Learn to build dynamic websites and applications.",
      language: ["React.js", "Node.js", "MongoDB", "HTML", "CSS", "JavaScript"],
      Adv: "Intermediate",
      time: "8 weeks",
      rate: "₹3,500",
      star: "4.9",
    },
    {
      title: "Java",
      desc: "Master Java programming from basics to advanced concepts.",
      language: ["Java", "OOP", "Data Structures", "Algorithms", "Spring Boot"],
      Adv: "Advance",
      time: "8 weeks",
      rate: "₹3,500",
      star: "4.8",
    },
  ];

  return (
    <>
      <div className="min-h-screen w-full bg-black text-white ">
        <NavBar />
        <div className="overflow-x-hidden">
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="star.mp4" type="video/mp4" />
          </video>

          <div className="flex items-center justify-center px-4 sm:px-10 py-10">
            <div
              ref={addToRefs}
              className={`flex flex-col justify-center items-center text-8xl sm:text-8xl font-bold text-center gap-2 sm:gap-3 transform transition-all duration-1000 ease-out ${
                visibleSections[0] ? "translate-x-0 opacity-100" : "-translate-x-40 opacity-0"
              }`}
            >
              <p className="p-2 bg-gradient-to-r from-[#4973f2] via-[#7633d5] to-[#622cae] bg-clip-text text-transparent">
                Inspire
              </p>
              <p className="p-2 bg-gradient-to-r from-[#4973f2] via-[#7633d5] to-[#622cae] bg-clip-text text-transparent">
                Build
              </p>
              <p className=" p-2 bg-gradient-to-r from-[#4973f2] via-[#7633d5] to-[#622cae] bg-clip-text text-transparent">
                Grow
              </p>
            </div>
          </div>

          <div
            ref={addToRefs}
            className={`text-center flex flex-col justify-center items-center pb-6 transform transition-all duration-1000 ease-out ${
              visibleSections[1] ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <p className="text-lg sm:text-2xl text-white">At Yumaris Agency, we blend knowledge, creativity,</p>
            <p className="text-lg sm:text-2xl text-white">and technology to help students, businesses,</p>
            <p className="text-lg sm:text-2xl text-white">and creators achieve their goals.</p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 pt-4 sm:pt-6 pb-6">
              <button className="bg-gradient-to-r from-[#4973f2] to-[#652bb5] rounded-md px-4 sm:px-6 py-2 text-base sm:text-xl font-medium text-white shadow-md hover:scale-105 transition-transform duration-200">
                Explore Services
              </button>
              <button className="bg-gradient-to-r from-[#4973f2] to-[#652bb5] rounded-md px-4 sm:px-6 py-2 text-base sm:text-xl font-medium text-white shadow-md hover:scale-105 transition-transform duration-200">
                Join a Course
              </button>
            </div>
          </div>
        </div>

        <div className="text-4xl sm:text-6xl pt-7 font-bold flex justify-center items-center w-full border-t-[3.5px] border-transparent [border-image:linear-gradient(to_right,transparent,#681cb0,#206fbd,transparent)_1]">
          <p className="bg-gradient-to-r from-[#4973f2] to-[#622cae] bg-clip-text text-transparent">
            <span className="text-white">Our</span> Services
          </p>
        </div>

        <p className="text-lg sm:text-2xl text-center text-gray-400">
          We provide comprehensive solutions to help you learn, grow, and succeed in the
        </p>
        <p className="text-lg sm:text-2xl text-center text-gray-400">digital world.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-20 pt-7 pb-12">
          {services.map((service, index) => (
            <div
              key={index}
              ref={addToRefs}
              className={`group bg-gradient-to-r from-[#212121] to-[#1c1a1a] p-4 sm:p-6 rounded-lg hover:scale-105 shadow-lg transition-all duration-1000 ease-out ${
                visibleSections[index + 2] ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-24 h-24 sm:w-25 sm:h-25 mb-4 rounded-2xl mx-auto transition-all duration-300 group-hover:brightness-125"
              />
              <h2 className="text-lg sm:text-2xl text-center font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-[#4973f2] group-hover:to-[#622cae] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {service.title}
              </h2>
              <p className="text-sm sm:text-gray-400 text-center mb-4">{service.description}</p>
              <ul className="list-disc list-inside text-gray-400 marker:text-[#5277e7] text-sm sm:text-base">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-gradient-to-r from-[#4973f2] to-[#652bb5] rounded-md px-4 py-2 text-sm sm:text-lg font-medium text-white shadow-md hover:scale-105 transition-transform duration-200">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div
          ref={addToRefs}
          className={`text-3xl sm:text-5xl pt-7 pb-5 font-bold flex justify-center items-center w-full transform transition-all duration-1000 ease-out ${
            visibleSections[5] ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
        >
          <p className="bg-gradient-to-r from-[#4973f2] to-[#622cae] bg-clip-text text-transparent">
            Featured Courses
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-20 pt-7 pb-12">
          {courses.map((course, index) => (
            <div
              key={index}
              ref={addToRefs}
              className={`group bg-gradient-to-r from-[#212121] to-[#1c1a1a] p-4 sm:p-6 rounded-lg hover:scale-105 shadow-lg transition-all duration-1000 ease-out ${
                visibleSections[index + 6] ? "scale-100 opacity-100" : "scale-75 opacity-0"
              }`}
            >
              <div className="flex justify-between text-sm sm:text-base">
                <p className="font-bold mb-4 text-red-400">{course.Adv}</p>
                <p>
                  <i className="fa-solid fa-star text-yellow-400"></i> {course.star}
                </p>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-[#4973f2] to-[#622cae] bg-clip-text text-transparent">
                {course.title}
              </h2>
              <p className="text-sm sm:text-gray-400 mb-4">{course.desc}</p>
              <div className="flex gap-2 flex-wrap mt-2 text-xs sm:text-sm">
                {course.language.map((lang, idx) => (
                  <p
                    key={idx}
                    className="bg-blue-500/30 text-white px-2 py-1 rounded-lg"
                  >
                    {lang}
                  </p>
                ))}
              </div>
              <div className="flex justify-between border-t border-gray-700 my-4 pt-4 text-sm sm:text-base">
                <p className="text-blue">
                  <span className="font-semibold text-gray-400">Duration:</span> {course.time}
                </p>
                <p className="text-gray-400 text-lg sm:text-2xl font-bold bg-gradient-to-r from-[#4973f2] to-[#622cae] bg-clip-text text-transparent">
                  {course.rate}
                </p>
              </div>
              <button className="mt-6 w-full bg-gradient-to-r from-[#4973f2] to-[#652bb5] rounded-md px-4 py-2 text-sm sm:text-lg font-medium text-white shadow-md hover:scale-105 transition-transform duration-200">
                Enroll Now
              </button>
            </div>
          ))}
        </div>

        <div
          ref={addToRefs}
          className={`text-3xl sm:text-6xl pt-7 font-bold flex justify-center items-center w-full transform transition-all duration-1000 ease-out ${
            visibleSections[8] ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <p className="bg-gradient-to-r from-[#4973f2] to-[#622cae] bg-clip-text text-transparent p-2 sm:p-4">
            <span className="text-white">Proven</span> Results
          </p>
        </div>

        <p className="text-lg sm:text-2xl text-center pb-6 text-gray-400">
          Numbers that speak to our commitment to excellence and client success.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-20 pt-7 pb-15">
          {results.map((result, index) => (
            <div
              key={index}
              ref={addToRefs}
              className={`group bg-gradient-to-r from-[#212121] to-[#1c1a1a] p-4 sm:p-6 rounded-lg hover:scale-105 shadow-lg transition-all duration-1000 ease-out ${
                visibleSections[index + 9] ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
            >
              <h2 className="text-2xl sm:text-3xl text-center font-bold mb-4 text-[#823ee3] group-hover:bg-gradient-to-r group-hover:from-[#4973f2] group-hover:to-[#622cae] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {result.num}
              </h2>
              <h2 className="text-lg sm:text-xl text-center font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-[#4973f2] group-hover:to-[#622cae] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {result.title}
              </h2>
              <p className="text-sm sm:text-gray-400 text-center marker:text-[#5277e7]">{result.desc}</p>
            </div>
          ))}
        </div>

        <div
          ref={addToRefs}
          className={`text-lg sm:text-xl text-center bg-gradient-to-r from-[#212121] to-[#1c1a1a] p-4 sm:p-6 rounded-lg shadow-lg mx-4 sm:mx-20 mb-15 transform transition-all duration-1000 ease-out ${
            visibleSections[13] ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0"
          }`}
        >
          <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#4973f2] to-[#622cae] bg-clip-text text-transparent mb-6">
            Why Choose Yumaris Agency?
          </p>

          <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-6 sm:gap-8">
            <div className="flex flex-col gap-4 max-w-full sm:max-w-xl text-left">
              <p className="text-[#4973f2]">🚀 Innovation First</p>
              <p className="text-gray-400 mb-2">
                We leverage cutting-edge technology and creative approaches to deliver exceptional results.
              </p>
              <p className="text-[#4973f2]">🎯 Professional Excellence</p>
              <p className="text-gray-400 mb-2">Industry-standard practices and premium quality in every project we undertake.</p>
            </div>

            <div className="flex flex-col gap-4 text-left">
              <p className="text-[#4973f2]">💼 Personalized Learning</p>
              <p className="text-gray-400 mb-2">Tailored education programs designed to match your learning style and career goals.</p>
              <p className="text-[#4973f2]">🤝 Ongoing Support</p>
              <p className="text-gray-400 mb-2">Continuous guidance and support throughout your learning and project journey.</p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
      </div>
    </>
  );
};

export default Home;
