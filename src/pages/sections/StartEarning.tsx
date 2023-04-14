import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import EARN_W_USDC from "../../assets/earn_w_usdc.jpg";

function StartEarning() {
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

  return (
    <div className="flex justify-center px-7">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-16 mb-[80px] lg:mb-[116px] lg:contentDivLG text-primary dark:text-white">
        <div className="w-full lg:w-[500px]">
          <motion.p
            variants={fadeInToUp}
            initial="hidden"
            whileInView="visible"
            className="leading-8 lg:leading-[50px] text-[1.9rem] lg:text-[2.3rem] lg:mt-[52px] font-commonsDemiBold"
          >
            Start earning now with SwissBorg Earn
          </motion.p>
          <motion.p
            variants={fadeInToUp}
            initial="hidden"
            whileInView="visible"
            className="font-commonsRegular text-[1.1rem] mt-3 leading-5 lg:leading-7"
          >
            1. &nbsp; Choose the asset and strategy that suits you.
          </motion.p>
          <motion.p
            variants={fadeInToUp}
            initial="hidden"
            whileInView="visible"
            className="font-commonsRegular text-[1.1rem] mt-3 leading-5 lg:leading-7 mr-0 lg:mr-28"
          >
            2. &nbsp; Enter the amount and accept the terms of use by swiping
            the button.
          </motion.p>
          <motion.p
            variants={fadeInToUp}
            initial="hidden"
            whileInView="visible"
            className="font-commonsRegular text-[1.1rem] mt-3 leading-5 lg:leading-7 mr-0 lg:mr-24"
          >
            3. &nbsp; Check to see you&apos;ve entered the correct sum, click
            top up and start earning.
          </motion.p>
          <div className="flex justify-center lg:justify-start">
            <motion.button
              variants={fadeInToUp}
              initial="hidden"
              whileInView="visible"
              className="bg-[#01c38d] rounded-md font-commonsDemiBold text-white py-1 px-2 text-[18px] lg:text-xl mt-6"
            >
              Notify Me
            </motion.button>
          </div>
        </div>
        <motion.div
          variants={fadeInToUpImg}
          initial="hidden"
          whileInView="visible"
        >
          <Image
            src={EARN_W_USDC}
            alt="EARN_W_USDC"
            className="my-4 rounded-3xl drop-shadow-xl"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default StartEarning;
