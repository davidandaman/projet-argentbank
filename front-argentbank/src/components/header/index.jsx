import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/argentBankLogo.png";
import userIcon from "../../assets/img/icon-user.png";
import { useDispatch, useSelector } from "react-redux";
import { setisLogged } from "../../redux/userslice";

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
              <Link to={"/profile"}>
                <img className="user-icon" src={userIcon} alt="User" />
              </Link>
              <Link to={"/"} onClick={logOut} className="sign-out">
                <i className="fa fa-sign-out"></i>
                <span>Sign Out</span>
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
