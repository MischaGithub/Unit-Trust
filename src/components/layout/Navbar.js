import React from "react";
import Logo from "../../portfolio-managers/sanlam.png";

const Navbar = () => {
  return (
    <nav style={{ marginBottom: "30px", backgroundColor: "#000" }}>
      <div className="nav-wrapper">
        <img src={Logo} alt="img " className="nav-logo" />
        <ul className="right">
          <li>
            <a href="#!">Personal</a>
          </li>
          <li>
            <a href="#!">Business</a>
          </li>
          <li cclassName="active">
            <a href="#!">Corporate</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
