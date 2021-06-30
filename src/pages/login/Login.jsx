import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { Form, Card } from "components";
import { LOGIN_FORM_INITIAL_STATE } from "constants/index";
import { validateLoginForm, validateFormOnSubmit } from "helpers";
import {
  signInWithEmailAndPassword,
  selectStatus,
} from "store/slices/authSlice";

export const Login = ({ history }) => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const initMount = useRef(true);

  useEffect(() => {
    if (!initMount.current) {
      status === "fulfilled" && history.push("/contacts");
      status === "rejected" &&
        toast.error(
          "The email address or password is incorrect. Please try again"
        );
      return;
    }

    initMount.current = false;
  }, [status, history]);

  const handleSubmit = (values) =>
    validateFormOnSubmit(values, validateLoginForm, loginFormApi(values));

  const loginFormApi = (values) => {
    return () => {
      dispatch(signInWithEmailAndPassword(values));
    };
  };

  return (
    <div className="login-section">
      <Card>
        <Form onSubmit={handleSubmit} initialState={LOGIN_FORM_INITIAL_STATE}>
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
      </Card>
      <ToastContainer />
    </div>
  );
};
