import React, { useEffect, useState } from "react";
import TeamImage from "../assets/blog-bg.jpg";
import TeamMember1 from "../assets/man.png";
import TeamMember2 from "../assets/people.png";
import TeamMember3 from "../assets/man.png";
import TeamMember4 from "../assets/people.png";
import TeamMember5 from "../assets/man.png";
import TeamMember6 from "../assets/people.png";
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Team() {
  const [counts, setCounts] = useState([0, 0, 0]);
  const targetCounts = [456, 599, 780];
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const cardData = [
    {
      name: "Team Member 1",
      image: TeamMember1,
      socialIcons: [FaGithub, FaFacebook, FaTwitter, FaLinkedin],
    },
    {
      name: "Team Member 2",
      image: TeamMember2,
      socialIcons: [FaGithub, FaFacebook, FaTwitter, FaLinkedin],
    },
    {
      name: "Team Member 3",
      image: TeamMember3,
      socialIcons: [FaGithub, FaFacebook, FaTwitter, FaLinkedin],
    },
    {
      name: "Team Member 4",
      image: TeamMember4,
      socialIcons: [FaGithub, FaFacebook, FaTwitter, FaLinkedin],
    },
    {
      name: "Team Member 5",
      image: TeamMember5,
      socialIcons: [FaGithub, FaFacebook, FaTwitter, FaLinkedin],
    },
    {
      name: "Team Member 6",
      image: TeamMember6,
      socialIcons: [FaGithub, FaFacebook, FaTwitter, FaLinkedin],
    },
  ];

  useEffect(() => {
    // Check if the screen width is within the mobile range (275px to 680px)
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 680);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const intervals = targetCounts.map((target, index) => {
      const interval = setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < target) newCounts[index] += 1;
          return newCounts;
        });
      }, 10);
      return interval;
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  useEffect(() => {
    AOS.init({ once: false, duration: 1000 });

    // Only start auto carousel on larger screens (above 680px)
    if (!isMobile) {
      const interval = setInterval(() => {
        setCarouselIndex((prevIndex) => (prevIndex + 1) % cardData.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [cardData.length, isMobile]);

  const getVisibleIndices = () => {
    const indices = [];
    for (let i = -1; i <= 1; i++) {
      indices.push((carouselIndex + i + cardData.length) % cardData.length);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <div className="relative h-screen w-full">
      <img
        src={TeamImage}
        alt="Team background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-yellow-500 bg-blend-overlay opacity-80"></div>
      <div className="absolute top-5 right-5 flex space-x-3 text-white text-sm md:text-lg">
        <FaGithub className="text-gray-200 hover:text-pink-500 transition-colors duration-300" />
        <FaFacebook className="text-gray-200 hover:text-pink-500 transition-colors duration-300" />
        <FaTwitter className="text-gray-200 hover:text-pink-500 transition-colors duration-300" />
        <FaLinkedin className="text-gray-200 hover:text-pink-500 transition-colors duration-300" />
      </div>
      <div className="absolute bottom-5 right-5 text-white text-xs md:text-lg">
        © 2024 MegaOne
      </div>
      <div className="relative z-10 items-center justify-between p-8 md:p-16 space-y-6 h-full text-white">
        <div className="flex flex-col md:flex-row justify-between items-center w-full md:px-28">
          <div className="text-left max-w-lg mb-5 md:mb-0">
            <h1 className="text-lg md:text-4xl font-semibold">
              Let’s Meet Our Creative Team Working 24/7
            </h1>
          </div>

          <div className="flex flex-row justify-around space-x-8 mt-4 md:mt-0">
            {counts.map((count, index) => (
              <div key={index} className="text-xl md:text-4xl font-bold ">
                {count} <br />
                <span className="text-xs space-x-3">
                  {index === 0
                    ? "Happy Clients"
                    : index === 1
                    ? "Finished Projects"
                    : "Hours Worked"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hide card section on mobile (275px to 680px) */}
        <div
          className={`flex flex-col md:flex-row md:py-10  py-0 justify-center space-y-6 md:space-y-0 md:space-x-8 mt-4 md:mt-8 ${
            isMobile ? "hidden" : "hidden"
          }`}
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {visibleIndices.map((index) => {
            const isCenter = index === visibleIndices[1];
            const cardSize = isCenter ? "scale-105" : "scale-90";
            return (
              <div
                key={index}
                className={`relative ${cardSize} transform transition-all duration-300 max-w-xs bg-white p-4 border border-gray-200 shadow-lg mx-auto md:mx-0`}
              >
                <img
                  className="w-full h-20 md:h-36 lg:h-48 object-cover p-2 opacity-90"
                  src={cardData[index].image}
                  alt={cardData[index].name}
                />
                <div className="p-5 space-y-2">
                  <h5 className="text-lg md:text-xl lg:text-2xl font-bold text-center text-black">
                    {cardData[index].name}
                  </h5>
                  <div className="flex justify-around mt-2">
                    {cardData[index].socialIcons.map((Icon, idx) => (
                      <Icon
                        key={idx}
                        className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Team;
