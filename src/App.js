import React, { Component } from "react";
import RegisterForm from "./components/registerForm";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="container">
        <RegisterForm />
      </main>
    );
  }
}

export default App;
