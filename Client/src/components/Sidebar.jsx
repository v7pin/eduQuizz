import React, { useState } from "react";
import { IoCreate } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RiTeamFill } from "react-icons/ri";
import { MdPlaylistAddCheck } from "react-icons/md";
import { MdOutlineNoteAdd } from "react-icons/md";
import { FaBars } from "react-icons/fa";


const Sidebar = () => {
  // State variable to track whether the sidebar is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the sidebar when a sidebar item is clicked
  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`sideBar grid h-full  top-0 w-64 bg-blue-800  text-black shadow-2xl ${
        isOpen ? "open" : ""
      }`}
    >
      <div className="logoDiv flex flex-col items-center ">
        <img
          src="logo.png"
          alt="Image m1"
          className="w-52 h-48 "
        />
      </div>

      <div className="menuDiv text-center">
        <h4 className="text-2xl  font-medium px-6 mb-5 text-orange-200 underline font-poppins mt-6">QUICK MENU</h4>
        <ul className="menuLists grid gap-3 px-14 text-center">
          <li className="listItem relative" onClick={closeSidebar}>
            {" "}
            {/* Add onClick event to close sidebar */}
            <Link
              to="/create-quiz"
              className="menuLink text-white font-weight-500 text-lg transition flex items-center text-center hover:scale-105 duration-300"
            >
              <IoCreate className="mr-2" size={24} />
              <span className="text-sm">Create a Quiz</span>
            </Link>
          </li>
          <li className="listItem relative" onClick={closeSidebar}>
            {" "}
            {/* Add onClick event to close sidebar */}
            <Link
              to="/join-quiz"
              className="bhoomiKart text-white font-weight-500 text-lg transition flex items-center hover:scale-105 duration-300"
            >
              <MdPlaylistAddCheck className="mr-2" size={24} />
              <span className="text-sm">Join a Quiz</span>
            </Link>
          </li>
          <li className="listItem relative" onClick={closeSidebar}>
            {" "}
            {/* Add onClick event to close sidebar */}
            <Link
              to="/create-session"
              className="menuLink text-white font-weight-500 text-lg  transition flex items-center hover:scale-105 duration-300"
            >
              <MdOutlineNoteAdd className="mr-2" size={24} />
              <span className="text-sm">Create a Session</span>
            </Link>
          </li>
          <li className="listItem relative" onClick={closeSidebar}>
            {" "}
            {/* Add onClick event to close sidebar */}
            <Link
              to="/join-session"
              className="menuLink text-white font-weight-500 text-lg transition flex items-center hover:scale-105 duration-300"
            >
              <RiTeamFill className="mr-2" size={24} />
              <span className="text-sm">Join a Session</span>
            </Link>
          
          </li>
          <li className="listItem relative" onClick={closeSidebar}>
            {" "}
            {/* Add onClick event to close sidebar */}
            <Link
              to="/leaderboard"
              className="menuLink text-white font-weight-500 text-lg transition flex items-center hover:scale-105 duration-300"
            >
              <MdOutlineNoteAdd className="mr-2" size={24} />
              <span className="text-sm">Leaderboard</span>
            </Link>
          </li>
          <li className="listItem relative" onClick={closeSidebar}>
            {" "}
            {/* Add onClick event to close sidebar */}
            <Link
              to="/feedback"
              className="menuLink text-white font-weight-500 text-lg transition flex items-center hover:scale-105 duration-300"
            >
              <RiTeamFill className="mr-2" size={24} />
              <span className="text-sm">Feedback</span>
            </Link>
          
          </li> 
        </ul>
      </div>

      <div className="sideBarCard m-4 bg-white text-black p-4 rounded-2xl mt-4">
        <div className="cardContent relative">
          <div className="circle1 absolute h-100 w-100 top-negative-50 right-negative-50 bg-blue-300 rounded-full opacity-70"></div>
          <div className="circle2 absolute h-150 w-150 bottom-negative-80 right-negative-50 bg-blue-300 rounded-full opacity-70 z-1"></div>
          <h3 className="text-lg font-bold mb-2 h3FontSize">Help Center</h3>
          <p className="text-sm mb-4 font-weight-500">
            Having trouble? Please contact us.
          </p>
          <button
            onClick={() => {
              window.location.href = "/contact-us";
            }}
            className="btn bg-blue-300 text-black py-1 ml-3 mt-4 px-4 rounded-2xl h-14  hover:scale-105 duration-150"
          >
            GO TO HELP CENTER
          </button>
        </div>
      </div>

      {/* Hamburger menu button */}
      <button
        className="hamburger absolute top-4 left-4 text-white"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaAngleLeft size={24} /> : <FaBars size={24} />}
      </button>
    </div>
  );
};

export default Sidebar;
