import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import RegisterForm from "./components/registerForm";
import LoginForm from "./components/loginForm";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="container">
          {/*render all the routes*/}
          <Routes>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
          </Routes>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
