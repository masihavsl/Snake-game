class GameView {
  snakeNodesList = document.querySelectorAll(".node");
  foodDiv = document.createElement("div");
  parentElement = document.querySelector(".wrapper");

  detectMovementHandler(handler) {
    document.addEventListener("keydown", handler);
  }
  updateSnakeLocation(snakeNodesArr, x, y) {
    snakeNodesArr.at(-1).style["grid-column"] = x;
    snakeNodesArr.at(-1).style["grid-row"] = y;
  }
  spawnNewFood(foodXAxis, foodYAxis) {
    this.foodDiv.classList.add("food");
    this.foodDiv.style["grid-row"] = foodYAxis;
    this.foodDiv.style["grid-column"] = foodXAxis;
    this.parentElement.insertAdjacentElement("beforeend", this.foodDiv);
  }
  removeFoodElement() {
    this.foodDiv.remove();
  }
  removeNode(node) {
    node.remove();
  }
  getNewSnakeDiv() {
    return document.createElement("div");
  }
  spawnNewSnakeHead(newSnakeDiv) {
    newSnakeDiv.classList.add("node");
    this.parentElement.insertAdjacentElement("beforeend", newSnakeDiv);
  }
  alertLoser(){
      window.alert('You Lost.')
  }
}
export default new GameView();
