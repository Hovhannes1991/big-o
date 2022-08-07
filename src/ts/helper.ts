import { BinarySourceTree, BinaryTreeItem } from "./binary-source-tree";

function createCircle(value: string, color = "purple") {
  let div = document.createElement("div");
  div.classList.add("circle");
  div.style.backgroundColor = color;
  div.textContent = value;
  return div;
}

function addNewNode(node: HTMLDivElement) {
  const parent = document.getElementById("main");
  parent.appendChild(node);
}

//for Binary Tree
const bt = new BinarySourceTree();
const input = document.getElementById("num_input") as HTMLInputElement;
const addBnt = document.getElementById("add_btn") as HTMLButtonElement;
let main = document.getElementById("main");

input.addEventListener("keydown", onKeyDown);
addBnt.addEventListener("click", additemToBinaryTree);

function onKeyDown(e: KeyboardEvent) {
  if (e.key === "Enter") {
    additemToBinaryTree();
  }
}

function additemToBinaryTree() {
  const value = +input.value;
  if (!value) return;
  bt.insert(value);
  console.log(bt)
  // drawTree(bt);
}

function resetState() {
  main.innerHTML = `<div id="tree">
  <div id="root"></div>
  <div id="left">
      <div class="root"></div>
  </div>
  <div id="right">
      <div class="root"></div>
  </div>
</div>`;
}

function drawTree(b_tree: BinarySourceTree) {
  resetState();
  
  let root = document.getElementById("root");
  let left = document.getElementById("left");
  let right = document.getElementById("right");
  let left_root = left.getElementsByClassName("root")[0];
  let right_root = right.getElementsByClassName("root")[0];

  root.appendChild(createCircle(b_tree.root.value));
  if (b_tree.root.left) {
    left_root.appendChild(createCircle(b_tree.root.left.value));
    drawLift(b_tree.root.left, left);
  }
  if (b_tree.root.right) {
    right_root.appendChild(createCircle(b_tree.root.right.value));
    drawLift(b_tree.root.right, right);
  }
}

function drawLift(item: BinaryTreeItem, parrent_div: any) {
  const d2 = document.createElement("div");
  const d3 = document.createElement("div");
  d2.classList.add("left");
  d3.classList.add("right");

  if(item?.left?.value){
    d2.appendChild(createCircle(item.left.value));
    parrent_div.appendChild(d2);
  }
  if(item?.right?.value){
    d3.appendChild(createCircle(item.right.value));
    parrent_div.appendChild(d3);
  }
  
  
  
  if (item.left) {
    drawLift(item.left, d2);
  }
  if (item.right) {
    drawLift(item.right, d3);
  }
}
