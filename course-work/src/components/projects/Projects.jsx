import React from "react";
import "./Projects.css";
export default function Projects() {
  return (
    <div className="project_section">
      <div className="container">
        <div className="latest-projects">
          <h1 className="card-title">
            Latest <span>Projects</span>
          </h1>
          <div className="cards">
            <div className="card">
              <div className="card-content">
                <h3>
                  <span>INTERMIDIATE</span>
                </h3>
                <h1>Web Development</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3>
                  <span>INTERMIDIATE</span>
                </h3>
                <h1>Web Development</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3>
                  <span>INTERMIDIATE</span>
                </h3>
                <h1>Web Development</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="popular-projects">
          <h1 className="card-title">
            Popular <span>Projects</span>
          </h1>
          <div className="cards">
            <div className="card">
              <div className="card-content">
                <h3>
                  <span>INTERMIDIATE</span>
                </h3>
                <h1>Web Development</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3>
                  <span>INTERMIDIATE</span>
                </h3>
                <h1>Web Development</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3>
                  <span>INTERMIDIATE</span>
                </h3>
                <h1>Web Development</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="btn" href="">
        Show More
      </a>
    </div>
  );
}
