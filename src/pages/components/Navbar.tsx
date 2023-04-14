import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { Squash as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";

import LOGO from "../../assets/swissborg-logo.png";
import SUN from "../../assets/sun.svg";
import MOON from "../../assets/moon.svg";

function Navbar() {
  const router = useRouter();

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const fadeInToUp = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const goHomePage = (e: any) => {
    e.preventDefault();
    router.push("/");
  };

  const signUp = (e: any) => {
    e.preventDefault();
    router.push("/signup");
  };

  const signIn = (e: any) => {
    e.preventDefault();
    router.push("/signin");
  };

  const [theme, setTheme] = useState(
    // localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    typeof window !== "undefined" ? localStorage.getItem("theme") : "light"
  );

  const [isLight, setIsLight] = useState(theme === "light" ? true : false);

  const setThemeToggle = (e: any) => {
    console.log(e);
    setIsLight(e);
    if (e) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    console.log(theme);
    console.log(isLight);
    const element = document.documentElement;
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        // setGradientValue(0);
        break;

      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        // setGradientValue(255);
        break;

      default:
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        // setGradientValue(255);
        break;
    }
  }, [theme, isLight]);

  return (
    <div className="fixed z-50 flex justify-center w-full bg-white dark:bg-black drop-shadow-md px-7">
      <div className="flex justify-between items-center py-1 lg:py-[18px] contentDivLG">
        <motion.div
          variants={fadeInToUp}
          initial="hidden"
          whileInView="visible"
          className="flex items-center hover:cursor-pointer"
          onClick={goHomePage}
        >
          <Image
            src={LOGO}
            alt="LOGO"
            className="w-[35px] h-[40px] mr-[10px]"
          />
          <span className="text-[2.2rem] lg:text-[2.5rem] leading-[46px] font-commonsDemiBold">
            Stakemint
          </span>
        </motion.div>

        <div className="block -mr-3 lg:hidden">
          <Hamburger toggled={nav} toggle={handleNav} color="gray" size={24} />
        </div>

        <div className="items-center justify-center hidden lg:flex">
          <motion.ul
            variants={fadeInToUp}
            initial="hidden"
            whileInView="visible"
            className="flex gap-8 text-lg font-commonsDemiBold"
          >
            <li className="hover:cursor-pointer">Home</li>
            <li className="hover:cursor-pointer">Core</li>
            <li className="hover:cursor-pointer">Wallet</li>
            <li className="hover:cursor-pointer">Careers</li>
          </motion.ul>
          <motion.button
            variants={fadeInToUp}
            initial="hidden"
            whileInView="visible"
            className="px-4 py-1 ml-8 bg-green-400 rounded-md font-commonsDemiBold"
            onClick={signIn}
          >
            Sign In
          </motion.button>
          <motion.button
            variants={fadeInToUp}
            initial="hidden"
            whileInView="visible"
            className="px-4 py-1 mx-2 bg-green-400 rounded-md font-commonsDemiBold"
            onClick={signUp}
          >
            Sign Up
          </motion.button>
          <motion.div
            variants={fadeInToUp}
            initial="hidden"
            whileInView="visible"
            className="relative hidden rounded-md cursor-pointer lg:flex bg-slate-300 dark:bg-gray-800"
            onClick={() => setThemeToggle(!isLight)}
          >
            {theme == "dark" && (
              <Image src={MOON} alt="MOON" className="py-[8px] w-10 h-10" />
            )}
            {theme == "light" && (
              <Image src={SUN} alt="SUN" className="py-[8px] w-10 h-10" />
            )}
          </motion.div>
        </div>

        <div
          className={
            nav
              ? "block lg:hidden fixed left-0 top-[50px] w-full h-fit z-50 bg-white dark:bg-black ease-in-out duration-300"
              : "block lg:hidden fixed left-0 top-[-1000%] w-full h-fit z-50 ease-in-out duration-300"
          }
        >
          <ul className="p-4 text-primary dark:text-white font-commonsDemiBold">
            <li
              className="p-4 active:bg-gray-100 hover:cursor-pointer"
              onClick={handleNav}
            >
              Home
            </li>
            <li
              className="p-4 active:bg-gray-100 hover:cursor-pointer"
              onClick={handleNav}
            >
              Core
            </li>
            <li
              className="p-4 active:bg-gray-100 hover:cursor-pointer"
              onClick={handleNav}
            >
              Wallet
            </li>
            <li
              className="p-4 active:bg-gray-100 hover:cursor-pointer"
              onClick={handleNav}
            >
              Careers
            </li>
            <li
              className="px-4 pt-4 pb-2 active:bg-gray-100 hover:cursor-pointer"
              onClick={handleNav}
            >
              <button
                className="px-4 py-1 bg-green-400 rounded-md font-commonsDemiBold"
                onClick={signIn}
              >
                Sign In
              </button>
            </li>
            <li
              className="px-4 pb-4 active:bg-gray-100 hover:cursor-pointer"
              onClick={handleNav}
            >
              <button
                className="px-4 py-1 bg-green-400 rounded-md font-commonsDemiBold"
                onClick={signUp}
              >
                Sign Up
              </button>
            </li>
            <li className="py-2 pl-4">
              <div
                className="relative flex text-white rounded-md bg-slate-200 dark:bg-gray-800 w-fit hover:cursor-pointer"
                onClick={() => {
                  setThemeToggle(!isLight);
                  setNav(!nav);
                }}
              >
                {!isLight && (
                  <Image src={MOON} alt="MOON" className="py-[8px] w-10 h-10" />
                )}
                {isLight && (
                  <Image src={SUN} alt="SUN" className="py-[8px] w-10 h-10" />
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
