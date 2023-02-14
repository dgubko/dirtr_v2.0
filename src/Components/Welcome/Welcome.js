import "./Welcome.css";
import AboutButton from "../AboutButton/AboutButton";
import { NavLink } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className="welcome-main">
      <h1 className="welcome-message">FIND YOUR PERFECT OFFROAD TRAIL</h1>
        <NavLink to="/trails">
          <button className="button-welcome">
            FIND YOUR TRAIL ▶︎
          </button>
        </NavLink>
        <AboutButton />
    </div>
  );
}

export default Welcome
