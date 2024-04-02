const activeArrow = ({ activeStates }) => {
  /// Example: ActiveStates = [4,6,1,3]
  const activeArrow = []; ///array of dict

  // Loop for each element in activeStates
  for (let i = 0; i < activeStates.length; i++) {
    let arrows = []; /// array to keep the arrows

    const uniqueArrows = new Set();
    arrows.push(activeStates[i] * 10 + activeStates[i]); ///// Example: (4*10 + 4) = 44 means state 4 to state 4 . Going Back itself

    // Pair with other elements in both orders
    for (let j = 0; j < activeStates.length; j++) {
      if (i !== j) {
        arrows.push(activeStates[i] * 10 + activeStates[j]); //// Example (4*10 + 6 ) = 46 means state 4 to state 6 . Going to other State
      }
    }
    while (uniqueArrows.size < 2) {
      /// max 2 outgoing arrows
      let randomNumber = Math.floor(Math.random() * arrows.length);
      uniqueArrows.add(arrows[randomNumber]);
    }
    let arrowsRandom = Array.from(uniqueArrows); //// End Result : [46,43,66,64,14,11,33,34]
    activeArrow.push({
      state: activeStates[i],
      arrows: arrowsRandom,
    });
  }

  return activeArrow;
};

export { activeArrow };
