import React from "react";
import logo from "../../../img/logo.png";
import InstagramCom from "./InstagramCom/InstagramCom";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
} from "react-icons/fa6";
import NewsletterCom from "../NewsletterCom/NewsletterCom";

function Footer() {
  return (
    <div>
      <InstagramCom></InstagramCom>
      <NewsletterCom />
      <div className="bg-primary border-white border-t-2">
        <footer className="footer text-base-content max-w-7xl mx-auto pt-[69px] pb-[50px] px-6 md:px-0">
          <nav className="text-white ">
            <h3 className="text-xl font-bold mb-3">Weekly Newsletter</h3>
            <p className="max-w-sm text-[15px] font-normal mb-12">
              Subscribe to our newsletter to receive the latest updates,
              Business idea and offers
            </p>
            <img className="w-48 h-auto" src={logo} alt="" />
            <div className="flex gap-4 mt-10">
              <Link to="https://www.facebook.com/">
                <div className="hover:cursor-pointer h-[35px] w-[35px] bg-primaryAccent border-2 border-borderPrimary rounded-full text-white flex justify-center items-center text-xl hover:bg-secondary transition-all ease-in-out duration-500">
                  <FaFacebookF />
                </div>
              </Link>
              <Link to="https://www.instagram.com/">
                <div className="hover:cursor-pointer h-[35px] w-[35px] bg-primaryAccent border-2 border-borderPrimary rounded-full text-white flex justify-center items-center text-xl hover:bg-secondary transition-all ease-in-out duration-500">
                  <FaInstagram />
                </div>
              </Link>
              <Link to="https://www.linkedin.com/">
                <div className="hover:cursor-pointer h-[35px] w-[35px] bg-primaryAccent border-2 border-borderPrimary rounded-full text-white flex justify-center items-center text-xl hover:bg-secondary transition-all ease-in-out duration-500">
                  <FaLinkedinIn />
                </div>
              </Link>
              <Link to="https://www.skype.com/">
                <div className="hover:cursor-pointer h-[35px] w-[35px] bg-primaryAccent border-2 border-borderPrimary rounded-full text-white flex justify-center items-center text-xl hover:bg-secondary transition-all ease-in-out duration-500">
                  <FaSkype />
                </div>
              </Link>
            </div>
          </nav>
          <nav className="text-white">
            <h6 className="font-bold text-xl mb-10">Quick links</h6>
            <Link to="/" className="link link-hover text-base font-normal mb-4">
              About
            </Link>
            <Link to="/" className="link link-hover text-base font-normal mb-4">
              Concerns
            </Link>
            <Link to="/" className="link link-hover text-base font-normal mb-4">
              Sexual Wellness
            </Link>
            <Link to="/" className="link link-hover text-base font-normal mb-4">
              Morpheus8
            </Link>
            <Link to="/" className="link link-hover text-base font-normal mb-4">
              IV Infusion Bar
            </Link>
            <Link to="/" className="link link-hover text-base font-normal mb-4">
              Memberships
            </Link>
            <Link to="/" className="link link-hover text-base font-normal">
              Contact
            </Link>
          </nav>
          <nav className="text-white">
            <h6 className="font-bold text-xl mb-10">Additional Services</h6>
            <Link to="/" className="link link-hover text-base font-normal mb-4">
              Urinary Incontinence
            </Link>
            <Link to="/" className="link link-hover text-base font-normal mb-4">
              Sexual Wellness
            </Link>
            <Link to="/" className="link link-hover text-base font-normal mb-4">
              Mommy Makeover
            </Link>
            <Link to="/" className="link link-hover text-base font-normal mb-4">
              IV Infusion Bar
            </Link>
            <Link to="/" className="link link-hover text-base font-normal mb-4">
              Body Sculpting
            </Link>
            <Link to="/" className="link link-hover text-base font-normal mb-4">
              Medical Rehab
            </Link>
            <Link to="/" className="link link-hover text-base font-normal">
              Cellulite
            </Link>
          </nav>
          <nav className="text-white">
            <h6 className="font-bold text-xl mb-10">Contact</h6>
            <a href="tel:+012 3456 7890" className="link link-hover text-base font-normal mb-5">012 3456 7890</a>
            <a href="mailto:youremail@mail.com" className="link link-hover text-base font-normal mb-5">youremail@mail.com</a>
            <Link to="/" className="link link-hover text-base font-normal mb-5">
              Banani Model Town
            </Link>
            <Link to="/" className="link link-hover text-base font-normal mb-5">
              Dhaka City, Bangladesh
            </Link>
            <Link to="/" className="link link-hover text-base font-normal">
              Open hour:10-8.00 Mon-fri
            </Link>
          </nav>
        </footer>
        <div className="border-white pt-7 pb-8 px-6 md:px-0 border-t-2">
          <footer className="footer text-base-content max-w-7xl mx-auto">
            <aside className="grid-flow-col items-center text-white">
              <p className="text-[12px] font-normal">
                Copyright © 2024
                <span className="text-white font-semibold">
                  myhealth360wellness
                </span>
                . All Rights Reserved.
              </p>
            </aside>
            <nav className="md:place-self-center md:justify-self-end">
              <div className="flex gap-14 text-white">
                <Link to="/" className="text-sm font-normal link link-hover">
                  Privacy
                </Link>
                <Link to="/" className="text-sm font-normal link link-hover">
                  Terms
                </Link>
              </div>
            </nav>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Footer;
