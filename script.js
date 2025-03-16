//Handle button click
const messageBtn = document.getElementById("messageBtn");
const message = document.getElementById("message");

//Handle input field updates
const textInput = document.getElementById("textInput");
const textOutput = document.getElementById("textOutput");

messageBtn.addEventListener("click", () => {
    message.textContent = textOutput.textContent = textInput.value;
});

textInput.addEventListener("input", () => {
    textOutput.textContent = textInput.value;
});

//Handle hover color change
const colorBox = document.getElementById("colorBox");

colorBox.addEventListener("mouseenter", () => colorBox.style.backgroundColor = "green");
colorBox.addEventListener("mouseleave", () => colorBox.style.backgroundColor = "lightblue");
