import "./AboutButton.css";
import { Route, Routes, NavLink } from "react-router-dom";

function AboutButton() {
  
  return (
    <div className="AboutButton">
        <NavLink to='/about'>
            <h1 className='about-button'>About</h1>
        </NavLink>
    </div>
  );
}

export default AboutButton;
