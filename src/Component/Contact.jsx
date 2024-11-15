import React from "react";
import ContactImage from "../assets/contact-bg.jpg";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import "aos/dist/aos.css";

const Contact = ({ focusOut }) => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={ContactImage}
        alt="Contact Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Color Overlay */}
      <div className="absolute inset-0 bg-red opacity-90"></div>
      {!focusOut && (
        <>
          {/* Social Media Icons */}
          <div className="absolute top-5 right-5 flex space-x-3 text-white text-sm sm:text-base md:text-lg">
            {[FaGithub, FaFacebook, FaTwitter, FaLinkedin].map(
              (Icon, index) => (
                <div key={index} className="relative group">
                  <Icon className="text-gray-200 hover:text-pink-500 transition duration-300" />
                  <span className="absolute inset-0 flex items-center justify-center rounded-full transform scale-0 group-hover:scale-100 group-hover:animate-ping transition-all duration-300 ease-out">
                    <span className="bg-pink-500 opacity-50 rounded-full w-8 h-8"></span>
                  </span>
                </div>
              )
            )}
          </div>

          {/* Footer Text */}
          <div className="absolute bottom-5 right-5 text-white text-sm sm:text-base lg:text-lg text-gray-200">
            © 2024 MegaOne
          </div>

          {/* Main Content */}
          <div
            className="relative flex items-center justify-center h-full w-full text-white"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="flex flex-col md:flex-row items-center space-y-0 lg:space-x-20">
              {/* Left Side: Contact Form */}
              <div className="flex-1 px-8 ">
                <h2 className="text-lg lg:text-2xl font-semibold text-left md:text-left py-6">
                  Questions? <br />
                  Let's Get In Touch
                </h2>
                <form className="lg:space-y-4 space-y-2 text-left lg:py-5">
                  <div>
                    <label htmlFor="name" className="block text-sm lg:text-lg">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="font-semibold bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 w-full lg:p-2 p-0 text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-no"
                      className="block text-sm lg:text-lg"
                    >
                      Contact No
                    </label>
                    <input
                      type="number"
                      id="contact-no"
                      required
                      className=" font-semibold bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 w-full lg:p-2 p-0 text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm lg:text-base"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="font-semibold bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 w-full lg:p-2 p-2 text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm lg:text-base"
                    >
                      Type Your Message Here
                    </label>
                    <textarea
                      id="message"
                      required
                      className="font-semibold bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 w-full lg:p-2  p-0 text-sm md:text-base"
                      rows="4"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-sm md:text-lg font-semibold text-white border-2 rounded-full lg:p-3 p-0  border-white hover:bg-blue-600 transition"
                  >
                    SUBMIT INFORMATION
                  </button>
                </form>
              </div>

              {/* Right Side: Company Information */}
              <div className="flex-1 lg:px-4 p-2 lg:mt-0 md:mt-0 mt-4 text-left lg:ml-0 ml-10">
                <div className="text-left">
                  <h1 className="text-base   lg:text-2xl font-semibold mb-1">
                    Office Location
                  </h1>
                  <p className="text-base lg:block md:block hidden lg:text-xl">
                    There are many variations of passages of Lorem Ipsum...
                  </p>
                </div>
                <div className="space-y-2 lg:mt-8 mt-4 text-sm  lg:text-lg">
                  <div className="flex items-center justify-start">
                    <FaMapMarkerAlt className="text-gray-600 mr-5 text-xl" />
                    <span className="text-gray-200 text-base">
                      Vandematram Road, Ahmedabad, Gujarat, India 382461
                    </span>
                  </div>
                  <div className="flex items-center justify-start">
                    <FaEnvelope className="text-gray-600 mr-5 text-xl" />
                    <span className="text-gray-200  lg:mb-0 mb-6 text-base text-left">
                      blisstech214@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Contact;
