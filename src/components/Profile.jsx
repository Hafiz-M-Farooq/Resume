import React from "react";
import details from "../details";

const Profile = () => {
  return (
    <div className="profile">
      <h1 className="label">Profile</h1>
      <p className="detail">{details.profile}</p>
    </div>
  );
};

export default Profile;
