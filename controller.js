"use strict";
import view from "./view.js";
import * as model from "./model.js";

const reStartGame = function () {
  view.alertLoser();
  clearInterval(model.state.interval);
  model.state.snakeNodesArr.forEach((node) => {
    view.removeNode(node);
  });
  model.initializeState();
  view.spawnNewSnakeHead(model.state.snakeNodesArr[0]);
  view.removeFoodElement();
  model.setRandomFoodXAndYAxis();
  view.spawnNewFood(model.state.foodXAxis, model.state.foodYAxis);
};

const movementController = function (event) {
  switch (event.key) {
    case "ArrowLeft":
      leadDirectionController("c", -1);
      break;
    case "ArrowUp":
      leadDirectionController("r", -1);
      break;
    case "ArrowRight":
      leadDirectionController("c", 1);
      break;
    case "ArrowDown":
      leadDirectionController("r", 1);
      break;
  }
};

const leadDirectionController = function (dir, path) {
  if (
    model.state.lastDir === dir &&
    path !== model.state.lastPath &&
    model.state.snakeNodesArr.length > 1
  )
    return;
  model.setPathAndDir(dir, path);
  clearInterval(model.state.interval);
  const interval = setInterval(() => {
    model.setInterval(interval);
    removeAndAddNewNode();

    if (dir === "c") {
      model.setX(model.state.x + path);
      setBoundryController();
      view.updateSnakeLocation(
        model.state.snakeNodesArr,
        model.state.x,
        model.state.y
      );
    } else {
      model.setY(model.state.y + path);
      setBoundryController();
      view.updateSnakeLocation(
        model.state.snakeNodesArr,
        model.state.x,
        model.state.y
      );
    }
  }, 100);
};

const removeAndAddNewNode = function () {
  if (
    model.state.foodXAxis === model.state.x &&
    model.state.foodYAxis === model.state.y
  ) {
    view.removeFoodElement();
    model.setRandomFoodXAndYAxis();
    view.spawnNewFood(model.state.foodXAxis, model.state.foodYAxis);
  } else {
    view.removeNode(model.state.snakeNodesArr[0]);
    model.removeNodesArrFirstEl();
  }
  model.setNewSnakeDiv(view.getNewSnakeDiv());
  view.spawnNewSnakeHead(model.state.snakeNodesArr.at(-1));
};

const foodGeneratorController = function () {
  model.setRandomFoodXAndYAxis();
  view.spawnNewFood(model.state.foodXAxis, model.state.foodYAxis);
};

const setBoundryController = function () {
  if (
    model.state.x < 1 ||
    model.state.y < 1 ||
    model.state.x === 31 ||
    model.state.y === 31
  ) {
    reStartGame();
    return;
  }
  for (let i = 0; i < model.state.snakeNodesArr.length - 1; i++) {
    if (
      model.getNodeCurrentGridRowValue(i) === model.state.y &&
      model.getNodeCurrentGridColumnValue(i) === model.state.x
    ) {
      reStartGame();
      return;
    }
  }
};

const init = function () {
  foodGeneratorController();
  model.setSnakeNodesArr(view.snakeNodesList);
  view.detectMovementHandler(movementController);
};
init();
