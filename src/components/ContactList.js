import React, { useRef } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  //   console.log(props);

  let inputEl = useRef("");

  let deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  console.log(renderContactList);

  let getSearchTerm = () => {
    // console.log();
    // console.log(e.target.value);
    props.searchKeyword(inputEl.current.value);
  };

  return (
    <>
      <div className="ui main ">
        <div className="ui clearing segment">
          <h2 className="ui header left floated">Contact List</h2>
          <Link to="/add">
            <button className="ui button blue right floated">
              Add Contact
            </button>
          </Link>
        </div>
        <div className="ui search">
          <div className="ui icon input">
            <input
              ref={inputEl}
              type="text"
              placeholder="Search contact"
              className="prompt"
              value={props.term}
              onChange={getSearchTerm}
            />
            <i className="search icon" />
          </div>
        </div>

        <div className="ui celled list container">{renderContactList.length > 0 ? renderContactList : "SORRY" }</div>
      </div>
    </>
  );
};

export default ContactList;
