import "./Welcome.css";
import { NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome-main">
      <h1 className="welcome-message">FIND YOUR PERFECT OFF-ROAD TRAIL</h1>
      <NavLink to="/trails">
        <button className="button-welcome">FIND YOUR TRAIL ▶︎</button>
      </NavLink>
    </div>
  );
};

export default Welcome;
