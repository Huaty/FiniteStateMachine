const activeArrow = ({ activeStates }) => {
  const activeArrow = [];

  // Loop for each element in activeStates
  for (let i = 0; i < activeStates.length; i++) {
    // Pair with itself
    activeArrow.push(activeStates[i] * 10 + activeStates[i]);

    // Pair with other elements in both orders
    for (let j = 0; j < activeStates.length; j++) {
      if (i !== j) {
        activeArrow.push(activeStates[i] * 10 + activeStates[j]);
        activeArrow.push(activeStates[j] * 10 + activeStates[i]);
      }
    }
  }

  return activeArrow;
};

export { activeArrow };
