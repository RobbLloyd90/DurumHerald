import React from "react";
import { Link } from "react-router-dom";
import homePageIcon from "../assets/DurumNew-logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="to-homepage-icon-container">
        <div className=".to-homepage-button">
          <Link to="/">
            <img
              className="to-homepage-icon"
              src={homePageIcon}
              alt="Durum Herald logo of a brown blade of durum wheat grass"
            />
          </Link>
        </div>
        <p className="site-name-text">Durum Herald</p>
      </div>
      <div className="dropdown-bar">
        <div className="dropdown">
          <button className="dropbtn">
            <Link to="/Articles">All Articles</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
