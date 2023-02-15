import React, { useReducer } from "react";
import "../Card/Card.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setTrail, setUser } from "../../actions";
import { deleteFromFavorites } from "../../utilis/apiCalls";

function SavedCard(props) {
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
  const currentUser = useSelector((state) => state.selectedUser.data);
  const trails = useSelector((state) => state.trails);

  const getUser = (id) => {
    return fetch('http://localhost:3000/api/v1/user?id=' + id, {
    })
      .then(response => response.json())
      .then(data => dispatch(setUser(data)))
      .catch(err => console.log(err))
  }

  const removeFromFavorites = (propsId) => {
      deleteFromFavorites(propsId, currentUser.id)
      .then(() => getUser(currentUser.id))
      .then(() => document.location.reload())
  }

  return (
    <div className="card" id={props.id}>
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
            <p className="county-name">{county ? county.name : "Unknown"}</p>
          </div>
        </div>
      </NavLink>
      <div className="card-bottom">
        <p className="trail-difficulty">{props.difficulty}</p>
        <p className="trail-distance">{props.distance} miles</p>
        <button className="delete-button" onClick={() => removeFromFavorites(props.id)}>
            <div className="trash-image-container" alt="delete button" />
        </button>
      </div>
    </div>
  );
}

export default SavedCard
