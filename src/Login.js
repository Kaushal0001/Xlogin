import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageColor, setMessageColor] = useState('black');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password) {
            setMessage('Both fields are required.');
            setMessageColor('red');
            return;
        }

        if (username === 'user' && password === 'password') {
            setMessage('Welcome, user!');
            setMessageColor('green');
            setIsLoggedIn(true);
        } else {
            setMessage('Invalid username or password');
            setMessageColor('red');
        }
    };

    return (
        <div style={{ fontFamily: 'serif', padding: 20 }}>
            <h1>Login Page</h1>
            {message && (
                <div style={{ margin: '20px 20px 20px 0px', color: messageColor }}>
                    {message}
                </div>
            )}
            {!isLoggedIn && (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        placeholder='username'
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    /><br />

                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        placeholder='password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    /><br />

                    <button type="submit" style={{ marginTop: 10 }}>Submit</button>
                </form>
            )}


        </div>
    );
};

export default Login;
