import React, { useEffect } from "react";

// utils
import "./styles.css";
import M from "materialize-css";

function Modal() {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".modal");
      var instances = M.Modal.init(elems);
    });
  }, []);

  return (
    <div id="modal" className="modal" style={{ height: 450 }}>
      <div className="modal-content">
        <h4>
          <span className="lucinda">Lucinda</span>'s Promise....
        </h4>
        <ul>
          <li>
            <p>
              Walk Away With <b>AT LEAST</b>{" "}
              <b>
                <u>
                  <span className="about-money">$10k</span>
                </u>
              </b>{" "}
              more in pocket than any other offer! How? Because Lucinda buys
              property directly and does not spend excess money in marketing,
              she can <i>guarantee</i> full value for property.
            </p>
          </li>
          <li>
            <p>
              Be a part of the Lucinda family and receive holiday cards and
              seasonal greetings. It is not uncommon for Lucinda and staff
              members to be invited to family events after the sale of the house
              because of how serious Lucinda this process!
            </p>
          </li>
          <li>
            <p>
              Lucinda has personally hired key specialists with a proven track
              record of preventing foreclosures, working with Title and Escrow
              companies, and closing on dozens of their own homes, personally.
              everything is taken serious in her operations and assures that the
              entire process is nothing but the best for both parties. If for
              whatever reason you are unsatisfied with Lucinda's work, please
              never hesitate to contact her DIRECTLY to get the issue resolved.
            </p>
          </li>
          <li>
            <p>
              Want to see how much your property is worth today? Click{" "}
              <b>
                <i>
                  <a href="#offer" class="modal-close">
                    here
                  </a>
                </i>
              </b>{" "}
              for a <b>FREE</b> cash offer!
            </p>
          </li>
        </ul>
      </div>
      <div className="modal-footer offset-m1">
        <i className="material-icons modal-icon medium modal-close pink-text text-lighten-2">
          exit_to_app
        </i>
      </div>
    </div>
  );
}

export default Modal;
