"use client";
import React from "react";
import { createContext } from "react";

const MooreStateContext = createContext({
  states: 0,
  setStates: () => {},
});

export default MooreStateContext;
