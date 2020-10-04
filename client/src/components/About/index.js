import React, { useState, useRef } from "react";
// styles
import "./styles.css";
// utils
import Swiper from "react-id-swiper";
import "swiper/swiper.scss";
import "swiper/swiper.less";

function About() {
  const params = {
    slidesPerView: 5,
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  };
  return (
    <div class="about-section">
      <div class="row">
        <div class="col s12">
          <Swiper {...params}>
            <div
              class="card card-box animate__animated animate__bounceIn"
              id="first-card"
            >
              <h5>
                Lucinda has directly helped over 30 families these past two
                years avoid foreclosure, fight off banks, save credit, all
                hassle free! There is no situation too big or too small for
                Lucinda to solve! Do you want Lucinda to help you out?{" "}
                <a href="#form">Contact </a>
                us today!
              </h5>
            </div>
            <div class="card card-box animate__animated animate__bounceIn">
              <h5>
                Almost every client Lucinda has been able to help has pocketed
                at minimum $10k (!) after closing. Lucinda takes great pride in
                ethical practices and helping to give back to people that need
                it the most. She is not afraid of making competitive, fair
                offers to maximize her client's situation. Want to see how much
                money you can receive for your house? Click{" "}
                <a href="#form">Here!</a>
              </h5>
            </div>
            <div class="card card-box animate__animated animate__bounceIn">
              <h5>
                No commissions, hidden fees, realtors, inspections, or
                headaches! Through completing over 30 successful transactions
                over the years, Lucinda has perfected her craft to make the
                process as seemless as possible.
              </h5>
            </div>
            <div class="card card-box animate__animated animate__bounceIn">
              <h5 class="about-qa">
                Lucinda is dynamic in trade and can offer many services to best
                fit your situation!
                <br />
                <ul class="about-ul">
                  <li class="about-li">
                    <div class="about-q">
                      Bank is forcing you to sell, but want to still stay in the
                      property?
                    </div>
                    <div class="about-a">
                      Ask about the different lease-back options she has!
                    </div>
                  </li>
                  <li class="about-li">
                    <div class="about-q">Need to sell ASAP?</div>
                    <div class="about-a">
                      Lucinda can close in under a week in most circumstances!
                    </div>
                  </li>
                  <li class="about-li">
                    <div class="about-q">
                      Facing foreclosure within a month?
                    </div>
                    <div class="about-a">
                      Lucinda has successfully negotiated with Trustees and
                      Asset Managers at banks to extend auction dates to give
                      adequate time for a normal close.
                    </div>
                  </li>
                  <li class="about-li">
                    <div class="about-q">Bad Tenants?</div>
                    <div class="about-a">Let Lucinda take care of that!</div>
                  </li>
                </ul>
              </h5>
            </div>
            <div
              class="card card-box animate__animated animate__bounceIn"
              id="last-card "
            >
              <h5>
                Lucinda values ethics. When it comes to money and houses, she
                has seen first-hand agents and mortgage companies take advantage
                on the vulnerable. Lucinda has seen such wild success by helping
                those who fall prey and help get them back on their feet.
              </h5>
            </div>
            <div
              class="card card-box animate__animated animate__bounceIn"
              id="first-card"
            >
              <h5>
                This company that Lucinda has created has big visions to help
                revolutionize the Real Estate industry. By replacing Realtors,
                middle-men, and all other entities that prey on the vulnerable,
                Lucinda promises to give top dollar, close quick, and help all
                of those in need!
              </h5>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default About;
