import userIcon from "../../assets/img/icon-user.png";

export default function SigninUser() {
  return (
    <div className="main bg-dark">
      <section class="sign-in-content">
        <img className="user-icon" src={userIcon} alt="User" />
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          <a href="./user.html" class="sign-in-button">
            Sign In
          </a>
        </form>
      </section>
    </div>
  );
}
