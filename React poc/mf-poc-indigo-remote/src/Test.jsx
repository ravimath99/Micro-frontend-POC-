import React, { useState } from 'react';

const Test = ({onSubmit}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        const formData = {
            email : email,
            password : password,
            name : name,
            number: number
        }
        onSubmit(formData);
    };
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                {/* <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div> */}
                <div>
                    <label>Phone no:</label>
                    <input
                        type="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Test;
