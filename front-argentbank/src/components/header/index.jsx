import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/argentBankLogo.png";

function Header() {
  const location = useLocation();

  return (
    <div className="main-nav">
      <div className="main-nav-logo">
        <Link to="/">
          <img className="main-nav-logo-image" src={logo} alt="ARGENTBANK" />
        </Link>
      </div>

      <nav>
        <Link to="/a-propos" className="main-nav-item">
          Sign in
        </Link>
      </nav>
    </div>
  );
}

export default Header;
