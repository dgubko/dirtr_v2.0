import { useSearchParams } from "react-router-dom";

export const Form = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event) => {
    const id = event.target.id;
    setSearchParams({ [id]: event.target.value });
  };

  return (
    <div>
      <form>
        <input
          id="name"
          type="text"
          placeholder="Search by name"
          onChange={handleChange}
        />
        <select name="difficulty" id="difficulty" onChange={handleChange}>
          <option value="">All difficulties</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="black">Black</option>
        </select>
        <select name="county_id" id="county" onChange={handleChange}>
          <option value="">All Counties</option>
          <option value="27">Boulder County</option>
          <option value="28">Adams County</option>
        </select>
      </form>
    </div>
  );
};
