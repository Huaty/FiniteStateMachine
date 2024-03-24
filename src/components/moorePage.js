"use client";
import { useState, useEffect } from "react";
import MooreStateDiagram from "@components/mooreStateDiagram";
import Table from "@/components/table";
const MoorePage = ({ activeStates, activeArrows }) => {
  const [table, setTable] = useState([]);
  const [newTable, setNewTable] = useState(new Map());
  const [randomValues, setRandomValues] = useState([]);
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
    activeStates.forEach((index, i) => {
      newTable.set(index, initialTable[i]);
    });
    activeArrows.forEach((arrow) => {
      const source = Math.floor(arrow / 10); // Extract the source state
      const target = arrow % 10; // Extract the target state

      if (newTable.has(source)) {
        const [code, relationships] = newTable.get(source);
        const index = relationships[0] === "" ? 0 : 1;
        relationships[index] = String(target);
        newTable.set(source, [code, relationships]); // Update the Map
      } else {
        console.warn(`Source state ${source} not found in newTable3or4`);
      }
    });
  }, [activeStates]);

  useEffect(() => {
    let newRandomValues = [];
    for (let i = 0; i < activeArrows.length; i += 2) {
      const randomValue = Math.floor(Math.random() * 2);
      newRandomValues.push(randomValue);
      if (i + 1 < activeArrows.length) {
        newRandomValues.push(randomValue);
      }
    }
    setRandomValues(newRandomValues); // Update the state
  }, [activeArrows]);

  useEffect(() => {
    console.log(randomValues);
  }, [randomValues]);
  return (
    <div>
      <MooreStateDiagram
        activeStates={activeStates}
        activeArrows={activeArrows}
        activeTable={newTable}
        randomValues={randomValues}
      />
      <div className="flex justify-center items-center">
        <Table
          activeStates={activeStates}
          activeTable={newTable}
          randomValues={randomValues}
        />
      </div>
    </div>
  );
};

export default MoorePage;
