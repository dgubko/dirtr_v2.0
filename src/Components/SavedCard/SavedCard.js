import React from "react";
import "../Card/Card.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setTrail, setUser } from "../../store/actions";
import {
  getSingleTrail,
  getSingleUser,
  deleteFromFavorites,
} from "../../utilities/apiCalls";

function SavedCard(props) {
  const county = useSelector((state) =>
    state.counties.find((county) => {
      return county.id === props.countyId.toFixed();
    })
  );
  const dispatch = useDispatch();

  const selectTrail = (id) => {
    getSingleTrail(id)
      .then((data) => dispatch(setTrail(data)))
      .catch((err) => console.log(err));
  };
  const currentUser = useSelector((state) => state.selectedUser.data);

  const getUser = (id) => {
    getSingleUser(id)
      .then((data) => dispatch(setUser(data)))
      .catch((err) => console.log(err));
  };

  const removeFromFavorites = (propsId) => {
    deleteFromFavorites(propsId, currentUser.id)
      .then(() => getUser(currentUser.id))
      .then(() => document.location.reload());
  };

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
        <button
          className="delete-button"
          onClick={() => removeFromFavorites(props.id)}
        >
          <div className="trash-image-container" alt="delete button" />
        </button>
      </div>
    </div>
  );
}

export default SavedCard;
