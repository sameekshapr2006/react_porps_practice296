import React from "react";
import Card from "./Card";
import contact from "../contact";
import axios from "axios";
import { useState, useEffect } from 'react';

function App() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
  axios.get('http://localhost:3001/contacts')
        .then(res=>
          {
            setContacts(res.data);
            console.log(contacts);
          })
        .catch(err=> console.error(err));
  }, []);
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(contact =>(
      <Card
       name={contact.Name}
      img={contact.ImgUrl}
      tel={contact.Phone}
      email={contact.Email}
     
      />
      ))}
    </div>
  );
}

export default App;