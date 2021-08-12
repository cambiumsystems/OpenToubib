import React from "react";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Is this your first time? Please insert your info!</h1>
        <Link to="/">Go back to home</Link>
        <div>

        </div>
      </div>
    );
  }
}
