import React, { Component } from "react";
import "./App.css";
import HotelAndPlane from "./components/hotelAndPlane/HotelAndPlane";
import LandingPage from "./components/LandingPage/LandingPage";

class App extends Component {
  render() {
    return (
      <main>
        <LandingPage />
      </main>
    );
  }
}

export default App;
