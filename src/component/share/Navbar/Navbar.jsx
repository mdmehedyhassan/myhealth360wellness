import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../img/logo.png";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false); // Hide mobile menu on link click
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 px-4 md:px-16 lg:border-b-2 border-gray-400 z-50 ${isScrolled ? "bg-primary" : "bg-transparent"
        } transition-all duration-300`}
    >
      <div className="flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={handleLinkClick}>
          <img src={logo} alt="Logo" className="h-10 md:h-14" />
        </Link>

        {/* Navbar for larger screens */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link
            to="/"
            className={`text-base font-medium ${isActive("/")
              ? " bg-white py-2 px-4 rounded-lg text-primary font-bold"
              : "text-white"
              }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-base font-medium ${isActive("/about")
              ? " bg-white py-2 px-4 rounded-lg text-primary font-bold"
              : "text-white"
              }`}
          >
            About
          </Link>

          <div className="flex justify-center items-center gap-2">
            <Link
              to="/services"
              className={`text-base font-medium ${isActive("/services")
                ? " bg-white py-2 px-4 rounded-lg text-primary font-bold"
                : "text-white"
                }`}
            >
              Our Services
            </Link>
            <div className="dropdown dropdown-end text-white mt-2">
              <label className="swap">
                <input type="checkbox" />
                <div className="swap-off text-lg"><FaAngleDown /></div>
                <div className="swap-on text-lg"><FaAngleUp /></div>
              </label>
              <ul tabIndex={0} className="dropdown-content menu bg-primary text-white rounded-box z-[1] w-36 mt-2 p-2 shadow ">
                <li ><Link
                  to="/services/iv-infusion-bar"
                  onClick={handleLinkClick}
                >
                  IV Infusion Bar
                </Link></li>
                <li><a>Service 2</a></li>
              </ul>
            </div>
          </div>
          <Link
            to="/packages"
            className={`text-base font-medium ${isActive("/packages")
              ? " bg-white py-2 px-4 rounded-lg text-primary font-bold"
              : "text-white"
              }`}
          >
            Packages
          </Link>
          <Link
            to="/contact"
            className={`text-base font-medium ${isActive("/contact")
              ? " bg-white py-2 px-4 rounded-lg text-primary font-bold"
              : "text-white"
              }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden w-full bg-primary text-white px-4 py-2 rounded-md z-50">
          <Link
            to="/"
            className={`block py-2 ${isActive("/")
              ? "bg-white py-2 px-4 rounded-lg text-primary font-bold"
              : "text-white"
              }`}
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`block py-2 ${isActive("/about")
              ? "bg-white py-2 px-4 rounded-lg text-primary font-bold"
              : "text-white"
              }`}
            onClick={handleLinkClick}
          >
            About
          </Link>

          <div className="flex justify-start items-center gap-2">
            <Link
              to="/services"
              className={`text-base font-medium ${isActive("/services")
                ? " bg-white py-2 px-4 rounded-lg text-primary font-bold"
                : "text-white"
                }`}
            >
              Our Services
            </Link>
            <div className="dropdown text-white mt-2">
              <label className="swap">
                <input type="checkbox" />
                <div className="swap-off text-lg"><FaAngleDown /></div>
                <div className="swap-on text-lg"><FaAngleUp /></div>
              </label>
              <ul tabIndex={0} className="dropdown-content menu bg-primary text-white rounded-box z-[1] w-52 mt-2 p-2 shadow ">
                <li ><Link
                  to="/services/iv-infusion-bar"
                  onClick={handleLinkClick}
                >
                  IV Infusion Bar
                </Link></li>
                <li><a>Service 2</a></li>
              </ul>
            </div>
          </div>



          <Link
            to="/packages"
            className={`block py-2 ${isActive("/packages")
              ? "bg-white py-2 px-4 rounded-lg text-primary font-bold"
              : "text-white"
              }`}
            onClick={handleLinkClick}
          >
            Packages
          </Link>
          <Link
            to="/contact"
            className={`block py-2 ${isActive("/contact")
              ? "bg-white py-2 px-4 rounded-lg text-primary font-bold"
              : "text-white"
              }`}
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
