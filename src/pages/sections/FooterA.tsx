import React from "react";
import Link from "next/link";
import Image from "next/image";

import COOKIE from "../../assets/icon-cookie-manage.svg";

function FooterA() {
  return (
    <div className="flex justify-center px-7 bg-[#f6f7f8] dark:bg-black">
      <div className="flex flex-col pt-10 gap-10 mb-[58px] contentDivLG text-secondary dark:text-white">
        <div className="flex flex-col justify-between w-full lg:flex-row">
          <div className="flex items-center">
            <Image src={COOKIE} alt="cookie" />
            <button className="pt-1 ml-2 text-lg font-commonsDemiBold">
              Manage cookies settings
            </button>
          </div>
          <select
            name=""
            id=""
            className="px-3 py-2 mt-5 border-2 rounded-lg lg:mt-0 dark:text-secondary"
          >
            <option value="English">English</option>
            <option value="Francais">Francais</option>
            <option value="Deutsch">Deutsch</option>
          </select>
        </div>
        <div className="justify-between hidden text-lg lg:flex font-commonsRegular">
          <div className="flex flex-col gap-1">
            <p className="mb-3 font-commonsDemiBold">Stakemint App</p>
            <Link href="#">Buy Cryptos</Link>
            <Link href="#">Earn Cryptos</Link>
            <Link href="#">Invest with Purpose</Link>
            <Link href="#">All Cryptos</Link>
          </div>
          <div className="flex flex-col gap-1">
            <p className="mb-3 font-commonsDemiBold">&nbsp;</p>
            <Link href="#">Portfolio Analytics</Link>
            <Link href="#">Asset Analysis</Link>
            <Link href="#">Supported countries</Link>
            <Link href="#">Fees</Link>
          </div>
          <div className="flex flex-col gap-1">
            <p className="mb-3 font-commonsDemiBold">Community</p>
            <Link href="#">Price and performance</Link>
            <Link href="#">CHSB Rewards Program</Link>
            <Link href="#">CHSB Yield 2.0</Link>
            <Link href="#">Premium accounts</Link>
            <Link href="#">Send crypto for free</Link>
          </div>
          <div className="flex flex-col gap-1">
            <p className="mb-3 font-commonsDemiBold">Learn</p>
            <Link href="#">Blog</Link>
            <Link href="#">Academy</Link>
          </div>
          <div className="flex flex-col gap-1">
            <p className="mb-3 font-commonsDemiBold">Team</p>
            <Link href="#">About Stakemint</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Affiliate program</Link>
            <Link href="#">Help Center</Link>
          </div>
        </div>
        <div className="block lg:hidden relative w-full lg:w-[600px] overflow-hidden">
          <input
            type="checkbox"
            className="absolute inset-x-0 top-0 z-10 w-full h-12 opacity-0 cursor-pointer peer"
          />
          <div className="flex items-center w-full ">
            <p className="mr-5 text-lg font-semibold lg:mr-0 font-commonsDemiBold">
              Stakemint App
            </p>
          </div>
          <div className="absolute top-0 right-0 transition-transform duration-200 rotate-0 peer-checked:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-96">
            <div className="flex flex-col gap-3 pt-2">
              <Link href="#">Buy Cryptos</Link>
              <Link href="#">Earn Cryptos</Link>
              <Link href="#">Invest with Purpose</Link>
              <Link href="#">All Cryptos</Link>
              <Link href="#">Portfolio Analytics</Link>
              <Link href="#">Asset Analysis</Link>
              <Link href="#">Supported countries</Link>
              <Link href="#">Fees</Link>
            </div>
          </div>
        </div>
        <div className="block lg:hidden -mt-6 my-5 w-full lg:w-[600px] h-[1px] bg-gray-400" />
        <div className="block lg:hidden -mt-10 relative w-full lg:w-[600px] overflow-hidden">
          <input
            type="checkbox"
            className="absolute inset-x-0 top-0 z-10 w-full h-12 opacity-0 cursor-pointer peer"
          />
          <div className="flex items-center w-full ">
            <p className="mr-5 text-lg font-semibold lg:mr-0 font-commonsDemiBold">
              Community
            </p>
          </div>
          <div className="absolute top-0 right-0 transition-transform duration-200 rotate-0 peer-checked:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-60">
            <div className="flex flex-col gap-3 pt-2">
              <Link href="#">Price and performance</Link>
              <Link href="#">CHSB Rewards Program</Link>
              <Link href="#">CHSB Yield 2.0</Link>
              <Link href="#">Premium accounts</Link>
              <Link href="#">Send crypto for free</Link>
            </div>
          </div>
        </div>
        <div className="block lg:hidden -mt-6 my-5 w-full lg:w-[600px] h-[1px] bg-gray-400" />
        <div className="block lg:hidden -mt-10 relative w-full lg:w-[600px] overflow-hidden">
          <input
            type="checkbox"
            className="absolute inset-x-0 top-0 z-10 w-full h-12 opacity-0 cursor-pointer peer"
          />
          <div className="flex items-center w-full ">
            <p className="mr-5 text-lg font-semibold lg:mr-0 font-commonsDemiBold">
              Learn
            </p>
          </div>
          <div className="absolute top-0 right-0 transition-transform duration-200 rotate-0 peer-checked:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-60">
            <div className="flex flex-col gap-3 pt-2">
              <Link href="#">Blog</Link>
              <Link href="#">Academy</Link>
            </div>
          </div>
        </div>
        <div className="block lg:hidden -mt-6 my-5 w-full lg:w-[600px] h-[1px] bg-gray-400" />
        <div className="block lg:hidden -mt-10 relative w-full lg:w-[600px] overflow-hidden">
          <input
            type="checkbox"
            className="absolute inset-x-0 top-0 z-10 w-full h-12 opacity-0 cursor-pointer peer"
          />
          <div className="flex items-center w-full ">
            <p className="mr-5 text-lg font-semibold lg:mr-0 font-commonsDemiBold">
              Team
            </p>
          </div>
          <div className="absolute top-0 right-0 transition-transform duration-200 rotate-0 peer-checked:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-60">
            <div className="flex flex-col gap-3 pt-2">
              <Link href="#">About Stakemint</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Affiliate program</Link>
              <Link href="#">Help Center</Link>
            </div>
          </div>
        </div>
        <div className="block lg:hidden -mt-6 my-5 w-full lg:w-[600px] h-[1px] bg-gray-400" />
      </div>
    </div>
  );
}

export default FooterA;
