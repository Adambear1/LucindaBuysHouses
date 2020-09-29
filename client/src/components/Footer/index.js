import React from "react";
// utils
import "./styles.css";
import { Link } from "react-scroll";
// components
import FooterSocialMedia from "../FooterSocialMedia";

function Footer() {
  return (
    <footer class="page-footer white" id="footer">
      <div class="container">
        <div class="row">
          <div class="col s12 l6 ">
            <h2 class="lucinda lucinda-footer">Lucinda Buys Houses</h2>
          </div>
          <div class="col s12 l6 ">
            <FooterSocialMedia />
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          <div class="offset-l2 footer-header">
            <div class="row center-align">
              <div class="col s12">
                <ul class="footer-ul align-center ">
                  <li class="footer-links footer-link">
                    <a class="modal-trigger footer-link" href="#modal">
                      Why <span class="lucinda">Lucinda</span>
                    </a>
                  </li>
                  <li class="footer-links footer-link">
                    <Link
                      class="footer-link"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      About
                    </Link>
                  </li>
                  <li class="footer-links footer-link">
                    <Link
                      class="footer-link"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      Testimonials
                    </Link>
                  </li>
                  <li class="footer-links footer-link">
                    <Link
                      class="footer-link"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
