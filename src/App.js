import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import NavBar from "./components/navBar";
import RegisterForm from "./components/registerForm";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import auth from "./services/authService";

class App extends Component {
  state = {};

  componentDidMount() {
    //get the logged in user from storage
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const user = auth.getCurrentUser();
    console.log(user);

    return (
      <>
        <ToastContainer />
        {/*render a navbar*/}
        <NavBar user={user} />
        <main className="container">
          <Routes>
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/home" element={<h1>you are home</h1>} />
            <Route path="/" element={<h1>Welcome to user management!</h1>} />
          </Routes>
        </main>
      </>
    );
  }
}

export default App;
