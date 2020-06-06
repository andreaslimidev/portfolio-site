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
            <Link
              onClick={toggleMenu}
              to="/projects"
              activeClassName={headerStyles.active}
            >
              Projects
              <div className={headerStyles.selected}></div>
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMenu}
              to="/blog"
              activeClassName={headerStyles.active}
            >
              Blog
              <div className={headerStyles.selected}></div>
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMenu}
              to="/contact"
              activeClassName={headerStyles.active}
            >
              Contact
              <div className={headerStyles.selected}></div>
            </Link>
          </li>
        </ul>
      </nav>
      <a
        href="#"
        onClick={() => toggleMenu()}
        className={`${headerStyles.toggleButton} ${
          show ? headerStyles.activated : headerStyles.deactivated
        }`}
      >
        <span className={headerStyles.bar}></span>
        <span className={headerStyles.bar}></span>
        <span className={headerStyles.bar}></span>
      </a>
    </header>
  );
};

export default Header;
