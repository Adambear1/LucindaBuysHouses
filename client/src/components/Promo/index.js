import React from "react";
import "./styles.css";

function Promo() {
  return (
    <div class="animate__animated  animate__fadeInBottomLeft">
      <div class="box">
        <div class="center-align">
          <h2>I Buy Houses</h2>
        </div>
        <ul class="top-list">
          <li class="left-align">
            <span>✅</span> No Commission or Fees
          </li>
          <li class="left-align">
            <span>✅</span> Sold "AS IS"
          </li>
          <li class="left-align">
            <span>✅</span> No Middle-Men
          </li>
          <li class="left-align">
            <span>✅</span> No Realtors
          </li>
          <li class="left-align">
            <span>✅</span> Free Consultation
          </li>
          <li class="left-align">
            <span>✅</span> Help Relocating
          </li>
        </ul>
        <div class="center-align">
          <h2>Who I Help</h2>
        </div>
        <ul class="bottom-list">
          <li>
            <span>✅</span> Foreclosure
          </li>
          <li>
            <span>✅</span> Bad Tenants
          </li>
          <li>
            <span>✅</span> Probate
          </li>
          <li>
            <span>✅</span> Vacant
          </li>
          <li>
            <span>✅</span> Cash Out
          </li>
          <li>
            <span>✅</span> Quick Close
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Promo;
