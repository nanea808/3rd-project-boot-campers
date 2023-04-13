import React from 'react';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';

//input validation
// not needed if using yup validation schema
// const validate = values => {
//     const errors = {};
//     if (!values.firstName) {
//         errors.firstName = 'Required';
//     } else if (!/^[a-zA-Z]+{50,}$/i.test(values.firstName)) { 
//         errors.firstName = 'Must be 50 letters or less. No special characters, symbols, or numbers.'; 
//     }

//     if (!values.lastName) {
//         errors.lastName = 'Required';
//     } else if (!/^[a-zA-Z-]+{50,}$/i.test(values.lastName)) {
//         errors.lastName = 'Must be 50 letters or less. No special characters, symbols, or numbers.'
//     }

//     if (!values.email) {
//         errors.email = 'Required';
    
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address';
//     }
    
//         return errors;
// };


//signup form

const SignupForm = () => {
    // const formik = useFormik({
    //     initialValues: {
    //         firstName: '',
    //         lastName: '',
    //         email: ''
    //     },
        
        // onSubmit: values => {
        //     alert(JSON.stringify(values, null, 2));
    //     validate,
    //         onSubmit: values => {
    //             alert(JSON.stringify(values, null, 2));
    //     },
    // });
    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', email: ''}}
            onSubmit={(values, { setsubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setsubmitting(false);
                }, 400);
            }}

        >


        </Formik>
    )

    // return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='firstName'>First Name</label>
            <input
                id='firstName'
                name='firstName'
                type='text'
                {...formik.getFieldProps('firstName')}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.firstName}
            />

            {/* {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null} */}
            {/* )} */}
            {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
            ) : null}

            <label htmlFor='lastName'>Last Name</label>
            <input 
                id='lastName'
                name='lastName'
                type='text'
                {...formik.getFieldProps('lastName')}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.lastName}
            />
            {/* {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null} */}
            {formik.touched.lastName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
            ) : null}

            <label htmlFor='email'>Email Address</label>
            <input  
                id='email'
                name='email'
                type='email'
                {...formik.getFieldProps('email')}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.email}
            />
            {/* {formik.errors.email ? <div>{formik.errors.email}</div> : null} */}
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}

            <button type='submit'>Sign Up</button>
        </form>
    );
}