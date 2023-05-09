import React from "react";
import AboutButton from "../AboutButton/AboutButton";
import "./IndividualTrail.css";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../store/actions";
import { getSingleUser, postToFavorites } from "../../utilities/apiCalls";

function IndividualTrail() {
  const selectedTrail = useSelector(
    (state) => state.selectedTrail.data.attributes
  );
  const currentUser = useSelector((state) => state.selectedUser.data);
  const trails = useSelector((state) => state.trails);
  const dispatch = useDispatch();

  const getUser = (id) => {
    getSingleUser(id)
      .then((data) => dispatch(setUser(data)))
      .catch((err) => console.log(err));
  };

  const addToFavorites = (trailId) => {
    const foundTrail = trails.find((trail) => trail.id === trailId);
    const dupeTrails = currentUser.attributes.trails.filter(
      (trail) => trail.id === foundTrail.id
    );
    if (dupeTrails.length === 0) {
      postToFavorites(trailId, currentUser.id).then(() =>
        getUser(currentUser.id)
      );
    } else {
      alert("dupe trail!");
    }
  };

  const favoriteButton = (
    <button
      className="favorite-button"
      onClick={() => addToFavorites(selectedTrail.id)}
    >
      <div className="heart-image-container" alt="favorite button" />
    </button>
  );

  return (
    <div className="IndividualTrail">
      <h2 className="individual-trail-name">{selectedTrail.name}</h2>
      <div className="description-top">
        <div className="description-top-left">
          {favoriteButton}
          <div className="description-top-left-box">
            <p className="trail-distance">
              Distance: {selectedTrail.distance} miles
            </p>
            <p className="trail-duration">
              Duration:{" "}
              {selectedTrail.avg_duration ? selectedTrail.avg_duration : "N/A"}
            </p>
            <p className="trail-elevation">
              Elevation: {selectedTrail.start_elevation}
            </p>
            <p className="trail-difficulty">
              Difficulty: {selectedTrail.difficulty}
            </p>
          </div>
        </div>
        <div className="description-top-right">
          <img
            className="trail-image"
            alt={selectedTrail.name + " map"}
            src={selectedTrail.map_image}
          />
        </div>
      </div>
      <div className="description-bottom">
        <p className="trail-overview">{selectedTrail.description}</p>
      </div>
      <AboutButton />
    </div>
  );
}

export default IndividualTrail;
