import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Portfolio </Link>
        <Link to="/experience"> Experience </Link>
        <a href="https://www.linkedin.com/in/aviraj-sinha?original_referer=https%3A%2F%2Fduckduckgo.com%2F"> Blog </a>
        <a href="https://github.com/avirajs/Personal_Resume/blob/master/Sinha_Resume.pdf"> Resume </a>
      </div>
    </div>
  );
}

export default Navbar;
