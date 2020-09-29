import React from "react";
import "./styles.css";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <nav class="nav-bottom">
      <div class="nav-wrapper grey lighten-5 ">
        <ul class="brand-logo center">
          <li class="tab ">
            <a
              class="modal-trigger navbar-link"
              href="#modal"
              // data-target="modal"
            >
              Why <span class="lucinda">Lucinda</span>
            </a>
          </li>
          <li class="tab navbar-link nav-text">
            <Link
              class="navbar-link"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li class="tab navbar-link nav-text">
            <Link
              class="navbar-link"
              to="testimonials"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Testimonials
            </Link>
          </li>
          <li class="tab navbar-link nav-text">
            <Link
              class="navbar-link"
              to="footer"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
