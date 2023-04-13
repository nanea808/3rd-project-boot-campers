import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

//use formik's <Field> render-prop fxnality
const textInput = ({ label, ...props }) => {
    // const [field, meta] = useField(props);
    return (
        <>
            {/* <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div classNAme="error">{meta.error}</div>
            ) : null } */}
        </>
    );
};

//signup form using reusable textInput component with validation by yup
const SignupForm = () => {
        return (
            <Formik
                initialValues={{ 
                    firstName: '', 
                    lastName: '', 
                    email: ''
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(30, 'Must be 30 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(50, 'Must be 50 characters or less')
                        .required('Required'),
                    email: Yup.string().email('Invalid email address').required('Required'),
                })}

                onSubmit={(values, { setsubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setsubmitting(false);
                    }, 400);
                }}
            >
                <div>
                    <h1>Sign Up</h1>
                </div>

                <div> 
                    <Form>
                        <textInput
                            label="First Name"
                            name="firstName"
                            type="text"
                            placeholder="Tasko"
                        />

                        <textInput
                            label="Last Name"
                            name="lastName"
                            type="text"
                            placeholder="Saurus"
                        />

                        <textInput  
                            label="Email Address"
                            name="email"
                            type="text"
                            placeholder="taskosaurus@email.com"
                        />

                        <button type="submit"> Sign Up </button>

                    </Form>
                </div>
            </Formik>
        );
    };

    export default SignupForm;