import React, { useReducer } from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setTrail, setUser } from "../../actions"
import { postToFavorites } from "../../utilis/apiCalls";

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
  const currentUser = useSelector((state) => state.selectedUser.data);
  const trails = useSelector((state) => state.trails);

  const getUser = (id) => {
    return fetch('http://localhost:3000/api/v1/user?id=' + id, {
    })
      .then(response => response.json())
      .then(data => dispatch(setUser(data)))
      .catch(err => console.log(err))
  }

  const addToFavorites = (propsId) => {
    const foundTrail = trails.find(trail => trail.id === propsId)
    const dupeTrails = currentUser.attributes.trails.filter(trail => trail.id === foundTrail.id)
    if(dupeTrails.length === 0) {
      postToFavorites(foundTrail, currentUser.id)
      .then(() => getUser(currentUser.id))
    } else {
      alert('dupe trail!')
    }
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
        <button className="favorite-button" onClick={() => addToFavorites(props.id)}>
          <div className="heart-image-container" alt="favorite button" />
        </button>
      </div>
    </div>
  );
}

export default Card
