import React from "react";
import { NextPage } from "next";
import Image, { StaticImageData } from "next/image";

interface Props {
  bgColor: string;
  src: StaticImageData;
  alt: string;
  tierName: string;
  keyValue: number;
}

const TableHeaderItem: NextPage<Props> = (props) => {
  let { bgColor, src, alt, tierName, keyValue } = props;
  return (
    <div
      key={keyValue}
      className={`flex justify-center items-center flex-col ${bgColor} min-h-[100px] min-w-[100px] rounded-xl`}
    >
      <Image src={src} alt={alt} />
      <p className="mt-1 text-xs text-white">{tierName}</p>
    </div>
  );
};

export default TableHeaderItem;
