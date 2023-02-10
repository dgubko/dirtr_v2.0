import "./AllTrails.css";
import { useEffect } from "react";
import { useState } from "react";
import mocktrails from "../../mock-data/alltrails.json";
import Card from "../Card/Card";
import { Form } from "../Form/Form";

const AllTrails = () => {
  const [trails, setTrails] = useState([]);
  const [county, setCounty] = useState("");

  const getAllTrails = (mocktrails) => {
    setTrails(mocktrails.data.attributes.trails);
    setCounty(mocktrails.data.attributes.name);
  };

  useEffect(() => {
    getAllTrails(mocktrails);
  }, []);

  return (
    <div>
      <h1>AllTrails</h1>
      <Form />
      <div className="all-card-container">
        {trails.map((trail) => {
          return (
            <Card
              key={trail.id}
              name={trail.name}
              county={county}
              distance={trail.distance}
              difficulty={trail.difficulty}
              image={trail.thumbnail_image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllTrails