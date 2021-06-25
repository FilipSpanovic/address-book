import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  CONTACT_FORM_INITIAL_STATE,
  SEARCH_INITIAL_STATE,
  SEARCH_TERMS_INITIAL_STATE,
} from "constants/index";

import { validateContactForm } from "helpers/validateContactForm";
import { validateFormOnSubmit } from "helpers/validateFormOnSubmit";

import { useInfiniteScroll, useSort } from "hooks";

import ContactForm from "../common/ContactForm";

import { Table, Search, ContactsAPI } from "./";

const Contacts = ({ history }) => {
  const [contactsList, setContactsList] = useState([]);
  const [searchTerms, setSearchTerms] = useState(SEARCH_TERMS_INITIAL_STATE);
  const { listLimit } = useInfiniteScroll();
  const { sortInfo, handleSort, sortedList } = useSort(contactsList);

  useEffect(() => {
    ContactsAPI.fetchContacts(setContactsList);
  }, []);

  const handleContactFormSubmit = (values, setData) => {
    const isFormValid = validateFormOnSubmit(values, validateContactForm);

    if (!isFormValid) {
      ContactsAPI.createContact(values, showNotification);
      setData(CONTACT_FORM_INITIAL_STATE);
    }
  };

  const showNotification = () => {
    toast.success("Contact created");
  };

  const redirectToDetailsPage = (contactInfo) => (e) => {
    history.push({
      pathname: `/contacts/${contactInfo.id}`,
      state: { contactInfo },
    });
  };

  const handleFavoriteContact = (contact) => (e) => {
    const contactCopy = { ...contact };
    contactCopy.favorite = !contactCopy.favorite;
    ContactsAPI.updateContact(contact.key, contactCopy);
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
              contactsList={sortedList}
              listLimit={listLimit}
              redirectToDetailsPage={redirectToDetailsPage}
              handleFavoriteContact={handleFavoriteContact}
              searchTerms={searchTerms}
              handleSort={handleSort}
              sortInfo={sortInfo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
