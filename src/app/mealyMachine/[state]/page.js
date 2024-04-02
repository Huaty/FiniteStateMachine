"use client";
import { useEffect, useState } from "react";
import { activeArrow } from "@components/activeArrows";
import { RandomactiveState } from "@components/activeState";
import MealyPage from "@/components/mealyPage";
import AfterLoginNavBar from "@/components/AfterLoginnavbar";

const StateMachine = ({ params }) => {
  const [activeStates, setActiveStates] = useState([]);
  const [activeArrowsComponent, setActiveArrowsComponent] = useState([]);

  useEffect(() => {
    const noOfActiveStates = params.state;
    var newActiveStates = RandomactiveState({ noOfActiveStates });
    var activeArrows = activeArrow({ activeStates: newActiveStates });
    var newActiveArrowsComponent = activeArrows.flatMap((dict) => dict.arrows);
    setActiveStates(newActiveStates);
    setActiveArrowsComponent(newActiveArrowsComponent);
    console.log("rerender parent");
  }, [params.state]);

  return (
    <div>
      {/* <h1>State Machine</h1>

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
      </div> */}
      <AfterLoginNavBar />
      <MealyPage
        activeStates={activeStates}
        activeArrows={activeArrowsComponent}
      />
    </div>
  );
};

export default StateMachine;
