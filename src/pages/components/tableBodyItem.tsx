import React from "react";
import { NextPage } from "next";

interface Props {
  color: string;
  item: number;
  key: number;
}

const TableBodyItem: NextPage<Props> = (props) => {
  let { color, item, key } = props;
  return (
    <div className={`min-w-[100px] bg-white shadow-xl ${color}`} key={key}>
      <div className="h-[50px] flex justify-center items-center">
        <p>{item}%</p>
      </div>
    </div>
  );
};

export default TableBodyItem;
