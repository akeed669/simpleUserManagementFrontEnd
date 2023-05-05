import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";

class RegisterForm extends Form {  

  //state variables to hold input and errors
  state = {
    data: { name:"", username: "", password: "", dob:"" ,
    telephone:"" ,designation:"", role:"" },
    errors: {}
  };

  //schema to validate register form
  schema = {
    name: Joi.string().min(5).max(50).required().label("Name"),
    username: Joi.string().min(5).max(255).required().email().label("Email"),
    password: Joi.string().min(5).max(255).required().label("Password"),
    dob:Joi.date().less(new Date().toLocaleDateString()).required().label("Date of Birth"),
    telephone:Joi.string().min(10).max(10).required().label("Telephone"),
    designation:Joi.string().min(10).max(25).required().label("Designation"),
    role:Joi.string().min(5).max(5).label("Role"),
  };

  doSubmit = async () => {       
    await userService.register(this.state.data);      
  };

  render() {
    //render register form
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderInput("dob", "Date of Birth","date")}
          {this.renderInput("telephone", "Telephone")}
          {this.renderInput("designation", "Designation")}
          {this.renderInput("role", "Role")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
