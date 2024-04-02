"use client";
import MyDrawingComponents from "@/components/arrow";
import Table from "@/components/table";
import { useState, useEffect } from "react";
const MealyPage = ({ activeStates, activeArrows }) => {
  const [table, setTable] = useState([]);
  const [newTable, setNewTable] = useState(new Map());
  const [output, setOuput] = useState([]);
  useEffect(() => {
    let initialTable =
      activeStates.length == 3 || activeStates.length == 4
        ? [
            ["00", { 0: "", 1: "" }],
            ["01", { 0: "", 1: "" }],
            ["10", { 0: "", 1: "" }],
            ["11", { 0: "", 1: "" }],
          ]
        : [
            ["000", { 0: "", 1: "" }],
            ["001", { 0: "", 1: "" }],
            ["010", { 0: "", 1: "" }],
            ["011", { 0: "", 1: "" }],
            ["100", { 0: "", 1: "" }],
            ["101", { 0: "", 1: "" }],
            ["110", { 0: "", 1: "" }],
            ["111", { 0: "", 1: "" }],
          ];

    setTable(initialTable);

    const updatedTable = new Map();
    activeStates.forEach((index, i) => {
      updatedTable.set(index, initialTable[i]);
    });

    activeArrows.forEach((arrow) => {
      const source = Math.floor(arrow / 10); // Extract the source state
      const target = arrow % 10; // Extract the target state

      if (updatedTable.has(source)) {
        const [code, relationships] = updatedTable.get(source);
        const index = relationships[0] === "" ? 0 : 1;
        relationships[index] = String(target);
        updatedTable.set(source, [code, relationships]); // Update the Map
      } else {
        console.warn(`Source state ${source} not found in newTable3or4`);
      }
    });

    setNewTable(updatedTable);

    console.log("rerender child");
  }, [activeStates, activeArrows]);

  useEffect(() => {
    /// create output
    const newoutPut = Array.from({ length: activeArrows.length }, () =>
      Math.round(Math.random())
    );
    setOuput(newoutPut); // Update the state
    console.log("rerender child2");
  }, [activeArrows]);

  return (
    <div>
      <div className="">
        <MyDrawingComponents
          activeStates={activeStates}
          activeArrows={activeArrows}
          activeTable={newTable}
          output={output}
        />
      </div>
      <div className="flex justify-center items-center">
        <Table
          activeStates={activeStates}
          activeTable={newTable}
          output={output}
        />
      </div>
    </div>
  );
};

export default MealyPage;
