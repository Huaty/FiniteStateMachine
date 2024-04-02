"use client";
import React from "react";
import MooreStateForm from "@/components/Forms/MooreStateForm";
import AfterLoginNavBar from "@/components/AfterLoginnavbar";
import { poppinsFont, koulenFont } from "@/asset/font";
export default function Moore() {
  return (
    <div>
      <AfterLoginNavBar />
      <MooreStateForm />
      <div
        className={`${koulenFont.className} flex flex-col text-[40px] text-center justify-center items-center mr-[20vw] ml-[20vw] mt-[5vh]`}
      >
        Fun Fact
      </div>
      <div
        className={`flex text-[20px] text-center justify-center items-center mr-[20vw] ml-[20vw] mt-[5vh] ${poppinsFont.className}`}
      >
        A Moore state machine's outputs are determined solely by its current
        state, making its behavior predictable and independent of immediate
        input changes. This type of state machine is utilized in systems where
        stable and consistent output is crucial, regardless of input variations.
        An example is the traffic light system, where the transition from red to
        green to yellow is predetermined and unaffected by external conditions.
        This demonstrates the Moore state machine's applicability in designing
        systems that require a fixed sequence of operations, such as automated
        control systems.
      </div>
    </div>
  );
}
