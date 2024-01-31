"use client";

import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";

const MyPage = () => {
  const [noOfActiveStates, setNoOfActiveStates] = useState(0);
  const Router = useRouter();
  const handlechanges = (event) => {
    setNoOfActiveStates(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(noOfActiveStates);
    Cookie.set("noOfActiveStates", noOfActiveStates);
    Router.push("/statemachine");
  };
  return (
    <div>
      <Navbar />
      <div className="pt-[50px]">
        <form
          onSubmit={handleSubmit}
          className=" border-[3px] flex justify-center items-center flex-col space-y-5"
        >
          <div>Submit Numbers Of States you want !</div>
          <input
            type="text"
            value={noOfActiveStates}
            onChange={handlechanges}
            className="border-[3px] flex"
          />
          <button
            type="submit"
            className="border-[2px] rounded-[10px] bg-blue-500 p-[10px]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyPage;
