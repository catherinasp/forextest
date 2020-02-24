import React from "react";
import logo from 'assets/img/general/logo.png';
function Header() {
  return (
    <nav className="header">
        <a href="/"><img src={logo} className="logo" alt="logo"/></a>
    </nav>
  );
}
export default Header;