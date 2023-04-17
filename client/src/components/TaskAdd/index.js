import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

//yup validation schema
//will likely need to be revised depending on Task model fields
const schema = Yup.object().shape({
    taskName: Yup.string()
        .required('Please give your task a name')
        .min(5, 'Task title must be at least 5 characters')
        .max(100, 'Task title can be no more than 100 characters'),
    description: Yup.string()
        .required('Please give a description of the task.')
        .min(15, 'Description must be at least 15 characters')
        .max(300, 'Description can be no more than 200 characters'),
    // location: Yup.string()
    //     .required('Please include where the task will take place')
    //     .min(15, 'Must be at least 15 characters')
    //     .max(100, 'Cannot exceed 100 characters'),
    currentFunding: Yup.number()
        .required('Please include how much you are willing to pay for the task.')
        .min(0.0)
        .max(100.00) //do we want to set a max?
});

const addTaskForm = () => {
    return(
        <div className="form-container">
            <Formik
                validationSchema={schema}
                initialValues={{ title: '', description: '', currentFunding: '' }}
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
                                    <label htmlFor='taskName' className='label'>
                                        Task Name
                                    </label>
                                    <input
                                        type='text'
                                        name='title'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.taskName}
                                        placeholder='Name your task.'
                                        className='input'
                                        id='title'
                                    />
                                    {errors.taskName && touched.taskName && (
                                        <p className="error">{errors.taskName}</p>
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
                                        placeholder='Describe your task. What would you like to be done? What work will be involved?'
                                        className='input'
                                        id='description'
                                    />
                                    {errors.description && touched.description && (
                                        <p className="error">{errors.description}</p>
                                    )}
                                </div>

                                {/* save for future implementation */}
                                {/* <div className='input-group'>
                                    <label htmlFor='location' className='label'>
                                        Location
                                    </label>
                                    <input
                                        type='text'
                                        name='location'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.location}
                                        placeholder='Where is your task taking place?'
                                        className='input'
                                        id='location'
                                    />
                                    {errors.location && touched.location && (
                                        <p className="error">{errors.location}</p>
                                    )}
                                </div> */}
                                <div className='input-group'>
                                    <label htmlFor='currentFunding' className='label'>
                                        Fund Task
                                    </label>
                                    <input
                                        type='text'
                                        name='currentFunding'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.currentFunding}
                                        placeholder='How much would you like to add to this task fund? Remember, other Taskosauruses will be able to donate to the cause, too.'
                                        className='input'
                                        id='currentFunding'
                                    />
                                    {errors.currentFunding && touched.currentFunding && (
                                        <p className="error">{errors.currentFunding}</p>
                                    )}
                                </div>
                                <div>
                                    <button type="submit" className="button">
                                        Submit
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