import React from 'react';
import logo from '../../../img/logo.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li>
                            <a>Our Services</a>
                            <ul className="p-2">
                                <li><a>Service 1</a></li>
                                <li><a>Service 2</a></li>
                                <li><a>Service 3</a></li>
                                <li><a>Service 4</a></li>
                                <li><a>Service 5</a></li>
                            </ul>
                        </li>
                        <li><a>Memberships</a></li>
                        <li><a>Packages</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img className='w-32 h-auto' src={logo} alt="" />
                    </a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li>
                        <details>
                            <summary>Our Services</summary>
                            <ul className="p-2">
                                <li><a>Service 1</a></li>
                                <li><a>Service 2</a></li>
                                <li><a>Service 3</a></li>
                                <li><a>Service 4</a></li>
                                <li><a>Service 5</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Memberships</a></li>
                    <li><a>Packages</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">Button</a>
            </div> */}
        </div>
    );
};

export default Navbar;