import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

import Form from "../compound/Form";

import { LOGIN_FORM_INITIAL_STATE } from "../../constants";

import { validateLoginForm } from "../../helpers/validateLoginForm";
import { validateFormOnSubmit } from "../../helpers/validateFormOnSubmit";

import {
  signInWithEmailAndPassword,
  selectStatus,
} from "../../store/slices/authSlice";

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
              <div className="form__group">
                <Form.Input label="Email" name="email" />
              </div>
              <div className="form__group">
                <Form.Input
                  label="Password"
                  name="password"
                  type="password"
                  maxLength="8"
                />
              </div>
              <div className="form__group u-center-text">
                <Form.SubmitButton className="btn btn--green" text="Login" />
              </div>
            </Form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
