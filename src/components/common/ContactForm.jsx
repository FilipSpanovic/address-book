import React from "react";

import Form from "../compound/Form";
import { contactTypeOptions } from "../../constants";

const ContactForm = ({ onSubmit, initialState }) => {
  return (
    <Form onSubmit={onSubmit}  initialState={initialState}>
      <div className="form_group">
        <Form.Input label="First name" name="firstName" />
      </div>
      <div className="form_group">
        <Form.Input label="Last name" name="lastName" />
      </div>
      <div className="form_group">
        <Form.Input label="Date of birth" name="dateOfBirth" type="date" />
      </div>
      <div className="form_group">
        <Form.Select
          label="Select a contact type"
          options={contactTypeOptions}
          name="contactType"
        />
      </div>
      <div className="form_group  u-margin-bottom-small">
        <Form.Input label="Contact" name="contact" />
      </div>
      <div className="form_group">
        <Form.SubmitButton className="btn btn--green" text="Submit" />
      </div>
    </Form>
  );
};

export default ContactForm;
