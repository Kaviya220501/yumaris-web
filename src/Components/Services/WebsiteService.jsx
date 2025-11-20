import React, { useEffect, useRef, useState } from "react";
import NavBar from "../../Layout/NavBar";
import Footer from "../../Layout/Footer";

const WebsiteService = () => {
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
      content: "Custom Design",
      desc: "Unique brand-focused designs that capture your business essence and engage your target audience effectively.",
    },
    {
      content: "Mobile Responsive",
      desc: "Fully responsive designs that provide seamless experiences across all devices, from smartphones to large desktop screens.",
    },
    {
      content: "SEO Optimized",
      desc: "Built with best SEO practices to help your website rank higher in search results and attract organic traffic.",
    },
    {
      content: "Fast Loading",
      desc: "Performance-optimized websites with lightning-fast load times for enhanced user experience and better conversions.",
    },
    {
      content: "Secure & Safe",
      desc: "Industry-standard security protocols including SSL certificates, data encryption, and regular security updates.",
    },
    {
      content: "Scalable Solutions",
      desc: "Architecture designed to grow with your business, easily accommodating increased traffic and new features.",
    },
  ];

  const Services = [
    {
      title: "Corporate Websites",
      description: "Professional websites that establish your brand presence and credibility in the digital space.",
      features: ["Custom Design", "CMS Integration", "Multi-page Architecture", "Professional Branding"],
    },
    {
      title: "E-Commerce Solutions",
      description: "Powerful online stores with secure payment gateways, inventory management, and customer analytics.",
      features: ["Shopping Cart", "Payment Integration", "Product Management", "Order Tracking"],
    },
    {
      title: "Landing Pages",
      description: "High-converting landing pages optimized for specific campaigns and lead generation.",
      features: ["Conversion Focused", "A/B Testing Ready", "Fast Loading", "Lead Capture Forms"],
    },
    {
      title: "Web Applications",
      description: "Custom web applications tailored to your specific business processes and requirements.",
      features: ["Custom Features", "API Integration", "Database Management", "User Authentication"],
    },
    {
      title: "Portfolio Websites",
      description: "Showcase your work and achievements with stunning portfolio websites that leave lasting impressions.",
      features: ["Gallery Systems", "Project Showcases", "Client Testimonials", "Contact Integration"],
    },
    {
      title: "Blog & Content Platforms",
      description: "Content management systems that make it easy to publish, manage, and distribute your content.",
      features: ["Easy Publishing", "SEO Tools", "Social Sharing", "Analytics Dashboard"],
    },
  ];

  const Process = [
    {
      num: "01",
      topic: "Discovery & Planning",
      desc: "We start by understanding your business goals, target audience, and project requirements to create a comprehensive strategy.",
    },
    {
      num: "02",
      topic: "Design & Prototyping",
      desc: "Our designers create mockups and prototypes that bring your vision to life, ensuring every detail aligns with your brand.",
    },
    {
      num: "03",
      topic: "Development & Testing",
      desc: "Our developers build your website using the latest technologies, followed by rigorous testing across all devices and browsers.",
    },
    {
      num: "04",
      topic: "Launch & Support",
      desc: "We deploy your website to production and provide ongoing support, maintenance, and optimization services.",
    },
  ];

  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#1f112e] via-[#2a1740] to-[#3e1239] text-white">
        <NavBar />

        <div
          ref={addToRefs}
          className={`min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#1c0f29] via-[#2a1740] to-[#3e1239] transform transition-all duration-1000 ease-out ${
            visibleSections[0] ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <p className="font-bold text-5xl sm:text-7xl text-center">
            Website <span className="text-blue-500">Development</span>
          </p>
          <p className="pt-5 sm:pt-10 text-base sm:text-lg text-gray-400 text-center px-4 sm:px-0">
            Transform your digital presence with modern, high-performance websites that
          </p>
          <p className="text-base sm:text-lg text-gray-400 text-center px-4 sm:px-0">
            drive business growth and deliver exceptional user experiences.
          </p>
          <button className="mt-6 sm:mt-8 bg-gradient-to-r from-[#4973f2] to-[#652bb5] rounded-md px-4 sm:px-6 py-2 text-sm sm:text-xl font-medium text-white shadow-md hover:scale-105 transition-transform duration-200">
            Start Your Project
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
              Why Choose Our <span className="text-blue-500">Web Development</span> Services
            </p>
            <p className="pt-3 sm:pt-5 text-base sm:text-lg text-gray-400 text-center px-2 sm:px-0">
              We combine cutting-edge technology with creative design to build websites that not only look
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center px-2 sm:px-0">stunning but also deliver measurable results.</p>
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
              Our <span className="text-blue-500">Development</span> Services
            </p>
            <p className="pt-3 sm:pt-5 text-base sm:text-lg text-gray-400 text-center px-2 sm:px-0">
              From simple landing pages to complex web applications, we deliver solutions tailored to
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center px-2 sm:px-0">your specific needs.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-10 pb-10 sm:pb-12 px-2 sm:px-10">
            {Services.map((items, index) => (
              <div
                key={index}
                ref={addToRefs}
                className={`group bg-gradient-to-r from-[#212121] to-[#1c1a1a] p-3 sm:p-6 rounded-lg shadow-lg hover:shadow-[0_0_20px_4px_rgba(59,130,246,0.6)] transform transition-all duration-1000 ease-out ${
                  visibleSections[index + 9] ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
              >
                <p className="text-lg sm:text-xl font-bold pb-2">{items.title}</p>
                <p className="text-sm sm:text-3px pb-2 text-gray-400 pt-1">{items.description}</p>
                <ul className="list-disc list-inside text-white marker:text-[#5277e7] text-xs sm:text-sm">
                  {items.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#080b25] pt-8 sm:pt-10 px-2 sm:px-0">
          <div
            ref={addToRefs}
            className={`flex flex-col justify-center items-center transform transition-all duration-1000 ease-out ${
              visibleSections[15] ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <p className="font-bold text-3xl sm:text-4xl text-center">
              Our Development<span className="text-blue-500"> Process</span>
            </p>
            <p className="pt-3 sm:pt-5 text-base sm:text-lg text-gray-400 text-center px-2 sm:px-0">
              A proven methodology that ensures quality, efficiency, and successful project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-10 pb-10 sm:pb-12 px-2 sm:px-10">
            {Process.map((process, index) => (
              <div
                key={index}
                ref={addToRefs}
                className={`relative group bg-gradient-to-r from-[#212121] to-[#1c1a1a] p-3 sm:p-4 rounded-lg shadow-lg hover:shadow-[0_0_20px_4px_rgba(59,130,246,0.6)] transform transition-all duration-1000 ease-out ${
                  visibleSections[index + 16] ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
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

        <Footer />
      </div>
    </>
  );
};

export default WebsiteService;
