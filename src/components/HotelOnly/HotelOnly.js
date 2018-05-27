import React, { Component } from "react";
import "./HotelOnly.css";

class HotelOnly extends Component {
  state = {};
  render() {
    return (
      <div>
        <button onClick={() => this.props.page("hotelFlag")}>back</button>
        <p>hotel only</p>
      </div>
    );
  }
}
export default HotelOnly;
