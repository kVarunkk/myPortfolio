import React from "react";
import resume from "../RESUME.pdf";

function About() {
  return (
    <div className="about">
      I'm Varun, SDE Intern at{" "}
      <a target="_blank" href="https://parentheses.co.in/">
        parentheses
      </a>
      .<br></br>I'm a{" "}
      <span className="text-gradient">Full-Stack Developer</span> & UG at IIT
      Kharagpur.
      <br></br>
      <br></br>
      <a className="resume-btn" href={resume} download>
        Resume
      </a>
    </div>
  );
}

export default About;
