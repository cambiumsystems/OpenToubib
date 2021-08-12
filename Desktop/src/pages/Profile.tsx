import React from "react";
import { Link } from "react-router-dom";

export default class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Doctor. This is your space</h1>
        <Link to="/">Go back to home</Link>
        <div>

        </div>
      </div>
    );
  }
}
