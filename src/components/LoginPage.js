import React from 'react';
import Navbar from './Navbar'
import Login from './Login';
import NewsLetter from './NewsLetter';
import Footer from './Footer';
const LoginPage = () => {
    return (
        <div className='container'>
            <Navbar />
            <Login />
            <NewsLetter />
            <Footer />
        </div>
    );
}

export default LoginPage;
