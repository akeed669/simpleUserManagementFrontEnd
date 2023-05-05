import React from "react";
import Form from "./common/form";

class LoginForm extends Form {   

  render() {    
    //render login form
    return (
      <div>
        <h1>Login</h1>
        <form>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
