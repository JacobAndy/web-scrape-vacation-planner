import React, { Component } from "react";
import "./landingPage.css";

class landingPage extends Component {
  state = {};
  render() {
    return (
      <div className="Search-Page-holder">
        <input placeholder="Email" />
        <input placeholder="Full Name" />
        <peoplecount className="body-count">
          <h4>How Many People Will Be Joining You?</h4>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
        </peoplecount>
        <hotelroom className="room-count">
          <h4>How Many Rooms For Your Hotel?</h4>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
        </hotelroom>
      </div>
    );
  }
}
export default landingPage;
