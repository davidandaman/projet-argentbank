import React, { useRef } from "react";
import userIcon from "../../assets/img/icon-user.png";
import Input from "../../components/login-elements/inputform";
import PrimaryButton from "../../components/login-elements/submitbutton";
import { useNavigate } from "react-router-dom";
import { login } from "../../datas/connexion-api";
import { useDispatch, useSelector } from "react-redux";
import { setRememberMe, setLoginError } from "../../redux/userslice";
import {
  saveLoginCredentials,
  deleteLoginCredentials,
} from "../../components/login-elements/savedvalues";

export default function SigninUser() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const rememberMe = useSelector((state) => state.auth.rememberMe);
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    login({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }).then(
      () => navigate("/user"),
      () => dispatch(setLoginError("Invalid username or password"))
    );

    if (rememberMe) {
      saveLoginCredentials(emailRef.current.value, passwordRef.current.value);
    } else {
      deleteLoginCredentials();
    }
  };

  return (
    <div className="main bg-dark-login">
      <section className="sign-in-content">
        <img className="user-icon" src={userIcon} alt="User" />
        <h1>Sign In</h1>

        <form onSubmit={onSubmit}>
          {error && <p className="error-message">{error}</p>}{" "}
          {/* Affichez l'erreur si elle existe */}
          <Input
            type="text"
            className="input-wrapper"
            label="Username"
            htmlFor="username"
            id="username"
            reference={emailRef}
          />
          {/* Champ de mot de passe */}
          <Input
            type="password"
            className="input-wrapper"
            label="Password"
            htmlFor="password"
            id="password"
            reference={passwordRef}
          />
          {/* Bouton de soumission */}
          <PrimaryButton className="sign-in-button" value="Sign In" />
        </form>
      </section>
    </div>
  );
}
