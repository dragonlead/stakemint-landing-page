import Image from "next/image";
import { useRouter } from "next/router";
import YouTube from "react-youtube";
import { Squash as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

import SUN from "../assets/sun.svg";
import MOON from "../assets/moon.svg";
import LOGO from "../assets/swissborg-logo.png";
import EARN_HERO from "../assets/earn-page-hero.png";
import COMPOUND_YIELD from "../assets/compound_yield.svg";
import DAILY_YIELD from "../assets/daily_yield.svg";
import REFUND from "../assets/refund.svg";
import MOOD from "../assets/earnpage_cyborgmood.png";
import APY from "../assets/earnpage_apy.png";
import MOBILE from "../assets/mobilephone.png";
import { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
// import COVER_WHITE from "../assets/coverDivWhite.png";

import Arbitrum from "../assets/ArbitrumLogo.png";
import Aurora from "../assets/AuroraLogo.png";
import Avalanche from "../assets/AvalancheLogo.png";
import Base from "../assets/BaseLogo.png";
import BNB from "../assets/BNBLogo.png";
import Ethereum from "../assets/EthereumLogo.png";
import GnosisChain from "../assets/GnosisChainLogo.png";
import Optimism from "../assets/OptimismLogo.png";
import Polygon from "../assets/PolygonLogo.png";

export default function Home() {
  const router = useRouter();
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const opts = {
    height: "423px",
    width: "750px",
    playerVars: {
      autoplay: 1,
    },
  };

  const max_width = "1180px";

  function _onReady(event: any) {
    event.target.pauseVideo();
  }

  const signUp = (e: any) => {
    e.preventDefault();
    router.push("/signup");
  };

  const signIn = (e: any) => {
    e.preventDefault();
    router.push("/signin");
  };

  const goHomePage = (e: any) => {
    e.preventDefault();
    router.push("/");
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

  const fadeInToUpImg = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const [theme, setTheme] = useState(
    // localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    typeof window !== "undefined" ? localStorage.getItem("theme") : "light"
  );

  const [gradientValue, setGradientValue] = useState(
    theme === "light" ? 255 : 0
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

  // const darkQuery =
  //   typeof document !== "undefined" &&
  //   window.matchMedia("(prefers-color-scheme: dark)");

  // function onWindowsMatch() {
  //   if (typeof element || typeof window == "undefined") {
  //     return;
  //   }
  //   if (
  //     localStorage.theme === "dark" ||
  //     (!("theme" in localStorage) && darkQuery.matches)
  //   ) {
  //     element.classList.add("dark");
  //   } else {
  //     element.classList.remove("dark");
  //   }
  //   console.log(theme);
  // }

  // onWindowsMatch();

  useEffect(() => {
    console.log(theme);
    console.log(isLight);
    const element = document.documentElement;
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setGradientValue(0);
        break;

      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setGradientValue(255);
        break;

      default:
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setGradientValue(255);
        // onWindowsMatch();
        break;
    }
  }, [theme]);

  // const ChainsLogo = (logoSrc: any, logoName: string, logoColor: any) => (
  //   <div
  //     className={`font-commonsDemiBold flex items-center justify-center bg-${logoColor} rounded-full py-2 px-3 mr-2`}
  //   >
  //     <Image src={logoSrc} alt={logoName} className="w-[40px] h-[40px] mr-2" />
  //     <p className="text-lg">{logoName}</p>
  //   </div>
  // );

  return (
    <>
      <Header />
      <main className="bg-white dark:bg-black text-primary dark:text-white">
        {/* <p className={`${inter.className} text-4xl`}>hello world!</p> */}
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
              <span className="text-[2.2rem] lg:text-[2.5rem] leading-[46px] font-commonsDemiBold mt-[10px]">
                CryptoDawg
              </span>
            </motion.div>

            <div className="block -mr-3 lg:hidden">
              <Hamburger
                toggled={nav}
                toggle={handleNav}
                color="gray"
                size={24}
              />
            </div>

            <div className="items-center justify-center hidden lg:flex">
              <motion.ul
                variants={fadeInToUp}
                initial="hidden"
                whileInView="visible"
                className="flex gap-8 pt-1 text-lg font-commonsDemiBold"
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
                className="px-4 pt-2 pb-1 mx-8 bg-green-400 rounded-md font-commonsDemiBold"
                onClick={signIn}
              >
                Sign In
              </motion.button>
              <motion.button
                variants={fadeInToUp}
                initial="hidden"
                whileInView="visible"
                className="px-4 pt-2 pb-1 mr-8 bg-green-400 rounded-md font-commonsDemiBold"
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
                {!isLight && (
                  <Image src={MOON} alt="MOON" className="py-[8px] w-10 h-10" />
                )}
                {isLight && (
                  <Image src={SUN} alt="SUN" className="py-[8px] w-10 h-10" />
                )}
              </motion.div>
            </div>

            <div
              className={
                nav
                  ? "block lg:hidden fixed left-0 top-[60px] w-full h-fit z-50 bg-white dark:bg-black ease-in-out duration-300"
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
                  className="p-4 active:bg-gray-100 hover:cursor-pointer"
                  onClick={handleNav}
                >
                  <button
                    className="px-4 pt-2 pb-1 bg-green-400 rounded-md font-commonsDemiBold"
                    onClick={signIn}
                  >
                    Sign In
                  </button>
                </li>
                <li
                  className="p-4 active:bg-gray-100 hover:cursor-pointer"
                  onClick={handleNav}
                >
                  <button
                    className="px-4 pt-2 pb-1 bg-green-400 rounded-md font-commonsDemiBold"
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
                      <Image
                        src={MOON}
                        alt="MOON"
                        className="py-[8px] w-10 h-10"
                      />
                    )}
                    {isLight && (
                      <Image
                        src={SUN}
                        alt="SUN"
                        className="py-[8px] w-10 h-10"
                      />
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="text-black font-commonsDemiBold mt-[4rem] lg:mt-[5.9rem] pt-12 lg:pt-[200px] bg-white dark:bg-black w-full h-screen pb-40 lg:pb-[204px] relative px-5 lg:pl-[80px] overflow-clip flex items-center">
            <video
              autoPlay
              muted
              loop
              className="absolute top-0 bottom-0 left-0 right-0 z-0 object-cover w-full h-full"
            >
              <source src="/safe-logo.mp4" type="video/mp4" />
            </video>
            {/* <Image
              src={COVER_WHITE}
              alt="COVER_WHITE"
              className="absolute bottom-[3px] right-[3px] z-[1] w-[25%] lg:w-[589px]"
            /> */}
            {/* <div className="w-[100px] h-[100px] bg-white dark:bg-black absolute -bottom-2 -right-1 z-[2]" /> */}
            <div className="relative z-[2] text-primary dark:text-white">
              <motion.p
                variants={fadeInToUp}
                initial="hidden"
                whileInView="visible"
                className="leading-[45px] lg:leading-[90px] text-[2.5rem] lg:text-[4.8rem] w-[200px] lg:w-[600px]"
              >
                Unlock Digital Asset Ownership
              </motion.p>
              <motion.p
                variants={fadeInToUp}
                initial="hidden"
                whileInView="visible"
                className="font-commonsRegular font-medium text-[1.4rem] lg:text-[1.4rem] mt-5 lg:mt-3 leading-5 lg:leading-7 lg:w-[500px]"
              >
                Safe is the most trusted decentralized custody protocol and
                collective asset management platform on Ethereum and the EVM
              </motion.p>
              <motion.button
                variants={fadeInToUp}
                initial="hidden"
                whileInView="visible"
                className="px-4 pt-4 pb-3 mr-3 text-xl text-white bg-black rounded-md font-commonsDemiBold mt-11"
              >
                Build
              </motion.button>
              <motion.button
                variants={fadeInToUp}
                initial="hidden"
                whileInView="visible"
                className="px-4 pt-4 pb-3 text-xl text-black bg-white rounded-md dark:text-white dark:bg-black font-commonsDemiBold mt-11"
              >
                Launch Wallet
              </motion.button>
            </div>
          </div>
        </div>

        <div className="flex justify-center px-7">
          <div className="flex flex-col lg:flex-row justify-center gap-16 pt-[116px] lg:pt-56 contentDivLG">
            <div className="lg:w-1/2">
              <motion.p
                variants={fadeInToUp}
                initial="hidden"
                whileInView="visible"
                className="leading-[45px] lg:leading-[90px] text-[2.5rem] lg:text-[4.8rem] lg:mt-[52px] font-commonsDemiBold text-center lg:text-left"
              >
                {/* <p className="w-[560px] leading-[90px] text-[4.8rem] mt-[52px] font-commonsDemiBold"> */}
                Earn crypto your way with CryptoDawg Earn
              </motion.p>
              <motion.p
                variants={fadeInToUp}
                initial="hidden"
                whileInView="visible"
                className="font-commonsRegular text-[1.1rem] lg:text-[1.4rem] mt-5 lg:mt-3 leading-5 lg:leading-7 text-center lg:text-left"
              >
                Investors aren’t one-size-fits-all, so why is your yield?
                Generate the right yield for you with CryptoDawg Earn.
              </motion.p>
              <div className="flex justify-center lg:justify-start">
                <motion.button
                  variants={fadeInToUp}
                  initial="hidden"
                  whileInView="visible"
                  className="bg-[#01c38d] rounded-md font-commonsDemiBold text-white pt-[2px] lg:py-1 px-2 text-[18px] lg:text-xl mt-[50px] lg:mt-[70px]"
                >
                  Notify Me
                </motion.button>
              </div>
            </div>
            <motion.div
              variants={fadeInToUpImg}
              initial="hidden"
              whileInView="visible"
              className="flex items-center justify-center lg:w-1/2"
            >
              <Image
                src={EARN_HERO}
                alt="EARN_HERO"
                className="w-[650px] -mt-4 lg:mt-0"
              />
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center px-7">
          <div className="flex flex-col lg:flex-row justify-between mt-[140px] lg:mt-[215px] mb-[58px] contentDivLG">
            <motion.div
              variants={fadeInToUp}
              initial="hidden"
              whileInView="visible"
              className="flex items-center lg:flex-col"
            >
              <Image
                src={DAILY_YIELD}
                alt="DAILY_YIELD"
                className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] my-3 lg:my-5 lg:mx-[156px]"
              />
              <p className="ml-3 text-xl lg:ml-0 lg:mb-5 lg:text-3xl font-commonsDemiBold">
                Daily Yield Payouts
              </p>
            </motion.div>
            <motion.div
              variants={fadeInToUp}
              initial="hidden"
              whileInView="visible"
              className="flex items-center lg:flex-col"
            >
              <Image
                src={COMPOUND_YIELD}
                alt="COMPOUND_YIELD"
                className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] my-3 lg:my-5 lg:mx-[156px]"
              />
              <p className="ml-3 text-xl lg:ml-0 lg:mb-5 lg:text-3xl font-commonsDemiBold">
                Compounded Yield
              </p>
            </motion.div>
            <motion.div
              variants={fadeInToUp}
              initial="hidden"
              whileInView="visible"
              className="flex items-center lg:flex-col"
            >
              <Image
                src={REFUND}
                alt="REFUND"
                className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] my-3 lg:my-5 lg:mx-[156px]"
              />
              <p className="ml-3 text-xl lg:ml-0 lg:mb-5 lg:text-3xl font-commonsDemiBold">
                24 Hour Withdrawal
              </p>
            </motion.div>
          </div>
        </div>

        {/* height: "423px",
        width: "750px", */}
        <div className="flex justify-center">
          <div className="flex lg:contentDivLG flex-col items-center pt-0 lg:pt-[58px] w-full mb-[93px]">
            <motion.p
              variants={fadeInToUp}
              initial="hidden"
              whileInView="visible"
              className="font-commonsDemiBold w-full lg:w-[660px] text-[1.9rem] lg:text-[45px] text-left lg:text-center px-7 lg:px-0 leading-8 lg:leading-[50px]"
            >
              The CryptoDawg app makes it easy for you to earn a yield every
              day.
            </motion.p>

            <div className="rounded-xl overflow-clip -mt-[5rem] -mb-[5rem] lg:mb-0 lg:mt-[44px] scale-[.41] md:scale-[.6] lg:scale-100">
              <motion.div
                variants={fadeInToUp}
                initial="hidden"
                whileInView="visible"
              >
                <YouTube videoId="AJZN2kb1aV4" opts={opts} onReady={_onReady} />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="flex justify-center -mt-3 px-7 lg:mt-0">
          <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-7 lg:gap-16 mb-[80px] lg:mb-[116px] lg:contentDivLG">
            <div>
              <motion.p
                variants={fadeInToUp}
                initial="hidden"
                whileInView="visible"
                className="lg:w-[560px] leading-8 lg:leading-[50px] text-[1.9rem] lg:text-[3rem] lg:mt-[52px] font-commonsDemiBold"
              >
                The simple way to manage your risk appetite
              </motion.p>
              <motion.p
                variants={fadeInToUp}
                initial="hidden"
                whileInView="visible"
                className="lg:w-[560px] font-commonsRegular text-[1.1rem] lg:text-[1.4rem] mt-3 leading-5 lg:leading-7"
              >
                Every strategy for every crypto asset has a Cyborg mood (Core,
                Adventurous, Brave) that grades its risks so you can make smart
                investing decisions.
              </motion.p>
            </div>
            <motion.div
              variants={fadeInToUpImg}
              initial="hidden"
              whileInView="visible"
            >
              <Image src={MOOD} alt="MOOD" className="w-[650px]" />
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center px-7">
          <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-4 lg:gap-16 mb-[80px] lg:mb-[116px] lg:contentDivLG">
            <motion.div
              variants={fadeInToUpImg}
              initial="hidden"
              whileInView="visible"
            >
              <Image src={APY} alt="APY" className="w-[650px]" />
            </motion.div>
            <div>
              <motion.p
                variants={fadeInToUp}
                initial="hidden"
                whileInView="visible"
                className="lg:w-[560px] leading-8 lg:leading-[50px] text-[1.9rem] lg:text-[3rem] lg:mt-[52px] font-commonsDemiBold"
              >
                See your potential earnings at a glance
              </motion.p>
              <motion.p
                variants={fadeInToUp}
                initial="hidden"
                whileInView="visible"
                className="lg:w-[560px] font-commonsRegular text-[1.1rem] lg:text-[1.4rem] mt-3 leading-5 lg:leading-7"
              >
                Investing isn’t just about managing risk, though - it’s about
                balancing risk and returns. CryptoDawg Earn makes this simple
                with estimated annual yields visible at a glance.
              </motion.p>
            </div>
          </div>
        </div>

        <div className="flex justify-center pb-56 graphLG px-7">
          <div className="flex flex-col-reverse items-center justify-between pb-10 lg:flex-row gap-7 lg:gap-36 lg:contentDivLG lg:pb-20">
            <div>
              <motion.p
                variants={fadeInToUp}
                initial="hidden"
                whileInView="visible"
                className="lg:w-[560px] leading-[45px] lg:leading-[50px] text-[2.5rem] lg:text-[3rem] lg:mt-[52px] font-commonsDemiBold"
              >
                +2,143% APR.
                <br />
                Beats Bitcoin.
                <br />
                Fully automated.
              </motion.p>
              <motion.p
                variants={fadeInToUp}
                initial="hidden"
                whileInView="visible"
                className="lg:w-[560px] font-commonsRegular text-[1.5rem] lg:text-[1.4rem] mt-8 lg:mt-3 leading-7"
              >
                Try CryptoDawg, a simple automated crypto trading app with
                Hybrid Intelligence.
              </motion.p>
              <div className="flex items-center justify-center w-full lg:w-fit">
                <motion.button
                  variants={fadeInToUp}
                  initial="hidden"
                  whileInView="visible"
                  className="bg-[#601eff] rounded-md font-commonsDemiBold text-white py-4 lg:py-1 px-2 text-xl mt-[70px] w-full lg:w-fit"
                >
                  Learn More
                </motion.button>
              </div>
            </div>
            <motion.div
              variants={fadeInToUpImg}
              initial="hidden"
              whileInView="visible"
            >
              <Image
                src={MOBILE}
                alt="MOBILE"
                className="mr-0 lg:mr-24 scale-[.6] lg:scale-100 -my-[6rem] lg:-my-0"
              />
            </motion.div>
          </div>
        </div>

        <div className="mt-14 lg:mt-0 pb-[58px]">
          <p className="font-commonsDemiBold text-[2.5rem] lg:text-[4rem] text-center mb-8 lg:mb-4">
            Available on 12+ networks
          </p>
          <Marquee
            direction="left"
            speed={25}
            className="mb-6"
            gradientWidth={100}
            gradientColor={[gradientValue, gradientValue, gradientValue]}
          >
            <div className="font-commonsDemiBold flex items-center justify-center bg-[#28a0f0] rounded-full py-2 px-3 mr-2">
              <Image
                src={Arbitrum}
                alt="Arbitrum"
                className="w-[40px] h-[40px] mr-2"
              />
              <p className="text-lg text-white">Arbitrum</p>
            </div>
            <div className="font-commonsDemiBold flex items-center justify-center bg-[#e8e7e6] rounded-full py-2 px-3 mr-2">
              <Image
                src={Ethereum}
                alt="Ethereum"
                className="w-[40px] h-[40px] mr-2"
              />
              <p className="text-lg">Ethereum Mainnet</p>
            </div>
            <div className="font-commonsDemiBold flex items-center justify-center bg-[#f0b90b] rounded-full py-2 px-3 mr-2">
              <Image src={BNB} alt="BNB" className="w-[40px] h-[40px] mr-2" />
              <p className="text-lg">BNB Smart Chain</p>
            </div>
            <div className="font-commonsDemiBold flex items-center justify-center bg-[#ee1a37] rounded-full py-2 px-3 mr-2">
              <Image
                src={Optimism}
                alt="Optimism"
                className="w-[40px] h-[40px] mr-2"
              />
              <p className="text-lg text-white">Optimism</p>
            </div>
            <div className="font-commonsDemiBold flex items-center justify-center bg-[#673bb2] rounded-full py-2 px-3 mr-2">
              <Image
                src={Polygon}
                alt="Polygon"
                className="w-[40px] h-[40px] mr-2"
              />
              <p className="text-lg text-white">Polygon</p>
            </div>
            <div className="font-commonsDemiBold flex items-center justify-center bg-[#000000] rounded-full py-2 px-3 mr-2">
              <Image
                src={Avalanche}
                alt="Avalanche"
                className="w-[40px] h-[40px] mr-2"
              />
              <p className="text-lg text-white">Avalanche</p>
            </div>
            <div className="font-commonsDemiBold flex items-center justify-center bg-[#48a9a6] rounded-full py-2 px-3 mr-2">
              <Image
                src={GnosisChain}
                alt="GnosisChain"
                className="w-[40px] h-[40px] mr-2"
              />
              <p className="text-lg text-white">Gnosis Chain</p>
            </div>
            <div className="font-commonsDemiBold flex items-center justify-center bg-[#f0b90b] rounded-full py-2 px-3 mr-2">
              <Image src={BNB} alt="BNB" className="w-[40px] h-[40px] mr-2" />
              <p className="text-lg">BNB Smart Chain</p>
            </div>
            <div className="font-commonsDemiBold flex items-center justify-center bg-[#78d64b] rounded-full py-2 px-3 mr-2">
              <Image
                src={Aurora}
                alt="Aurora"
                className="w-[40px] h-[40px] mr-2"
              />
              <p className="text-lg text-white">Aurora</p>
            </div>
          </Marquee>
          <Marquee
            direction="right"
            speed={25}
            gradientWidth={100}
            gradientColor={[gradientValue, gradientValue, gradientValue]}
          >
            <div className="font-commonsDemiBold flex items-center justify-center bg-[#28a0f0] rounded-full py-2 px-3 mr-2">
              <Image
                src={Arbitrum}
                alt="Arbitrum"
                className="w-[40px] h-[40px] mr-2"
              />
              <p className="text-lg text-white">Arbitrum</p>
            </div>
            <div className="font-commonsDemiBold flex items-center justify-center bg-[#e8e7e6] rounded-full py-2 px-3 mr-2">
              <Image
                src={Ethereum}
                alt="Ethereum"
                className="w-[40px] h-[40px] mr-2"
              />
              <p className="text-lg">Ethereum Mainnet</p>
            </div>
            <div className="font-commonsDemiBold flex items-center justify-center bg-[#f0b90b] rounded-full py-2 px-3 mr-2">
              <Image src={BNB} alt="BNB" className="w-[40px] h-[40px] mr-2" />
              <p className="text-lg">BNB Smart Chain</p>
            </div>
            <div className="font-commonsDemiBold flex items-center justify-center bg-[#083cae] rounded-full py-2 px-3 mr-2">
              <Image src={Base} alt="Base" className="w-[40px] h-[40px] mr-2" />
              <p className="text-lg text-white">Base</p>
            </div>
            <div className="font-commonsDemiBold flex items-center justify-center bg-[#ee1a37] rounded-full py-2 px-3 mr-2">
              <Image
                src={Optimism}
                alt="Optimism"
                className="w-[40px] h-[40px] mr-2"
              />
              <p className="text-lg text-white">Optimism</p>
            </div>
            <div className="font-commonsDemiBold flex items-center justify-center bg-[#673bb2] rounded-full py-2 px-3 mr-2">
              <Image
                src={Polygon}
                alt="Polygon"
                className="w-[40px] h-[40px] mr-2"
              />
              <p className="text-lg text-white">Polygon</p>
            </div>
            <div className="font-commonsDemiBold flex items-center justify-center bg-[#000000] rounded-full py-2 px-3 mr-2">
              <Image
                src={Avalanche}
                alt="Avalanche"
                className="w-[40px] h-[40px] mr-2"
              />
              <p className="text-lg text-white">Avalanche</p>
            </div>
            <div className="font-commonsDemiBold flex items-center justify-center bg-[#48a9a6] rounded-full py-2 px-3 mr-2">
              <Image
                src={GnosisChain}
                alt="GnosisChain"
                className="w-[40px] h-[40px] mr-2"
              />
              <p className="text-lg text-white">Gnosis Chain</p>
            </div>
            <div className="font-commonsDemiBold flex items-center justify-center bg-[#78d64b] rounded-full py-2 px-3 mr-2">
              <Image
                src={Aurora}
                alt="Aurora"
                className="w-[40px] h-[40px] mr-2"
              />
              <p className="text-lg text-white">Aurora</p>
            </div>
          </Marquee>
          <p className="text-[#a1a3a7] font-commonsRegular text-center text-xl mt-8">
            and more, including testnets
          </p>
        </div>

        {/* <div className="my-[116px]"></div> */}
      </main>
    </>
  );
}
