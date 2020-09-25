import React from "react";
// style
import "./styles.css";
// assets
import video from "../../assets/videos/video3.mp4";
// components
import Form from "../../components/Form";
import Promo from "../../components/Promo";
import PageBreak from "../../components/PageBreak";
import Steps from "../../components/Steps";
import About from "../../components/About";
import Modal from "../../components/Modal";

function Home() {
  return (
    <>
      <div class="container">
        <div class="row first-row">
          <video autoplay="true" muted="true" loop="true" id="myVideo">
            <source src={video} type="video/mp4" />
          </video>
          <Modal />
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
      </div>
      <About />
    </>
  );
}

export default Home;
