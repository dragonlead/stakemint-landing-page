import React from "react";
import Marquee from "react-fast-marquee";
import { networks } from "../api/NetworkData";
import NetworksItem from "../components/NetworksItem";

const NetworksSec = () => {
  return (
    <div className="mt-14 lg:mt-0 py-[58px]">
      <p className="font-commonsDemiBold text-[2.5rem] lg:text-[4rem] text-center mb-8 lg:mb-4">
        Available on 12+ networks
      </p>
      <Marquee direction="left" speed={25} className="mb-6" gradientWidth={100} gradientColor={[255, 255, 255]}>
        {networks.map((net, index) => (
          <NetworksItem
            key={index}
            logoColor={net.logoColor}
            logoName={net.logoName}
            logoPath={net.logoPath}
            logoBG={net.logoBG}
            keyValue={index}
          />
        ))}
      </Marquee>
      <Marquee direction="right" speed={25} gradientWidth={100} gradientColor={[255, 255, 255]}>
        {networks.map((net, index) => (
          <NetworksItem
            key={index}
            logoColor={net.logoColor}
            logoName={net.logoName}
            logoPath={net.logoPath}
            logoBG={net.logoBG}
            keyValue={index}
          />
        ))}
      </Marquee>
      <p className="text-[#a1a3a7] font-commonsRegular text-center text-xl mt-8">and more, including testnets</p>
    </div>
  );
};

export default NetworksSec;
