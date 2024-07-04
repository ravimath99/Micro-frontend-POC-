import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { GET_USER } from './GrapgQL/Query';

const Test = ({onSubmit}) => {

    const { loading, error, data } = useQuery(GET_USER);

    useEffect(()=>{
        console.log('remote',data);
    },[data])

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [name, setName] = useState('');
    // const [number, setNumber] = useState('');
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log('Email:', email);
    //     console.log('Password:', password);
    //     const formData = {
    //         email : email,
    //         password : password,
    //         name : name,
    //         number: number
    //     }
    //     onSubmit(formData);
    // };

    return (
        <>
            {/* <div>
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
            <div>
                <ul>
                    {data.map(item =>{
                        <li key={item.id}>{item.title}</li>
                    })}
                </ul>
            </div> */}
            <div>
                ravi
            </div>
        </>
    );
};

export default Test;
