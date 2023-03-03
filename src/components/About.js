import React from "react";
import resume from "../RESUME.pdf";

function About() {
  return (
    <div className="about">
      Hi, I'm Varun<br></br> I'm a software developer with professional
      experience of working at <span className="text-gradient">multiple</span>{" "}
      startups<br></br> I usually work with the{" "}
      <span className="text-gradient">MERN</span> stack <br></br> I'm also a
      sophomore at <span className="text-gradient">IIT Kharagpur</span>
      <br></br>
      <br></br>
      <a className="resume-btn" href={resume} download>
        Resume
      </a>
    </div>
  );
}

export default About;
