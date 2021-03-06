import React from "react";
import "./styles.css";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <nav class="nav-bottom animate__animated  animate__fadeIn">
      <div class="nav-wrapper grey lighten-5 ">
        <ul class="brand-logo center nav-bottom-ul">
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
              to="form"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Sell Now!
            </Link>
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
