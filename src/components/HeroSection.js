import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/kg.mov" autoPlay loop muted />
      <h1>Welcome to KYRGYZSTAN</h1>

      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
      <div className="auth">
        <p id="author">Video by Ivan Kornilov - VELES</p>
      </div>
    </div>
  );
}

export default HeroSection;
