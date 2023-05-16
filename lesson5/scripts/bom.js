const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener('click', function() {
    if(input.value == ''){return;}
    const newList = document.createElement("li");
    const deleteButton = document.createElement("button");
    newList.innerHTML = input.value;
    deleteButton.innerHTML = "X";
    newList.appendChild(deleteButton);
    list.appendChild(newList);
    deleteButton.addEventListener('click', function() {deleteButton.remove();});
    input.focus();
    input.value = "";
});