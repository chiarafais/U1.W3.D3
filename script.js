const newTask = function () {
  const nameInput = document.getElementById("myInput");
  console.log(nameInput.value);

  const list = document.getElementById("myUL");

  const li = document.createElement("li");
  li.innerText = nameInput.value;

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  li.appendChild(deleteButton);

  deleteButton.addEventListener("click", (e) => {
    e.target.closest("li").remove();
  });
  li.addEventListener("click", (e) => {
    e.currentTarget.style.textDecorationLine = "line-through";
  });

  list.appendChild(li);
};
