import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, saveAllCounties } from "../../actions";
import Header from "../../Components/Header/Header";
import Welcome from "../Welcome/Welcome";
import AboutUs from "../AboutUs/AboutUs";
import SavedTrails from "../SavedTrails/SavedTrails";
import IndividualTrail from "../IndividualTrail/IndividualTrail";
import AllTrails from "../AllTrails/AllTrails";
import { Form } from "react-router-dom";
import { useEffect } from "react";
import { getAllTrails } from "../../apiCalls/getAllTrails";
import { getAllCounties } from "../../apiCalls/getAllCounties";
import { saveAllTrails } from "../../actions";
import { cleanData } from "../../utilities/cleanData";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([getAllTrails(), getAllCounties()]).then(
      ([trailsData, countiesData]) => {
        dispatch(saveAllTrails(cleanData(trailsData)));
        dispatch(saveAllCounties(cleanData(countiesData)));
      }
    );
  });

  return (
    <div className="App">
      <Header />
      {/* <h1 className="counter">Counter: {counter}</h1>
      <button className="+" onClick={() => dispatch(increment(1))}>
        +
      </button>
      <button className="-" onClick={() => dispatch(decrement(1))}>
        -
      </button> */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/trails" element={<AllTrails />} />
        <Route path="/saved_trails" element={<SavedTrails />} />
        <Route path="/individual_trail" element={<IndividualTrail />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
