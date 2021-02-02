import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import logo from "./logo.png";
import "./Footer.css";

import { db } from "../firebase";

const Footer = () => {
  const [email, setEmail] = useState("");

  const [loader, setLoader] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        email: email,
      })
      .then(() => {
        alert("You have successfully subscribed!");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
    setEmail("");
  };
  return (
    <div className="footer-container">
      <section className="footer-sub">
        <p className="footer-sub-heading">Subscribe for Blogs!</p>
        <p className="footer-sub-text">You can unsubscribe anytime!</p>
        <div className="input-areas">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About me</h2>
            <Link to="/about">My mission</Link>
            <Link to="/about">Resume</Link>
            <Link to="/about">Education</Link>
            <Link to="/about">Projects</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact me</h2>
            <Link to="/about">Contact</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            {/* <img src={logo} alt="website logo" /> */}
          </div>
          <small className="website-rights">
            Made by Xien Thomas 2021 using React JS
          </small>
          <div className="social-icons">
            <Link className="social-icon-link instagram" to="/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link className="social-icon-link twitch" to="/" target="_blank">
              <FontAwesomeIcon icon={faTwitch} />
            </Link>
            <Link className="social-icon-link facebook" to="/" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
