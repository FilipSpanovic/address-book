import React from "react";
import Form from "../compound/Form";
import { contactTypeOptions } from "../../constants/index";
const Search = () => {
  return (
    <div className="form">
      <Form initialState={{}}>
        <div className="row">
          <div className="col-1-of-3">
            <div className="form__group">
              <Form.Input label="nasda"></Form.Input>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="form__group">
              <Form.Input label="nasda"></Form.Input>
            </div>
          </div>

          <div className="col-1-of-3">
            <div className="form__group">
              <Form.Input label="sadsa"></Form.Input>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-1-of-3">
            <div className="form__group">
              <Form.Select options={contactTypeOptions} label="nasda" />
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="form__group">
              <Form.Input label="nasda"></Form.Input>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="form__group">
              <Form.SubmitButton
                text="Search"
                className="btn btn--green u-margin-top-small"
              ></Form.SubmitButton>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Search;
