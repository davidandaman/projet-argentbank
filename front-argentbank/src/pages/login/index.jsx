import userIcon from "../../assets/img/icon-user.png";
import { useEffect, useRef } from "react";
import Input from "../../components/login-elements/inputform";
import PrimaryButton from "../../components/login-elements/submitbutton";
import { useNavigate } from "react-router-dom";
import { login } from "../../datas/connexion-api";
import { useDispatch, useSelector } from "react-redux";
import { setRememberMe } from "../../redux/userslice";
import {
  deleteLoginCredentials,
  getLocalStorageValues,
  saveLoginCredentials,
} from "../../components/login-elements/savedvalues";

export default function SigninUser() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const rememberMe = useSelector((state) => state.auth.rememberMe);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    login({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }).then(() => navigate("/user"));

    if (rememberMe) {
      saveLoginCredentials(emailRef.current.value, passwordRef.current.value);
    } else {
      deleteLoginCredentials();
    }
  };

  useEffect(() => {
    const rememberMeValue = localStorage.getItem("rememberMe");
    const { rememberedEmail, rememberedPassword } = getLocalStorageValues([
      "rememberedEmail",
      "rememberedPassword",
    ]);

    if (rememberMeValue === "true" && rememberedEmail && rememberedPassword) {
      dispatch(setRememberMe(true));
      emailRef.current.value = rememberedEmail;
      passwordRef.current.value = rememberedPassword;
    }
  }, []);

  return (
    <div className="main bg-dark">
      <section className="sign-in-content">
        <img className="user-icon" src={userIcon} alt="User" />
        <h1>Sign In</h1>

        <form onSubmit={onSubmit}>
          <Input
            type="text"
            className="input-wrapper"
            label="Username"
            htmlFor="username"
            id="username"
            reference={emailRef}
          />

          <Input
            type="password"
            className="input-wrapper"
            label="Password"
            htmlFor="password"
            id="password"
            reference={passwordRef}
          />

          <div className="input-remember">
            <label htmlFor="remember-me">Remember me</label>
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={() => dispatch(setRememberMe(!rememberMe))}
            />
          </div>

          <PrimaryButton className="sign-in-button" value="Sign In" />
        </form>
      </section>
    </div>
  );
}
