import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  CONTACT_FORM_INITIAL_STATE,
  SEARCH_INITIAL_STATE,
  SEARCH_TERMS_INITIAL_STATE,
} from "constants/index";
import ContactForm from "components/common/ContactForm";
import { Table, Search } from "components/contacts";
import { Row, Col, Card } from "components/UI";
import { ContactsAPI } from "api/ContactsAPI";
import { validateContactForm, validateFormOnSubmit } from "helpers";
import { useInfiniteScroll, useSort } from "hooks";

const Contacts = () => {
  const [contactsList, setContactsList] = useState([]);
  const [searchTerms, setSearchTerms] = useState(SEARCH_TERMS_INITIAL_STATE);
  const { listLimit } = useInfiniteScroll();
  const { sortInfo, handleSort, sortedList } = useSort(contactsList);

  useEffect(() => {
    ContactsAPI.fetchContacts(setContactsList);
  }, []);

  const handleSearch = (values) => setSearchTerms(values);

  const handleFavoriteContact = (contact) => (e) => {
    const contactCopy = { ...contact };
    contactCopy.favorite = !contactCopy.favorite;
    ContactsAPI.updateContact(contact.key, contactCopy);
  };

  const showNotification = (msg) => {
    return () => {
      toast.success(msg);
    };
  };

  const contactFormApi = (values, setData) => {
    return () => {
      ContactsAPI.createContact(values, showNotification("Contact created!"));
      setData(CONTACT_FORM_INITIAL_STATE);
    };
  };

  const handleContactFormSubmit = (values, setData) =>
    validateFormOnSubmit(
      values,
      validateContactForm,
      contactFormApi(values, setData)
    );

  return (
    <div className="contacts-section">
      <Row>
        <Col>
          <Card>
            <ContactForm
              onSubmit={handleContactFormSubmit}
              initialState={CONTACT_FORM_INITIAL_STATE}
            />
          </Card>
        </Col>
        <Col className="col-2-of-3">
          <Card>
            <Search
              onSubmit={handleSearch}
              initialState={SEARCH_INITIAL_STATE}
            />
            <Table
              contactsList={sortedList}
              listLimit={listLimit}
              handleFavoriteContact={handleFavoriteContact}
              searchTerms={searchTerms}
              handleSort={handleSort}
              sortInfo={sortInfo}
              showNotification={showNotification}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Contacts;
