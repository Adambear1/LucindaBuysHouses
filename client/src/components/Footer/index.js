import React from "react";
import FooterSocialMedia from "../FooterSocialMedia";

function Footer() {
  return (
    <footer class="page-footer white">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Footer Content</h5>
            <h2 class="pink-text lighten-3 ">
              <span class="lucinda" style={{ font: 100 }}>
                Lucinda Buys Houses
              </span>
            </h2>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Links</h5>
            <ul>
              <li>
                <a class="pink-text lighten-3" href="#!">
                  Link 1
                </a>
              </li>
              <li>
                <a class="pink-text lighten-3" href="#!">
                  Link 2
                </a>
              </li>
              <li>
                <a class="pink-text lighten-3" href="#!">
                  Link 3
                </a>
              </li>
              <li>
                <a class="pink-text lighten-3" href="#!">
                  Link 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container pink-text lighten-3">
          © 2020 Quality Creations LLC
          <a class="pink-text lighten-3 right" href="#!">
            <FooterSocialMedia />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
