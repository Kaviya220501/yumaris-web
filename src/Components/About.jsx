import React, { useEffect, useRef, useState } from "react";
import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";

const About = () => {
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

  const achievements = [
    { number: "15+", label: "Students Trained" },
    { number: "10+", label: "Video Edited" },
    { number: "2", label: "Countries Delivered" },
    { number: "2", label: "Educational Workshops" },
  ];
  const teamMembers = [
    {
      name: "Salman Khan S",
      role: "Founder & CEO",
      highlight: "AI Enthusiast | Future AI Developer",
      desc: "Leads technology, strategy, and innovation at Yumaris Agency.",
      img: "",
    },
    {
      name: "Kanishka M",
      role: "Co-Founder",
      highlight: "Communication & Business Development Expert",
      desc: "Handles partnerships, client relations, and growth strategies.",
      img: "",
    },
    {
      name: "Mohamed Yusuf I",
      role: "Co-Founder",
      highlight: "ChatGPT & Prompt Engineering Expert",
      desc: "Focused on automation, AI integration, and technical solutions.",
      img: "",
    },
  ];
  const values = [
    {
      icon: "fa-solid fa-bullseye",
      name: "Excellence",
      desc: "We strive for excellence in everything we do, delivering quality that exceeds expectations.",
    },
    {
      icon: "fa-regular fa-heart",
      name: "Passion",
      desc: "Our passion for technology and education drives us to create meaningful learning experiences.",
    },
    {
      icon: "fa-solid fa-user-group",
      name: "Community",
      desc: "We believe in building strong communities and fostering collaboration among learners.",
    },
    {
      icon: "fa-solid fa-award",
      name: "Innovation",
      desc: "We embrace innovation and stay ahead of technology trends to provide cutting-edge solutions.",
    },
  ];
  const partners = [
    {
      name: "Google",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
    },
    {
      name: "Microsoft",
      img: "https://e7.pngegg.com/pngimages/817/886/png-clipart-microsoft-logo-icon-microsoft-icon-angle-text.png",
    },
    {
      name: "Amazon",
      img: "https://toppng.com/uploads/preview/amazon-logo-png-amazon-logo-transparent-11563090659nn2isevb5y.png",
    },
    {
      name: "Netflix",
      img: "https://toppng.com/uploads/preview/netflix-logo-png-11593869496jqso5gxgsy.png",
    },
  ];
  return (

    <div
      className="min-h-screen text-white"
      style={{ background: "#0B0E16" }}
    >
      <NavBar />
      <div className="overflow-hidden flex flex-col p-1 items-center justify-center gap-10 text-center">
        <h2
          ref={addToRefs}
          className={`font-black text-7xl px-6 py-6 sm:text-xl md:text-5xl lg:text-7xl transform transition-all duration-1200 ease-out
    ${
      visibleSections[0]
        ? "translate-x-0 opacity-100"
        : "-translate-x-40 opacity-0"
    } `}
        >
          About the
          <span className="bg-gradient-to-r from-[#4973f2] via-[#5a49cf] to-[#7633d5] bg-clip-text text-transparent">
            {" "}
            Yumaris Agency
          </span>
        </h2>

        <p
          ref={addToRefs}
          className={`text-xl md:text-2xl max-w-4xl transform transition-all duration-1200 ease-out ${
            visibleSections[1]
              ? "translate-x-0 opacity-1000"
              : "translate-x-20 opacity-0"
          }`}
        >
          Yumaris Agency is a multi-service creative and technology-driven
          company focused on Education, Web Design & Development, Video Editing,
          Branding, and Marketing. We combine innovation, skills, and AI-powered
          solutions to empower students, businesses, and creators.
        </p>

        {/* mission, vision */}
        <div className=" flex flex-col md:flex-row gap-12 max-w-5xl">
          <div
            ref={addToRefs}
            className={`flex flex-col items-center text-center gap-4 bg-gray-900 p-6 rounded-lg shadow-lg transform transition-all duration-1000 ease-out ${
              visibleSections[2]
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <i className="fa-solid fa-bullseye bg-gradient-to-br from-[#3a2472] to-[#2d3386]  text-blue-500 text-4xl p-4 rounded-full transition-all duration-300 cursor-pointer "></i>
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-gray-300">
              At Yumaris Agency, our mission is to empower students, businesses,
              and creators by delivering innovative and affordable solutions in
              education, web design, and multimedia. We strive to make learning
              accessible through certified skill courses, help brands grow with
              modern digital platforms, and enable creators to share their
              stories with impactful video editing and media solutions.
            </p>
          </div>

          <div
            ref={addToRefs}
            className={`flex flex-col items-center text-center gap-4 bg-gray-900 p-6 rounded-lg shadow-lg transform transition-all duration-1000 ease-out ${
              visibleSections[3]
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <i className="fa-solid fa-eye p-4  bg-gradient-to-br from-[#932eb1] to-[#212685] text-purple-500 text-4xl rounded-full transition-all duration-300 cursor-pointer"></i>
            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="text-gray-300">
              Our vision is to become a global hub for innovation, learning, and
              creativity, where technology meets human potential. We aim to
              transform the way people learn, create, and grow by building a
              future where education is accessible, businesses are digitally
              empowered, and ideas turn into reality through creative solutions.
            </p>
          </div>
        </div>

        {/* archivement */}
        <div className=" text-center w-full  bg-[#09090B] border-b-[3.5px] border-transparent border-t-[3.5px] [border-image:linear-gradient(to_right,transparent,#681cb0,#206fbd,transparent)_1]">
          <h2
            ref={addToRefs}
            className={`p-10  text-5xl font-bold bg-gradient-to-r from-[#4973f2] via-[#5a49cf] to-[#7633d5] bg-clip-text text-transparent transform transition-all duration-1200 ease-out ${
              visibleSections[4]
                ? "translate-x-0 opacity-100"
                : "-translate-x-40 opacity-0"
            } `}
          >
            Achievements & Milestones
          </h2>
          <p
            ref={addToRefs}
            className={`text-l font-medium transform transition-all duration-1500 ease-in-out ${
              visibleSections[5]
                ? "translate-x-0 opacity-1000"
                : "translate-x-30"
            }`}
          >
            Our journey has been marked by continuous growth and recognition.
          </p>

          <div
            ref={addToRefs}
            className={`p-20 flex flex-row flex-wrap gap-10 items-center justify-center transform transition-all duration-1200 ease-out
            ${
              visibleSections[6]
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            {achievements.map((item, index) => (
              <div
                key={index}
                className="w-64 h-32 flex flex-col items-center justify-center border border-gray-400 rounded-2xl shadow-md bg-white/10 cursor-pointer hover:scale-110 transition-transform text-center"
              >
                <p className="text-4xl text-blue-500 font-bold">
                  {item.number}
                </p>
                <p className="text-xl font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <p
          ref={addToRefs}
          className={`text-6xl text-center font-bold bg-gradient-to-r from-[#4973f2] via-[#5a49cf] to-[#7633d5] bg-clip-text text-transparent transform transition-all duration-1200 ease-in-out ${
            visibleSections[7]
              ? "translate-x-0 opacity-1000"
              : "translate-x-30 opacity-0"
          }`}
        >
          Meet The Team
        </p>
        <p
          ref={addToRefs}
          className={`text-gray-300 text-lg transform transition-all duration-1500 ease-out ${
            visibleSections[8]
              ? "translate-x-0 opacity-100"
              : "-translate-x-30 opacity-0"
          }`}
        >
          Passionate professionals dedicated to your success and growth.
        </p>

        {/* team members */}
        <div className="flex flex-row gap-10 items-center justify-evenly flex-wrap pb-10">
          {teamMembers.map((member, index) => (
            <div
              ref={addToRefs}
              key={index}
              className={`flex flex-col items-center gap-3 p-6 border border-gray-400 rounded-2xl bg-white/10 w-72 min-h-[380px] text-center cursor-pointer hover:scale-105 transform transition-all duration-1000 ease-out ${
                visibleSections[9]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-25 opacity-0"
              }`}
            >
              <img
                src={member.img || null}
                className="w-32 h-32 border-4 border-blue-500 rounded-full object-cover"
              />
              <p
                className={`text-xl font-bold transform transition-all duration-1000 ease-linear ${
                  visibleSections[9]
                    ? "translate-x-0 opacity-1000"
                    : "translate-x-10 opacity-0"
                }`}
              >
                {member.name}
              </p>
              <p
                className={`text-blue-400 font-medium transform transition-all duration-1000 ease-linear ${
                  visibleSections[9]
                    ? "translate-x-0 opacity-1000"
                    : "-translate-x-10 opacity-0"
                } `}
              >
                {member.role}
              </p>
              <p
                className={`font-light transform transition-all duration-1000 ease-linear ${
                  visibleSections[9]
                    ? "translate-x-0 opacity-1000"
                    : "translate-x-10 opacity-0"
                }`}
              >
                {member.highlight}
              </p>
              <p
                className={`text-sm text-gray-300 transform transition-all duration-1000 ease-linear ${
                  visibleSections[9]
                    ? "translate-x-0 opacity-1000"
                    : "-translate-x-10 opacity-0"
                }`}
              >
                {member.desc}
              </p>
            </div>
          ))}
        </div>

        {/* our values*/}
        <div className="text-center px-6 py-22 w-full bg-[#09090B] border-t-[3.5px] border-b-[3.5px] border-transparent border-t-[3.5px] [border-image:linear-gradient(to_right,transparent,#681cb0,#206fbd,transparent)_1]">
          <p
            ref={addToRefs}
            className={`text-5xl font-bold text-white text-transparent transform transition-all duration-1200 ease-in-out ${
              visibleSections[10]
                ? "translate-x-0 opacity-100"
                : "translate-x-30 opacity-0"
            }`}
          >
            Our{" "}
            <span className=" bg-gradient-to-r from-[#4973f2] via-[#5a49cf] to-[#7633d5] bg-clip-text text-transparent">
              Values
            </span>
          </p>
          <p
            ref={addToRefs}
            className={`text-gray-300 transform transition-all duration-1200 ease-in-out ${
              visibleSections[11]
                ? "translate-x-0 opacity-100"
                : "-translate-x-30 opacity-0"
            }`}
          >
            The principles that guide everything we do and shape our company
            culture.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-8">
            {values.map((item, index) => (
              <div
                ref={addToRefs}
                key={index}
                className={`flex flex-col items-center text-center p-6 w-64 border border-gray-600 rounded-2xl bg-white/5 hover:scale-105 cursor-pointer transform transition-all duration-1000 ease-in-out ${
                  visibleSections[12]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-25 opacity-0"
                } `}
              >
                <i
                  className={`${
                    item.icon
                  } text-blue-400 text-3xl transform transition-all duration-1000 ease-out ${
                    visibleSections[12]
                      ? "translate-y-0 opacity-100"
                      : "translate-x-15 opacity-0"
                  }`}
                ></i>
                <p
                  className={`text-lg font-semibold text-white transform transition-all duration-1000 ease-out ${
                    visibleSections[12]
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-15 opacity-0"
                  }`}
                >
                  {item.name}
                </p>
                <p
                  className={`text-sm text-gray-400 mt-2 transform transition-all duration-1000 ease-out ${
                    visibleSections[12]
                      ? "translate-x-0 opacity-100"
                      : "translate-x-15 opacity-0"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/*partners*/}
        <div className="w-full py-10">
          <h2
            ref={addToRefs}
            className={`text-5xl pb-10 bg-gradient-to-r from-[#4973f2] via-[#5a49cf] to-[#7633d5] bg-clip-text text-transparent font-bold text-center transform transition-all duration-1500 ease-in-out ${
              visibleSections[13]
                ? "-translate-x-0 opacity-100"
                : "translate-x-40 opacity-0"
            }`}
          >
            Our Partners
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-8 ">
            {partners.map((partner, index) => (
              <div
                ref={addToRefs}
                key={index}
                className={`w-32 flex flex-col items-center bg-white/10 p-4 rounded-xl cursor-pointer shadow-md hover:scale-110 transform transition-all duration-2000 ease-in-out ${
                  visibleSections[14]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-40 opacity-0"
                }`}
              >
                <img
                  src={partner.img}
                  alt={partner.name}
                  className="w-20 h-20 object-contain pb-2"
                />
                <p className="text-white text-sm sm:text-base">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About