import './Header.css';
import { Route, Routes, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const Header = () => {
  return (
    <div className='Header'>
        <div className='banner'>
              <div className='title-border'>
                <NavLink to='/'>
                    <h1 className='title'>Dirt<span className='title-r'>r</span></h1>
                </NavLink>
              </div>
            </div>
    </div>
  );
}

export default Header;