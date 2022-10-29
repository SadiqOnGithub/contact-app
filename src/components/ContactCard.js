import React from "react";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  // console.log(props);

  return (
    <div className="ui item">
      <div className="ui content">
        <Link
          to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
        >
          <div className="ui header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="ui trash alternate outline icon"
        onClick={() => props.clickHandler(id)}
      ></i>
      <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
        <i
          className="ui edit alternate outline icon"
          onClick={() => console.log(props.contact)}
        ></i>
      </Link>
    </div>
  );
};

export default ContactCard;
