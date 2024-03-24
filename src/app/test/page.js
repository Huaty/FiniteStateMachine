import React from "react";

import Image from "next/image";

import MyDrawingComponents from "@/components/arrow";

const MyDrawingComponent = ({}) => {
  return (
    <div className="">
      <div className="pb-[10px]">Hello</div>
      <div>
        <MyDrawingComponents />
      </div>
    </div>
  );
};

export default MyDrawingComponent;
