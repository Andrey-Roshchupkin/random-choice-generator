function addChoice() {
  const choiceInput = document.getElementById("choice");
  const choicesDiv = document.getElementById("choices");

  if (choiceInput.value.trim() !== "") {
    const choiceDiv = document.createElement("div");
    choiceDiv.className = "choice";

    const choiceText = document.createElement("span");
    choiceText.className = "choice-text";
    choiceText.appendChild(document.createTextNode(choiceInput.value));
    choiceDiv.appendChild(choiceText);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.onclick = function () {
      choicesDiv.removeChild(choiceDiv);
    };

    choiceDiv.appendChild(deleteButton);
    choicesDiv.appendChild(choiceDiv);

    choiceInput.value = "";
  }
}

function randomize() {
  const minValue = parseFloat(document.getElementById("minValue").value);
  const maxValue = parseFloat(document.getElementById("maxValue").value);
  const step = parseFloat(document.getElementById("step").value);
  const choicesDiv = document.getElementById("choices");
  const resultElement = document.getElementById("result");

  if (!isNaN(minValue) && !isNaN(maxValue) && !isNaN(step)) {
    const randomValue =
      Math.floor(Math.random() * ((maxValue - minValue) / step + 1)) * step +
      minValue;

    const randomChoiceIndex = Math.floor(
      Math.random() * choicesDiv.children.length
    );
    const randomChoice =
      choicesDiv.children[randomChoiceIndex].firstChild.textContent;

    resultElement.innerHTML = `Random Value: ${randomValue}, Random Choice: ${randomChoice}`;
  } else {
    resultElement.innerHTML =
      "Invalid input. Please enter numeric values for Min Value, Max Value, and Step.";
  }
}
