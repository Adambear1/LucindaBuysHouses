import React from "react";
// style
import "./styles.css";
// components
import Form from "../../components/Form";
import Promo from "../../components/Promo";
import Slider from "../../components/Slider";
import PageBreak from "../../components/PageBreak";
import Steps from "../../components/Steps";

function Home() {
  return (
    <>
      <div class="container">
        <div class="row first-row">
          <div class="col m12 l6">
            <Promo />
          </div>
          <div class="col m12 l6">
            <Form />
          </div>
        </div>
      </div>
      <PageBreak />
      <div class="container">
        <div class="row">
          <div class="col s12">
            <Steps />
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
