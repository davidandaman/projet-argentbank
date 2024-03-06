import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/argentBankLogo.png";
import userIcon from "../../assets/img/icon-user.png";
import { useDispatch, useSelector } from "react-redux";
import { setisLogged } from "../../redux/userslice";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  const { isLogged, userDatas } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.removeItem("token");
    dispatch(setisLogged(false));
  };

  return (
    <div className="header">
      <div className="main-nav">
        <div className="main-nav-logo">
          <Link to="/">
            <img className="main-nav-logo-image" src={logo} alt="ARGENTBANK" />
          </Link>
        </div>

        <nav>
          {isLogged ? (
            <div className="main-nav-item">
              <div className="user-info">
                <img className="user-icon" src={userIcon} alt="User" />
                <span className="user-name">{userDatas.userName}</span>
              </div>
              <Link to={"/"} onClick={logOut} className="sign-out">
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  className="sign-out-icon"
                />
                <span className="sign-out-text">Sign Out</span>
              </Link>
            </div>
          ) : (
            <Link to="/sign-in" className="main-nav-item">
              <img className="user-icon" src={userIcon} alt="User" />
              Sign in
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Header;
