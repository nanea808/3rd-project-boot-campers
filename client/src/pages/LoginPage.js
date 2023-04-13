import React, { useState } from 'react';
import Login from '../components/Login';
// import Signup from '../components/Signup';

function LoginPage() {
    const [isLoggingIn, setLoggingIn] = useState(true);

    return (
        <div>
            <p>this text</p>
            {isLoggingIn ? <Login /> : <h1>signup</h1>}
        </div>
    );
}

export default LoginPage;