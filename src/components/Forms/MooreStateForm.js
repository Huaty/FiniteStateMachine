import React, { useState } from "react";
import { useRouter } from "next/navigation";

const MooreStateForm = () => {
  const [noOfActiveStates, setNoOfActiveStates] = useState("");
  const router = useRouter();

  const MoorehandleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Navigate to the mooreMachine page with the number of states as a query parameter
    router.push(`/mooreMachine/${noOfActiveStates}`);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
      <form onSubmit={MoorehandleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="noOfActiveStates"
            className="block text-sm font-medium text-gray-700"
          >
            Number of States:
          </label>
          <input
            type="number"
            id="noOfActiveStates"
            name="noOfActiveStates"
            required
            max="8"
            min="1" // Assuming the minimum number of states is 1
            value={noOfActiveStates}
            onChange={(e) => setNoOfActiveStates(e.target.value)}
            className="no-arrows mt-1 block w-full p-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MooreStateForm;
