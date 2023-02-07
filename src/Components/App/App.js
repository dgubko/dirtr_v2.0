import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../../Components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
