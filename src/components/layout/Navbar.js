import React from "react";

const Navbar = () => {
  return (
    <nav style={{ marginBottom: "30px", backgroundColor: "#2775c9" }}>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo">
          Sanlam Unit Trust
        </a>
        <ul className="right hide-on-med-and-down">
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
