import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../api/mutations";
import Auth from "../../auth";

import { UPDATE_ACCOUNT_ID, UPDATE_ACCOUNT_STATUS } from "../../context/actions";
import { useAccountContext } from "../../context/GlobalState";

//yup validation schema
const schema = Yup.object().shape({
  email: Yup.string().required("Email required").email("Invalid email"),
  password: Yup.string()
    .required("Password required")
    .min(8, "Password must be at least 8 characters"),
});

const LoginForm = () => {
  const [login, { error }] = useMutation(LOGIN_USER);
  const [state, dispatch] = useAccountContext();

  const handleFormSubmit = async (values) => {
    console.log(values);
    try {
      const { data } = await login({
        variables: { ...values },
      });
      console.log(data);

      const token = data.login.token;
      const userID = data.login.user._id;
      const isLoggedIn = !state.isLoggedIn;

      await dispatch({
        type: UPDATE_ACCOUNT_ID,
        userID,
      });

      await dispatch({
        type: UPDATE_ACCOUNT_STATUS,
        isLoggedIn: state.isLoggedIn,
      })
      
      Auth.login(token, { userID, isLoggedIn });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          handleFormSubmit(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="login">
            <div className="form">
              <h1 className="heading">Login</h1>
              <Form noValidate onSubmit={handleSubmit}>
                <div className="input-group">
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="you@email.com"
                    className="input"
                    id="email"
                  />
                  {/* show error if validation failed */}
                  {errors.email && touched.email && (
                    <p className="error">{errors.email}</p>
                  )}
                </div>
                <div className="input-group">
                  <label htmlFor="password" className="label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Enter password"
                    className="input"
                    id="password"
                  />
                  {/* show error if validation failed */}
                  {errors.password && touched.password && (
                    <p className="error">{errors.password}</p>
                  )}
                </div>
                <button type="submit" className="button">
                  Login
                </button>
                
               
              </Form>
            </div>
          </div>
        )}
      </Formik>
      {error && (
        <div>{error.message}</div>
      )}
    </div>
  );
};

export default LoginForm;
