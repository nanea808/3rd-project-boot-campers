import React, { useState } from 'react';
import LoginForm from '../components/Login';
import SignupForm from '../components/Signup';

function LoginPage() {
    const [isLoggingIn, setLoggingIn] = useState(true);

    function switchForms () {
        if (isLoggingIn) {
            return (
                <>
                    <LoginForm />
                    <button onClick={() => setLoggingIn(false)}>Sign Up Here</button>
                </>
            );
        } else {
            return <SignupForm />;
        }
    }

    return (
        <div>
            {switchForms()}
        </div>
    );
}

export default LoginPage;