import React from "react";
import Form from "../compound/Form";

const ContactForm = ({ onSubmit, initialState }) => {
  const contactTypeOptions = [
    {
      id: 1,
      name: "mobilePhone",
      label: "Mobile phone",
    },
    { id: 2, name: "telephone", label: "Telephone" },
    { id: 3, name: "email", label: "Email" },
    { id: 4, name: "pager", label: "Pager" },
  ];

  return (
    <Form onSubmit={onSubmit} initialState={initialState}>
      <Form.Input name="firstName" />
      <Form.Input name="lastName" />
      <Form.Input name="dateOfBirth" type="date" />
      <Form.Select
        label="Select a contact type"
        options={contactTypeOptions}
        name="contactType"
      />
      <Form.Input name="contact" />
      <Form.SubmitButton text="Submit" />
    </Form>
  );
};

export default ContactForm;
