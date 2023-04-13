import React from 'react';
import { screen } from '@testing-library/react';
import App from './App.test';
import SignupForm from '../components/Signup';
import { render, unmountComponentAtNode } from 'react-dom';

//make empty container div for signup form
let container = null;

//attach container
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

//post-test cleanup
afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container.null;
});

test('renders signup form', () => {
    // render(<App />);
    render(<SignupForm />);
    const formEl = screen.getByText(/Sign Up/i);
    expect(formEl).toBeInTheDocument();
});