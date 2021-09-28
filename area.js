const firstSide = document.querySelector("#height");
const secondSide = document.querySelector("#base");
const areaMessage = document.querySelector("#area-message");
const areaForm = document.querySelector("#area-form");

function calculateArea(height, base) {
  let area = (height * base) / 2;
  return area;
}

function calculateAreaOfTriangle(event) {
  event.preventDefault();

  const areaOfTriangle = calculateArea(firstSide.value, secondSide.value);
  areaMessage.innerText =
    "Area of a triangle using heron's formula is " +
    areaOfTriangle.toFixed(2) +
    " units.";
}

areaForm.addEventListener("submit", calculateAreaOfTriangle);
