import React from 'react';

const Footer = () => {
    return (
        <div className='container text-center bg-info shadow-sm p-3 rounded-3'>
            <p>Copyright &copy; <span> {(new Date().getFullYear())}</span></p>
        </div>
    );
};

export default Footer;