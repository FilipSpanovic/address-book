import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

import { LOGIN_FORM_INITIAL_STATE } from "constants/index";

import { validateLoginForm } from "helpers/validateLoginForm";
import { validateFormOnSubmit } from "helpers/validateFormOnSubmit";
import {
  signInWithEmailAndPassword,
  selectStatus,
} from "store/slices/authSlice";

import  Form  from "../compound/Form/Form";

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);

  useEffect(() => {
    if (status === "fulfilled") {
      history.push("/contacts");
    }

    if (status === "rejected") {
      toast.error(
        "The email address or password is incorrect. Please try again"
      );
    }
  }, [status]);

  const handleSubmit = (values) => {
    const isFormValid = validateFormOnSubmit(values, validateLoginForm);
    if (!isFormValid) {
      dispatch(signInWithEmailAndPassword(values));
    }
  };

  return (
    <>
      <div className="login-section">
        <div className="card">
          <div className="form">
            <Form
              onSubmit={handleSubmit}
              initialState={LOGIN_FORM_INITIAL_STATE}
            >
              <Form.Input label="Email" name="email" />
              <Form.Input
                label="Password"
                name="password"
                type="password"
                maxLength="8"
                className="u-margin-bottom-small"
              />
              <Form.SubmitButton className="btn btn--green" text="Login" />
            </Form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
