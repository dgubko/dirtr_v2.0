import React, { useEffect } from "react";
import "./SavedTrails.css";
import SavedCard from "../SavedCard/SavedCard";
import { NavLink } from "react-router-dom";
import AboutButton from "../AboutButton/AboutButton";
import { getSingleUser } from "../../utilities/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { saveAllUserTrails } from "../../actions";

function SavedTrails() {
  const savedTrails = useSelector((state) => state.savedTrails);
  const dispatch = useDispatch();
  const id = useSelector((state) => state.selectedUser.data.id);

  useEffect(() => {
    getSingleUser(id)
      .then(({ data }) => {
        dispatch(saveAllUserTrails(data.attributes.trails));
      });
  }, []);

  if (savedTrails.length === 0) {
    return (<div className="no-trails-message">
      <h2 className="saved-trails-title">No trails saved. Go favorite some!</h2>
      <NavLink to='/trails'>
        <button className="view-all-trails">View All Trails</button>
      </NavLink>
      <AboutButton />
    </div>)
  } else {
    return (
      <div className="saved-trails">
        <h2 className="saved-trails-title">Saved Trails:</h2>
        <div className="saved-trails-card-container">
          {savedTrails.map((trail) => {
            return (
              <SavedCard
                key={trail.id}
                id={trail.id}
                name={trail.name}
                countyId={trail.county_id}
                distance={trail.distance}
                difficulty={trail.difficulty}
                image={trail.thumbnail_image}
              />
            );
          })}
        </div>
        <AboutButton />
      </div>
    );
  }
}

export default SavedTrails;
