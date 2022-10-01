import React from "react";
import Card from "./Card";
import img1 from "../images/twitterImg.png";
import img2 from "../images/chatsappImg.png";
import img3 from "../images/weatherAppImg.png";
import img4 from "../images/todosImg.png";

function Projects() {
  const cards = [
    {
      source: img1,
      name: "Twitter-Clone",
      description: "Twitter clone made using the MERN stack",
      live: "",
      code: "https://github.com/kVarunkk/MERN-Twitter-clone",
      demo: "https://www.youtube.com/watch?v=QyBVz8j9Ago&t=74s",
    },
    {
      source: img2,
      name: "WhatsApp-Clone",
      description: "WhatsApp clone made using Socket.io and Node.js",
      live: "https://serene-anchorage-21796.herokuapp.com/",
      code: "https://github.com/kVarunkk/ChatsApp",
      demo: "https://www.youtube.com/watch?v=ajT2sdiahb4",
    },
    {
      source: img3,
      name: "Weather App",
      description: "Weather App made using Node.js",
      live: "https://obscure-caverns-30889.herokuapp.com/",
      code: "https://github.com/kVarunkk/Weather-App",
      demo: "",
    },
    {
      source: img4,
      name: "Task Manager",
      description: "Task Manager made using HTML, CSS and JavaScript",
      live: "https://kvarunkk.github.io/JS-Task-Manager/",
      code: "https://github.com/kVarunkk/JS-Task-Manager",
      demo: "",
    },
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
