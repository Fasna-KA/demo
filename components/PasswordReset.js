import React, { useState } from 'react';
import axios from 'axios';

function PasswordResetForm() {
    const [email, setEmail] = useState('');
    const [resetSuccess, setResetSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post('/api/password/reset', { email })
            .then((response) => {
                setResetSuccess(true);
            })
            .catch((error) => {
                if (error.response && error.response.status === 404) {
                    setErrorMessage('Email not found');
                } else {
                    setErrorMessage('An error occurred, please try again later');
                }
            });
    };

    return (
        <div>
            <h2>Password Reset</h2>
            {resetSuccess ? (
                <p>An email has been sent to your address with instructions to reset your password.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={handleEmailChange} required />
                    <button type="submit">Reset Password</button>
                </form>
            )}
        </div>
    );
}

export default PasswordResetForm;

