"use strict";
export const state = {
  x: 15,
  y: 15,
  foodYAxis: "",
  foodXAxis: "",
  interval: "",
  lastDir: "",
  lastPath: "",
  snakeNodesArr: [],
};

export const setPathAndDir = (dir, path) => {
  state.lastDir = dir;
  state.lastPath = path;
};
export const setInterval = (interval) => (state.interval = interval);

export const setX = (x) => (state.x = x);

export const setY = (y) => (state.y = y);

export const setRandomFoodXAndYAxis = () => {
  state.foodXAxis = Math.ceil(Math.random() * 30);
  state.foodYAxis = Math.ceil(Math.random() * 30);
};

export const setSnakeNodesArr = (snakeNodesList) =>
  (state.snakeNodesArr = Array.from(snakeNodesList));

export const removeNodesArrFirstEl = () => {
  state.snakeNodesArr.splice(0, 1);
};
export const setNewSnakeDiv = (newSnakeDiv) =>
  state.snakeNodesArr.push(newSnakeDiv);

export const getNodeCurrentGridRowValue = (i) =>
  parseInt(
    window
      .getComputedStyle(state.snakeNodesArr[i], null)
      ["grid-row"].split("/")[0]
  );

export const getNodeCurrentGridColumnValue = (i) =>
  parseInt(
    window
      .getComputedStyle(state.snakeNodesArr[i], null)
      ["grid-column"].split("/")[0]
  );

export const initializeState = () => {
  state.x = 15;
  state.y = 15;
  state.snakeNodesArr = state.snakeNodesArr.slice(-1);
};
