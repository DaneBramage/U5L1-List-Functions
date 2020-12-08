var bList = ["to", 5, "po"];

function appendItem(listName, item) {
  listName.push(item);
}

appendItem(bList, "New List Item!");
console.log(bList);