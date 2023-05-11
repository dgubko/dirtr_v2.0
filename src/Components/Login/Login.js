import "./Login.css";
import { NavLink, redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAllFavorites, logIn, setUser } from "../../store/actions";
import { getSingleUser } from "../../utilities/apiCalls";
import { localUsers } from "../../utilities/constants";
import { useEffect } from "react";

const Login = () => {
  const isLogged = useSelector((state) => state.session.isLogged);

  const dispatch = useDispatch();
  const userButtons = localUsers.map((user) => {
    return (
      <button
        className="user-button"
        key={user.id}
        id={user.id}
        onClick={() => getUser(user.id)}
      >
        {user.name}
      </button>
    );
  });

  const getUser = (id) => {
    getSingleUser(id)
      .then(({ data }) => {
        dispatch(setUser({ id: data.id, name: data.attributes.name }));
        dispatch(addAllFavorites(data.attributes.trails));
        dispatch(logIn(data.id));
        window.location.href = "/trails";
      })
      .catch((err) => console.log(err));
  };

  const enterButton = (
    <NavLink to="/home">
      <button className="enter-button">Log In</button>
    </NavLink>
  );

  useEffect(() => {
    if (isLogged) {
      redirect("/");
    }
  }, [isLogged]);

  return (
    <div className="Login">
      <h1 className="login-message">Choose an account:</h1>
      <div className="account-button-container">{userButtons}</div>
    </div>
  );
};

export default Login;
