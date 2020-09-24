import React from "react";
import "./styles.css";

function Steps() {
  return (
    <div class="row row-steps">
      <div class="col s12 m4">
        <div class="card steps-card center-align" id="card1">
          <h3>Step 1</h3>
          <h5>Submit Information</h5>
        </div>
      </div>
      <div class="col s12 m4">
        <div class="card steps-card">
          <div class="card steps-card center-align" id="card2">
            <h3>Step 2</h3>
            <h5>Receive Cash Offer</h5>
          </div>
        </div>
      </div>
      <div class="col s12 m4">
        <div class="card steps-card">
          <div class="card steps-card center-align" id="card3">
            <h3>Step 3</h3>
            <h5>Choose Closing Data</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
