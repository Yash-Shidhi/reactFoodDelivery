import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/logo.jpg";

export const Navbar = () => {
  return (
    <header>
      <nav className="h-20 flex justify-between items-center w-[92%] mx-auto">
        <div>
          <img className="w-28 h-14" src={img} alt="logo" />
        </div>
        <div className="">
          <ul className="flex items-center gap-[4vw]">
            <li>
              <Link className="no-underline text-black hover:underline" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="no-underline text-black hover:underline"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="no-underline text-black hover:underline"
                to="/menu"
              >
                Menu
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <button className="px-4 py-2 rounded-full bg-red-900  hover:bg-red-700">
            <Link
              className="no-underline text-white"
              to="/signIn"
            >
              Sign in
            </Link>
          </button>
        </div>
      </nav>
    </header>
  );
};
