import React from "react";
import { NextPage } from "next";
import Image, { StaticImageData } from "next/image";

interface Props {
  keyValue?: number;
  logoName: string;
  logoBG: string;
  logoPath: StaticImageData;
  logoColor: string;
}

const NetworksItem: NextPage<Props> = (props) => {
  let { logoName, logoBG, logoPath, logoColor, keyValue } = props;
  return (
    <div
      key={keyValue}
      className={`font-commonsDemiBold flex items-center justify-center ${logoBG} rounded-full py-2 px-3 mr-2`}
    >
      <Image src={logoPath} alt={logoName} className="w-[40px] h-[40px] mr-2" />
      <p className={`text-lg ${logoColor}`}>{logoName}</p>
    </div>
  );
};

export default NetworksItem;
