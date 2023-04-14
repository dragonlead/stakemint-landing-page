import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import COMPOUND_YIELD from "../../assets/compound_yield.svg";
import DAILY_YIELD from "../../assets/daily_yield.svg";
import REFUND from "../../assets/refund.svg";

function Yield() {
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

  return (
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
  );
}

export default Yield;
