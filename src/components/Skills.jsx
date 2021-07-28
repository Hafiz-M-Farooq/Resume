import React from "react";
import details from "../details";

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="label">Skills</h1>
      <div className="row" style={{ flexWrap: "wrap", marginTop: 16 }}>
        {details.skills.map((skill, index) => (
          <p className="detail" key={index + 1}>{`${skill}`}</p>
        ))}
      </div>
    </div>
  );
};

export default Skills;
