import { LinkedListNode, LinkedList } from "./linked-list.js";

export function render(linkedList: LinkedList) {
  const parent = document.getElementById("main").textContent = "";
  let node = linkedList.head;
  while (node) {
    const circle = createCircle(node);
    addNewNode(circle);
    node = node.next;
  }
}

function createCircle(node: LinkedListNode) {
  let div = document.createElement("div");
  div.classList.add("circle");
  div.style.backgroundColor = "purple";
  div.textContent = node.value;
  return div;
}

function addNewNode(node: HTMLDivElement) {
  const parent = document.getElementById("main");
  parent.appendChild(node);
}

// export class Helpers {
//   render(linkedList: LinkedList) {
//     let node = linkedList.head;
//     while (node) {
//       console.log(node);

//       const circle = this.createCircle(node);
//       this.addNewNode(circle);
//       node = node.next;
//     }
//   }

//   createCircle(node: LinkedListNode) {
//     let div = document.createElement("div");
//     div.classList.add("circle");
//     div.style.backgroundColor = "purple";
//     div.textContent = node.value;
//     return div;
//   }

//   addNewNode(node: HTMLDivElement) {
//     const parent = document.getElementById("main");
//     parent.appendChild(node);
//   }
// }
