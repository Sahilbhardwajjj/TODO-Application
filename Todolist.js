function addtodo(event) {
  event.preventDefault(); // Prevent the form from submitting

  const inputel = document.getElementById("inp");
  const value = inputel.value;

  if (value.trim() === "") {
    return; // Do nothing if the input is empty
  }

  const newtodoId = Date.now(); // Generate a unique ID based on the current time

  const newele = document.createElement("div");
  newele.setAttribute("id", newtodoId); // Assign the unique ID to the div
  newele.innerHTML =
    "<p>" +
    value +
    "</p><button onclick='deleteTodo(" +
    newtodoId +
    ")' id='button'>X</button>";

  const newtodo = document.getElementById("todos");
  newtodo.appendChild(newele);

  inputel.value = ""; // Clear the input field after adding the todo
}

function deleteTodo(index) {
  const element = document.getElementById(index);
  if (element) {
    element.parentNode.removeChild(element);
  }
}
