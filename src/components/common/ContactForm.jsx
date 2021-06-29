import React from "react";
import PropTypes from "prop-types";

import { contactTypeOptions } from "constants/index";

import { Form } from "../compound";

const ContactForm = ({ onSubmit, initialState }) => {
  return (
    <Form onSubmit={onSubmit} initialState={initialState}>
      <Form.Input label="First name" name="firstName" maxLength="20" />
      <Form.Input label="Last name" name="lastName" maxLength="30" />
      <Form.Input label="Date of birth" name="dateOfBirth" type="date" />
      <Form.Select
        label="Select a contact type"
        options={contactTypeOptions}
        name="contactType"
      />
      <Form.Input
        label="Contact"
        name="contact"
        className="u-margin-bottom-small"
      />
      <Form.SubmitButton className="btn btn--green" text="Submit" />
    </Form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialState: PropTypes.object.isRequired,
};

export default ContactForm;
