import React from "react";
import ProfileImage from "../assets/profile.jpg";
import details from "../details";

const Header = () => {
  return (
    <div className="column align-center justify-center blue-bg header">
      <div className="row align-center justify-between w-760">
        <img
          src={ProfileImage}
          alt="profile"
          loading="lazy"
          height={148}
          width={148}
        />

        <div className="border-white">
          <h3 className="name">{details.name}</h3>
          <div className="p-box">
            <h5 className="profession">{details.profession}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
