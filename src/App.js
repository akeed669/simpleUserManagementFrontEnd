import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import RegisterForm from "./components/registerForm";
import LoginForm from "./components/loginForm";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="container">
        {/*render all the routes*/}
        <Routes>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
        </Routes>
      </main>
    );
  }
}

export default App;
