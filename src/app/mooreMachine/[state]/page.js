"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import MoorePage from "@components/moorePage";
import { activeArrow } from "@components/activeArrows";
import { RandomactiveState } from "@components/activeState";
import AfterLoginNavBar from "@/components/AfterLoginnavbar";

export default function MooreStatemachine({ params }) {
  // Initialize state
  const [noOfActiveStates, setNoOfActiveStates] = useState(params.state);
  const [activeStates, setActiveStates] = useState([]);
  const [activeArrows, setActiveArrows] = useState([]);
  const [activeArrowsComponent, setActiveArrowsComponent] = useState([]);

  // Use useEffect to set state based on params
  useEffect(() => {
    // Assuming RandomactiveState and activeArrow are functions returning the states and arrows based on input
    const states = RandomactiveState({ noOfActiveStates });
    const arrows = activeArrow({ activeStates: states });
    const arrowsComponent = arrows.flatMap((dict) => dict.arrows);

    setActiveStates(states);
    setActiveArrows(arrows);
    setActiveArrowsComponent(arrowsComponent);
  }, [noOfActiveStates]); // This will run when 'noOfActiveStates' changes

  return (
    <div className="relative">
      <AfterLoginNavBar className="z-10" />
      <div className="flex justify-center w-[100vw] items-center mt-[10vh] mb-[10vh]">
        <MoorePage
          activeStates={activeStates}
          activeArrows={activeArrowsComponent}
        />
      </div>
    </div>
  );
}
