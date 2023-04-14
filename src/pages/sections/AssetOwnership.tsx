import React from "react";
import { motion } from "framer-motion";

function AssetOwnership() {
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
    <div className="flex justify-center">
      <div className="text-black font-commonsDemiBold mt-[3.5rem] lg:mt-[5rem] pt-12 lg:pt-[200px] bg-white dark:bg-black w-full h-screen pb-40 lg:pb-[204px] relative px-5 lg:pl-[80px] overflow-clip flex items-center">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 bottom-0 left-0 right-0 z-0 object-cover w-full h-full"
        >
          <source src="/safe-logo.mp4" type="video/mp4" />
        </video>
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
            className="font-commonsRegular font-medium text-[1.4rem] lg:text-[1.4rem] mt-5 lg:mt-3 leading-5 lg:leading-7 lg:w-[500px] text-white"
          >
            Safe is the most trusted decentralized custody protocol and
            collective asset management platform on Ethereum and the EVM
          </motion.p>
          <motion.button
            variants={fadeInToUp}
            initial="hidden"
            whileInView="visible"
            className="px-4 py-3 mr-3 text-xl text-white bg-black rounded-md font-commonsDemiBold mt-11"
          >
            Build
          </motion.button>
          <motion.button
            variants={fadeInToUp}
            initial="hidden"
            whileInView="visible"
            className="px-4 py-3 text-xl text-black bg-white rounded-md dark:text-white dark:bg-black font-commonsDemiBold mt-11"
          >
            Launch Wallet
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default AssetOwnership;
