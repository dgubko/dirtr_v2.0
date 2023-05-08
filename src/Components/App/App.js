import "./App.css";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SavedTrails from "../SavedTrails/SavedTrails";
import IndividualTrail from "../IndividualTrail/IndividualTrail";
import Header from "../Header/Header";
import Welcome from "../Welcome/Welcome";
import AboutUs from "../AboutUs/AboutUs";
import AllTrails from "../AllTrails/AllTrails";
import Login from "../Login/Login";
import BadUrl from "../BadUrl/BadUrl";
import {
  getAllUsers,
  getAllTrails,
  getAllCounties,
} from "../../utilities/apiCalls";
import {
  saveAllTrails,
  saveAllCounties,
  assignUsers,
} from "../../store/actions";
import { cleanData } from "../../utilities/cleanData";

function App() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([getAllUsers(), getAllTrails(), getAllCounties()]).then(
      ([usersData, trailsData, countiesData]) => {
        dispatch(assignUsers(usersData));
        dispatch(saveAllTrails(cleanData(trailsData)));
        dispatch(saveAllCounties(cleanData(countiesData)));
      }
    );
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Welcome />} />
        <Route path="/trails" element={<AllTrails />} />
        <Route path="/saved_trails" element={<SavedTrails />} />
        <Route path="/individual_trail" element={<IndividualTrail />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<BadUrl />} />
      </Routes>
    </div>
  );
}

export default App;
