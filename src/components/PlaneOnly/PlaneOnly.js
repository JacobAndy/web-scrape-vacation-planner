import React, { Component } from "react";
import "./PlaneOnly.css";

class PlaneOnly extends Component {
  state = {};
  render() {
    return (
      <div>
        <button onClick={() => this.props.page("planeFlag")}>back</button>
        <p>Plane only</p>
      </div>
    );
  }
}
export default PlaneOnly;
