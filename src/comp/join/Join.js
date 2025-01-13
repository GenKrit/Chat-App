import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imge from './Psgpraveen.png';
import './join.css';

export let user = '';

const Join = () => {
    const [name, setName] = useState('');

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    const handleLogin = (e) => {
        if (name.trim()) {
            user = name;
            setName('');
        } else {
            alert('Please Enter Your Name');
            e.preventDefault();
        }
    };

    return (
        <div className='joinPage'>
            <div className='joinContent'>
                <h1><img className='img2' src={imge} alt='chat' /> Chat-App</h1>
                <input
                    placeholder='Enter Your Name'
                    type='text'
                    value={name}
                    onChange={handleInputChange}
                /><br />
                <Link 
                    to={name.trim() ? '/chat' : '#'} 
                    onClick={handleLogin}
                >
                    <button className='joinbtn'>Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Join;
