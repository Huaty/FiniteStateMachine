import React, { useState } from "react";
import MooreStateContext from "@components/Contexts/MooreStateContext";

const MooreStateProvider = ({ children }) => {
  const [states, setStates] = useState(0);

  return (
    <MooreStateContext.Provider value={{ states, setStates }}>
      {children}
    </MooreStateContext.Provider>
  );
};

export default MooreStateProvider;
