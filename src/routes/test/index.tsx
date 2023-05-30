import CommonBtn from 'components/CommonBtn';
import CommonInput from 'components/CommonInput';
import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Perform login logic here
        // For simplicity, we'll just log the username and password to the console
        console.log(`Username: ${username}, Password: ${password}`);
    };

    return (
        <div>
            <h2>Login</h2>
            <CommonInput
                type="text"
                placeHolder="Username"
                border='outline'
                textAlign='center'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <CommonInput
                type="password"
                placeHolder="Password"
                border='outline'
                textAlign='center'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <CommonBtn onClick={handleLogin}>Login</CommonBtn>
        </div>
    );
};

export default Login;
