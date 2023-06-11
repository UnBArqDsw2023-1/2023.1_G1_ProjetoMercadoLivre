// components/Header.js
import React from "react";
import logo from "../images/logo.png";
import "../App.css";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo"></img>
      <a href="#">Contato</a>
    </div>
  );
}

export default Header;
