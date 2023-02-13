import React from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Card(props) {
  const county = useSelector((state) =>
    state.counties.find((county) => {
      return county.id === props.countyId.toFixed();
    })
  );

  return (
    <div className="card">
      <NavLink to="/individual_trail">
        <div className="card-top">
          <img src={props.image} className="scenery-image" />
          <div className="trail-county-container">
            <p className="trail-name">{props.name}</p>
            <div className="divider-bar"></div>
            <p className="county-name">{county.name}</p>
          </div>
        </div>
      </NavLink>
      <div className="card-bottom">
        <p className="trail-difficulty">{props.difficulty}</p>
        <p className="trail-distance">{props.distance} miles</p>
        <button className="favorite-button">
          <div className="heart-image-container" />
        </button>
      </div>
    </div>
  );
}

export default Card;
