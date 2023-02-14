import "./Header.css";
import { Route, Routes, NavLink } from "react-router-dom";
import { logOut, setUser } from "../../actions";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const loginBoolean = useSelector((state) => state.isLogged);
  const selectedUser = useSelector((state) => state.selectedUser.data);
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(logOut());
    dispatch(setUser({ data: { attributes: { name: "signed-out" } } }));
  };

  if (loginBoolean) {
    return (
      <div className="Header">
        <div className="banner">
          <NavLink to="/home">
            <h1 className="title">
              Dirt<span className="title-r">r</span>
            </h1>
          </NavLink>
          <div className="header-right">
            <NavLink to="/saved_trails">
              <h1 className="about-button">Favorites</h1>
            </NavLink>
            <NavLink to="/about">
              <h1 className="about-button">About</h1>
            </NavLink>
            <div className="account-section">
              <h1 className="welcome-user">
                Welcome,{" "}
                {selectedUser.attributes.name !== "signed-out"
                  ? selectedUser.attributes.name
                  : ""}
              </h1>
              <NavLink to="/">
                <button className="sign-out" onClick={() => signOut()}>
                  Sign Out
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (!loginBoolean) {
    return (
      <div className="Header">
        <div className="login-banner">
          <h1 className="static-title">
            Dirt<span className="static-title-r">r</span>
          </h1>
        </div>
      </div>
    );
  }
};

export default Header;
