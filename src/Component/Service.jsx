import React, { useEffect, useState } from "react";
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import BlogImage from "../assets/blog-bg.jpg";

const Company = "The Hub of Creative Minds and Cutting-Edge Tech";
const Description =
  "From concept to execution, we are with you every step of the way";

const listData = [
  { label: "Web Development", percentage: 90 },
  { label: "Ecommerce Development", percentage: 95 },
  { label: "Mobile App Development", percentage: 80 },
  { label: "Digital Marketing Services", percentage: 90 },
  { label: "Graphics Design & UI/UX", percentage: 85 },
];

function Service() {
  const [animatedPercentages, setAnimatedPercentages] = useState(
    listData.map(() => 0)
  );

  useEffect(() => {
    const intervals = listData.map((item, index) => {
      return setInterval(() => {
        setAnimatedPercentages((prev) => {
          const newPercentages = [...prev];
          if (newPercentages[index] < item.percentage) {
            newPercentages[index] += 1;
          }
          return newPercentages;
        });
      }, 40); // Adjust speed here (increase value to slow down)
    });

    // Clear all intervals on component unmount
    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <div className="relative h-full">
      {/* Background Image */}
      <img
        src={BlogImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Color Overlay */}
      <div className="absolute inset-0 bg-blue bg-blend-overlay opacity-85"></div>

      {/* Social Media Icons */}
      <div className="absolute top-5 text-white text-lg right-5 flex space-x-3">
        {[FaGithub, FaFacebook, FaTwitter, FaLinkedin].map((Icon, index) => (
          <div key={index} className="relative group">
            <Icon className="text-gray-200 hover:text-pink-500 transition-colors duration-300" />
            <span className="absolute inset-0 flex items-center justify-center rounded-full transform scale-0 group-hover:scale-100 group-hover:animate-ping transition-all duration-300 ease-out">
              <span className="bg-pink-500 opacity-50 rounded-full w-10 h-10"></span>
            </span>
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <div className="absolute bottom-5 text-white text-base  lg:text-lg right-5">
        © 2024 MegaOne
      </div>

      {/* Service Description */}
      <div className="p-4 md:p-8 relative z-10">
        <div className="lg:px-32">
          <div className="flex items-center py-10">
            <div className="text-white">
              <h1 className="text-xl md:text-2xl lg:text-3xl text-left font-semibold py-5">
                {Company}
              </h1>
              <p className="text-sm md:text-base text-left px-2 text-gray-300">
                {Description}
              </p>
            </div>
          </div>

          {/* Services List with Progress Bars */}
          <div className="relative mt-8 md:mt-10 ">
            <ul className="relative z-10 space-y-4 p-4 text-white bg-opacity-70 rounded-lg">
              {listData.map((item, index) => (
                <li key={index} className="flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm md:text-lg text-gray-700">
                      {item.label}
                    </span>
                    <span className="text-sm md:text-base text-blue-500">
                      {animatedPercentages[index]}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-zinc-600 rounded-full">
                    <div
                      className="h-full bg-white rounded-full transition-all duration-300"
                      style={{
                        width: `${animatedPercentages[index]}%`,
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
