import React from "react";
import { Link } from "react-router-dom";

export default class Profile extends React.Component {
  render() {
    return (
      <div>
         <button type="button" style={{position: "absolute", top: "0px",right: "0px",}}>
        Modify
        </button>
        <h1>Hello Doctor. This is your space</h1>
        <Link to="/">Go back to home</Link>
        <div>

        </div>
      </div>
    );
  }
}
