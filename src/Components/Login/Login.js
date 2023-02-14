import './Login.css';
import { Route, Routes, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logIn, setUser } from "../../actions"
import localUsers from '../../localUsers'

const Login = () => {
  const loginBoolean = useSelector((state) => state.isLogged)
const users = useSelector((state) => state.users.data)
const selectedUser = useSelector((state) => state.selectedUser.data)
const dispatch = useDispatch()
const userButtons = localUsers.map(user => {
  return (
    <button className='user-button' id={user.id} onClick={() => selectAccount(user.id)}>
      {user.name}
    </button>
  )
})

const getUser = (id) => {
  return fetch('http://localhost:3000/api/v1/user?id=' + id, {
  })
    .then(response => response.json())
    .then(data => dispatch(setUser(data)))
    .catch(err => console.log(err))
}

const selectAccount = (id) => {
  getUser(id)
  dispatch(logIn())
}

const enterButton = (<NavLink to='/home'>
  <button className='enter-button'>Log In</button>
  </NavLink>)
  return (
    <div className='Login'>
        <h1 className='login-message'>Choose an account:</h1>
        <div className='account-button-container'>
          {userButtons}
        </div>
        {loginBoolean ? enterButton : ''}
    </div>
  );
}

export default Login;