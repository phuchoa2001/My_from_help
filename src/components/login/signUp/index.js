import Styles from "./index.module.css";
import clsx from "clsx";
import { useState } from "react";
import signUpCheck from "../../../common/check/SignUp";
const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    retypepassword: "",
  });
  const [checkBox, setCheckBox] = useState(false);
  const [Error, setError] = useState({
    username: "",
    password: "",
    email: "",
    retypepassword: "",
  });
  const [shows, setShows] = useState({
    password: false,
    retypepassword: false,
  });
  function handleCheckBox() {
    setCheckBox((prev) => !prev);
  }
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
    let messgerError;
    if (name === "password" || name === "retypepassword") {
      if (user.password !== "" && user.retypepassword !== "") {
        messgerError = signUpCheck(
          "password",
          user.password,
          user.retypepassword
        );
      } else {
        return "";
      }
    } else {
      messgerError = signUpCheck(name, value);
    }
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
        Messger = `Bạn đã đăng ký với user : ${user.username} - Password : ${user.password}`;
      }
    }
    if (!checkBox) {
      Messger = "Bạn không chấp nhận điều khoản của chúng tôi";
    }
    alert(Messger);
  }
  function handleEye(e) {
    const name = e.target.getAttribute("name");
    setShows((prev) => {
      return {
        ...prev,
        [name]: !prev[name],
      };
    });
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
          type="email"
          name="email"
          value={user.email}
          className={clsx(Styles.form_input, {
            [Styles.Error]: Error.email !== "" && true,
          })}
          placeholder="Enter your email"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <span id="EmailError" className={Styles.form_error}>
          {Error.email}
        </span>
      </div>
      <div className={Styles.form_box}>
        <label htmlFor="exampleInputEmail1" className={Styles.form_label}>
          <i
            className={clsx("fa fa-user-o", Styles.form_label_icon)}
            aria-hidden="true"
          ></i>
          Username
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
        <span id="UsernameError" className={Styles.form_error}>
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
            type={shows.password ? "type" : "password"}
            autoComplete="password"
            name="password"
            value={user.password}
            className={clsx(Styles.form_input, {
              [Styles.Error]: Error.password !== "" && true,
            })}
            placeholder="Enter your email"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className={Styles.icon_eye} onClick={handleEye}>
            <i
              className={`fa${shows.password ? " fa-eye-slash" : " fa-eye"}`}
              aria-hidden="true"
              name="password"
            ></i>
          </div>
        </div>
        <span id="PasswordError" className={Styles.form_error}>
          {Error.password}
        </span>
      </div>
      <div className={Styles.form_box}>
        <label htmlFor="exampleInputEmail1" className={Styles.form_label}>
          <i
            className={clsx("fa fa fa-key", Styles.form_label_icon)}
            aria-hidden="true"
          ></i>
          Retype password
        </label>
        <div className={Styles.box_input}>
          <input
            type={shows.retypepassword ? "type" : "password"}
            autoComplete="retypepassword"
            name="retypepassword"
            value={user.retypepassword}
            className={clsx(Styles.form_input, {
              [Styles.Error]: Error.retypepassword !== "" && true,
            })}
            placeholder="Enter your email"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className={Styles.icon_eye} onClick={handleEye}>
            <i
              className={`fa${
                shows.retypepassword ? " fa-eye-slash" : " fa-eye"
              }`}
              aria-hidden="true"
              name="retypepassword"
            ></i>
          </div>
        </div>
        <span id="RetypepasswordError" className={Styles.form_error}>
          {Error.retypepassword}
        </span>
      </div>
      <div className={clsx(Styles.form_box, Styles.form_box_checkBox)}>
        <input
          type="checkbox"
          className={Styles.form_check_input}
          value={checkBox}
          onChange={handleCheckBox}
        />
        <label
          className={clsx(Styles.form_label, Styles.Checkbox_label)}
          htmlFor="exampleCheck1"
        >
          I agree to the terms and policies
        </label>
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

export default Signup;
