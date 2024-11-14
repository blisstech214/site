import React, { useEffect } from "react";
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import HomeImage from "../assets/banner.jpg";
import sliderImg from "../assets/slider-img.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Home({ focusOut }) {
  // Static content variables
  const heading = "Bringing Limitless Ideas to Successful Solutions...";
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis debitis, et obcaecati, numquam suscipit deserunt excepturi error eligendi nemo.";
  const buttonText = "Learn More";
  const socialIcons = [
    { icon: FaGithub, name: "GitHub" },
    { icon: FaFacebook, name: "Facebook" },
    { icon: FaTwitter, name: "Twitter" },
    { icon: FaLinkedin, name: "LinkedIn" },
  ];

  return (
    <div className="relative overflow-hidden h-screen w-full">
      {/* Background Image */}
      <img
        src={HomeImage}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-Green h-screen bg-blend-overlay opacity-80"></div>
      {!focusOut && (
        <>
          {/* Color Overlay */}

          {/* Social Media Icons */}
          <div className="absolute top-5 right-5 text-lg flex space-x-3 text-white">
            {socialIcons.map(({ icon: Icon, name }, index) => (
              <div key={index} className="relative group" aria-label={name}>
                <Icon className="text-gray-200 hover:text-pink-500 transition-colors duration-300" />
                <span className="absolute inset-0 flex items-center justify-center rounded-full transform scale-0 group-hover:scale-100 group-hover:animate-ping transition-all duration-300 ease-out">
                  <span className="bg-pink-500 opacity-50 rounded-full w-10 h-10"></span>
                </span>
              </div>
            ))}
          </div>

          {/* Footer Text */}
          <div className="absolute bottom-5 right-5 lg:text-lg text-base text-white">
            © 2024 MegaOne
          </div>

          <div
            className="relative grid grid-cols-1 md:grid-cols-2 h-full items-center justify-start p-6 md:p-20"
            data-aos="fade-up" // Added fade-left
            data-aos-duration="1000"
          >
            {/* Left Column - Text Content */}
            <div
              className="text-white text-left space-y-6 py-16 md:py-32"
              data-aos="fade-right" // Added fade-left
              data-aos-duration="1000"
            >
              <h1 className="text-xl sm:text-3xl md:text-2xl lg:text-6xl text-left font-semibold leading-tight">
                {heading}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-left leading-relaxed">
                {description}
              </p>
              <button className="border-2 px-6 sm:px-8 md:px-10 text-left lg:px-12 py-2 md:py-3 text-base sm:text-lg font-semibold rounded-full text-white hover:bg-white hover:text-black transition-colors">
                {buttonText}
              </button>
            </div>

            {/* Right Column - SVG and Clipped Image */}
            <div
              className="flex items-center justify-center h-full"
              data-aos="fade-left" // Added fade-right
              data-aos-delay="500"
            >
              <div className="relative w-3/4 max-w-xs md:max-w-md lg:max-w-lg">
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 700 700"
                >
                  <g>
                    <path
                      fill="#ffffff"
                      d="M355.43 45.1C398 31.19 442.59 29 484 39.88c55.11 14.5 117.25 54.91 134.57 160.78 0 0 18.6 99.41-12.78 232 0 0-38.65 142.61-90.66 192 0 0-59 61.95-148.78 59.18 0 0-42.15 0-102.34-27.17 0 0-184-88.78-240.17-199S11 211.81 150.69 135.43C241.1 86 314.73 58.41 355.43 45.1z"
                      opacity=".25"
                    />
                    <path
                      fill="#ffffff"
                      d="M105.78 387.15c-15.76-38.08-21-79.83-14.15-120.46C100.79 212.61 133 148.14 228 116.38c0 0 89-32 211.88-21.76 0 0 132.5 15.66 181.18 57.51 0 0 60.65 46.59 64.69 131.66 0 0 3.11 39.73-17.22 100.45 0 0-67.27 186.43-163.35 255.44S282.55 687.58 202.89 567c-51.57-78-82.04-143.42-97.11-179.85z"
                      opacity=".25"
                    />
                    <path
                      fill="#ffffff"
                      d="M112.59 129.56c18.72-39.73 47.85-73.83 84.82-97.56 49.2-31.55 123.12-52.4 216.29-.29 0 0 89.1 47.22 169.11 151.43 0 0 82.67 115.68 84.6 184.07 0 0 6.77 81.22-57.4 145.42 0 0-29.09 30.94-91.54 58.46 0 0-195.21 80.68-318.52 54.43S2.54 484.38 40.43 335.12C65 238.51 94.68 167.58 112.59 129.56z"
                      opacity=".25"
                    />
                    <clipPath id="shape-img">
                      <path d="M129.39 153.77C146.74 117 173.73 85.35 208 63.38c45.59-29.25 114.09-48.57 200.42-.28 0 0 82.56 43.75 156.7 140.31 0 0 76.61 107.2 78.4 170.57 0 0 6.27 75.26-53.19 134.75 0 0-27 28.67-84.82 54.17 0 0-180.89 74.76-295.15 50.43S27.41 482.55 62.52 344.24c22.74-89.52 50.27-155.24 66.87-190.47z" />
                    </clipPath>
                    <image
                      href={sliderImg}
                      clipPath="url(#shape-img)"
                      height="100%"
                      width="100%"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
