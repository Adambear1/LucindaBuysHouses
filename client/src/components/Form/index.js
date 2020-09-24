import React from "react";
import FormSubmit from "../FormSubmit";
import "./styles.css";

function Form() {
  function submit() {
    console.log(true);
  }
  return (
    <form>
      <div class="box center-align">
        <div class="row">
          <div class="col 12">
            <h2 class="center-align form-header">
              <u>
                <b>FREE</b>
              </u>{" "}
              Cash Offer
            </h2>
            <div class="form-under-text">
              <p>
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
                  id="icon_prefix"
                  type="text"
                  placeholder="Full Name"
                  class="validate"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col 12 form-column">
              <div class="input-field">
                <i class="material-icons prefix">phone</i>
                <input
                  id="icon_prefix"
                  type="text"
                  placeholder="Phone Number"
                  class="validate"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col 12 form-column">
              <div class="input-field">
                <i class="material-icons prefix">mail</i>
                <input
                  id="icon_prefix"
                  type="text"
                  class="validate"
                  placeholder="Email"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col 12 form-column">
              <div class="input-field">
                <i class="material-icons prefix">location_on</i>
                <input
                  id="icon_prefix"
                  type="text"
                  placeholder="Address"
                  class="validate"
                />
              </div>
            </div>
          </div>
        </div>
        <FormSubmit submit={submit} />
      </div>
    </form>
  );
}

export default Form;
