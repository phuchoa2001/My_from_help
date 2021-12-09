import Styles from "./index.module.css";
import clsx from "clsx";
import { useState } from "react";
import signInCheck from "../../../common/check/SignIn";
const SignIn = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [Error, setError] = useState({
    username: "",
    password: "",
  });
  const [showPasswrod, setShowpassword] = useState(false);
  function handleChange(e) {
    const elem = e.target;
    const value = elem.value;
    const name = elem.name;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    setError((prev) => {
      return {
        ...prev,
        [name]: "",
      };
    });
  }
  function handleBlur(e) {
    const elem = e.target;
    const value = elem.value;
    const name = elem.name;
    const messgerError = signInCheck(name, value);
    setError((prev) => {
      return {
        ...prev,
        [name]: messgerError,
      };
    });
  }
  function handleClick(e) {
    e.preventDefault();
    let Messger = "";
    for (const property in Error) {
      if (Error[property] !== "") {
        Messger = "hãy kiểm tra lại mẫu đăng ký";
        break;
      } else {
        Messger = `Bạn đã đặng nhập với user : ${user.username} - Password : ${user.password}`;
      }
    }
    alert(Messger);
  }
  function handleEye() {
    setShowpassword((prev) => !prev);
  }
  return (
    <form>
      <div className={Styles.form_box}>
        <label htmlFor="exampleInputEmail1" className={Styles.form_label}>
          <i
            className={clsx("fa fa-envelope-o", Styles.form_label_icon)}
            aria-hidden="true"
          ></i>
          Email
        </label>
        <input
          type="username"
          name="username"
          value={user.username}
          className={clsx(Styles.form_input, {
            [Styles.Error]: Error.username !== "" && true,
          })}
          placeholder="Enter your email"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <span id="EmailError" className={Styles.form_error}>
          {Error.username}
        </span>
      </div>
      <div className={Styles.form_box}>
        <label htmlFor="exampleInputEmail1" className={Styles.form_label}>
          <i
            className={clsx("fa fa fa-key", Styles.form_label_icon)}
            aria-hidden="true"
          ></i>
          Password
        </label>
        <div className={Styles.box_input}>
          <input
            type={showPasswrod ? "text" : "password"}
            name="password"
            autoComplete="password"
            value={user.password}
            className={clsx(Styles.form_input, {
              [Styles.Error]: Error.password !== "" && true,
            })}
            placeholder="Enter your email"
            onChange={handleChange}
          />
          <div className={Styles.icon_eye} onClick={handleEye}>
            <i
              className={`fa${showPasswrod ? " fa-eye-slash" : " fa-eye"}`}
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <span id="PasswordError" className={Styles.form_error}>
          {Error.password}
        </span>
      </div>
      <button
        type="submit"
        className={clsx(Styles.btn, Styles.btn_SignIn)}
        onClick={handleClick}
      >
        Sign In
      </button>
    </form>
  );
};

export default SignIn;
