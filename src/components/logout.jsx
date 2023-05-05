import { Component } from "react";
import auth from "../services/authService";

class Logout extends Component {
  componentDidMount() {
    //call service function to logout as user
    auth.logout();
    console.log('logged out!')
    //redirect to home for unlogged users
    window.location = "/";
  }
  render() {
    // return null;
    return <h1>you have been logged out </h1>
  }
}

export default Logout;
