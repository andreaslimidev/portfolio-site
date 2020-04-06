import React, { useState } from "react";
import headerStyles from "./header.module.css";
import { Link } from "gatsby";

const Header = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    <header>
      <Link className={headerStyles.logo} to="/">
        ~
      </Link>
      <nav className={show ? headerStyles.show : ""}>
        <ul>
          <li>
            <Link onClick={toggleMenu} to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <a
        href="#"
        onClick={() => toggleMenu()}
        className={headerStyles.toggleButton}
      >
        <span className={headerStyles.bar}></span>
        <span className={headerStyles.bar}></span>
        <span className={headerStyles.bar}></span>
      </a>
    </header>
  );
};

export default Header;
