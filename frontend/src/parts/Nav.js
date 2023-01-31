import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/UX.in.svg";

function Nav() {
    return (
        <div className="shadow bg-customnav">
            <div className="container m-auto p-6">
                <div className="flex justify-between items-center">
                    <div className="">
                        <img src={logo} alt="gambar" className="" />
                    </div>
                    <div className="min-w-1/3">
                        <ul className="flex justify-around">
                            <li>
                                <Link className="text-custom2" to='/'>Home</Link>
                            </li>
                            <li>
                                <Link className="text-custom2">Kelas</Link>
                            </li>
                            <li>
                                <Link className="text-custom2">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <ul className="flex justify-center">
                            <li className="px-6 py-4 text-custom1">
                                <Link to="/login">Sign In</Link>
                            </li>
                            <li className="bg-custom1 text-white font-semibold px-6 py-4">
                                <Link>Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;
