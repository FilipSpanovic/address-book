import React from "react";
import PropTypes from "prop-types";

import { Form } from "../../compound";
import { Row, Col } from "components/UI";
import { contactTypeOptions } from "constants/index";

export const Search = ({ initialState, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit} initialState={initialState}>
      <Row>
        <Col>
          <Form.Input name="firstName" label="First name" />
        </Col>
        <Col>
          <Form.Input name="lastName" label="Last name" />
        </Col>
        <Col>
          <Form.Input type="date" name="dateOfBirth" label="Date of birth" />
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Select
            name="contactType"
            options={contactTypeOptions}
            label="Contact type"
          />
        </Col>
        <Col>
          <Form.Input name="contact" label="Contact" />
        </Col>
        <Col>
          <Form.SubmitButton
            text="Search"
            className="btn btn--green u-margin-top-small"
          />
        </Col>
      </Row>
    </Form>
  );
};

Search.propTypes = {
  initialState: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
};
