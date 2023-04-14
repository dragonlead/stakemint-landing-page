import React from "react";
import { motion } from "framer-motion";
import YouTube from "react-youtube";

function Youtube() {
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

  const opts = {
    height: "423px",
    width: "750px",
    playerVars: {
      autoplay: 1,
    },
  };

  function _onReady(event: any) {
    event.target.pauseVideo();
  }

  return (
    <div className="flex justify-center">
      <div className="flex lg:contentDivLG flex-col items-center pt-0 lg:pt-[58px] w-full mb-[93px]">
        <motion.p
          variants={fadeInToUp}
          initial="hidden"
          whileInView="visible"
          className="font-commonsDemiBold w-full lg:w-[660px] text-[1.9rem] lg:text-[45px] text-left lg:text-center px-7 lg:px-0 leading-8 lg:leading-[50px]"
        >
          The Stakemint app makes it easy for you to earn a yield every day.
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
  );
}

export default Youtube;
