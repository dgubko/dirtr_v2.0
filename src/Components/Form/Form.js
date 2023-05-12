import "./Form.css";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const Form = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentParams = Object.fromEntries([...searchParams]);
  const counties = useSelector((state) => state.counties);

  const handleChange = (event) => {
    searchParams.set(event.target.id, event.target.value);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <form className="filter-form">
        <input
          className="name-field"
          id="name"
          type="text"
          placeholder="Search by name"
          onChange={handleChange}
          value={currentParams.name || ""}
        />
        <select
          className="difficulty-field"
          name="difficulty"
          id="difficulty"
          onChange={handleChange}
          value={currentParams.difficulty || ""}
        >
          <option value="">All Difficulties</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="black">Black</option>
        </select>
        <select
          className="county-field"
          name="county_id"
          id="county"
          onChange={handleChange}
          value={currentParams.county || ""}
        >
          <option value="">All Counties</option>
          {counties.map((county) => {
            return (
              <option key={county.id} value={county.id}>
                {county.name}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
};
