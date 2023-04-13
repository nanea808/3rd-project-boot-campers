import React, { useState } from 'react';
import LoginForm from '../components/Login';
// import SignupForm from '../components/Signup';

function LoginPage() {
    const [isLoggingIn, setLoggingIn] = useState(true);

    return (
        <div>
            <p>this text</p>
            {isLoggingIn ? <LoginForm /> : <h1>signup</h1>}
        </div>
    );
}

export default LoginPage;