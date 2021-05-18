import React, { useEffect } from "react";
import { validateLogin } from "../../helpers/validateLogin";
import Form from "../compound/Form";

import { LOGIN_FORM_INITIAL_STATE } from "../../constants";
import {
  signInWithEmailAndPassword,
  selectStatus,
} from "../../store/slices/loginSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);

  useEffect(() => {
    if (status === "fulfilled") {
      history.push("/contacts");
    }

    if (status === "rejected") {
      alert("The email address or password is incorrect. Please try again");
    }
  }, [status]);

  const handleSubmit = (values) => {
    const errors = validateLogin(values);

    if (Object.keys(errors).length > 0) {
      Object.keys(errors).map((element) => alert(errors[element]));
      return;
    }

    dispatch(signInWithEmailAndPassword(values));
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
                <Form.Input label="Password" name="password" />
              </div>
              <div className="form__group u-center-text">
                <Form.SubmitButton className="btn btn--green" text="Login" />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
