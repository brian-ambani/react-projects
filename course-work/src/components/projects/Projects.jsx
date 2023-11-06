import React from "react";
import "./Projects.css";
export default function Projects() {
  return (
    <div className="projects_section">
      <div className="container">
        <div className="latest-projects">
          <h1>
            Latest <span>Projects</span>
          </h1>
          <div className="card">
            <h3>INTERMIDIATE</h3>
            <h1>Web Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatibus, quod, quia, doloremque voluptatum quae doloribus
              voluptatem repellat quibusdam quos nemo. Quisquam voluptatibus,
              quod, quia, doloremque voluptatum quae doloribus voluptatem
              repellat quibusdam quos nemo.
            </p>
          </div>
        </div>
        <div className="popular-projects">
          <h1>
            Popular <span>Projects</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
