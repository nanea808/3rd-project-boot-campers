import React from 'react';
import { ReactDOM } from 'react-dom';
// import { Formik, Form, Field, ErrorMessage } from 'formik'; //Field, ErrorMessage being rejected by react :/
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

//yup validation schema
const schema = Yup.object().shape({
    email: Yup.string()
        .required('Email required')
        .email('Invalid email'),
    password: Yup.string()
        .required('Password required')
        .min(8, 'Password must be at least 8 characters'),
});

//TODO: 
// onSubmit, implement desired result (redirect to user profile with additional features available)
// add reset button
// add styling
// add security measures to protect/obscure password?
const LoginForm = () => {
    return (
        <>
          {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
            <Formik
                validationSchema={schema}
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => {
                    // comment this out and replace with desired functionality (e.g., redirect to user profile page logged-in view)
                //   alert(JSON.stringify(values));
                console.log("User email and password passed validation. Values: " + JSON.stringify(values));
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
                    <form noValidate onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="you@email.com"
                        //   className="form-control inp_text"
                        id="email"
                        />
                        {/* show error if validation failed */}
                        <p className="error">
                        {errors.email && touched.email && errors.email}
                        </p>
                        <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder="Enter password"
                        //   className="form-control"
                        />
                        {/* show error if validation failed */}
                        <p className="error">
                        {errors.password && touched.password && errors.password}
                        </p>
                        <button type="submit">Login</button>
                    </form>
                    </div>
                </div>
                )}
            </Formik>
            </>
        );    
}

export default LoginForm;

