import React from "react";
import PropTypes from "prop-types";

function Header({ text }) {
  return (
    <header style={{ backgroundColor: "black", color: "red" }}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
};

export default Header;
