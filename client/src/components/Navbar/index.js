import React from "react";
import "./styles.css";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <nav class="nav-bottom">
      <div class="nav-wrapper grey lighten-5 ">
        <ul class="brand-logo center">
          <li class="tab ">
            <Link
              class="pink-text lighten-3 "
              to="test1"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Sell You Home
            </Link>
          </li>
          <li class="tab nav-text">
            <Link
              class="pink-text lighten-3 "
              to="test1"
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
              class="pink-text lighten-3 "
              to="test1"
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
              to="test1"
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
