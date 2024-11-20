import React, { useState, useEffect } from "react";
import logo from "../../../img/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // [#062223]

  return (
    <div
      className={`navbar fixed top-0 left-0 right-0 px-2 md:px-16 border-b-2 border-b-gray-400 z-10 ${
        isScrolled ? "bg-primary z-50" : "bg-transparent"
      } transition-colors duration-500 ease-in-out`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-900 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li className="text-white font-normal text-base">
              <Link to="/">Home</Link>
            </li>
            <li className="text-white font-normal text-base">
              <Link to="/about">About</Link>
            </li>
            <li className="text-white font-normal text-base relative">
              <details
                onClick={() => {
                  navigate("/services");
                }}
              >
                <summary>Our Services</summary>
                <ul className="p-2 w-full rounded-lg">
                  <li className="text-white font-normal text-base">
                    <a href="/services/iv-infusion-bar">IV Infusion Bar</a>
                  </li>
                  <li className="text-white font-normal text-base">
                    <a href="/">Service 2</a>
                  </li>
                  <li className="text-white font-normal text-base">
                    <a href="/">Service 3</a>
                  </li>
                  <li className="text-white font-normal text-base">
                    <a href="/">Service 4</a>
                  </li>
                  <li className="text-white font-normal text-base">
                    <a href="/">Service 5</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="text-white font-normal text-base">
              <Link to="/packages">Packages</Link>
            </li>
            <li className="text-white font-normal text-base">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost mb-3 mt-5 w-52 h-20" href="/">
          <img className="w-48 h-auto" src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 z-[1]">
          <li className="text-white font-normal text-base">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white font-normal text-base">
            <Link to="/about">About</Link>
          </li>
          <li className="text-white font-normal text-base relative">
            <details
              onClick={() => {
                navigate("/services");
              }}
            >
              <summary>Our Services</summary>
              <ul className="p-2 bg-gray-600 absolute w-full rounded-lg">
                <li className="text-white font-normal text-base">
                  <a href="/services/iv-infusion-bar">IV Infusion Bar</a>
                </li>
                <li className="text-white font-normal text-base">
                  <a href="/">Service 2</a>
                </li>
                <li className="text-white font-normal text-base">
                  <a href="/">Service 3</a>
                </li>
                <li className="text-white font-normal text-base">
                  <a href="/">Service 4</a>
                </li>
                <li className="text-white font-normal text-base">
                  <a href="/">Service 5</a>
                </li>
              </ul>
            </details>
          </li>
          <li className="text-white font-normal text-base">
            <Link to="/packages">Packages</Link>
          </li>
          <li className="text-white font-normal text-base">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;