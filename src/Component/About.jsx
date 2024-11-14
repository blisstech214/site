import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutImage from "../assets/blog-bg.jpg";
import { RiComputerLine } from "react-icons/ri";
import { FaPenFancy } from "react-icons/fa6";
import { LiaDigitalTachographSolid } from "react-icons/lia";
import { BiMessageAltDetail } from "react-icons/bi";
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function About({ focusOut }) {
  const socialMediaIcons = [
    { icon: <FaGithub />, key: "github" },
    { icon: <FaFacebook />, key: "facebook" },
    { icon: <FaTwitter />, key: "twitter" },
    { icon: <FaLinkedin />, key: "linkedin" },
  ];

  const services = [
    {
      icon: <RiComputerLine />,
      title: "Your Vision, Our Technology Driving Success in Digital Era",
      description:
        "We combine your unique vision with our advanced technology to propel your business forward. Together, we create solutions that lead to success in today's digital landscape.",
    },
    {
      icon: <FaPenFancy />,
      title: "Where Creative Ideas Take Shape Through Technology",
      description:
        "We transform innovative ideas into tangible solutions using the latest technology. Our team collaborates closely with you to bring your concepts to life.",
    },
    {
      icon: <LiaDigitalTachographSolid />,
      title: "Crafting Digital Solutions to Empower Your Vision",
      description:
        "Our focus is on developing custom digital solutions tailored to your specific goals. We empower you to achieve your vision and stand out in your industry.",
    },
    {
      icon: <BiMessageAltDetail />,
      title: "The Hub of Creative Minds and Cutting-Edge Tech",
      description:
        "Our team is a blend of creative thinkers and tech innovators, dedicated to pushing boundaries. We provide a collaborative environment where ideas flourish and technology thrives.",
    },
  ];

  return (
    <div className="relative h-screen w-full">
      <img
        src={AboutImage}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-pink bg-blend-overlay opacity-80"></div>
      {!focusOut && (
        <>
          <div className="absolute top-5 right-5 flex space-x-3 text-white text-lg">
            {socialMediaIcons.map(({ icon, key }) => (
              <div
                key={key}
                className="relative group flex items-center justify-center transform transition-transform duration-300 ease-out hover:scale-110"
              >
                {React.cloneElement(icon, {
                  className:
                    "text-gray-200 hover:text-pink-500 transition-colors duration-300",
                })}
              </div>
            ))}
          </div>

          <div className="absolute bottom-5 right-5 text-white text-xs sm:text-sm md:text-lg text-gray-200">
            © 2024 MegaOne
          </div>

          <div className="relative z-10 flex flex-col items-start text-left h-full px-4 sm:px-6 md:px-10 lg:px-24 p-5">
            <h1
              className="text-xs sm:text-md md:text-xl lg:text-2xl text-slate-200 font-semibold mb-2"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Discover the Feature
            </h1>
            <h1
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-semibold"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Empowering Digital Journeys Together
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 gap-0 mt-5 lg:mt-12">
              {services.map(({ icon, title, description }, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start lg:p-4 p-0 rounded-lg bg-opacity-80"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white mb-3 bg-transparent rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                    {React.cloneElement(icon, {
                      className: "text-xl sm:text-2xl md:text-3xl",
                    })}
                  </div>
                  <h2 className="text-xs sm:text-sm md:text-base text-white font-semibold mb-2">
                    {title}
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-white font-normal">
                    {description}
                  </p>
                </div>
              ))}
            </div>
            <div
              className="flex justify-between items-center gap-4 w-full p-3 sm:p-6 md:p-8 lg:p-10 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition text-white mt-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="max-w-[80%]">
                <h1 className="text-sm sm:text-md md:text-lg lg:text-2xl font-semibold">
                  Let's Get Started
                </h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Tenetur animi accusantium minima, officia.
                </p>
              </div>
              <button className="flex items-center justify-center px-4 sm:px-6 py-2 rounded-xl border-2 border-white hover:bg-white hover:text-pink transition">
                Learn More
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default About;
