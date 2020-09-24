import React from "react";
import "./styles.css";

function Promo() {
  return (
    <div>
      <div class="box">
        <div class="center-align">
          <h2>I Buy Houses</h2>
        </div>
        <ul class="top-list">
          <li class="left-align">✅ No Commission or Fees</li>
          <li class="left-align">✅ Sold "AS IS"</li>
          <li class="left-align">✅ No Middle-Men</li>
          <li class="left-align">✅ No Realtors</li>
          <li class="left-align">✅ Free Consultation</li>
          <li class="left-align">✅ Help Relocating</li>
        </ul>
        <div class="center-align">
          <h2>Who I Help</h2>
        </div>
        <ul class="bottom-list">
          <li>✅ Foreclosure</li>
          <li>✅ Bad Tenants</li>
          <li>✅ Probate</li>
          <li>✅ Vacant</li>
          <li>✅ Cash Out</li>
          <li>✅ Quick Close</li>
        </ul>
      </div>
    </div>
  );
}

export default Promo;
