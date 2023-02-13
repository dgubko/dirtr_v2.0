import './Login.css';
import { Route, Routes, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logToggle } from "../../actions"

const Login = () => {
const users = useSelector((state) => state.users.data)
const userButtons = users.map(user => {
  return (
    <button className='user-button' id={user.attributes.name}>
      {user.attributes.name}
    </button>
  )
})
  return (
    <div className='Login'>
        <h1 className='login-message'>Choose an account:</h1>
        <div className='account-button-container'>
          {userButtons}
        </div>
    </div>
  );
}

export default Login;