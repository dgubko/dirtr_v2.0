import "./AllTrails.css";
import { useEffect } from "react";
import { useState } from "react";
import mocktrails from "../../mock-data/alltrails.json";
import Card from "../Card/Card";
import { Form } from "../Form/Form";
import { useSearchParams } from "react-router-dom";

const AllTrails = () => {
  const [trails, setTrails] = useState([]);
  const [county, setCounty] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const currentParams = Object.fromEntries([...searchParams]);
  const getAllTrails = (mocktrails) => {
    setTrails(mocktrails.data.attributes.trails);
    setCounty(mocktrails.data.attributes.name);
  };

  const filtered = trails.filter((trail) => {
    const name = currentParams.name ? currentParams.name.toLowerCase() : "";
    const nameMatches = trail.name.toLowerCase().includes(name);
    const difficulty = currentParams.difficulty || "";
    const difficultyMatches = trail.difficulty.includes(difficulty);
    const countyMatches =
      !currentParams.county ||
      trail.county_id === parseInt(currentParams.county);
    return nameMatches && difficultyMatches && countyMatches;
  });

  useEffect(() => {
    getAllTrails(mocktrails);
  }, []);

  return (
    <div>
      <h1>AllTrails</h1>
      <Form />
      <div className="all-card-container">
        {filtered.map((trail) => {
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