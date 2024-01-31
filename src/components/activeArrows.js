const activeArrow = ({ activeStates }) => {
  const activeArrow = []; ///array of dict

  // Loop for each element in activeStates
  for (let i = 0; i < activeStates.length; i++) {
    let arrows = []; /// array to keep the arrows

    const uniqueArrows = new Set();
    arrows.push(activeStates[i] * 10 + activeStates[i]);

    // Pair with other elements in both orders
    for (let j = 0; j < activeStates.length; j++) {
      if (i !== j) {
        arrows.push(activeStates[i] * 10 + activeStates[j]);
      }
    }
    while (uniqueArrows.size < 2) {
      let randomNumber = Math.floor(Math.random() * arrows.length);
      uniqueArrows.add(arrows[randomNumber]);
    }
    let arrowsRandom = Array.from(uniqueArrows); // the point having this array because max two output as we creating 3 output in arrows
    activeArrow.push({
      state: activeStates[i],
      arrows: arrowsRandom,
    });
  }

  return activeArrow;
};

export { activeArrow };
