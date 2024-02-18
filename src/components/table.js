import React, { useState, useEffect } from "react";

const Table = ({ activeStates, activeTable }) => {
  const [table, setTable] = useState(true);
  useEffect(() => {
    if (activeStates.length === 3 || activeStates.length === 4) {
      setTable(true);
    } else {
      setTable(false);
    }
  }, [activeStates]);

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
              <th className="border-black border-[2px] text-center p-[5px]">
                Q1+
              </th>
              <th className="border-black border-[2px] text-center p-[5px]">
                Q2+
              </th>
              <th className="border-black border-[2px] text-center p-[5px]">
                Output
              </th>
            </tr>
          </thead>
          <tbody>
            {[...activeTable].map(([key, value]) => {
              console.log(value[1]);
              const [q1, q2] = value[0];
              return Object.entries(value).map(([input, _]) => (
                <tr key={`${key}-${input}`} className="text-center">
                  <td className="border-black border-[2px]">{q1}</td>
                  <td className="border-black border-[2px]">{q2}</td>
                  <td className="border-black border-[2px]">{input}</td>
                  <td className="border-black border-[2px] Q1+">
                    {activeTable.has(parseInt(value[1][input]))
                      ? activeTable.get(parseInt(value[1][input]))[0][0]
                      : "No"}
                  </td>
                  <td className="border-black border-[2px] Q2+">
                    {activeTable.has(parseInt(value[1][input]))
                      ? activeTable.get(parseInt(value[1][input]))[0][1]
                      : "No"}
                  </td>
                  <td className="border-black border-[2px] Q2+">{input}</td>
                </tr>
              ));
            })}
          </tbody>
        </table>
      )}
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
              <th className="border-black border-[2px] text-center p-[5px]">
                Q1+
              </th>
              <th className="border-black border-[2px] text-center p-[5px]">
                Q2+
              </th>
              <th className="border-black border-[2px] text-center p-[5px]">
                Q3+
              </th>
            </tr>
          </thead>
          <tbody>
            {[...activeTable].map(([key, value]) => {
              {
                /* console.log(value[1][0]);
              console.log(value[1][1]); */
              }
              const [q1, q2, q3] = value[0];
              return Object.entries(value).map(([input, _]) => (
                <tr key={`${key}-${input}`} className="text-center">
                  <td className="border-black border-[2px]">{q1}</td>
                  <td className="border-black border-[2px]">{q2}</td>
                  <td className="border-black border-[2px]">{q3}</td>
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
                  <td className="border-black border-[2px]">
                    {activeTable.has(parseInt(value[1][input]))
                      ? activeTable.get(parseInt(value[1][input]))[0][2]
                      : "No"}
                  </td>
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
