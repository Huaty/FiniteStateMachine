import React, { useState, useEffect } from "react";

const Table = ({ activeStates, activeTable, randomValues }) => {
  const [table, setTable] = useState(true);
  const [correctQ1, setCorrectQ1] = useState({});
  const [correctOutput, setOutput] = useState({});

  useEffect(() => {
    if (activeStates.length === 3 || activeStates.length === 4) {
      setTable(true);
    } else {
      setTable(false);
    }
  }, [activeStates]);

  /// Handle Validation of Output
  const handleOutput = (e, index) => {
    const outputAnswer = e.target.value;
    const outputElement = document.getElementById(`output-${index}`);
    if (outputElement) {
      if (outputAnswer != randomValues[index]) {
        // If the answer is incorrect, set the background color to red
        outputElement.style.backgroundColor = "red";
      } else {
        // If the answer is correct, set the background color to white
        outputElement.style.backgroundColor = "white";
      }
    }
  };

  //// Handle Validation Of Q++
  const handle2Q = (e, key, propertyPath, index) => {
    const userAnswer = e.target.value;
    const newQ1 = {
      ...correctQ1,
      [`${key}-${propertyPath}-${index}`]: userAnswer,
    };

    // Update the state with the new answer
    setCorrectQ1(newQ1);

    // Parse the key parts for validation
    const parts = `${key}-${propertyPath}-${index}`
      .split(/[\-\[\]]/)
      .filter((part) => part !== "");
    if (parts.length >= 4) {
      // Make sure all parts are present
      const mapKey = parseInt(parts[0], 10);
      const arrayIndex = parseInt(parts[1], 10);
      const innerIndex = parseInt(parts[2], 10);
      const indexColor = parts[3]; // Assuming this is a unique identifier

      // Get the correct answer from your data structure
      const correctAnswer = activeTable.get(parseInt(mapKey))[arrayIndex][
        innerIndex
      ];

      // Check if the user's answer is correct and change the input color accordingly
      const inputElement = document.getElementById(
        `${innerIndex}-${indexColor}`
      );
      if (inputElement) {
        if (userAnswer != correctAnswer) {
          inputElement.style.backgroundColor = "red";
        } else {
          inputElement.style.backgroundColor = "white"; // Change to your default or correct color
        }
      }

      // Additional logic here if needed
      console.log(
        `User answer: ${userAnswer}, Correct answer: ${correctAnswer}`
      );
    }
  };

  console.log(randomValues);

  return (
    <div>
      {table && (
        <table className="border-black border-2 w-full shadow-lg mt-4 bg-white">
          <thead className="bg-blue-400">
            <tr className="border-black border-[2px]">
              <th className="border-black border-2 text-center p-4">Q1</th>
              <th className="border-black border-2 text-center p-4">Q0</th>
              <th className="border-black border-2 text-center p-4">INPUT</th>
              <th className="border-black border-2 text-center p-4">Q1+</th>
              <th className="border-black border-2 text-center p-4">Q0+</th>
              <th className="border-black border-2 text-center p-4">Output</th>
            </tr>
          </thead>
          <tbody>
            {[...activeTable].map(([key, value], index) => {
              const [q1, q0] = value[0];
              return Object.entries(value).map(([input, _], subIndex) => (
                <tr
                  id={`${key}-${input}`}
                  key={`${key}-${input}`}
                  className="text-center"
                >
                  <td
                    className="border-black border-2 p-1"
                    id={`${key}-${index}-q1`}
                  >
                    {q1}
                  </td>
                  <td
                    className="border-black border-2 p-1"
                    id={`${key}-${index}-q0`}
                  >
                    {q0}
                  </td>
                  <td className="border-black border-2 p-1">{input}</td>
                  <form></form>
                  <td className="border-black border-2 p-1 Q0+">
                    <input
                      type="number"
                      id={`0-${index}${subIndex}`}
                      onChange={(e) =>
                        handle2Q(
                          e,
                          `${parseInt(value[1][input])}`,
                          `[0][0]`,
                          `${index}${subIndex}`
                        )
                      }
                      min="0"
                      max="1"
                      pattern="[01]" // Add this line
                      className="no-arrows appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </td>
                  <td className="border-black border-2 p-1 Q1+">
                    <input
                      type="number"
                      id={`1-${index}${subIndex}`}
                      onChange={(e) =>
                        handle2Q(
                          e,
                          `${parseInt(value[1][input])}`,
                          `[0][1]`,
                          `${index}${subIndex}`
                        )
                      }
                      min="0"
                      max="1"
                      // Add this line
                      className="no-arrows appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </td>
                  <td className="border-black border-2  output">
                    <input
                      type="number"
                      id={`output-${index * 2 + parseInt(subIndex, 10)}`}
                      onChange={(e) =>
                        handleOutput(e, index * 2 + parseInt(subIndex, 10))
                      }
                      className="no-arrows appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </td>
                </tr>
              ));
            })}
          </tbody>
        </table>
      )}
      {table && (
        <table className="border-black border-[2px]">
          <thead>
            <tr className="border-black border-[2px]">
              <th className="border-black border-[2px] text-center p-[5px]">
                Q1
              </th>
              <th className="border-black border-[2px] text-center p-[5px]">
                Q0
              </th>
              <th className="border-black border-[2px] text-center p-[5px]">
                INPUT
              </th>
              <th className="border-black border-[2px] text-center p-[5px]">
                Q1+
              </th>
              <th className="border-black border-[2px] text-center p-[5px]">
                Q0+
              </th>
              <th className="border-black border-[2px] text-center p-[5px]">
                Output
              </th>
            </tr>
          </thead>
          <tbody>
            {[...activeTable].map(([key, value], index) => {
              const [q1, q0] = value[0];
              return Object.entries(value).map(([input, _], subIndex) => (
                <tr
                  id={`${key}-${input}`}
                  key={`${key}-${input}`}
                  className="text-center"
                >
                  <td className="border-black border-[2px]">{q1}</td>
                  <td className="border-black border-[2px]">{q0}</td>
                  <td className="border-black border-[2px]">{input}</td>
                  <td className="border-black border-[2px] Q0+">
                    {activeTable.has(parseInt(value[1][input]))
                      ? activeTable.get(parseInt(value[1][input]))[0][0]
                      : "No"}
                  </td>
                  <td className="border-black border-[2px] Q1+">
                    {activeTable.has(parseInt(value[1][input]))
                      ? activeTable.get(parseInt(value[1][input]))[0][1]
                      : "No"}
                  </td>
                  <td className="border-black border-[2px] output">
                    {randomValues[(index * 2 + subIndex) % randomValues.length]}
                  </td>
                </tr>
              ));
            })}
          </tbody>
        </table>
      )}
      {!table && (
        <table className="border-2 border-black w-full shadow-lg mt-4 bg-white">
          <thead className="bg-blue-500">
            <tr className="border-2 border-black">
              <th className="border-2 border-black text-center p-4 text-white">
                Q0
              </th>
              <th className="border-2 border-black text-center p-4 text-white">
                Q1
              </th>
              <th className="border-2 border-black text-center p-4 text-white">
                Q2
              </th>
              <th className="border-2 border-black text-center p-4 text-white">
                INPUT
              </th>
              <th className="border-2 border-black text-center p-4 text-white">
                Q0+
              </th>
              <th className="border-2 border-black text-center p-4 text-white">
                Q1+
              </th>
              <th className="border-2 border-black text-center p-4 text-white">
                Q2+
              </th>
              <th className="border-2 border-black text-center p-4 text-white">
                Output
              </th>
            </tr>
          </thead>
          <tbody>
            {[...activeTable].map(([key, value], index) => {
              const [q0, q1, q2] = value[0];
              return Object.entries(value).map(([input, _], subIndex) => (
                <tr key={`${key}-${input}`} className="text-center">
                  <td className="border-2 border-black p-1">{q0}</td>
                  <td className="border-2 border-black p-1">{q1}</td>
                  <td className="border-2 border-black p-1">{q2}</td>
                  <td className="border-2 border-black p-1">{input}</td>
                  <td className="border-2 border-black p-1 Q0+">
                    <input
                      type="number"
                      id={`0-${index}${subIndex}`}
                      onChange={(e) =>
                        handle2Q(
                          e,
                          `${parseInt(value[1][input])}`,
                          `[0][0]`,
                          `${index}${subIndex}`
                        )
                      }
                      className=" no-arrows appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </td>
                  <td className="border-2 border-black p-1 Q1+">
                    <input
                      type="number"
                      id={`1-${index}${subIndex}`}
                      onChange={(e) =>
                        handle2Q(
                          e,
                          `${parseInt(value[1][input])}`,
                          `[0][1]`,
                          `${index}${subIndex}`
                        )
                      }
                      className=" no-arrows appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </td>
                  <td className="border-2 border-black p-1 Q1+">
                    <input
                      type="number"
                      id={`1-${index}${subIndex}`}
                      onChange={(e) =>
                        handle2Q(
                          e,
                          `${parseInt(value[1][input])}`,
                          `[0][2]`,
                          `${index}${subIndex}`
                        )
                      }
                      className=" no-arrows appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </td>
                  <td className="border-2 border-black p-1 output">
                    <input
                      type="number"
                      id={`output-${index * 2 + parseInt(subIndex, 10)}`}
                      onChange={(e) =>
                        handleOutput(e, index * 2 + parseInt(subIndex, 10))
                      }
                      className=" no-arrows appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </td>
                </tr>
              ));
            })}
          </tbody>
        </table>
      )}
      {!table && (
        <table className="border-2 border-black w-full shadow-lg mt-4 bg-white">
          <thead className="bg-blue-500">
            <tr className="border-2 border-black">
              <th className="border-2 border-black text-center p-4 text-white">
                Q0
              </th>
              <th className="border-2 border-black text-center p-4 text-white]">
                Q1
              </th>
              <th className="border-2 border-black text-center p-4 text-white">
                Q2
              </th>
              <th className="border-2 border-black text-center p-4 text-white">
                INPUT
              </th>
              <th className="border-2 border-black text-center p-4 text-white">
                Q0+
              </th>
              <th className="border-2 border-black text-center p-4 text-white">
                Q1+
              </th>
              <th className="border-2 border-black text-center p-4 text-white">
                Q2+
              </th>
              <th className="border-2 border-black text-center p-4 text-white">
                Output
              </th>
            </tr>
          </thead>
          <tbody>
            {[...activeTable].map(([key, value], index) => {
              const [q0, q1, q2] = value[0];
              return Object.entries(value).map(([input, _], subIndex) => (
                <tr key={`${key}-${input}`} className="text-center">
                  <td className="border-black border-[2px]">{q0}</td>
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
                  <td className="border-black border-[2px]">
                    {activeTable.has(parseInt(value[1][input]))
                      ? activeTable.get(parseInt(value[1][input]))[0][2]
                      : "No"}
                  </td>
                  <td className="border-black border-[2px] output">
                    {randomValues[(index * 2 + subIndex) % randomValues.length]}
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
