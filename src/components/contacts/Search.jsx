import React from "react";

import Form from "../compound/Form";

import { contactTypeOptions } from "../../constants/index";

const Search = ({ initialState, onSubmit }) => {
  return (
    <div className="form">
      <Form onSubmit={onSubmit} initialState={initialState}>
        <div className="row">
          <div className="col-1-of-3">
            <div className="form__group">
              <Form.Input name="firstName" label="First name" />
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="form__group">
              <Form.Input name="lastName" label="Last name" />
            </div>
          </div>

          <div className="col-1-of-3">
            <div className="form__group">
              <Form.Input
                type="date"
                name="dateOfBirth"
                label="Date of birth"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-1-of-3">
            <div className="form__group">
              <Form.Select
                name="contactType"
                options={contactTypeOptions}
                label="Contact type"
              />
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="form__group">
              <Form.Input name="contact" label="Contact" />
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="form__group">
              <Form.SubmitButton
                text="Search"
                className="btn btn--green u-margin-top-small"
              />
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Search;
