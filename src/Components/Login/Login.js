import "./Login.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logIn, setUser } from "../../store/actions";
import { getSingleUser } from "../../utilities/apiCalls";
import { localUsers } from "../../utilities/constants";

const Login = () => {
  const loginBoolean = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  const userButtons = localUsers.map((user) => {
    return (
      <button
        className="user-button"
        key={user.id}
        id={user.id}
        onClick={() => selectAccount(user.id)}
      >
        {user.name}
      </button>
    );
  });

  const getUser = (id) => {
    getSingleUser(id)
      .then((data) => dispatch(setUser(data)))
      .catch((err) => console.log(err));
  };

  const selectAccount = (id) => {
    getUser(id);
    dispatch(logIn());
  };

  const enterButton = (
    <NavLink to="/home">
      <button className="enter-button">Log In</button>
    </NavLink>
  );
  return (
    <div className="Login">
      <h1 className="login-message">Choose an account:</h1>
      <div className="account-button-container">{userButtons}</div>
      {loginBoolean ? enterButton : ""}
    </div>
  );
};

export default Login;
