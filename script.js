var bList = ["to", 5, "po"];

function appendItem(listName, item) {
  listName.push(item);
}

function removeItem(listName, index) {
  listName.splice(index, 1);
}

function insertItem(listName, index, item) {
  listName.splice(index, 0, item);
}

// appendItem(bList, "New List Item!");
// removeItem(bList, 2);
insertItem(bList, 1, "this should come second");
console.log(bList);

