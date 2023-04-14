import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

//yup validation schema
//will likely need to be revised depending on Task model fields
const schema = Yup.object().shape({
    title: Yup.string()
        .required('Please give your task a name')
        .min(5, 'Task title must be at least 5 characters')
        .max(100, 'Task title can be no more than 100 characters'),
    description: Yup.string()
        .required('Please give a description of the task. What would you like to be done? What work will be involved?')
        .min(15, 'Description must be at least 15 characters')
        .max(300, 'Description can be no more than 200 characters'),
    location: Yup.string()
        .required('Please include where the task will take place')
        .min(15, 'Must be at least 15 characters')
        .max(100, 'Cannot exceed 100 characters'),
    pay: Yup.number()
        .required('Please include how much you are willing to pay for the task.')
        // .min()
        // .max()
});

const addTaskForm = () => {
    return(
        <div className="form-container">
            <Formik
                validationSchema={schema}
                initialValues={{ title: '', description: '', location: '', pay: '' }}
                onSubmit={(values) => {
                    //replace with desired fxnality
                    console.log('New task passed validation. ' + values);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => {
                    <div className="container-fluid">
                        <div className="form">
                            <h1 className="">Create a Task</h1>
                            <Form noValidate onSubmit={handleSubmit}>
                                <div className='input-group'>
                                    <label htmlFor='title' className='label'>
                                        Title
                                    </label>
                                    <input
                                        type='text'
                                        name='title'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.title}
                                        placeholder='name your task'
                                        className='input'
                                        id='title'
                                    />
                                    {errors.title && touched.title && (
                                        <p className="error">{errors.title}</p>
                                    )}
                                </div>
                                <div className='input-group'>
                                    <label htmlFor='description' className='label'>
                                        Description
                                    </label>
                                    <input
                                        type='text'
                                        name='description'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.description}
                                        placeholder='describe your task'
                                        className='input'
                                        id='description'
                                    />
                                    {errors.description && touched.description && (
                                        <p className="error">{errors.description}</p>
                                    )}
                                </div>
                                <div className='input-group'>
                                    <label htmlFor='location' className='label'>
                                        Location
                                    </label>
                                    <input
                                        type='text'
                                        name='location'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.location}
                                        placeholder='where is your task taking place?'
                                        className='input'
                                        id='location'
                                    />
                                    {errors.location && touched.location && (
                                        <p className="error">{errors.location}</p>
                                    )}
                                </div>
                                <div className='input-group'>
                                    <label htmlFor='pay' className='label'>
                                        Pay
                                    </label>
                                    <input
                                        type='text'
                                        name='pay'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.pay}
                                        placeholder='How much you are willing to pay for the task? Remember, other Taskosauruses will be able to donate to the cause, too.'
                                        className='input'
                                        id='pay'
                                    />
                                    {errors.pay && touched.pay && (
                                        <p className="error">{errors.pay}</p>
                                    )}
                                </div>
                                <div>
                                    <button type="submit" className="button">
                                        Create Task
                                    </button>
                                </div>
                            </Form>
                        </div>
                    </div>
                }}
            </Formik>
        </div>
    );
};

export default addTaskForm;