import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import MOBILE from "../../assets/mobilephone.png";

function Automated() {
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
            Try Stakemint, a simple automated crypto trading app with Hybrid
            Intelligence.
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
  );
}

export default Automated;
