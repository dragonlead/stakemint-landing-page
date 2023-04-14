import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import APY from "../../assets/earnpage_apy.png";

function PotentialEarnings() {
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
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-4 lg:gap-16 mb-[80px] lg:mb-[116px] lg:contentDivLG">
        <motion.div
          variants={fadeInToUpImg}
          initial="hidden"
          whileInView="visible"
        >
          <Image src={APY} alt="APY" className="w-[555px]" />
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
            Investing isn&apos;t just about managing risk, though - it&apos;s
            about balancing risk and returns. Stakemint Earn makes this simple
            with estimated annual yields visible at a glance.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default PotentialEarnings;
