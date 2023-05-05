import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";

class Form extends Component {  

  //define state variables
  state = {
    data: {},
    errors: {}
  };  

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;
    
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = e => {
    //prevent default behavior
    e.preventDefault();
    //first check errors by validating form
    const errors = this.validate();
    //set errors object in state
    this.setState({ errors: errors || {} });
    if (errors) return;
    //call submit method in form
    this.doSubmit();
  };

  renderButton(label) {
    return (
      <button className="btn btn-primary">
        {label}
      </button>
    );
  }

  //for rendering textbox components on form
  renderInput(name, label, type, bsClass, disabled) {
    if(type === undefined){type="text"}
    if(bsClass === undefined){bsClass="form-control"}
    const { errors } = this.state;

    //renders a custom component on form
    return (
      <Input
        type={type}
        name={name}        
        label={label}
        bsClass={bsClass}
        disabled={disabled}        
        error={errors[name]}
      />
    );
  }
}

export default Form;
