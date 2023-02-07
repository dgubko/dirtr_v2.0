import './Header.css';
import { Route, Routes, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

function Header() {
  return (
    <div className='Header'>
        <div className='banner'>
              <div className='title-border'>
                <h1 className='title'>Dirtr</h1>
              </div>
            </div>
    </div>
  );
}

export default Header;