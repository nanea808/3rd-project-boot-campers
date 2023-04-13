import React from 'react';
import { Formik, Form, useFormik } from 'formik';
import * as Yup from 'yup';

//yup validation schema
const schema = Yup.object().shape({
        email: Yup.string()
            .required("Please enter your email address")
            .email("Invalid email format: Please check your spelling and try again"),
        password: Yup.string()
            .required("Password is a required field")
            .max(12, "Password must be at least 8-12 characters")
            .min(8, "Password must be at least 8-12 characters"),
        firstName: Yup.string()
            .min(1, "Must be at least 1 character")
            .max(30, "Must be 30 characters or less")
            .required("Please enter your first name"),
        lastName: Yup.string()
            .min(1, "Must be at least 1 character")
            .max(50, "Must be 50 characters or less")
            .required("Please enter your last name")
    });

//simple signup form using formik
function SignupForm() {
    return (
        <>
        <Formik
            validationSchema={schema}
            initialValues={{ email: "", password: "", firstName: "", lastName: "" }}
            onSubmit={(values) => {
            // replace with desired functionality
            console.log("Validation passed." + JSON.stringify(values));
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
            <div className="signup">
                <div className="form">
                <form noValidate onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                        <input
                            type="text"
                            name="firstName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstName}
                            placeholder="Tasko"
                            // className="" //add styling
                            id="firstName"
                        />
                            <p className="error">
                            {errors.firstName && touched.firstName && errors.firstName}
                            </p>

                        <input
                            type="text"
                            name="lastName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastName}
                            placeholder="Saurus"
                            // className="" //add styling
                            id="lastName"
                        />
                            <p className="error">
                            {errors.lastName && touched.lastName && errors.lastName}
                            </p>

                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="taskosaurus@email.com"
                            // className=""
                            id="email"
                        />
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
                            // className=""
                        />
                        <p className="error">
                        {errors.password && touched.password && errors.password}
                        </p>
                        
                        {/* add styling to button */}
                        <button type="submit">Sign Up</button> 
                </form>
                </div>
            </div>
            )}
        </Formik>
        </>
    );
}

export default SignupForm;