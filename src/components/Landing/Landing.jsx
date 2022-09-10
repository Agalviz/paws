import React from "react";
import "./styles.scss";
import icon from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="one">
      <div className="two">
        <Link to="/shop">
          <div>
            <p className="three">
              <img className="icon" src={icon} />
              <p>SHOP NOW</p>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
