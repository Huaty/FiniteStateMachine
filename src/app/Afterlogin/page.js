// Import React and other necessary packages
"use client";
import React, { useState, useEffect } from "react";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
import AfterLoginNavBar from "@/components/AfterLoginnavbar";
import { koulenFont, poppinsFont } from "@/asset/font";
import Cookies from "js-cookie";
import { isAuthenticated } from "@/components/Helper/userAuthenticated";

// Define the MyPage component
const MyPage = () => {
  const router = useRouter();
  useEffect(() => {
    // If the user is not authenticated, redirect to the login page
    if (!isAuthenticated()) {
      router.push("/LoginIn");
    }
  }, []);

  // JSX for the component
  return (
    <div className="">
      <AfterLoginNavBar />
      <div
        className="flex flex-row space-x-[200px]  justify-center items-center mb-[5vh] h-[40vh]"
        id="button"
      >
        <div className="mt-10">
          <button
            onClick={() => router.push("/mealyMachine")}
            className={`${koulenFont.className} text-[40px]  px-6 py-2 rounded-full hover:bg-red-600 transition duration-300`}
          >
            Mealy State
          </button>
        </div>
        <div className="mt-10">
          <button
            onClick={() => router.push("/mooreMachine")}
            className={`${koulenFont.className} text-[40px]  px-6 py-2 rounded-full hover:bg-red-600 transition duration-300`}
          >
            Moore State
          </button>
        </div>
      </div>
      <div
        className={`text-center flex justify-center items-center pr-[20vw] pl-[20vw] text-[20px] ${poppinsFont.className}`}
      >
        A Finite State Machine (FSM) is a conceptual model designed for
        constructing systems that exist in one of a finite number of states at
        any given moment and transition from one state to another based on
        inputs or events. Widely used across various fields such as control
        systems, digital circuit design, software engineering, and game
        development, FSMs are instrumental in modeling behaviors and processes
        that have distinct stages and well-defined transition rules.
        Additionally, FSMs are divided into two types: Mealy and Moore state
        machines. The Mealy machine's output is determined by its current state
        and the input, providing immediate response to input changes. In
        contrast, the Moore machine's output depends solely on its current
        state, making it independent of immediate input changes. This
        distinction allows for tailored approaches in designing and implementing
        state-dependent systems
      </div>
    </div>
  );
};

// Export the component
export default MyPage;
