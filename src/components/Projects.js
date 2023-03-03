import React from "react";
import Card from "./Card";
import img1 from "../images/Twitter 1.png";
import img2 from "../images/WelcomeScreen.png";
import img3 from "../images/weatherAppImg.png";
import img4 from "../images/todosImg.png";

function Projects() {
  const cards = [
    {
      source: img1,
      name: "Twitter-Clone",
      description: "Twitter clone made using the MERN stack",
      live: "https://kvarunkk.github.io/Twitter-Frontend/",
      code: "https://github.com/kVarunkk/MERN-Twitter-clone",
      demo: "https://www.youtube.com/watch?v=QyBVz8j9Ago&t=74s",
    },
    {
      source: img2,
      name: "Chat Application",
      description: "Chat app made using React Native",
      live: "",
      code: "https://github.com/kVarunkk/React-Native-chatApp",
      demo: "",
    },
    // {
    //   source: img3,
    //   name: "Weather App",
    //   description: "Weather App made using Node.js",
    //   live: "https://obscure-caverns-30889.herokuapp.com/",
    //   code: "https://github.com/kVarunkk/Weather-App",
    //   demo: "",
    // },
    // {
    //   source: img4,
    //   name: "Task Manager",
    //   description: "Task Manager made using HTML, CSS and JavaScript",
    //   live: "https://kvarunkk.github.io/JS-Task-Manager/",
    //   code: "https://github.com/kVarunkk/JS-Task-Manager",
    //   demo: "",
    // },
  ];

  return (
    <div className="projects">
      <h2 className="heading">Some of my Projects:</h2> <br></br>
      <div className="card-grid">
        {cards.map((card) => {
          return (
            <Card
              source={card.source}
              name={card.name}
              description={card.description}
              live={card.live}
              code={card.code}
              demo={card.demo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
