import React from "react";
import img1 from "../images/mongodb.png";
import img2 from "../images/express.png";
import img3 from "../images/react.png";
import img4 from "../images/nodejs.png";

function TechStack() {
  return (
    <div className="techStack">
      <div className="skills">
        <img title="Mongodb" src={img1} />
        <img title="expressjs" src={img2} />
        <img title="React" src={img3} />
        <img title="Nodejs" src={img4} />
      </div>
    </div>
  );
}

export default TechStack;
