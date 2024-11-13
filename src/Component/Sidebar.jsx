import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Bliss-icon.png"; // Adjust the logo import based on your actual logo file path
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { TiMinus } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";

// Custom Hamburger Component
function CustomHamburger({ toggle }) {
  return (
    <div className="cursor-pointer" onClick={toggle}>
      <AiOutlineMenu className="text-black lg:text-2xl text-lg" />
    </div>
  );
}

// Sidebar Component
function Sidebar({ currentPath, menuItems }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Navbar visibility state for mobile
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.refresh(); // Refresh AOS when component re-renders
  }, [currentPath, currentPageIndex]);

  const handleMenuClick = (item, pageIndex) => {
    navigate(item.path);
    setCurrentPageIndex(pageIndex);
    setIsSidebarOpen(false); // Close sidebar after menu click for both mobile and desktop
    setIsNavbarVisible(true); // Show navbar for mobile

    AOS.refresh();
  };

  // Toggle Sidebar and Navbar Visibility
  const toggleSidebar = () => {
    if (window.innerWidth < 1024) {
      setIsSidebarOpen((prev) => !prev);
      setIsNavbarVisible((prev) => !prev); // mobile
    } else {
      setIsSidebarOpen((prev) => !prev); // desktop
    }
  };

  return (
    <div className="relative flex">
      {/* Sidebar for Mobile and Desktop */}
      <section
        className={`fixed left-0 top-0 h-full w-64 bg-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-10 p-5 flex flex-col pt-10 shadow-lg md:w-80 lg:w-64`} // Adjust width for desktop
      >
        {/* Logo (hidden on mobile) */}
        <div className="flex justify-between items-center mb-8">
          {/* Mobile: Hide logo */}
          <div className="lg:block md:block hidden">
            <img src={logo} alt="Logo" className="w-16 h-16" />
          </div>
          {/* Close icon */}
          <AiOutlineClose
            className="text-black text-2xl cursor-pointer"
            onClick={toggleSidebar} // Close sidebar when clicked
          />
        </div>

        {/* Menu items */}
        <ul className="text-left py-5 space-y-5 text-gray-700">
          {menuItems.map((item, index) => (
            <li key={item.name} data-aos="fade-up" data-aos-duration="800">
              <Link
                to={item.path}
                className={`cursor-pointer transition-colors duration-300 ${
                  currentPath === item.path
                    ? "text-pink-500 font-semibold"
                    : "hover:text-pink-500"
                }`}
                onClick={() => handleMenuClick(item, index)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social media icons */}
        <div className="flex space-x-5 mt-auto mb-10">
          <FaGithub className="text-gray-600 hover:text-pink-500 transition-colors duration-300" />
          <FaFacebook className="text-gray-600 hover:text-pink-500 transition-colors duration-300" />
          <FaTwitter className="text-gray-600 hover:text-pink-500 transition-colors duration-300" />
          <FaLinkedin className="text-gray-600 hover:text-pink-500 transition-colors duration-300" />
        </div>

        <div className="text-black mt-5 text-left">@ 2024 MegaOne</div>
      </section>

      <div className="mt-5">
        <div>
          {/* Hamburger Icon to open sidebar (desktop) */}
          <div className="lg:ml-12 ml-7 font-bold lg:py-4 py-2 lg:z-20">
            <CustomHamburger toggle={toggleSidebar} />
          </div>

          {/* Pagination-like Circles with Hyphens */}
          <div className="lg:ml-5 mt-16 p-2 lg:py-8">
            <ul className="space-y-8 flex flex-col items-center">
              {menuItems.map((item, index) => (
                <li
                  key={item.name}
                  className="flex items-center space-x-2"
                  onClick={() => handleMenuClick(item, index)}
                >
                  <span
                    className={`transition-colors duration-300 ${
                      currentPath === item.path ? "text-green-800" : "invisible"
                    }`}
                  >
                    <TiMinus />
                  </span>

                  <div
                    className={`lg:w-4 lg:h-4 md:w-2 md:h-2 h-2 w-2 border border-black rounded-full cursor-pointer ${
                      currentPath === item.path ? "bg-green-800" : "bg-white"
                    }`}
                  ></div>

                  <span
                    className={`transition-colors duration-300 ${
                      currentPath === item.path ? "text-green-800" : "invisible"
                    }`}
                  >
                    <TiMinus />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar Logo (hidden on mobile) */}
          <div className="lg:ml-5 ml-4 mt-32  lg:block lg:h-16 lg:w-16 h-10 w-10 p-1">
            <img src={logo} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
