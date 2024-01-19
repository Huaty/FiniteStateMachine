"use client";
import react from "react";
import Cookie from "js-cookie";

import { activeState } from "@/components/activeState";

const StateMachine = () => {
  const noOfActiveStates = Cookie.get("noOfActiveStates");

  return (
    <div>
      <h1>State Machine</h1>
      <div>{noOfActiveStates}</div>
    </div>
  );
};

export default StateMachine;
