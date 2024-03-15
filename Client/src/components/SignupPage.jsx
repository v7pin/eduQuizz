import React from "react";
import { IoLockClosed } from "react-icons/io5";
import { IoIosPerson, IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import SignupSVG from "../assets/signupwave.svg";
import icon1 from "../assets/signupLogo.svg";

const SignupPage = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="cred  flex-1 flex justify-center items-center">
        <div className="flex flex-col gap-6 justify-center items-center ">
          <form action="" className="text-center ">
            <h1 className="mb-8 text-4xl font-bold">Sign Up</h1>
            <div className="mb-6 relative m-3">
              <IoIosPerson className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" size={24} />
              <input
                className="shadow appearance-none border rounded-3xl w-full text-base py-3 pl-10 pr-20 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-200 font-semibold"
                id="firstName"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="mb-6 relative m-3">
              <IoIosPerson className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" size={24} />
              <input
                className="shadow appearance-none border rounded-3xl w-full text-base py-3 pl-10 pr-20 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-200 font-semibold"
                id="lastName"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="mb-6 relative m-3">
              <div className="relative">
                <select
                  className="shadow appearance-none border rounded-3xl w-full text-base py-3 pl-10 pr-20 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-200 font-semibold"
                  id="youAre"
                >
                  <option value="" disabled selected hidden>You Are</option>
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                </select>
                <IoIosArrowDown className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" size={24} />
              </div>
            </div>
            <div className="mb-6 relative m-3">
              <input
                className="hidden"
                id="termsAndConditions"
                type="checkbox"
              />
              <label htmlFor="termsAndConditions" className="flex items-center cursor-pointer">
                <span className="w-6 h-6 border border-gray-400 rounded-sm mr-3"></span>
                <span className="text-gray-700">I accept the terms and conditions</span>
              </label>
            </div>
            <div className="flex flex-col items-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full focus:outline-none focus:shadow-outline mb-4"
                type="button"
              >
                Sign Up
              </button>
              <Link to={"/"} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                Already have an account? Log in here
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="img flex-1 relative">
        <img src={SignupSVG} alt="Wave Background" className="absolute inset-0 w-full h-full object-cover" />
        <img src={icon1} alt="Icon" className="absolute bottom-0 right-0 mb-4 mr-0 w-96 h-72 " />
      </div>
    </div>
  );
};

export default SignupPage;
