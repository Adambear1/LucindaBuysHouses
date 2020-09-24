import React, { useEffect } from "react";
// utils
import M from "materialize-css";
import "./styles.css";
// photos
import agreement from "../../assets/images/agreement.jpg";
import contract from "../../assets/images/contract.jpg";
import home from "../../assets/images/home.jpg";
import home1 from "../../assets/images/home1.jpg";
import people from "../../assets/images/people.jpg";
import turnkey from "../../assets/images/turnkey.jpg";

function Slider() {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      var item = document.querySelectorAll(".carousel");
      var instances = M.Carousel.init(item, {});
    });
  }, []);
  return (
    <div class="carousel">
      <a class="carousel-item" href="#one!">
        <img src={turnkey} />
      </a>
      <a class="carousel-item" href="#two!">
        <img src={agreement} />
      </a>
      <a class="carousel-item" href="#three!">
        <img src={home} />
      </a>
      <a class="carousel-item" href="#four!">
        <img src={contract} />
      </a>
      <a class="carousel-item" href="#five!">
        <img src={home1} />
      </a>
      <a class="carousel-item" href="#five!">
        <img src={people} />
      </a>
    </div>
  );
}

export default Slider;
