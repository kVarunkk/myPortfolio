import React from "react";

function Card(props) {
  return (
    <div className="card ">
      {/* <div className="blur"></div> */}
      {/* <div className="card-content"> */}
      <img src={props.source}></img>
      <article>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </article>
      <div className="buttons-div">
        {props.live && (
          <a target="_blank" href={props.live}>
            Live
          </a>
        )}
        {props.code && (
          <a target="_blank" href={props.code}>
            Source Code
          </a>
        )}
        {props.demo && (
          <a target="_blank" href={props.demo}>
            Demo Video
          </a>
        )}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Card;
