import React, { useEffect, useState } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import ContactList from "./ContactList";
import api from "../api/contact.js";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import ContactDetail from "./ContactDetails";
// import contact from "../api/contact.js";

function App() {
  // console.log("App");

  let [contacts, setContacts] = useState([]);
  let [searchTerm, setSearchTerm] = useState("");
  let [searchResult, setSearchResult] = useState([]);
  // let LOCAL_STORAGE_KEY = "contact";

  // retrieveContacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    // console.log(response);
    return response.data;
  };
  // retrieveContacts();

  const addContactHandler = async (contact) => {
    let request = {
      id: uuid(),
      ...contact,
    };
    let response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };

  let updateContactHandler = async (contact) => {
    let response = await api.put(`/contacts/${contact.id}`, contact);
    let { id } = response.data;
    setContacts(
      contacts.map((contact) => {
        return id === contact.id ? { ...response.data } : contact;
      })
    );
  };

  let removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    let newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  let searchHandler = (term) => {
    // console.log(term);
    setSearchTerm(term);

    if (searchTerm !== "") {
      let newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(term.toLowerCase());
      });
      setSearchResult(newContactList);
    } else {
      setSearchResult(contacts);
    }
  };

  useEffect((e) => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) setContacts(retriveContacts);
    let getAllContact = async () => {
      let allContact = await retrieveContacts();
      // console.log(allContact);
      if (allContact) setContacts(allContact);
    };
    getAllContact();
  }, []);

  useEffect(
    (e) => {
      // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
    },
    [contacts]
  );

  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <ContactList
                {...props}
                contacts={searchTerm < 1 ? contacts : searchResult}
                getContactId={removeContactHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />
          <Route
            path="/edit"
            render={(props) => (
              <EditContact
                {...props}
                updateContactHandler={updateContactHandler}
              />
            )}
          />
          <Route path="/contact/:id" component={ContactDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
