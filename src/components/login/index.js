import Styles from "./index.module.css";
import clsx from "clsx";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import SignIn from "./signIn";
import SignUp from "./signUp";
const Login = ({history}) => {
  function handleLogin() {
      history.push('/')
  }
  function handleDiglog(event) {
    event.stopPropagation();
  }
  return (
    <div className={Styles.login} onClick={handleLogin}>
      <div className={Styles.diglog} onClick={handleDiglog}>
        <div className={Styles.box}>
          <div className={Styles.bar}>
            <div className={Styles.Btn_Home}>
              <Link to="/">
                <i
                  className={clsx("fa fa-home fa-2x", Styles.icon)}
                  aria-hidden="true"
                ></i>
              </Link>
            </div>
            <div className={Styles.Box_login}>
              <NavLink
                to="/signIn"
                className={Styles.BTN_Login}
                activeClassName={Styles.active}
              >
                SIGN IN
                <span className={Styles.line}></span>
              </NavLink>
              <NavLink
                to="/signUp"
                className={Styles.BTN_Login}
                activeClassName={Styles.active}
              >
                SIGN UP
                <span className={Styles.line}></span>
              </NavLink>
            </div>
          </div>
          <Switch>
            <Route exact path="/signIn">
              <SignIn />
            </Route>
            <Route exact path="/signUp">
              <SignUp />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
