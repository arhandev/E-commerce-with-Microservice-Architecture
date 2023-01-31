import React from "react";
import Logo from "../images/UX.in.svg";

function Footer() {
    return (
        <div className="bg-customfooter border-t-2 border-gray-300 py-12">
            <div className="grid grid-cols-5 container mx-auto text-custom3">
                <div className="col-span-2">
                    <img src={Logo} alt="Logo" />
                    <h1 className="my-4">
                        We kaboom your beauty holiday <br /> instantly and
                        memorable.
                    </h1>
                </div>
                <div>
                    <ul className="leading-7">
                        <li className="text-custom1 text-xl mb-4">
                            For Beginners
                        </li>
                        <li>New Account</li>
                        <li>Start Booking a room</li>
                        <li>Use Payments</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="text-custom1 text-xl mb-4">Explore</li>
                        <li>Our Careers</li>
                        <li>Privacy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="text-custom1 text-xl mb-4">Connect Us</li>
                        <li>support@betawie.id</li>
                        <li>021-2208-1998</li>
                        <li>UXin, Harmoni, Jakarta</li>
                    </ul>
                </div>
            </div>
            <div className="text-center my-4 mt-10 text-custom3">
                Copyright 2021 All rights reserved UXin
            </div>
        </div>
    );
}

export default Footer;
