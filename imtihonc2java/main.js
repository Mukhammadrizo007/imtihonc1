const btnc1 = document.getElementById("cc1");
const btnc2 = document.getElementById("cc2");
const btnc3 = document.getElementById("cc3");
const btnc4 = document.getElementById("cc4");
const btnc5 = document.getElementById("cc5");
const p = document.getElementById("p");

function p1(type) {
  const alertText = document.createElement("p");
  alertText.classList.add("alert", type);
  let message = "";
  if (type === "success") {
    message = "the 1st button was pressed";
  } else if (type === "warning") {
    message = "the 2nd button was pressed";
  } else if (type === "error") {
    message = "the 3rd button was pressed";
  } else if (type === "s4") {
    message = "the 4th button was pressed";
  } else if (type === "s5") {
    message = "the 5th button was pressed";
  }
  alertText.textContent = message;
  p.appendChild(alertText);
  setTimeout(() => {
    alertText.remove();
  }, 3000);
}

btnc1.addEventListener("click", () => p1("success"));
btnc2.addEventListener("click", () => p1("warning"));
btnc3.addEventListener("click", () => p1("error"));
btnc4.addEventListener("click", () => p1("s4"));
btnc5.addEventListener("click", () => p1("s5"));

const body = document.getElementById("by");
const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");

function lightMode() {
  body.style.backgroundColor = "#f2efef";
  body.style.color = "black";
  c1.style.backgroundColor = "white";
  c2.style.backgroundColor = "black";
}

function darkMode() {
  body.style.backgroundColor = "black";
  body.style.color = "orange";
  c2.style.backgroundColor = "orange";
  c1.style.backgroundColor = "white";
}
