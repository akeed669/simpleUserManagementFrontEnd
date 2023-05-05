import React from "react";
import Form from "./common/form";

class RegisterForm extends Form {  

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form>
          {this.renderInput("email", "Email")}
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
