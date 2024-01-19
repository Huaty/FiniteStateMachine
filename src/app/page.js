"use client";

import React, { useEffect, useState } from "react";
import MyDrawingComponent from "@/components/arrow";
import { activeState } from "@/components/activeState";
import { activeArrow } from "@/components/activeArrows";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";

const MyPage = () => {
  const [noOfActiveStates, setNoOfActiveStates] = useState(0);
  const Router = useRouter();
  const handlechanges = (event) => {
    setNoOfActiveStates(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(noOfActiveStates);
    Cookie.set("noOfActiveStates", noOfActiveStates);
    Router.push("/statemachine");
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={noOfActiveStates}
            onChange={handlechanges}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MyPage;
