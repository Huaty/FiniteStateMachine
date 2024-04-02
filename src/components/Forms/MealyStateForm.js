import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { poppinsFont } from "@/asset/font";

const MealyStateForm = () => {
  const [noOfActiveStates, setNoOfActiveStates] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const MoorehandleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Validate the input
    if (
      isNaN(noOfActiveStates) ||
      noOfActiveStates < 3 ||
      noOfActiveStates > 8
    ) {
      setError("Please enter a number between 3 and 8.");
      return;
    }

    // Navigate to the mooreMachine page with the number of states as a query parameter
    router.push(`/mealyMachine/${noOfActiveStates}`);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setNoOfActiveStates(value);

    // Validate the input on change
    if (isNaN(value) || value < 3 || value > 8) {
      setError("Please enter a number between 3 and 8.");
    } else {
      setError("");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8 mt-10">
      <form onSubmit={MoorehandleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="noOfActiveStates"
            className="block text-lg font-medium text-red-600"
          >
            Number of States in Mealy State Machine:
          </label>
          <input
            type="number"
            id="noOfActiveStates"
            name="noOfActiveStates"
            required
            max="8"
            min="3"
            value={noOfActiveStates}
            onChange={handleInputChange}
            className={`no-arrows mt-2 block w-full p-3 text-lg border-2 border-black focus:outline-none focus:ring-red-500 focus:border-red-500 rounded-md ${
              error ? "border-red-500" : ""
            }`}
          />
          {error && <p className="text-red-500 text-base mt-2">{error}</p>}
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-red-500 text-white text-lg px-6 py-3 rounded-md hover:bg-red-600 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MealyStateForm;
