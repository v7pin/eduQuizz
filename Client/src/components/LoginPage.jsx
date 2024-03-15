import React, { useState } from "react";
import { IoLockClosed } from "react-icons/io5";
import { IoIosPerson } from "react-icons/io";
import { Link } from "react-router-dom";
import WaveSVG from "../assets/signinwave.svg";
import icon1 from "../assets/signinLogo.svg";

const LoginPage = () => {
  const [loginClicked, setLoginClicked] = useState(false);

  const handleLogin = () => {
    setLoginClicked(true);

    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 3000);
  };

  return (
    <div className="w-full h-screen flex">
      <div className="img flex-1 relative">
        <img
          src={WaveSVG}
          alt="Wave Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img
          src={icon1}
          alt="Icon"
          className="absolute bottom-0 right-0 mb-4 mr-0 w-96 h-72 "
        />
        <div className="absolute top-0 left-0 mb-8 ml-40 mt-40 text-white flex flex-col text-center justify-center">
          <p className="mb-2 text-4xl font-ubuntu font-semibold">New here? </p>
          <p className="mb-4 text-base  ">Create your account now!</p>
          <Link
            to="/signup"
            className="border border-white px-2 py-2 rounded-3xl text-white font-bold font-nunito inline-block"
          >
            Sign Up
          </Link>
        </div>
      </div>
      <div className="cred  flex-1 flex justify-center items-center">
        <div className="flex flex-col gap-6 justify-center items-center ">
          <form action="" className="text-center ">
            <h1 className="mb-8 text-4xl font-bold">Sign in</h1>
            <div className="mb-6 relative m-3 ">
              <IoIosPerson
                className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
                size={24}
              />
              <input
                className="shadow appearance-none border rounded-3xl w-full text-base py-3 pl-10 pr-20  text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-200 font-semibold "
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6 relative m-3">
              <IoLockClosed
                className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
                size={22}
              />
              <input
                className="shadow appearance-none border rounded-3xl w-full text-base py-3 pl-10 pr-20  text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-200 font-semibold"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="flex flex-col items-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full font-ubuntu focus:outline-none focus:shadow-outline mb-4"
                type="button"
                onClick={handleLogin} // Call handleLogin function on button click
              >
                Login
              </button>
              {/* Conditionally render the message only when loginClicked is true */}
              {loginClicked && (
                <p className="text-sm text-red-600 mb-4">
                  Redirecting to dashboard...
                </p>
              )}
              <Link
                to={"/signup"}
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
