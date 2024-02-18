"use client";

import Cookie from "js-cookie";
import MyDrawingComponent from "@components/arrow";
import { activeArrow } from "@components/activeArrows";
import { RandomactiveState } from "@components/activeState";
import Table from "@/components/table";
import MealyPage from "@/components/mealyPage";

const StateMachine = () => {
  const noOfActiveStates = Cookie.get("noOfActiveStates");
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
      <MealyPage
        activeStates={activeStates}
        activeArrows={activeArrowsComponent}
      />
    </div>
  );
};

export default StateMachine;
