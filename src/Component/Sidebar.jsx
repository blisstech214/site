import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Bliss-icon.png";
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { TiMinus } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";

// CustomHamburger Component
function CustomHamburger({ toggle }) {
  return (
    <div className="cursor-pointer" onClick={toggle}>
      <AiOutlineMenu className="text-black text-2xl" />
    </div>
  );
}

// Sidebar Component
function Sidebar({ currentPath, menuItems }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.refresh(); // Refresh AOS when the component re-renders
  }, [currentPath, currentPageIndex]);

  const handleMenuClick = (item, pageIndex) => {
    navigate(item.path);
    setCurrentPageIndex(pageIndex);
    setIsSidebarOpen(false); // Close sidebar after navigation
    AOS.refresh(); // Refresh AOS to re-trigger animations
  };

  // Function to toggle sidebar open/close state
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="relative flex">
      {/* Sidebar View when open */}
      <section
        className={`fixed left-0 top-0 h-full w-64 bg-white transform transition-transform duration-300 z-10 p-5 flex flex-col pt-10 shadow-lg ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <img src={logo} alt="center logo" className="w-10 h-10" />
          {/* Close Icon, only visible when sidebar is open */}
          {isSidebarOpen && (
            <AiOutlineClose
              onClick={toggleSidebar} // Close the sidebar
              className="text-black text-2xl cursor-pointer"
            />
          )}
        </div>

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

        <div className="flex space-x-5 mt-auto mb-10">
          <FaGithub className="text-gray-600 hover:text-pink-500 transition-colors duration-300" />
          <FaFacebook className="text-gray-600 hover:text-pink-500 transition-colors duration-300" />
          <FaTwitter className="text-gray-600 hover:text-pink-500 transition-colors duration-300" />
          <FaLinkedin className="text-gray-600 hover:text-pink-500 transition-colors duration-300" />
        </div>

        <div className="text-black mt-5 text-left">@ 2024 MegaOne</div>
      </section>

      {/* Default Sidebar View (Hamburger Icon) */}
      <div className="space-y-28 py-4">
        {/* Hamburger Icon to open sidebar, only visible when sidebar is closed */}
        {!isSidebarOpen && (
          <div className="ml-12 font-bold py-4 md:block hidden fixed z-20">
            <CustomHamburger toggle={toggleSidebar} />
          </div>
        )}

        {/* Pagination-like Circles with Hyphens */}
        <div className="md:ml-5 ml-1 mt-10 md:p-2 p-0 md:py-8 py-3">
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
                  className={`w-4 h-4 border border-black rounded-full cursor-pointer ${
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

        {/* Sidebar Logo */}
        <div className="md:ml-2 md:p-1 md:mt-10 md:h-20 md:w-20  md:py-10 h-14 w-14 ml-1 p-1 mt-10  py-20">
          <img src={logo} alt="center logo" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
