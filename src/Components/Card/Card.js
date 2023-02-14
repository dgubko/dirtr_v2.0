import React, { useReducer } from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setTrail } from "../../actions"

function Card(props) {
  const county = useSelector((state) =>
    state.counties.find((county) => {
      return county.id === props.countyId.toFixed();
    })
  );
  const dispatch = useDispatch()

  const selectTrail = (id) => {
    return fetch('http://localhost:3000/api/v1/trail?id=' + id, {
    })
      .then(response => response.json())
      .then(data => dispatch(setTrail(data)))
      .catch(err => console.log(err))
  }

  return (
    <div className="card">
      <NavLink to="/individual_trail">
        <div className="card-top" onClick={() => selectTrail(props.id)}>
          <img
            src={props.image}
            className="scenery-image"
            alt="scenery image"
          />
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
          <div className="heart-image-container" alt="favorite button" />
        </button>
      </div>
    </div>
  );
}

export default Card;
