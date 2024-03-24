// Import React and other necessary packages
"use client";
import React, { useState } from "react";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import MooreStateForm from "@/components/Forms/MooreStateForm";

// Define the MyPage component
const MyPage = () => {
  const [noOfActiveStates, setNoOfActiveStates] = useState(0);
  const router = useRouter();

  // Function to handle form changes
  const handleChanges = (event) => {
    setNoOfActiveStates(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(noOfActiveStates);
    Cookie.set("noOfActiveStates", noOfActiveStates);
    router.push("/statemachine");
  };

  // JSX for the component
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <form onSubmit={handleSubmit} className="py-8 px-5">
            <div className="text-lg font-semibold mb-4">
              Submit Number of States you want!
            </div>
            <input
              type="text"
              value={noOfActiveStates}
              onChange={handleChanges}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter number of states"
            />
            <button
              type="submit"
              className="w-full mt-5 bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="mt-10">
        <MooreStateForm />
      </div>
    </div>
  );
};

// Export the component
export default MyPage;
