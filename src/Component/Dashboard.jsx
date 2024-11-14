import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
// import Portfolio from "./Portfolio";
import Team from "./Team";
import Home from "./Home";
import focusOutHome from "./Home";

import Aos from "aos";
function Dashboard() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const navigate = useNavigate();
  const scrollTimeoutRef = useRef(null);
  const [currentPath, setCurrentPath] = useState("/");
  const location = useLocation();

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICE", path: "/service" },
    { name: "TEAM", path: "/team" },
    // { name: "PORTFOLIO", path: "/portfolio" },
    { name: "CONTACT", path: "/contact" },
  ];

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const handleScroll = (e) => {
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    scrollTimeoutRef.current = setTimeout(() => {
      const isScrollingDown = e.deltaY > 0;
      let newIndex = currentSectionIndex + (isScrollingDown ? 1 : -1);
      newIndex = Math.max(0, Math.min(newIndex, menuItems.length - 1));

      if (newIndex !== currentSectionIndex) {
        setCurrentSectionIndex(newIndex);
        navigate(menuItems[newIndex].path);

        // Add visual indicator for scroll direction in the Sidebar
        const sidebarItem = document.querySelectorAll(".sidebar-item");
        sidebarItem.forEach((item, index) => {
          item.classList.remove("scroll-up", "scroll-down");
          if (index === newIndex) {
            item.classList.add(isScrollingDown ? "scroll-down" : "scroll-up");
          }
        });
      }
    }, 300); // Reduced debounce delay for a more immediate effect
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [currentSectionIndex]);

  const translateArray = {
    "/": [0, 100, 200, 300, 400],
    "/about": [-100, 0, 100, 200, 300],
    "/service": [-200, -100, 0, 100, 200],
    "/team": [-300, -200, -100, 0, 100],
    "/contact": [-400, -300, -200, -100, 0],
  };
  const [translate, setTranslate] = useState([0, 100, 200, 300, 400]);
  useEffect(() => {
    setTranslate(translateArray[currentPath]);
  }, [currentPath]);

  return (
    <div className="flex w-full h-screen">
      <Sidebar
        currentSectionIndex={currentSectionIndex}
        currentPath={currentPath}
        menuItems={menuItems}
      />

      <div
        className="flex-1 overflow-hidden relative"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex-1 overflow-hidden relative w-full h-full">
          <div
            className={`page absolute w-full h-full transition-transform duration-500`}
            style={{
              transform: `translateY(${translate[0]}%)`,
            }}
          >
            <Home focusOut={currentPath !== "/"} />
          </div>
          <div
            className={`page absolute w-full h-full transition-transform duration-500`}
            style={{
              transform: `translateY(${translate[1]}%)`,
            }}
          >
            <About focusOut={currentPath !== "/about"} />
          </div>
          <div
            className={`page absolute w-full h-full transition-transform duration-500`}
            style={{
              transform: `translateY(${translate[2]}%)`,
            }}
          >
            <Service focusOut={currentPath !== "/service"} />
          </div>
          <div
            className={`page absolute w-full h-full transition-transform duration-500`}
            style={{
              transform: `translateY(${translate[3]}%)`,
            }}
          >
            <Team focusOut={currentPath !== "/team"} />
          </div>
          {/* <div
            className={`page absolute w-full h-full transition-transform duration-500 md:block hidden`}
            style={{
              transform: `translateY(${
                currentPath === "/portfolio" ? "0%" : "-100%"
              })`,
            }}
          >
            <Portfolio />
          </div> */}
          <div
            className={`page absolute w-full h-full transition-transform duration-500`}
            style={{
              transform: `translateY(${translate[4]}%)`,
            }}
          >
            <Contact focusOut={currentPath !== "/contact"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
