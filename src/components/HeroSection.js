import React from "react";
import night from "../WebsiteVideos/nightsky.mp4";
import file from "../components/resume2020.pdf";
import save from "file-saver";
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
          onClick={savefile}
        >
          RESUME
        </Button>
      </div>
    </div>
  );
}

const savefile = () => {
  save.saveAs(file, "xien-resume-2020.pdf");
};
export default HeroSection;
