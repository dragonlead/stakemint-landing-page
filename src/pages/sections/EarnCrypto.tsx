import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import EARN_HERO from "../../assets/earn-page-hero.png";

function EarnCrypto() {
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
      <div className="flex flex-col lg:flex-row justify-center gap-16 pt-[116px] lg:pt-56 contentDivLG">
        <div className="lg:w-1/2">
          <motion.p
            variants={fadeInToUp}
            initial="hidden"
            whileInView="visible"
            className="leading-[45px] lg:leading-[90px] text-[2.5rem] lg:text-[4.5rem] lg:mt-[52px] font-commonsDemiBold text-center lg:text-left"
          >
            {/* <p className="w-[560px] leading-[90px] text-[4.8rem] mt-[52px] font-commonsDemiBold"> */}
            Earn crypto your way with Stakemint Earn
          </motion.p>
          <motion.p
            variants={fadeInToUp}
            initial="hidden"
            whileInView="visible"
            className="font-commonsRegular text-[1.1rem] lg:text-[1.4rem] mt-5 lg:mt-3 leading-5 lg:leading-7 text-center lg:text-left"
          >
            Investors aren&apos;t one-size-fits-all, so why is your yield?
            Generate the right yield for you with Stakemint Earn.
          </motion.p>
          <div className="flex justify-center lg:justify-start">
            <motion.button
              variants={fadeInToUp}
              initial="hidden"
              whileInView="visible"
              className="bg-[#01c38d] rounded-md font-commonsDemiBold text-white py-1 px-2 text-[18px] lg:text-xl mt-[50px] lg:mt-[70px]"
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
  );
}

export default EarnCrypto;
