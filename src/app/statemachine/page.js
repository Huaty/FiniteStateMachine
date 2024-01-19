"use client";
import react from "react";
import Cookie from "js-cookie";
import MyDrawingComponent from "@/components/arrow";
import { activeArrow } from "@/components/activeArrows";
import { RandomactiveState } from "@/components/activeState";

const StateMachine = () => {
  const noOfActiveStates = Cookie.get("noOfActiveStates");
  var activeStates = RandomactiveState({ noOfActiveStates });
  var activeArrows = activeArrow({ activeStates });
  console.log(activeStates);
  return (
    <div>
      <h1>State Machine</h1>
      {/* <div>{noOfActiveStates}</div> */}
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
        <ul>
          {activeArrows.map((arrow, index) => {
            return (
              <li key={index}>
                Arrow{index}:{arrow}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="">
        <MyDrawingComponent
          activeStates={activeStates}
          activeArrows={activeArrows}
        />
      </div>
    </div>
  );
};

export default StateMachine;
