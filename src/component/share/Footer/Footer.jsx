import React from "react";
import logo from "../../../img/logo.png";
import facebook from "../../../img/facebook.png";
import insta from "../../../img/insta.png";
import linkedin from "../../../img/linkedin.png";
import skype from "../../../img/skype.png";
import InstagramPage from "./InstagramPage";
// bg-[#062223]

function Footer() {
  return (
    <div>
      <InstagramPage></InstagramPage>
      <div className="bg-primary">
        <footer className="footer text-base-content max-w-7xl mx-auto pt-[69px] pb-[50px] px-6 md:px-0">
          <nav>
            <h3 className="text-xl font-bold text-white mb-3">
              Weekly Newsletter
            </h3>
            <p className="max-w-sm text-white text-[15px] font-normal mb-12">
              Subscribe to our newsletter to receive the latest updates,
              Business idea and offers
            </p>
            <img className="w-48 h-auto" src={logo} alt="" />
            <div className="flex gap-4 mt-10">
              <img src={facebook} alt="" />
              <img src={insta} alt="" />
              <img src={linkedin} alt="" />
              <img src={skype} alt="" />
            </div>
          </nav>
          <nav>
            <h6 className="text-white font-bold text-xl mb-10">Quick links</h6>
            <a className="link link-hover text-[#A4A4A4] text-base font-normal mb-4">
              About
            </a>
            <a className="link link-hover text-[#A4A4A4] text-base font-normal mb-4">
              Concerns
            </a>
            <a className="link link-hover text-[#A4A4A4] text-base font-normal mb-4">
              Sexual Wellness
            </a>
            <a className="link link-hover text-[#A4A4A4] text-base font-normal mb-4">
              Morpheus8
            </a>
            <a className="link link-hover text-[#A4A4A4] text-base font-normal mb-4">
              IV Infusion Bar
            </a>
            <a className="link link-hover text-[#A4A4A4] text-base font-normal mb-4">
              Memberships
            </a>
            <a className="link link-hover text-[#A4A4A4] text-base font-normal">
              Contact
            </a>
          </nav>
          <nav>
            <h6 className="text-white font-bold text-xl mb-10">
              Additional Services
            </h6>
            <a className="link link-hover text-[#A4A4A4] text-base font-normal mb-4">
              Urinary Incontinence
            </a>
            <a className="link link-hover text-[#A4A4A4] text-base font-normal mb-4">
              Sexual Wellness
            </a>
            <a className="link link-hover text-[#A4A4A4] text-base font-normal mb-4">
              Mommy Makeover
            </a>
            <a className="link link-hover text-[#A4A4A4] text-base font-normal mb-4">
              IV Infusion Bar
            </a>
            <a className="link link-hover text-[#A4A4A4] text-base font-normal mb-4">
              Body Sculpting
            </a>
            <a className="link link-hover text-[#A4A4A4] text-base font-normal mb-4">
              Medical Rehab
            </a>
            <a className="link link-hover text-[#A4A4A4] text-base font-normal">
              Cellulite
            </a>
          </nav>
          <nav>
            <h6 className="text-white font-bold text-xl mb-10">Contact</h6>
            <a className="link link-hover text-[#A4A4A4] text-base font-normal mb-5">
              012 3456 7890
            </a>
            <a className="link link-hover text-[#A4A4A4] text-base font-normal mb-5">
              youremail@mail.com
            </a>
            <a className="link link-hover text-[#A4A4A4] text-base font-normal mb-5">
              Banani Model Town
            </a>
            <a className="link link-hover text-[#A4A4A4] text-base font-normal mb-5">
              Dhaka City, Bangladesh
            </a>
            <a className="link link-hover text-[#A4A4A4] text-base font-normal">
              Open hour:10-8.00 Mon-fri
            </a>
          </nav>
        </footer>
        <div className="border-[#2C3938] border-t pt-7 pb-8 px-6 md:px-0">
          <footer className="footer text-base-content max-w-7xl mx-auto">
            <aside className="grid-flow-col items-center">
              <p className="text-[12px] font-normal text-[#959F9F]">
                Copyright © 2024{" "}
                <span className="text-white font-semibold">
                  myhealth360wellness
                </span>
                . All Rights Reserved.
              </p>
            </aside>
            <nav className="md:place-self-center md:justify-self-end">
              <div className="flex gap-14">
                <a className="text-[#959F9F] text-sm font-normal link link-hover">
                  Privacy
                </a>
                <a className="text-[#959F9F] text-sm font-normal link link-hover">
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
