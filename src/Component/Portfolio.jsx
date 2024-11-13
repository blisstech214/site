import React, { useEffect, useState } from "react";
import TeamImage from "../assets/blog-bg.jpg";
import PortfolioImg1 from "../assets/portfolio-img-2.jpg";
import PortfolioImg2 from "../assets/portfolio-img-4.jpg";
import PortfolioImg3 from "../assets/portfolio-img-2.jpg";
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Portfolio() {
  const [counts, setCounts] = useState([0, 0, 0]);
  const targetCounts = [456, 599, 780];

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) =>
          count < targetCounts[index] ? count + 1 : count
        )
      );
    }, 10);

    return () => clearInterval(interval);
  }, []);

  const SocialIcon = ({ IconComponent }) => (
    <div className="relative group">
      <IconComponent className="text-gray-200 hover:text-pink-500 transition-colors duration-300" />
      <span className="absolute inset-0 flex items-center justify-center rounded-full transform scale-0 group-hover:scale-100 group-hover:animate-ping transition-all duration-300 ease-out">
        <span className="bg-pink-500 opacity-50 rounded-full w-10 h-10"></span>
      </span>
    </div>
  );

  const ImageCarousel = () => {
    const staticImages = [PortfolioImg1, PortfolioImg2, PortfolioImg3];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % staticImages.length);
      }, 2000);

      return () => clearInterval(interval);
    }, [staticImages.length]);

    const handlePrev = () => {
      setCurrentIndex(
        (currentIndex - 1 + staticImages.length) % staticImages.length
      );
    };

    const handleNext = () => {
      setCurrentIndex((currentIndex + 1) % staticImages.length);
    };

    return (
      <div className="relative flex justify-center items-center h-full mt-10 px-2 sm:px-5">
        <button onClick={handlePrev} className="absolute left-5 text-white">
          <FaArrowLeft size={30} />
        </button>

        <div
          className="overflow-hidden w-full h-60 sm:h-80 md:h-96 rounded-lg relative border-4 border-white"
          style={{ width: "80%" }}
        >
          <img
            src={staticImages[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-fill transition-opacity duration-500 ease-in-out opacity-50 hover:opacity-100"
            style={{
              animation: `zoomEffect 2s ease-in-out infinite`,
              transform: `scale(1.1)`,
            }}
          />
        </div>

        <button onClick={handleNext} className="absolute right-5 text-white">
          <FaArrowRight size={30} />
        </button>

        <style>{`
          @keyframes zoomEffect {
            0%, 100% {
              transform: scale(1.1);
            }
            50% {
              transform: scale(1.2);
            }
          }
        `}</style>
      </div>
    );
  };

  return (
    <div className="relative h-screen w-full">
      <img
        src={TeamImage}
        alt="Team background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gray bg-opacity-80"></div>

      <div className="absolute top-5 right-5 flex space-x-3 text-lg text-white">
        <SocialIcon IconComponent={FaGithub} />
        <SocialIcon IconComponent={FaFacebook} />
        <SocialIcon IconComponent={FaTwitter} />
        <SocialIcon IconComponent={FaLinkedin} />
      </div>

      <div className="absolute bottom-5 text-white right-5 text-gray-200 text-sm sm:text-lg">
        © 2024 MegaOne
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 sm:px-10 md:px-14 space-y-10 h-full text-white">
        <div className="flex flex-col md:flex-row justify-between items-center w-full md:px-28">
          <div className="text-left max-w-lg mb-5 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-semibold">
              Portfolio <br /> Our Creative Work
            </h1>
          </div>

          <div className="flex flex-row justify-around mt-4 md:mt-0">
            {counts.map((count, index) => (
              <div
                key={index}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mx-2 sm:mx-4"
              >
                {count} <br />
                <span className="text-xs sm:text-sm">
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

        <ImageCarousel />
      </div>
    </div>
  );
}

export default Portfolio;
