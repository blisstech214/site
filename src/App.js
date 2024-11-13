import { BrowserRouter } from "react-router-dom";

import React, { useEffect, useState } from "react";
import Dashboard from "./Component/Dashboard";
import "./App.css"; // Ensure this file includes the custom cursor CSS
import "aos/dist/aos.css";
import AOS from "aos";



function App() {
  const [cursorClass, setCursorClass] = useState("");
  const [clickClass, setClickClass] = useState("");
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });


  useEffect(()=>{
    AOS.init(
      {
        once:false
      }
    );
  })
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    // Update cursor position on mouse move
    const moveCursor = (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    };

    // Hover effect for interactive elements
    const addHoverEffect = () => setCursorClass("cursor-hover");
    const removeHoverEffect = () => setCursorClass("");

    // Click effect
    const handleClick = (e) => {
      setClickPosition({ x: e.pageX, y: e.pageY });
      setClickClass("cursor-click");
      setTimeout(() => setClickClass(""), 600); // Remove the effect after 0.6s
    };

    // Attach event listeners for cursor movement and click
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("click", handleClick);

    // Attach hover effects only to elements with cursor-pointer class
    const hoverElements = document.querySelectorAll(".cursor-pointer");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", addHoverEffect);
      el.addEventListener("mouseleave", removeHoverEffect);
    });

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("click", handleClick);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHoverEffect);
        el.removeEventListener("mouseleave", removeHoverEffect);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      
        AOS.init(
          {
            once:false,
            duration:1000
          }
        );
      console.log("mini");
      
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      {/* Cursor element */}
      <div
        className={`cursor ${cursorClass} ${clickClass}`}
        style={{
          left: `${clickPosition.x}px`,
          top: `${clickPosition.y}px`,
        }}
      ></div>

      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </div>
  );
}

export default App;
