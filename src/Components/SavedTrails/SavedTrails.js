import React, { useEffect } from "react";
import "./SavedTrails.css";
import SavedCard from "../SavedCard/SavedCard";
import { getUserSavedTrails } from "../../apiCalls/getUserSavedTrails";
import { useDispatch } from "react-redux";
import { saveAllUserTrails } from "../../actions";
import { useSelector } from "react-redux";

function SavedTrails() {
  const savedTrails = useSelector((state) => state.savedTrails);
  const dispatch = useDispatch();
  const id = useSelector((state) => state.selectedUser.data.id);
  console.log(id);

  useEffect(() => {
    getUserSavedTrails(id).then(({ data }) => {
      dispatch(saveAllUserTrails(data.attributes.trails));
    });
  }, []);

  return (
    <div className="saved-trails">
      <h2 className="saved-trails-title">Saved Trails View</h2>
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
    </div>
  );
}

export default SavedTrails;
