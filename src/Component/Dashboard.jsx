// import React, { useEffect, useState, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import About from "./About";
// import Service from "./Service";
// import Contact from "./Contact";
// // import Portfolio from "./Portfolio";
// import Team from "./Team";
// import Home from "./Home";

// function Dashboard() {
//   const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
//   const navigate = useNavigate();
//   const scrollTimeoutRef = useRef(null);
//   const [currentPath, setCurrentPath] = useState("/");
//   const location = useLocation();

//   const menuItems = [
//     { name: "HOME", path: "/" },
//     { name: "ABOUT", path: "/about" },
//     { name: "SERVICE", path: "/service" },
//     { name: "TEAM", path: "/team" },
//     // { name: "PORTFOLIO", path: "/portfolio" },
//     { name: "CONTACT", path: "/contact" },
//   ];

//   useEffect(() => {
//     setCurrentPath(location.pathname);
//   }, [location]);

//   const handleScroll = (e) => {
//     if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

//     scrollTimeoutRef.current = setTimeout(() => {
//       const isScrollingDown = e.deltaY > 0;
//       let newIndex = currentSectionIndex + (isScrollingDown ? 1 : -1);
//       newIndex = Math.max(0, Math.min(newIndex, menuItems.length - 1));

//       if (newIndex !== currentSectionIndex) {
//         setCurrentSectionIndex(newIndex);
//         navigate(menuItems[newIndex].path);

//         // Add visual indicator for scroll direction in the Sidebar
//         const sidebarItem = document.querySelectorAll(".sidebar-item");
//         sidebarItem.forEach((item, index) => {
//           item.classList.remove("scroll-up", "scroll-down");
//           if (index === newIndex) {
//             item.classList.add(isScrollingDown ? "scroll-down" : "scroll-up");
//           }
//         });
//       }
//     }, 300); // Reduced debounce delay for a more immediate effect
//   };

//   useEffect(() => {
//     window.addEventListener("wheel", handleScroll);
//     return () => {
//       window.removeEventListener("wheel", handleScroll);
//       if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
//     };
//   }, [currentSectionIndex]);

//   return (
//     <div className="flex w-full h-screen">
//       <Sidebar
//         currentSectionIndex={currentSectionIndex}
//         currentPath={currentPath}
//         menuItems={menuItems}
//       />

//       <div
//         className="flex-1 overflow-hidden relative"
//         style={{ scrollBehavior: "smooth" }}
//       >
//         <div className="flex-1 overflow-hidden relative w-full h-full">
//           <div
//             className={`page absolute w-full h-full transition-transform duration-500`}
//             style={{
//               transform: `translateY(${currentPath === "/" ? "0%" : "-100%"})`,
//             }}
//           >
//             <Home />
//           </div>
//           <div
//             className={`page absolute w-full h-full transition-transform duration-500`}
//             style={{
//               transform: `translateY(${
//                 currentPath === "/about" ? "0%" : "-100%"
//               })`,
//             }}
//           >
//             <About />
//           </div>
//           <div
//             className={`page absolute w-full h-full transition-transform duration-500`}
//             style={{
//               transform: `translateY(${
//                 currentPath === "/service" ? "0%" : "-100%"
//               })`,
//             }}
//           >
//             <Service />
//           </div>
//           <div
//             className={`page absolute w-full h-full transition-transform duration-500`}
//             style={{
//               transform: `translateY(${
//                 currentPath === "/team" ? "0%" : "-100%"
//               })`,
//             }}
//           >
//             <Team />
//           </div>
//           {/* <div
//             className={`page absolute w-full h-full transition-transform duration-500 md:block hidden`}
//             style={{
//               transform: `translateY(${
//                 currentPath === "/portfolio" ? "0%" : "-100%"
//               })`,
//             }}
//           >
//             <Portfolio />
//           </div> */}
//           <div
//             className={`page absolute w-full h-full transition-transform duration-500`}
//             style={{
//               transform: `translateY(${
//                 currentPath === "/contact" ? "0%" : "-100%"
//               })`,
//             }}
//           >
//            <Contact />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Sidebar from "./Sidebar";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Team from "./Team";
import Home from "./Home";

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
    { name: "CONTACT", path: "/contact" },
  ];

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh(); // Ensure AOS is initialized properly
  }, []);

  const handleScroll = (e) => {
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    scrollTimeoutRef.current = setTimeout(() => {
      const isScrollingDown = e.deltaY > 0;
      let newIndex = currentSectionIndex + (isScrollingDown ? 1 : -1);
      newIndex = Math.max(0, Math.min(newIndex, menuItems.length - 1));

      if (newIndex !== currentSectionIndex) {
        setCurrentSectionIndex(newIndex);
        navigate(menuItems[newIndex].path);

        // Refresh AOS to trigger animations during scroll
        AOS.refreshHard(); // Force AOS refresh to trigger animations

        // Add visual indicator for scroll direction in the Sidebar
        const sidebarItem = document.querySelectorAll(".sidebar-item");
        sidebarItem.forEach((item, index) => {
          item.classList.remove("scroll-up", "scroll-down");
          if (index === newIndex) {
            item.classList.add(isScrollingDown ? "scroll-down" : "scroll-up");
          }
        });
      }
    }, 300);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [currentSectionIndex]);

  // Mobile view check
  const isMobileView = window.innerWidth <= 768;

  return (
    <div className="flex w-full h-screen">
      {/* Sidebar - Mobile view */}
      {isMobileView && (
        <div className="w-full bg-gray-800 fixed top-0 left-0 z-10 p-4">
          <Sidebar
            currentSectionIndex={currentSectionIndex}
            currentPath={currentPath}
            menuItems={menuItems}
          />
        </div>
      )}

      {/* Sidebar - Desktop view */}
      {!isMobileView && (
        <Sidebar
          currentSectionIndex={currentSectionIndex}
          currentPath={currentPath}
          menuItems={menuItems}
        />
      )}

      <div
        className="flex-1 overflow-hidden relative"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex-1 overflow-hidden relative w-full h-full">
          <div
            className="page absolute w-full h-full transition-transform duration-500"
            style={{
              transform: `translateY(${currentPath === "/" ? "0%" : "-100%"})`,
            }}
            data-aos="fade-up"
          >
            <Home />
          </div>
          <div
            className="page absolute w-full h-full transition-transform duration-500"
            style={{
              transform: `translateY(${
                currentPath === "/about" ? "0%" : "-100%"
              })`,
            }}
            data-aos="fade-up"
          >
            <About />
          </div>
          <div
            className="page absolute w-full h-full transition-transform duration-500"
            style={{
              transform: `translateY(${
                currentPath === "/service" ? "0%" : "-100%"
              })`,
            }}
            data-aos="fade-up"
          >
            <Service />
          </div>
          <div
            className="page absolute w-full h-full transition-transform duration-500"
            style={{
              transform: `translateY(${
                currentPath === "/team" ? "0%" : "-100%"
              })`,
            }}
            data-aos="fade-up"
          >
            <Team />
          </div>
          <div
            className="page absolute w-full h-full transition-transform duration-500"
            style={{
              transform: `translateY(${
                currentPath === "/contact" ? "0%" : "-100%"
              })`,
            }}
            data-aos="fade-up"
          >
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
