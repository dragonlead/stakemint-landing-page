import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MOOD from "../../assets/earnpage_cyborgmood.png";

function Mood() {
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
          <Image src={MOOD} alt="MOOD" className="w-[555px]" />
        </motion.div>
      </div>
    </div>
  );
}

export default Mood;
