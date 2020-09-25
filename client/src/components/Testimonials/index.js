import React, { useEffect } from "react";
// utils
import "./styles.css";
import Swiper from "react-id-swiper";
// import "swiper/swiper.scss";
// import "swiper/swiper.less";
function Testimonials() {
  const params = {
    spaceBetween: 30,
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  return (
    <Swiper {...params}>
      <div>
        <h1>Mr Reed</h1>
        <h3>Spanaway, WA; August 2018</h3>
        <p>
          "I received nearly $20k cash <b>MORE</b> than all other offers on the
          table. With no commissions or hidden fees, I was able to relocate and
          be secured for the next 2 years to get my feet back under me. THANK
          YOU LUCINDA."
        </p>
      </div>
      <div>
        <h1>Mrs King</h1>
        <h3>Tacoma, WA; October 2018</h3>
        <p>
          "The Team at Lucinda Buys Houses is truly heaven sent. They were able
          to help my uncle relocate with ease. I trust them with everything and
          wish I would have known about them sooner!"
        </p>
      </div>

      <div>
        <h1>Mrs and Mr Jones</h1>
        <h3>Tacoma, WA; February 2019</h3>
        <p>
          "I received numerous cash offers from other agents and flippers in the
          area, but when I got word of Lucinda, she came in and offered $20k
          more. Two weeks later, we closed on the property and were able to
          finally be free from that situation!"
        </p>
      </div>

      <div>
        <h1>Ms DuBois-Wescott</h1>
        <h3>Tacoma, WA; March 2019</h3>
        <p>
          "I fell into a really hard time and just couldnt make payments any
          more. It seemed as if the banks were harassing me on a daily basis. I
          got a hold of Lucinda, next thing I knew, my auction date got pushed
          back and was able to sell my house and not be in such a rush."
        </p>
      </div>

      <div>
        <h1>Mrs Andrews</h1>
        <h3>Tacoma, WA; July 2019</h3>
        <p>
          "10/10 recommend! The state locked up my house, couldnt access it,
          owed over $100k to the bank. Lucinda was able to pay off all liens and
          assure I walked away with $10k cash. I LOVE LUCINDA!"
        </p>
      </div>
    </Swiper>
  );
}

export default Testimonials;
