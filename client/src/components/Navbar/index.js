import React from "react";
import "./styles.css";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <nav class="nav-bottom">
      <div class="nav-wrapper grey lighten-5 ">
        <ul class="brand-logo center">
          <li class="tab ">
            <a class="pink-text lighten-3 modal-trigger" href="#why-modal">
              Why <span class="lucinda">Lucinda</span>
            </a>
          </li>
          <li class="tab nav-text">
            <Link
              class="pink-text lighten-3"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li class="tab nav-text">
            <Link
              class="pink-text lighten-3"
              to="testimonials"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Testimonials
            </Link>
          </li>
          <li class="tab nav-text">
            <Link
              class="pink-text lighten-3 "
              to="contact"
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
