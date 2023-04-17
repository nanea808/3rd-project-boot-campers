import React from 'react';
import { Formik, Form, useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../api/mutations';

//yup validation schema
const schema = Yup.object().shape({
        email: Yup.string()
            .required("Please enter your email address")
            .email("Invalid email format: Please check your spelling and try again"),
        password: Yup.string()
            .required("Password is a required field")
            .max(12, "Password must be at least 8-12 characters")
            .min(8, "Password must be at least 8-12 characters"),
        username: Yup.string()
            .required("Please enter a username")
            .min(5, "Username must be at least 5 characters")
            .max(20, "Username must be between 5-20 characters"),
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
    const [ addUser ] = useMutation(ADD_USER);

    return (
        <div className="form-container">
            <Formik
                validationSchema={schema}
                initialValues={{ email: "", password: "", username: "", firstName: "", lastName: "" }}
                // onSubmit={(values) => {
                // replace with desired functionality
                // console.log("Validation passed." + JSON.stringify(values));
                // }}
                onSubmit={(values, { resetForm }) => {
                    addUser({
                        variables: {
                            username: values.username,
                            email: values.email,
                            password: values.password,
                            firstName: values.firstName,
                            lastName: values.lastName
                        }
                    });
                    resetForm();
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
                <div className="container-fluid">
                    <div className="form">
                        <Form noValidate onSubmit={handleSubmit}>
                            <h1>Sign Up</h1>
                            <div className="input-group">
                                <input
                                    type="text"
                                    name="firstName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.firstName}
                                    placeholder="Tasko"
                                    className="input" //add styling
                                    id="firstName"
                                />
                                    <p className="error">
                                    {errors.firstName && touched.firstName && errors.firstName}
                                    </p>
                            </div>
                            <div className='input-group'>
                                <input
                                    type="text"
                                    name="lastName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.lastName}
                                    placeholder="Saurus"
                                    className="input" //add styling
                                    id="lastName"
                                />
                                    <p className="error">
                                    {errors.lastName && touched.lastName && errors.lastName}
                                    </p>
                            </div>
                            <div className='input-group'>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder="taskosaurus@email.com"
                                    className="input"
                                    id="email"
                                />
                                <p className="error">
                                {errors.email && touched.email && errors.email}
                                </p>
                            </div>
                            <div className='input-group'>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder="Enter password"
                                    className="input"
                                />
                                <p className="error">
                                {errors.password && touched.password && errors.password}
                                </p>
                            </div>
                            <div>
                                <button type="submit" className="button">Sign Up</button> 
                            </div>
                        </Form>
                    </div>
                </div>
                )}
            </Formik>
        </div>
    );
}

export default SignupForm;