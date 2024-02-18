import React, { useState, useEffect } from "react";

const Table = ({ activeStates, activeTable }) => {
  const [tableData, setTableData] = useState([]);
  const [table, setTable] = useState(true);

  useEffect(() => {
    if (activeStates.length === 3 || activeStates.length === 4) {
      const table3_4 = [
        ["00", { 0: "", 1: "" }],
        ["01", { 0: "", 1: "" }],
        ["10", { 0: "", 1: "" }],
        ["11", { 0: "", 1: "" }],
      ];
      setTableData(table3_4);
      setTable(true);
    } else {
      const tablemore4 = [
        ["000", { 0: "", 1: "" }],
        ["001", { 0: "", 1: "" }],
        ["010", { 0: "", 1: "" }],
        ["011", { 0: "", 1: "" }],
        ["100", { 0: "", 1: "" }],
        ["101", { 0: "", 1: "" }],
        ["110", { 0: "", 1: "" }],
        ["111", { 0: "", 1: "" }],
      ];
      setTableData(tablemore4);
      setTable(false);
    }
  }, [activeStates]);
  console.log(activeTable);
  return (
    <div>
      {table && (
        <table className="border-black border-[2px]">
          <thead>
            <tr className="border-black border-[2px]">
              <th className="border-black border-[2px] text-center p-[5px]">
                Q1
              </th>
              <th className="border-black border-[2px] text-center p-[5px]">
                Q2
              </th>
              <th className="border-black border-[2px] text-center p-[5px]">
                INPUT
              </th>
            </tr>
          </thead>
          <tbody>
            {[...activeTable].map(([key, value]) => {
              console.log(value[1][0]);
              console.log(value[1][1]);

              const [q1, q2] = value[0];
              return Object.entries(value).map(([input, _]) => (
                <tr key={`${key}-${input}`} className="text-center">
                  <td className="border-black border-[2px]">{q1}</td>
                  <td className="border-black border-[2px]">{q2}</td>
                  <td className="border-black border-[2px]">{input}</td>
                  <td className="border-black border-[2px]">
                    {activeTable.has(parseInt(value[1][input]))
                      ? activeTable.get(parseInt(value[1][input]))[0][0]
                      : "No"}
                  </td>
                  <td className="border-black border-[2px]">
                    {activeTable.has(parseInt(value[1][input]))
                      ? activeTable.get(parseInt(value[1][input]))[0][1]
                      : "No"}
                  </td>
                </tr>
              ));
            })}
          </tbody>
        </table>
      )}

      {/* {table && (
        <table className="border-black border-[2px]">
          <thead>
            <tr className="border-black border-[2px]">
              <th className="border-black border-[2px] text-center p-[5px]">
                Q1
              </th>
              <th className="border-black border-[2px] text-center p-[5px]">
                Q2
              </th>
              <th className="border-black border-[2px] text-center p-[5px]">
                INPUT
              </th>
            </tr>
          </thead>
          <tbody>
            {[...tableData].map(([key, value]) => {
              const [q1, q2] = key.split("");
              return Object.entries(value).map(([input, _]) => (
                <tr key={`${key}-${input}`} className="text-center">
                  <td className="border-black border-[2px]">{q1}</td>
                  <td className="border-black border-[2px]">{q2}</td>
                  <td className="border-black border-[2px]">{input}</td>
                </tr>
              ));
            })}
          </tbody>
        </table>
      )} */}
      {!table && (
        <table className="border-black border-[2px]">
          <thead>
            <tr className="border-black border-[2px]">
              <th className="border-black border-[2px] text-center p-[5px]">
                Q1
              </th>
              <th className="border-black border-[2px] text-center p-[5px]">
                Q2
              </th>
              <th className="border-black border-[2px] text-center p-[5px]">
                Q3
              </th>
              <th className="border-black border-[2px] text-center p-[5px]">
                INPUT
              </th>
            </tr>
          </thead>
          <tbody>
            {[...tableData].map(([key, value]) => {
              const [q1, q2, q3] = key.split("");
              return Object.entries(value).map(([input, _]) => (
                <tr key={`${key}-${input}`} className="text-center">
                  <td className="border-black border-[2px]">{q1}</td>
                  <td className="border-black border-[2px]">{q2}</td>
                  <td className="border-black border-[2px]">{q3}</td>
                  <td className="border-black border-[2px]">{input}</td>
                </tr>
              ));
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
