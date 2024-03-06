import React, { useRef, useEffect, useState } from "react";
import userIcon from "../../assets/img/icon-user.png";
import Input from "../../components/login-elements/inputform";
import PrimaryButton from "../../components/login-elements/submitbutton";
import { useNavigate } from "react-router-dom";
import { login } from "../../datas/connexion-api";
import { useDispatch, useSelector } from "react-redux";
import { setLoginError } from "../../redux/userslice";
import {
  saveLoginCredentials,
  deleteLoginCredentials,
  getLocalStorageValues,
} from "../../components/login-elements/savedvalues";

export default function SigninUser() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const { rememberedEmail, rememberedPassword, rememberMe } =
      getLocalStorageValues([
        "rememberedEmail",
        "rememberedPassword",
        "rememberMe",
      ]);
    if (rememberMe === "true" && rememberedEmail && rememberedPassword) {
      emailRef.current.value = rememberedEmail;
      passwordRef.current.value = rememberedPassword;
      setRememberMe(true);
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    login({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }).then(
      () => {
        dispatch(setLoginError(null)); // Effacer l'erreur lors de la connexion réussie
        navigate("/user");
        if (rememberMe) {
          saveLoginCredentials(
            emailRef.current.value,
            passwordRef.current.value,
            true
          );
        } else {
          deleteLoginCredentials();
        }
      },
      () => dispatch(setLoginError("Invalid username or password"))
    );
  };

  return (
    <div className="main bg-dark-login">
      <section className="sign-in-content">
        <img className="user-icon" src={userIcon} alt="User" />
        <h1>Sign In</h1>

        <form onSubmit={onSubmit}>
          {error && <p className="error-message">{error}</p>}
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
              onChange={(e) => setRememberMe(e.target.checked)}
            />
          </div>
          <PrimaryButton className="sign-in-button" value="Sign In" />
        </form>
      </section>
    </div>
  );
}
