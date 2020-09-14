import React from "react";
import night from "../WebsiteVideos/nightsky.mp4";
import { Button } from "./Button";
import "../App.css";
import "./HeroSection.css";
function HeroSection() {
  return (
    <div className="hero-container">
      <video src={night} autoPlay loop muted />
      <h1>CREATION</h1>
      <div className="hero-btns">
        <Button
          classname="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          RESUME
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
