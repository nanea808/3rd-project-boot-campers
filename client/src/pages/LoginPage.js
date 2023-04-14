import React, { useState } from 'react';
import LoginForm from '../components/Login';
import Footer from '../components/Footer';
// import SignupForm from '../components/Signup';

function LoginPage() {
    const [isLoggingIn, setLoggingIn] = useState(true);

    return (
        <main>
        <div>
            <p>this text</p>
            {isLoggingIn ? <LoginForm /> : <h1>signup</h1>}
        </div>
        <Footer />
        </main>
    );
}

export default LoginPage;