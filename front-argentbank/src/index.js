import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import SigninUser from "./components/login";
import PanelUser from "./components/clientPanel";
import Footer from "./components/footer";
import Error from "./components/error";
import Home from "./pages/homePage";

import "./styles/layout.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SigninUser />} />
          <Route path="/user" element={<PanelUser />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>
);
