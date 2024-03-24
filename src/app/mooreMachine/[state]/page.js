import React, { useContext } from "react";
import Image from "next/image";
import MoorePage from "@components/moorePage";
import { activeArrow } from "@components/activeArrows";
import { RandomactiveState } from "@components/activeState";

export default function MooreStatemachine({ params }) {
  const noOfActiveStates = params.state;
  var activeStates = RandomactiveState({ noOfActiveStates });
  var activeArrows = activeArrow({ activeStates });
  var activeArrowsComponent = activeArrows.flatMap((dict) => dict.arrows);
  return (
    <div>
      <h1>State Machine</h1>
      <div>{noOfActiveStates}</div>
      <ul>
        {activeStates.map((state, index) => {
          return (
            <li key={index}>
              State{index}:{state}
            </li>
          );
        })}
      </ul>
      <div>
        <h1>Active Arrows</h1>
        <ul className="flex flex-row">
          {activeArrows.map((dict, index) => {
            return <li key={index}>{`${dict.arrows},`}</li>;
          })}
        </ul>
      </div>
      <MoorePage
        activeStates={activeStates}
        activeArrows={activeArrowsComponent}
      />
    </div>
  );
}
