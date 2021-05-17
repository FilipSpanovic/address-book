import React from "react";
import { useParams } from "react-router-dom";
import { ContactsAPI } from "./ContactsAPI";

const Details = ({ location, history }) => {
  let { id } = useParams();

  if (location.state === undefined || id !== location.state.contact.id) {
    return <p>page not found!</p>;
  }

  const { contact, contactKey } = location.state;

  const redirectToContactUpdatePage = () => {
    history.push({
      pathname: `/contacts/update/${contact.id}`,
      state: { contact, contactKey },
    });
  };

  return (
    <div>
      <p>First name: {contact.firstName}</p>
      <p>Last name: {contact.lastName}</p>
      <p>Date of birth: {contact.dateOfBirth}</p>
      <p>Contact type: {contact.contactType}</p>
      <p>Contact: {contact.contact}</p>
      <button onClick={ContactsAPI.deleteContact(contactKey)}>Delete</button>
      <button onClick={redirectToContactUpdatePage}>Update</button>
    </div>
  );
};

export default Details;
