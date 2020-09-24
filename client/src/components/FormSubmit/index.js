import React from "react";
import "./styles.css";

function FormSubmit(props) {
  return (
    <div class="form-submit" onClick={props.submit}>
      <i class=" large material-icons" title="Submit">
        loyalty
      </i>
    </div>
  );
}

export default FormSubmit;
