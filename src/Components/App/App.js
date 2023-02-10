import "./App.css"
import { Route, Routes, NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../../actions"
import Header from "../Header/Header"
import Welcome from "../Welcome/Welcome"
import AboutUs from "../AboutUs/AboutUs"
import SavedTrails from "../SavedTrails/SavedTrails"
import IndividualTrail from "../IndividualTrail/IndividualTrail"
import AllTrails from "../AllTrails/AllTrails";
import Login from "../Login/Login"
import { Form } from "react-router-dom";

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

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