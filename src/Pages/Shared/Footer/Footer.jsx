import React from 'react';
import logo from '../../../../public/assets/logo.png'

const Footer = () => {
    return (
        <footer>
            <div className="lg:footer p-10 bg-base-200 text-base-content">
                <div className='my-4 lg:my-0'>
                    <img src={logo} alt="" />
                    <p>Yoga Industries Ltd.<br />Providing reliable Plase since 1992</p>
                </div>
                <div>
                    <span className="footer-title mr-4 lg:mr-0">Services:</span>
                    <a className="link link-hover mr-2 lg:mr-0">Branding</a>
                    <a className="link link-hover mr-2 lg:mr-0">Design</a>
                    <a className="link link-hover mr-2 lg:mr-0">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title mr-2 lg:mr-0">Company:</span>
                    <a className="link link-hover mr-2 lg:mr-0">About us</a>
                    <a className="link link-hover mr-2 lg:mr-0">Contact</a>
                    <a className="link link-hover mr-2 lg:mr-0">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title mr-2 lg:mr-0">Legal:</span>
                    <a className="link link-hover mr-2 lg:mr-0">Terms of use</a>
                    <a className="link link-hover mr-2 lg:mr-0">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;