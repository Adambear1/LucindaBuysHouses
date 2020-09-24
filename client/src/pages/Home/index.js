import React from "react";
// style
import "./styles.css";
// components
import Form from "../../components/Form";
import Promo from "../../components/Promo";
import Slider from "../../components/Slider";

function Home() {
  return (
    <div class="container">
      <div class="row first-row">
        <div class="col s6">
          <Promo />
        </div>
        <div class="col s6">
          <Form />
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default Home;
