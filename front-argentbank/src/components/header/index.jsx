import { Link } from "react-router-dom";
import logo from "../../assets/img/argentBankLogo.png";
import userIcon from "../../assets/img/icon-user.png";

function Header() {
  return (
    <div className="main-nav">
      <div className="main-nav-logo">
        <Link to="/">
          <img className="main-nav-logo-image" src={logo} alt="ARGENTBANK" />
        </Link>
      </div>

      <nav>
        <Link to="/a-propos" className="main-nav-item">
          <img className="user-icon" src={userIcon} alt="User" />
          Sign in
        </Link>
      </nav>
    </div>
  );
}

export default Header;
