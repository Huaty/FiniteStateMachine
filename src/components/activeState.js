import react from "react";

function chooseRandomState() {
  return Math.floor(Math.random() * 8) + 1;
}

const RandomactiveState = ({ noOfActiveStates }) => {
  const activeStates = [];
  while (activeStates.length < noOfActiveStates) {
    var randomState = chooseRandomState();
    if (!activeStates.includes(randomState)) {
      activeStates.push(randomState);
    }
  }
  return activeStates;
};

export { RandomactiveState };
