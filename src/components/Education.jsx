import React from "react";
import details from "../details";

const Education = () => {
  return (
    <div className="education">
      <h1 className="label">Education</h1>

      {details.education.map((ed, index) => (
        <div className="list" key={index + 1}>
          <h1 className="highlight">{ed.name}</h1>
          <p className="detail">{`${ed.description}, ${ed.passingYear}`}</p>
          <p className="detail">{`${ed.grade}`}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
