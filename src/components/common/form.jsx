import React, { Component } from "react";
import Input from "./input";

class Form extends Component {  

  renderButton(label) {
    return (
      <button className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text") {

    return (
      <Input
        type={type}
        name={name}
        label={label}
      />
    );
  }
}

export default Form;
