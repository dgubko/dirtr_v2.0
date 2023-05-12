import React from "react";
import "./SavedTrails.css";
import Card from "../Card/Card";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function SavedTrails() {
  const savedTrails = useSelector((state) => state.favoriteTrails);

  if (!savedTrails.length) {
    return (
      <div className="no-trails-message">
        <h2 className="saved-trails-title">
          No trails saved. Go favorite some!
        </h2>
        <NavLink to="/trails">
          <button className="view-all-trails">View All Trails</button>
        </NavLink>
      </div>
    );
  } else {
    return (
      <div className="saved-trails">
        <h2 className="saved-trails-title">Saved Trails:</h2>
        <div className="saved-trails-card-container">
          {savedTrails.map((trail) => {
            return (
              <Card
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
      </div>
    );
  }
}

export default SavedTrails;
