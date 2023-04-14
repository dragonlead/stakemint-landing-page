import React from "react";
import Link from "next/link";
import {
  FaTwitter,
  FaLinkedinIn,
  FaTelegramPlane,
  FaFacebookF,
} from "react-icons/fa";
import { BsDiscord, BsYoutube, BsInstagram } from "react-icons/bs";

function NewsletterSocials() {
  return (
    <div className="flex justify-center px-7 pb-[58px] lg:py-[58px] bg-[#f6f7f8] dark:bg-black">
      <div className="flex flex-col gap-5 text-white lg:flex-row contentDivLG">
        <div className="w-full px-5 lg:px-0 lg:w-1/2 bg-[#03c793] py-10 rounded-xl flex flex-col gap-3 justify-center items-start lg:items-center">
          <p className="font-commonsDemiBold text-[19px] lg:text-[26px]">
            Subscribe to our newsletter
          </p>
          <p className="font-commonsRegular text-[15px] lg:text-[21px]">
            Receive official updates when you join our mailing list
          </p>
          <form action="" className="w-full">
            <div className="flex flex-col justify-center text-base lg:flex-row font-commonsRegular lg:text-xl">
              <input
                type="text"
                name=""
                id=""
                required
                placeholder="Name (required)"
                className="w-full lg:w-[220px] mb-5 lg:mb-0 mr-0 lg:mr-3 bg-[#57e7ca] text-white outline-none placeholder-white rounded-md py-2 px-2"
              />
              <div className="flex">
                <input
                  type="email"
                  name=""
                  id=""
                  required
                  placeholder="Email (required)"
                  className="w-full lg:w-[220px] bg-[#57e7ca] text-white outline-none placeholder-white rounded-l-md py-2 px-2"
                />
                <button type="submit" className="px-2 bg-white rounded-r-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="#03c793"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="w-full px-5 lg:w-1/2 bg-[#6145ff] py-10 rounded-xl flex flex-col gap-3 justify-center items-start lg:items-center">
          <p className="font-commonsDemiBold text-[19px] lg:text-[26px]">
            Be part of our growing global community
          </p>
          <p className="font-commonsRegular text-[15px] lg:text-[21px]">
            Follow and subscribe to our channels
          </p>
          <div className="flex flex-wrap gap-[20px]">
            <Link href="#">
              <div className="p-2 bg-white rounded-md">
                <FaTwitter size={24} color="#6145ff" />
              </div>
            </Link>
            <Link href="#">
              <div className="p-2 bg-white rounded-md">
                <BsDiscord size={24} color="#6145ff" />
              </div>
            </Link>
            <Link href="#">
              <div className="p-2 bg-white rounded-md">
                <BsYoutube size={24} color="#6145ff" />
              </div>
            </Link>
            <Link href="#">
              <div className="p-2 bg-white rounded-md">
                <FaFacebookF size={24} color="#6145ff" />
              </div>
            </Link>
            <Link href="#">
              <div className="p-2 bg-white rounded-md">
                <BsInstagram size={24} color="#6145ff" />
              </div>
            </Link>
            <Link href="#">
              <div className="p-2 bg-white rounded-md">
                <FaLinkedinIn size={24} color="#6145ff" />
              </div>
            </Link>
            <Link href="#">
              <div className="p-2 bg-white rounded-md">
                <FaTelegramPlane size={24} color="#6145ff" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsletterSocials;
