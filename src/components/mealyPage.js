import MyDrawingComponent from "@components/arrow";
import Table from "@/components/table";
import { useState } from "react";
const MealyPage = ({ activeStates, activeArrows }) => {
  const [table, SetTable] = useState(new Map());
  const table3or4 = [
    ["00", { 0: "", 1: "" }],
    ["01", { 0: "", 1: "" }],
    ["10", { 0: "", 1: "" }],
    ["11", { 0: "", 1: "" }],
  ];

  const newTable3or4 = new Map();

  activeStates.forEach((index, i) => {
    newTable3or4.set(index, table3or4[i]);
  });

  activeArrows.forEach((arrow) => {
    const source = Math.floor(arrow / 10); // Extract the source state
    const target = arrow % 10; // Extract the target state

    if (newTable3or4.has(source)) {
      const [code, relationships] = newTable3or4.get(source);
      const index = relationships[0] === "" ? 0 : 1;
      relationships[index] = String(target);
      newTable3or4.set(source, [code, relationships]); // Update the Map
    } else {
      console.warn(`Source state ${source} not found in newTable3or4`);
    }
  });

  return (
    <div>
      <div className="">
        <MyDrawingComponent
          activeStates={activeStates}
          activeArrows={activeArrows}
        />
      </div>
      <div className="flex justify-center items-center">
        <Table activeStates={activeStates} activeTable={newTable3or4} />
      </div>
    </div>
  );
};

export default MealyPage;
