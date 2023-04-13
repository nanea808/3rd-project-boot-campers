import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
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

const Login = () => {
    return (
        <>
            <div>
                <h1>Login</h1>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={schema}
            //         onSubmit={(values, { setSubmitting }) => {
            //             setTimeout(() => {
            //                 alert(JSON.stringify(values, null, 2));
            //                 setSubmitting(false);
            //             }, 400)
            //         }}
                    onSubmit={(values) => {
                        alert(JSON.stringify(values));
                    }}
            >
                {/* {({ isSubmitting }) => { */}

                {({ 
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => {
                    <div className='login'>
                        <Form noValidate onSubmit={handleSubmit}>
                            <div>
                                <h1>Login</h1>
                            </div>
                            <div>
                                <input
                                    type='email'
                                    name='email'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder='Enter email'
                                    id='email'
                                    // className='' //add formatting class here
                                />

                                <p className='error'>
                                    {errors.email && touched.email && errors.email}
                                </p>

                                <input
                                    type='password'
                                    name='password'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder='Enter password'
                                    // className='' //add formatting here
                                />

                                <p className='error'>
                                    {errors.password && touched.password && errors.password}
                                </p>

                            </div>
                            {/* <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" />
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" component="div" /> */}

                            <button type="submit" disabled={isSubmitting}>
                                Log In
                            </button>

                        </Form>

                    </div>
                }}
                </Formik>
            </div>
        </>
    );
}

export default Login;

