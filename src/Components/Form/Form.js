export const Form = () => {
  return (
    <div>
      <form>
        <input id="trail-name-input" type="text" placeholder="Search" />
        <select name="difficulty" id="difficulty">
          <option value="difficulty">All difficulties</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="black">Black</option>
        </select>
        <select name="duration" id="duration">
          <option value="duration">Duration</option>
          <option value="2">2</option>
          <option value="5">5</option>
        </select>
      </form>
    </div>
  );
};
