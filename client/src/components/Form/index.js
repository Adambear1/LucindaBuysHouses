import React, { useState } from "react";
// component
import FormSubmit from "../FormSubmit";
// styles
import "./styles.css";
// utils
import axios from "axios";

function Form() {
  const [info, setInfo] = useState();
  const [show, setShow] = useState(false);
  function data(e) {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }
  function submit(e) {
    e.preventDefault();
    axios.post("http://localhost:5000/api/inquire", info).then((data) => {
      setShow(true);
      setTimeout(() => {
        setShow(false);
        window.location.reload();
      }, 6000);
    });
  }

  return (
    <form
      class="animate__animated  animate__fadeInBottomRight"
      id="offer"
      onSubmit={submit}
    >
      <div class="box ">
        <div class="container">
          <div class="row">
            <div class="col 12">
              <h2 class=" form-header">
                <u>
                  <b>FREE</b>
                </u>{" "}
                Cash Offer
              </h2>
              <div class="form-under-text">
                <p class="form-header-i">
                  <i>** No Obligations; No Commitment! **</i>
                </p>
              </div>
            </div>
          </div>

          <div class="form-input-center">
            <div class="row">
              <div class="col 12 form-column">
                <div class="input-field">
                  <i class="material-icons prefix">account_circle</i>
                  <input
                    name="name"
                    id="icon_prefix"
                    type="text"
                    placeholder="Full Name"
                    class="validate"
                    onChange={data}
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col 12 form-column">
                <div class="input-field">
                  <i class="material-icons prefix">phone</i>
                  <input
                    name="phoneNumber"
                    id="icon_prefix"
                    type="text"
                    placeholder="Phone Number"
                    class="validate"
                    onChange={data}
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col 12 form-column">
                <div class="input-field">
                  <i class="material-icons prefix">email</i>
                  <input
                    name="email"
                    id="icon_prefix"
                    type="text"
                    class="validate"
                    placeholder="Email"
                    onChange={data}
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col 12 form-column">
                <div class="input-field">
                  <i class="material-icons prefix">location_on</i>
                  <input
                    name="address"
                    id="icon_prefix"
                    type="text"
                    placeholder="Address"
                    class="validate"
                    onChange={data}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {show && (
          <h5 class="show-h5">
            Information Submitted! A representative will reach out to you
            shortly!
          </h5>
        )}
        <FormSubmit submit={submit} />
      </div>
    </form>
  );
}

export default Form;
