import React, { Component } from "react";
import "./LandingPage.css";
import HotelAndPlane from "../hotelAndPlane/HotelAndPlane";
import Plane from "../PlaneOnly/PlaneOnly";
import Hotel from "../HotelOnly/HotelOnly";

class LandingPage extends Component {
  state = {
    pageNextFlag: false,
    hotelAndPlaneFlag: false,
    hotelFlag: false,
    planeFlag: false
  };
  pageNextHandle = prop => {
    this.setState({ pageNextFlag: false, [prop]: false });
  };
  render() {
    return (
      <main className="homepage-both-transition">
        <div
          className={
            this.state.pageNextFlag
              ? "LandingPageHolder-true"
              : "LandingPageHolder-false"
          }
        >
          <button
            onClick={() => {
              this.setState({ planeFlag: true, pageNextFlag: true });
            }}
          >
            AirPlane
          </button>
          <button
            onClick={() => {
              this.setState({ hotelFlag: true, pageNextFlag: true });
            }}
          >
            Hotel
          </button>
          <button
            onClick={() =>
              this.setState({ hotelAndPlaneFlag: true, pageNextFlag: true })
            }
          >
            AirPlane and Hotel
          </button>
          <h6>Car Rentals Coming Soon!</h6>
        </div>
        <hotelplaneanimation
          className={
            this.state.hotelAndPlaneFlag
              ? "hotel-plane-animation-true"
              : "hotel-plane-animation-false"
          }
        >
          <HotelAndPlane page={this.pageNextHandle} />
        </hotelplaneanimation>
        <hotelanimation
          className={
            this.state.hotelFlag
              ? "hotel-animation-true"
              : "hotel-animation-false"
          }
        >
          <Hotel page={this.pageNextHandle} />
        </hotelanimation>
        <planeanimation
          className={
            this.state.planeFlag
              ? "plane-animation-true"
              : "plane-animation-false"
          }
        >
          <Plane page={this.pageNextHandle} />
        </planeanimation>
      </main>
    );
  }
}
export default LandingPage;
