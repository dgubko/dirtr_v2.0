import "./AllTrails.css";
import Card from "../Card/Card";
import { Form } from "../Form/Form";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

const AllTrails = () => {
  const trails = useSelector((state) => state.trails);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentParams = Object.fromEntries([...searchParams]);

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

  return (
    <div>
      <h1>AllTrails</h1>
      <Form />
      {!trails.length ? (
        <p>Could not load trails</p>
      ) : (
        !filtered.length && <p>No trails found</p>
      )}
      <div className="all-card-container">
        {filtered.map((trail) => {
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
};

export default AllTrails;
