import React, { useEffect, useState } from "react";

import { ContactsAPI } from "./ContactsAPI";

import {
  CONTACT_FORM_INITIAL_STATE,
  SEARCH_INITIAL_STATE,
} from "../../constants";
import { validateContactForm } from "../../helpers/validateContactForm";
import ContactForm from "./ContactForm";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import Table from "./Table";
import Search from "./Search";

const Contacts = ({ history }) => {

  const [contactsList, setContactsList] = useState([]);
  const [searchTerms, setSearchTerms] = useState(SEARCH_INITIAL_STATE);
  const { listLimit } = useInfiniteScroll();

  useEffect(() => {
    ContactsAPI.fetchContacts(setContactsList);
  }, []);

  const handleContactFormSubmit = (values) => {
    const contactFormErrors = validateContactForm(values);
    if (Object.keys(contactFormErrors).length > 0) {
      Object.keys(contactFormErrors).map((element) =>
        alert(contactFormErrors[element])
      );
      return;
    }
    ContactsAPI.createContact(values);
  };

  const redirectToDetailsPage = (contact, contactKey) => (e) => {
    history.push({
      pathname: `/contacts/${contact.id}`,
      state: { contact, contactKey },
    });
  };

  const handleFavoriteContact = (contact, contactKey) => (e) => {
    const contactCopy = { ...contact };
    contactCopy.favorite = !contactCopy.favorite;
    ContactsAPI.updateContact(contactKey, contactCopy);
  };

  const handleSearch = (values) => setSearchTerms(values);

  return (
    <div className="contacts-section">
      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <ContactForm
              onSubmit={handleContactFormSubmit}
              initialState={CONTACT_FORM_INITIAL_STATE}
            />
          </div>
        </div>

        <div className="col-2-of-3">
          <div className="card">
            <Search
              onSubmit={handleSearch}
              initialState={SEARCH_INITIAL_STATE}
            />
            <Table
              contactsList={contactsList}
              listLimit={listLimit}
              redirectToDetailsPage={redirectToDetailsPage}
              handleFavoriteContact={handleFavoriteContact}
              searchTerms={searchTerms}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
