// Function to change text content dynamically
function changeText() {
    document.getElementById("text").textContent = "Text has been updated!";
}

// Function to add or remove an element when the button is clicked
function toggleElement() {
    let existingElement = document.getElementById("dynamic");

    if (existingElement) {
        existingElement.remove();
    } else {
        let newElement = document.createElement("p");
        newElement.id = "dynamic";
        newElement.textContent = "New element added!";
        document.body.appendChild(newElement);
    }
}