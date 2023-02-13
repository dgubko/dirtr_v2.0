import './Header.css';
import { Route, Routes, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const Header = () => {
  const loginBoolean = useSelector((state) => state.isLogged)
  if(loginBoolean) {
    return (
      <div className='Header'>
          <div className='banner'>
                  <NavLink to='/home'>
                      <h1 className='title'>Dirt<span className='title-r'>r</span></h1>
                  </NavLink>
                  <NavLink to='/about'>
                      <h1 className='about-button'>About</h1>
                  </NavLink>
              </div>
      </div>
    );
  }
  if(!loginBoolean) {
    return (
      <div className='Header'>
          <div className='login-banner'>
                      <h1 className='static-title'>Dirt<span className='static-title-r'>r</span></h1>
              </div>
      </div>
    );
  }
}

export default Header;