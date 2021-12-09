import Styles from "./index.module.css";
import { NavLink  , Route } from "react-router-dom";
import Login from "../login";
function Home() {
  return (
    <div className={Styles.box}>
      <NavLink className={Styles.btn} to="/signIn">
        Sign In
      </NavLink>
      <Route exact path="/:signIn">
        <Login />
      </Route>
    </div>
  );
}

export default Home;
