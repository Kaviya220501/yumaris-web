import React, { useEffect, useRef, useState } from "react";
import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
import emailjs from "emailjs-com";

const Contact = () => {
  const sectionRefs = useRef([]);
  const [visibleSections, setVisibleSections] = useState([]);
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_amx4n7o", 
        "template_y2mzkkt", 
        form.current,
        "HlD6pB19w72ls5Flm" 
      )
      .then(
        (result) => {
          console.log(" Email sent:", result.text);
          setIsSuccess(true);
          setStatusMessage(" Message sent successfully! We'll reply soon.");
          form.current.reset();
          setTimeout(() => setStatusMessage(""), 4000);
        },
        (error) => {
          console.error(" Error:", error.text);
          setIsSuccess(false);
          setStatusMessage("Failed to send message. Please try again later.");
          setTimeout(() => setStatusMessage(""), 4000);
        }
      );
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

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) sectionRefs.current.push(el);
  };

  const contactdetails = [
    {
      icon: "fa-regular fa-envelope",
      title: "Email Us",
      desc: "Get in touch via Gmail",
      detail: "yumarisagency@gmail.com ",
    },
    {
      icon: "fa-solid fa-phone",
      title: "Speak Us",
      desc: "Speak with our team",
      detail: "9750129532  ",
    },
    {
      icon: "fa-brands fa-linkedin-in",
      title: "Contact Us",
      desc: "Get in touch via LinkedIn",
      detail:  "yumaris agency",
    },
    {
      icon: "fa-brands fa-instagram",
      title: "DM Us",
      desc: "Get in touch via Instagram",
      detail: "yumaris_agency",
    },
  ];

return (
  <div className="min-h-screen text-white" style={{ background: "#0B0E16" }}>
    <NavBar />

    <div className="overflow-hidden flex flex-col p-1 items-center justify-center gap-10 text-center">

     
      <h2
        ref={addToRefs}
        className={`font-bold text-5xl sm:text-6xl md:text-7xl px-6 pt-6 transform transition-all duration-1000 ease-out 
          ${visibleSections[0] ? "translate-x-0 opacity-100" : "-translate-x-40 opacity-0"}
        `}
      >
        Get In{" "}
        <span className="bg-gradient-to-r from-[#4973f2] via-[#5a49cf] to-[#7633d5] bg-clip-text text-transparent">
          Touch
        </span>
      </h2>

      
      <p
        ref={addToRefs}
        className={`text-lg md:text-2xl max-w-4xl transition-all duration-1000 ease-out
          ${visibleSections[1] ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
        `}
      >
        Ready to start your journey? Have a question about our services? We'd
        love to hear from you and help you achieve your goals.
      </p>

      
      <div
        ref={addToRefs}
        className={`py-10 flex flex-wrap justify-center gap-10 transition-all duration-1000 ease-out
          ${visibleSections[2] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
        `}
      >
        {contactdetails.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-[#18181B] px-8 py-6 rounded-2xl shadow-md border border-gray-700 
            transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_0_25px_rgba(120,70,255,0.4)]"
          >
            <i
              className={`${item.icon} text-2xl text-white p-3 rounded-full bg-gradient-to-r from-[#34166b] via-[#6e2694] to-[#7633d5] shadow-md`}
            ></i>
            <p className="text-lg font-semibold text-white">{item.title}</p>
            <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
            <p className="text-gray-300 text-sm mt-1">{item.detail}</p>
          </div>
        ))}
      </div>

      
      <div
        ref={addToRefs}
        className={`bg-[#17171a] cursor-pointer text-white mb-20 text-start px-3 py-10 md:px-16 md:py-14 
        rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.6)] max-w-2xl mx-auto mt-10 transition-all duration-1000 ease-out
          ${visibleSections[3] ? "scale-100 opacity-100" : "scale-75 opacity-0"}
        `}
      >
        <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
        <p className="text-gray-400 mb-8">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name</label>
              <input
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-[#1A1A1D] text-gray-200 rounded-lg px-4 py-3 outline-none border border-gray-700 
                focus:border-[#6E34D9] shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)] transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email Address</label>
              <input
                name="time"
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#1A1A1D] text-gray-200 rounded-lg px-4 py-3 outline-none border border-gray-700 
                focus:border-[#6E34D9] shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)] transition-all duration-300"
              />
            </div>
          </div>

          <label className="block text-sm font-semibold mb-2">Subject</label>
          <input
            name="title"
            type="text"
            placeholder="What can we help you with?"
            className="w-full bg-[#1A1A1D] text-gray-200 rounded-lg px-4 py-3 outline-none border border-gray-700 
            focus:border-[#6E34D9] shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)] transition-all duration-300"
          />

          <label className="block text-sm font-semibold mb-2">Message</label>
          <textarea
            name="message"
            placeholder="Tell us about your project or inquiry..."
            rows="5"
            className="w-full bg-[#1A1A1D] text-gray-200 rounded-lg px-4 py-3 outline-none border border-gray-700 
            focus:border-[#6E34D9] shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)] transition-all duration-300"
          ></textarea>

          {statusMessage && (
            <p
              className={`text-sm font-semibold text-center mt-2 transition-all duration-500 ${
                isSuccess ? "text-green-400" : "text-red-400"
              }`}
            >
              {statusMessage}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#4973f2] to-[#7633d5] cursor-pointer text-white font-semibold py-3 rounded-lg shadow-lg 
            hover:opacity-90 hover:shadow-[0_0_25px_rgba(120,70,255,0.5)] transition-all duration-300 flex justify-center items-center gap-2"
          >
            Send Message <i className="fa-solid fa-paper-plane text-sm"></i>
          </button>
        </form>
      </div>
    </div>

    <Footer />
  </div>
);

};
export default Contact;
