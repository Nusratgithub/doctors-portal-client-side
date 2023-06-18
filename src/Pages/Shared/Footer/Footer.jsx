import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        
        <footer className='px-5 py-7 bg-slate-200'>
                <div className='flex flex-col md:flex-row justify-between gap-10 mb-6'>
                    <div>
                        <h2 className='text-[#939393] text-lg font-bold leading-5 mb-5 uppercase'>Services</h2>
                        <ul className='text-base font-normal leading-5 space-y-[14px]'>
                            <li>Emergency Checkup</li>
                            <li>Monthly Checkup</li>
                            <li>Weekly Checkup</li>
                            <li>Deep Checkup</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-[#939393] text-lg font-bold leading-5 mb-5 uppercase'>ORAL HEALTH</h2>
                        <ul className='text-base font-normal leading-5 space-y-[14px]'>
                            <li>Fluoride Treatment</li>
                            <li>Cavity Filling</li>
                            <li>Teeth Whitening</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-[#939393] text-lg font-bold leading-5 mb-5 uppercase'>OUR ADDRESS</h2>
                        <ul className='text-base font-normal leading-5'>
                            <li>New York - 101010 Hudson</li>
                        </ul>
                    </div>
                </div>
                <div className='text-center mb-2'>
                    <p className='text-center'>Copyright © 2021 - { new Date().getFullYear() } <Link to='/' className='text-success'>Doctors Portal.</Link> All Rights Reserved.</p>
                </div>
        </footer>
    );
};

export default Footer;