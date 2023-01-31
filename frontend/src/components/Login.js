import React from "react";
import images from "../images/login-picture.png";
import leftArrow from "../images/arrow-left-r.svg";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="flex container mx-auto">
            <div className="">
                <img src={images} alt="" className="w-full h-full" />
            </div>
            <div className="px-16 py-24 w-1/2 ">
                <img src={leftArrow} alt="" className="" />
                <h1 className="text-custom1 text-5xl font-semibold mt-6">
                    Sign In
                </h1>
                <form action="">
                    <div className="flex flex-col w-5/6 mx-auto ">
                        <div className="my-6 text-xl font-semibold">
                            <label className="">Email Address:</label>
                            <br />
                            <input
                                type="text"
                                placeholder="Enter your email here...."
                                className="w-full mt-2 border-2 border-gray-300 p-2 rounded-xl"
                            />
                        </div>
                        <div className="mb-6 text-xl font-semibold">
                            <label className="">Password:</label>
                            <br />
                            <input
                                type="password"
                                placeholder="type password"
                                className="w-full mt-2 border-2 border-gray-300 p-2 rounded-xl"
                            />
                        </div>
                        <div className="mt-4">
                            <Link className=" text-center bg-custom1 text-white text-xl py-2 px-10 rounded-xl">
                                Sign In
                            </Link>
                        </div>
                        <div className="mt-6 mb-2">
                            <Link className=" text-custom1 text-l">
                                Forgot password?
                            </Link>
                        </div>
                        <div>
                            <Link className=" text-custom1 text-l">
                                Dont have an account ? Create Account
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
