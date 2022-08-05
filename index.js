const toDoItems = document.getElementsByClassName("item-container")[0];
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") addItem();
});

function addItem() {
  var divParent = document.createElement("div");
  var divChild = document.createElement("div");
  var checkIcon = document.createElement("i");
  var trashIcon = document.createElement("i");

  divParent.className = "item";
  divParent.innerHTML = "<div> " + input.value + "</div>";

  checkIcon.className = "fa-solid fa-circle-check fa-lg";
  checkIcon.style.color = "lightgray";
  checkIcon.addEventListener("click", function () {
    checkIcon.style.color = "limegreen";
  });

  divChild.appendChild(checkIcon);

  trashIcon.className = "fa-solid fa-ban fa-lg";
  trashIcon.style.color = "darkgray";
  trashIcon.addEventListener("click", function () {
    divParent.remove();
  });

  divChild.append(trashIcon);

  divParent.appendChild(divChild);

  toDoItems.appendChild(divParent);

  input.value = "";
}