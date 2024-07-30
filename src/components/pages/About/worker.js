// worker.js
import { buildTree } from './roadBetHelperFunction.ts';
self.onmessage = function (e) {
    const { placeCheckBox, drawNumbers, activeFormCheckBox, lottery_type_id } = e.data;
  
    // Perform your complex calculations here
    // This is an example structure based on your provided code
    let mainTree = {};
    let percentage = {};
    let columnWidth = {};
    let bigBoy = {};
    let cockroach = {};
    let smallRoad = {};
    let nextColor = {};
  
    Object.keys(placeCheckBox)
      .sort((a, b) => a.localeCompare(b))
      .forEach((place) => {
        activeFormCheckBox.forEach((form) => {
          let trees;
          let _percent;
          let _colWidth;
          let _bigBoy;
          let _cockroach;
          let _smallRoad;
          let _nextColor;
  
          // Assuming buildTree is a function you have defined elsewhere
          const regularTree = buildTree(drawNumbers, place, form, lottery_type_id.toString());
  
          trees = regularTree.tree;
          _percent = regularTree.percentage;
          _colWidth = regularTree.colWidth;
          _bigBoy = regularTree.bigBoy;
          _cockroach = regularTree.cockroach;
          _smallRoad = regularTree.smallRoad;
          _nextColor = regularTree.nextColor;
  
          if (trees && _percent && _colWidth && _bigBoy && _cockroach && _smallRoad && _nextColor) {
            mainTree[`${form}|${place}`] = trees;
            percentage[`${form}|${place}`] = _percent;
            columnWidth[`${form}|${place}`] = _colWidth;
            bigBoy[`${form}|${place}`] = _bigBoy;
            cockroach[`${form}|${place}`] = _cockroach;
            smallRoad[`${form}|${place}`] = _smallRoad;
            nextColor[`${form}|${place}`] = _nextColor;
          }
        });
      });
  
    // Send the results back to the main thread
    self.postMessage({ mainTree, percentage, columnWidth, bigBoy, cockroach, smallRoad, nextColor });
  };
  