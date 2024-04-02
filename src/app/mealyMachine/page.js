"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import MealyStateForm from "@/components/Forms/MealyStateForm";
import AfterLoginNavBar from "@/components/AfterLoginnavbar";
import { poppinsFont, koulenFont } from "@/asset/font";
import { isAuthenticated } from "@/components/Helper/userAuthenticated";

export default function Mealy() {
  const router = useRouter();
  useEffect(() => {
    // If the user is not authenticated, redirect to the login page
    if (!isAuthenticated()) {
      router.push("/LoginIn");
    }
  }, []);

  return (
    <div>
      <AfterLoginNavBar />
      <MealyStateForm />
      <div
        className={`${koulenFont.className} flex flex-col text-[40px] text-center justify-center items-center mr-[20vw] ml-[20vw] mt-[5vh]`}
      >
        Fun Fact
      </div>
      <div
        className={`flex flex-col text-[20px] text-center justify-center items-center mr-[20vw] ml-[20vw] mt-[1vh] ${poppinsFont.className}`}
      >
        A Mealy state machine's outputs are determined by both the current state
        and the input, allowing for a quicker response to changes. This makes
        them highly effective in scenarios where the output needs to immediately
        reflect different input conditions. A real-life example of a Mealy state
        machine is a vending machine, which dispenses products and provides
        change based on the specific combination of item selection and the
        amount of money inserted. This model enables dynamic response based on
        user interactions, illustrating the practical application of Mealy state
        machines in everyday technology.
      </div>
    </div>
  );
}
