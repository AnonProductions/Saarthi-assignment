import { useState, useEffect } from "react";
import "./TheHeader.css";

const TheHeader = () => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", (ev) => {
      if (ev.key === "Escape") {
        setNavOpen(false);
      }
    });
  }, []);

  return (
    <header className="header">
      <div className="brand"></div>
      <ul className={`links ${navOpen ? "open" : ""}`}>
        <li className="link">Home</li>
        <li className="link">Documents</li>
        <li className="link">API</li>
        <li className="link">About</li>
        <li className="link">Log in</li>
        <li className="link cta">Sign up</li>
      </ul>
      <div
        className="hamburger"
        onClick={() => setNavOpen((navOpen) => !navOpen)}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </header>
  );
};

export default TheHeader;
