import React from "react";
import { CiBoxList } from "react-icons/ci";
import { BiTime } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero_content">
          <h4>Flin Tech</h4>
          <h1>
            Web Development Projects For Every <span>Business</span>
          </h1>
          <p>
            Leading web development company dedicated to turning your digital
            dreams into reality.
          </p>
          <a className="btn" href="#">
            Get Started
          </a>
        </div>
        <div className="hero_stats">
          <div className="hero_stats_item">
            <CiBoxList className="icon" />
            <h1>10+</h1>
            <p>Projects Completed</p>
          </div>
          <div className="hero_stats_item">
            <BiTime className="icon" />
            <h1>2 years+</h1>
            <p>Experience</p>
          </div>
          <div className="hero_stats_item">
            <IoIosPeople className="icon" />
            <h1>20+</h1>
            <p>Positive Feedback</p>
          </div>
        </div>
      </div>
    </div>
  );
}
