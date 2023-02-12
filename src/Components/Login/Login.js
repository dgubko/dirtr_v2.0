import './Login.css';
import { Route, Routes, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logToggle } from "../../actions"

const Login = () => {
const users = useSelector((state) => state.users)

  return (
    <div className='Login'>
        <h1 className='login-message'>Choose an account:</h1>
        <div className='account-button-container'>

        </div>
    </div>
  );
}

export default Login;