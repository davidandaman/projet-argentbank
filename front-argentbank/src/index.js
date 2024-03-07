import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import SigninUser from "./pages/login";
import UserProfile from "./pages/profile/userprofile";
import Footer from "./components/footer";
import Error from "./pages/error";
import Home from "./pages/homePage";

import "./styles/styles.scss";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SigninUser />} />
            <Route path="/user" element={<UserProfile />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>
);
