import React, { useState } from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { postToFavorites, deleteFromFavorites } from "../../utilities/apiCalls";

function Card(props) {
  const { county, currentUserId, isLogged, favoriteTrails } = useSelector(
    (state) => ({
      county: state.counties.find(
        (county) => county.id === props.countyId.toFixed()
      ),
      currentUserId: state.selectedUser && state.selectedUser.id,
      isLogged: state.session.isLogged,
      favoriteTrails: state.favoriteTrails,
    })
  );

  const [error, setError] = useState(null);

  const isFavorite = favoriteTrails.find((trail) => trail.id === props.id);

  const toggleFavorites = () => {
    if (!isFavorite) {
      postToFavorites(props.id, currentUserId).catch((err) =>
        setError({
          action: "Add to favorite",
          message: err.message,
        })
      );
    } else {
      deleteFromFavorites(props.id, currentUserId).catch((err) =>
        setError({
          action: "Remove from favorite",
          message: err.message,
        })
      );
    }
  };

  return (
    <div className="card">
      {error && (
        <p className="error-message">{`Error occur on action "${error.action}": ${error.message}`}</p>
      )}
      <NavLink to={`/individual_trail/${props.id}`}>
        <div className="card-top">
          <img
            src={props.image}
            className="scenery-image"
            alt={`scenery of ${props.name} trail`}
          />
          <div className="trail-county-container">
            <p className="trail-name">{props.name}</p>
            <div className="divider-bar"></div>
            <p className="county-name">{county ? county.name : "Unknown"}</p>
          </div>
        </div>
      </NavLink>
      <div className="card-bottom">
        <p className="trail-difficulty">{props.difficulty}</p>
        <p className="trail-distance">{props.distance} miles</p>
        {isLogged && (
          <button className="favorite-button" onClick={toggleFavorites}>
            <div className="heart-image-container" alt="favorite button" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
