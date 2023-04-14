import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup/build/CountUp";

function Statistics() {
  const fadeInValCon1 = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const fadeInValCon2 = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const fadeInValCon3 = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 2,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex justify-center px-7">
      <div className="flex flex-col lg:flex-row justify-around my-[58px] mb-[58px] contentDivLG text-secondary dark:text-white font-commonsRegular gap-2 lg:gap-0">
        <motion.div
          variants={fadeInValCon1}
          initial="hidden"
          whileInView="visible"
          className="flex items-center lg:flex-col"
        >
          <div className="text-[40px] text-green-600">
            <span>$</span>
            <CountUp
              start={0.0}
              end={0.33}
              duration={1.2}
              decimals={2}
              delay={0}
              enableScrollSpy={true}
              scrollSpyDelay={0}
            />
            <span>B</span>
          </div>
          <p className="ml-3 text-base text-left lg:ml-0 lg:mb-5 lg:text-center text-primary dark:text-white">
            Total value of assets
            <br className="hidden lg:block" /> in Yield Wallets
          </p>
        </motion.div>
        <motion.div
          variants={fadeInValCon2}
          initial="hidden"
          whileInView="visible"
          className="flex items-center lg:flex-col"
        >
          <CountUp
            start={100000}
            end={234938}
            duration={0.9}
            decimal=","
            enableScrollSpy={true}
            scrollSpyDelay={1000}
            className="text-[40px] text-green-600"
          />
          <p className="ml-3 text-sm text-left lg:ml-0 lg:mb-5 lg:text-center text-primary dark:text-white">
            Total number of
            <br className="hidden lg:block" /> active Yield Wallets
          </p>
        </motion.div>
        <motion.div
          variants={fadeInValCon3}
          initial="hidden"
          whileInView="visible"
          className="flex items-center lg:flex-col"
        >
          <div className="text-[40px] text-green-600">
            <span>$</span>
            <CountUp
              start={10.0}
              end={68.77}
              duration={0.9}
              decimals={2}
              enableScrollSpy={true}
              scrollSpyDelay={2000}
            />
            <span>M</span>
          </div>
          <p className="ml-3 text-sm text-left lg:ml-0 lg:mb-5 lg:text-center text-primary dark:text-white">
            Total value earned
            <br className="hidden lg:block" /> by users in crypto
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Statistics;
