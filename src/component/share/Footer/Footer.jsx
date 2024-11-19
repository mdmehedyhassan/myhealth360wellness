import React from "react";
import logo from "../../../img/logo.png";
import InstagramPage from "./InstagramPage";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
} from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <InstagramPage></InstagramPage>
      <div className="bg-primary">
        <footer className="footer text-base-content max-w-7xl mx-auto pt-[69px] pb-[50px] px-6 md:px-0">
          <nav className="text-textPrimary ">
            <h3 className="text-xl font-bold mb-3">Weekly Newsletter</h3>
            <p className="max-w-sm text-[15px] font-normal mb-12">
              Subscribe to our newsletter to receive the latest updates,
              Business idea and offers
            </p>
            <img className="w-48 h-auto" src={logo} alt="" />
            <div className="flex gap-4 mt-10">
              <div className="h-[35px] w-[35px] bg-primaryAccent border-2 border-borderPrimary rounded-full text-white flex justify-center items-center text-xl hover:bg-secondary transition-all ease-in-out duration-500">
                <FaFacebookF />
              </div>
              <div className="h-[35px] w-[35px] bg-primaryAccent border-2 border-borderPrimary rounded-full text-white flex justify-center items-center text-xl hover:bg-secondary transition-all ease-in-out duration-500">
                <FaInstagram />
              </div>
              <div className="h-[35px] w-[35px] bg-primaryAccent border-2 border-borderPrimary rounded-full text-white flex justify-center items-center text-xl hover:bg-secondary transition-all ease-in-out duration-500">
                <FaLinkedinIn />
              </div>
              <div className="h-[35px] w-[35px] bg-primaryAccent border-2 border-borderPrimary rounded-full text-white flex justify-center items-center text-xl hover:bg-secondary transition-all ease-in-out duration-500">
                <FaSkype />
              </div>
            </div>
          </nav>
          <nav className="text-textPrimary">
            <h6 className="font-bold text-xl mb-10">Quick links</h6>
            <a href="/" className="link link-hover text-base font-normal mb-4">
              About
            </a>
            <a href="/" className="link link-hover text-base font-normal mb-4">
              Concerns
            </a>
            <a href="/" className="link link-hover text-base font-normal mb-4">
              Sexual Wellness
            </a>
            <a href="/" className="link link-hover text-base font-normal mb-4">
              Morpheus8
            </a>
            <a href="/" className="link link-hover text-base font-normal mb-4">
              IV Infusion Bar
            </a>
            <a href="/" className="link link-hover text-base font-normal mb-4">
              Memberships
            </a>
            <a href="/" className="link link-hover text-base font-normal">
              Contact
            </a>
          </nav>
          <nav className="text-textPrimary">
            <h6 className="font-bold text-xl mb-10">Additional Services</h6>
            <a href="/" className="link link-hover text-base font-normal mb-4">
              Urinary Incontinence
            </a>
            <a href="/" className="link link-hover text-base font-normal mb-4">
              Sexual Wellness
            </a>
            <a href="/" className="link link-hover text-base font-normal mb-4">
              Mommy Makeover
            </a>
            <a href="/" className="link link-hover text-base font-normal mb-4">
              IV Infusion Bar
            </a>
            <a href="/" className="link link-hover text-base font-normal mb-4">
              Body Sculpting
            </a>
            <a href="/" className="link link-hover text-base font-normal mb-4">
              Medical Rehab
            </a>
            <a href="/" className="link link-hover text-base font-normal">
              Cellulite
            </a>
          </nav>
          <nav className="text-textPrimary">
            <h6 className="font-bold text-xl mb-10">Contact</h6>
            <a href="/" className="link link-hover text-base font-normal mb-5">
              012 3456 7890
            </a>
            <a href="/" className="link link-hover text-base font-normal mb-5">
              youremail@mail.com
            </a>
            <a href="/" className="link link-hover text-base font-normal mb-5">
              Banani Model Town
            </a>
            <a href="/" className="link link-hover text-base font-normal mb-5">
              Dhaka City, Bangladesh
            </a>
            <a href="/" className="link link-hover text-base font-normal">
              Open hour:10-8.00 Mon-fri
            </a>
          </nav>
        </footer>
        <div className="border-borderPrimary border-t pt-7 pb-8 px-6 md:px-0">
          <footer className="footer text-base-content max-w-7xl mx-auto">
            <aside className="grid-flow-col items-center text-textPrimary">
              <p className="text-[12px] font-normal">
                Copyright © 2024
                <span className="text-white font-semibold">
                  myhealth360wellness
                </span>
                . All Rights Reserved.
              </p>
            </aside>
            <nav className="md:place-self-center md:justify-self-end">
              <div className="flex gap-14 text-textPrimary">
                <a href="/" className="text-sm font-normal link link-hover">
                  Privacy
                </a>
                <a href="/" className="text-sm font-normal link link-hover">
                  Terms
                </a>
              </div>
            </nav>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Footer;
