import React from "react";
import Image from "next/image";
import { networks } from "../api/dailyRateData";

import TIER1 from "../../assets/icon-tier-1-standard.svg";
import TIER2 from "../../assets/icon-tier-2-explorer.svg";
import TIER3 from "../../assets/icon-tier-3-community.svg";
import TIER4 from "../../assets/icon-tier-4-pioneer.svg";
import TIER5 from "../../assets/icon-tier-5-generation.svg";
import TIER6 from "../../assets/icon-tier-6-genesis.svg";
import TableHeaderItem from "../components/tableHeaderItem";
import TableBodyItem from "../components/tableBodyItem";

const DailyRateSec = () => {
  return (
    <div className="flex flex-col justify-center items-center pb-[58px]">
      <p className="text-xl font-commonsDemiBold lg:text-4xl">
        Current daily rate per asset
      </p>
      <p className="mt-3 mb-5 text-xs font-commonsRegular lg:text-sm lg:mt-5 lg:mb-12">
        Last update: April 10, 2023 @ 8:00 AM
      </p>
      <div className="flex justify-end w-full lg:w-[920px] gap-2 font-commonsDemiBold relative">
        <div className="bg-white w-[200px] ml-9 rounded-xl shadow-xl flex flex-col lg:mt-[108px] absolute -left-9 bottom-8 z-10 text-primary pl-3">
          {networks.map((net, key) => (
            <div key={key} className="h-[50px] flex items-center">
              <Image
                src={net.netLogo}
                alt={net.netName}
                className="w-[32px] h-[32px] mr-2"
              />
              <p className="text-xs">{net.netName}</p>
              {net.netProgram == "SMART YIELD" && (
                <p className="text-white bg-[#2d95ff] p-1 text-xs rounded-md ml-2">
                  SMART YIELD
                </p>
              )}
              {net.netProgram == "STARGATE" && (
                <p className="text-white bg-[#ff8d00] p-1 text-xs rounded-md ml-2">
                  STARGATE
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col pb-4 overflow-x-scroll pl-[220px] w-full lg:w-[920px]">
          <div className="flex mb-4 gap-4">
            <TableHeaderItem
              alt="TIER1"
              bgColor="bg-[#9aa1ab]"
              key={1}
              src={TIER1}
              tierName="Standard"
            />
            <TableHeaderItem
              alt="TIER2"
              bgColor="bg-[#09b4d9]"
              key={2}
              src={TIER2}
              tierName="Explorer"
            />
            <TableHeaderItem
              alt="TIER3"
              bgColor="bg-[#5278ff]"
              key={3}
              src={TIER3}
              tierName="Community"
            />
            <TableHeaderItem
              alt="TIER4"
              bgColor="bg-[#4435ff]"
              key={4}
              src={TIER4}
              tierName="Pioneer"
            />
            <TableHeaderItem
              alt="TIER5"
              bgColor="bg-[#9601ff]"
              key={5}
              src={TIER5}
              tierName="Generation"
            />
            <TableHeaderItem
              alt="TIER6"
              bgColor="bg-[#01c38d]"
              key={6}
              src={TIER6}
              tierName="Genesis"
            />
          </div>
          {networks.map((net, index) => (
            <div className="flex gap-4">
              <TableBodyItem
                color="text-[#9aa1ab]"
                item={net.standard}
                key={index}
              />
              <TableBodyItem
                color="text-[#09b4d9]"
                item={net.explorer}
                key={index}
              />
              <TableBodyItem
                color="text-[#5278ff]"
                item={net.community}
                key={index}
              />
              <TableBodyItem
                color="text-[#4435ff]"
                item={net.pioneer}
                key={index}
              />
              <TableBodyItem
                color="text-[#9601ff]"
                item={net.generation}
                key={index}
              />
              <TableBodyItem
                color="text-[#01c38d]"
                item={net.genesis}
                key={index}
              />
            </div>
          ))}
        </div>
      </div>
      <p className="font-commonsRegular text-xs px-6 pb-4 w-full lg:w-[920px] mt-2">
        * The CHSB Yield Program is not part of the Smart Yield Program and is
        not linked to any DeFi programs, CeFi programs or liquidity providers.
        The CHSB Yield rate is computed based on the Community Index. The goal
        of the Community Index is to determine a score based on the key figures
        of the Stakemint ecosystem.
      </p>
    </div>
  );
};

export default DailyRateSec;
