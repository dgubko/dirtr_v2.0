import React from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { postToFavorites } from "../../utilis/apiCalls";

function Card(props) {
  const county = useSelector((state) =>
    state.counties.find((county) => {
      return county.id === props.countyId.toFixed();
    })
  );
  const currentUser = useSelector((state) => state.selectedUser);
  const trails = useSelector((state) => state.trails);

  const addToFavorites = (propsId) => {
    const foundTrail = trails.find(trail => trail.id === propsId)
    postToFavorites(foundTrail, currentUser.data.id)
    // .then(response => {
    //   this.setState({orders: [...this.state.orders, response]})
    // })
  }

  return (
    <div className="card">
      <NavLink to="/individual_trail">
        <div className="card-top">
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
        <button className="favorite-button" onClick={() => addToFavorites(props.id)}>
          <div className="heart-image-container" alt="favorite button" />
        </button>
      </div>
    </div>
  );
}

export default Card;
