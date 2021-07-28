import React from "react";
import details from "../details";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="label">Contacts</h1>
      {/* number */}
      <h1 className="highlight">{`${details.contact[0].label}:`}</h1>
      <div className="phone-number">
        <a
          className="detail"
          href={`tel:${details.contact[0].number}`}
        >{`${details.contact[0].detail}`}</a>
        {` , `}
        <a
          className="detail"
          href={`tel:${details.contact[0].secNumber}`}
        >{`${details.contact[0].secDetail}`}</a>
      </div>
      {/* email */}
      <h1 className="highlight">{`${details.contact[1].label}:`}</h1>

      <a
        className="detail"
        href={`mailto:${details.contact[1].detail}?subject=Hey%20Hafiz%20Muhammad%20Farooq`}
        target="_blank"
        rel="noopener noreferrer"
      >{`${details.contact[1].detail}`}</a>
      {/* linkedin */}
      <h1 className="highlight">{`${details.contact[2].label}:`}</h1>
      <a
        className="detail"
        href={`${details.contact[2].detail}`}
        target="_blank"
        rel="noopener noreferrer"
      >{`${details.contact[2].detail}`}</a>

      {/* website */}
      <h1 className="highlight">{`${details.contact[3].label}:`}</h1>
      <a
        className="detail"
        href={`${details.contact[3].detail}`}
        target="_blank"
        rel="noopener noreferrer"
      >{`${details.contact[3].detail}`}</a>

      {/* address  */}
      <h1 className="highlight">{`${details.contact[4].label}:`}</h1>
      <p className="detail">{`${details.contact[4].detail}`}</p>
    </div>
  );
};

export default Contact;
