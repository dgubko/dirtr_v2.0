import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { logOut, setUser } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const isLogged = useSelector((state) => state.isLogged);
  const selectedUser = useSelector((state) => state.selectedUser.data);
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(logOut());
    dispatch(setUser({ data: { attributes: { name: "signed-out" } } }));
  };

  const checkIsActive = ({ isActive }) =>
    isActive ? styles.activelink : styles.navlink;

  return (
    <header className={styles.header}>
      <div className={styles.banner}>
        <NavLink to="/" className={styles.logo}>
          Dirt<span>r</span>
        </NavLink>
      </div>
      <nav className={styles.navigation}>
        <NavLink className={checkIsActive} to="/trails">
          All Trails
        </NavLink>
        {isLogged && (
          <NavLink className={checkIsActive} to="/saved_trails">
            Favorites
          </NavLink>
        )}
        <NavLink to="/about" className={checkIsActive}>
          About Us
        </NavLink>
      </nav>
      {isLogged ? (
        <div className={styles.account}>
          <p>
            Welcome, <strong>{selectedUser.attributes.name}</strong>
          </p>
          <NavLink to="/">
            <button className="sign-out" onClick={() => signOut()}>
              Sign Out
            </button>
          </NavLink>
        </div>
      ) : (
        <NavLink to="/login" className="button secondary-button">
          Sign In
        </NavLink>
      )}
    </header>
  );
};

export default Header;
