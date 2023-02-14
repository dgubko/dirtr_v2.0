import "./App.css"
import React, { useEffect, useState } from "react"
import { Route, Routes, NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { assignUsers, assignTrails } from "../../actions"
import Header from "../Header/Header"
import Welcome from "../Welcome/Welcome"
import AboutUs from "../AboutUs/AboutUs"
import SavedTrails from "../SavedTrails/SavedTrails"
import IndividualTrail from "../IndividualTrail/IndividualTrail"
import AllTrails from "../AllTrails/AllTrails";
import Login from "../Login/Login"
import { Form } from "react-router-dom";
import getData from '../../utilis/apiCalls'

const App = () => {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()

  const instantiateData = () => {
    Promise.all([
      getData('http://localhost:3000/api/v1/users'),
      getData('http://localhost:3000/api/v1/trails')
      //we'll need to set up environment variables here once the BE is deployed.
    ]).then(data => {
        dispatch(assignUsers(data[0]))
        dispatch(assignTrails(data[1]))
    });
  };

  useEffect(() => {
    instantiateData();
  }, []);

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
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Welcome />} />
        <Route path="/trails" element={<AllTrails />} />
        <Route path="/saved_trails" element={<SavedTrails />} />
        <Route path="/individual_trail" element={<IndividualTrail />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  )
}

export default App