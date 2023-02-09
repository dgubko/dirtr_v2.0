import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="image-button-container">
        <img src={props.image} />
      </div>
      <div className="card-info">
        <p className="trail-difficulty">{props.difficulty}</p>
        <p className="trail-name">{props.name}</p>
        <p className="county-name">{props.county}</p>{" "}
        <p className="trail-distance">{props.distance} miles</p>
      </div>
      <div className="distance-difficulty-container">
        <button>❤️</button>
      </div>
    </div>
  );
}

export default Card;
