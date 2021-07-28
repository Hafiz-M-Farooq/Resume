import React from "react";
import details from "../details";

const Experience = () => {
  return (
    <div className="experience">
      <h1 className="label">Experience</h1>

      {details.experience.map((exp, index) => (
        <div className="list" key={index + 1}>
          <h1 className="highlight">{exp.label}</h1>
          <p className="detail">{`${exp.description}`}</p>
          <ul>
            {exp.details.map((detail, subIndex) => (
              <li>
                <p className="detail" key={subIndex + 1}>{`${detail}`}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
