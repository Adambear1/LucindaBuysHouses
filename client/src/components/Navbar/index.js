import React from "react";
import "./styles.css";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <nav>
      <div class="nav-wrapper  grey lighten-5 navbar-wrapper">
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
          <li class="tab">
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
          <li class="tab">
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
          <li class="tab disabled">
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
          <li class="tab">
            <a href="#test4">Test 4</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
