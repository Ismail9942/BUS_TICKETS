function getValueElementById(elementId) {
  const element = document.getElementById(elementId);
  const textElement = element.innerText;
  const result = parseInt(textElement);
  return result;
}
function hiddenSection(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
function showSection(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}
