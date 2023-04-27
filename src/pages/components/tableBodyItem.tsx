import React from "react";
import { NextPage } from "next";

interface Props {
  color: string;
  item: number;
  keyValue: number;
}

const TableBodyItem: NextPage<Props> = (props) => {
  let { color, item, keyValue } = props;
  return (
    <div className={`min-w-[100px] bg-white shadow-xl ${color}`} key={keyValue}>
      <div className="h-[50px] flex justify-center items-center">
        <p>{item}%</p>
      </div>
    </div>
  );
};

export default TableBodyItem;
