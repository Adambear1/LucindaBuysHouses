import React from "react";
import "./styles.css";

function FormSubmit(props) {
  return (
    <div class="form-submit">
      <button type="submit" onSubmit={props.submit}>
        <i class="large material-icons center-align center" title="Submit">
          loyalty
        </i>
      </button>
    </div>
  );
}

export default FormSubmit;
