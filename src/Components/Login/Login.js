import './Login.css';
import { Route, Routes, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logToggle, setUser } from "../../actions"
import localUsers from '../../localUsers'

const Login = () => {
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

const getData = (id) => {
  return fetch('http://localhost:3000/api/v1/user?id=' + id, {
  })
    .then(response => response.json())
    .then(data => dispatch(setUser(data)))
    .catch(err => console.log(err))
}

const selectAccount = (id) => {
  getData(id)
  dispatch(logToggle())
}
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