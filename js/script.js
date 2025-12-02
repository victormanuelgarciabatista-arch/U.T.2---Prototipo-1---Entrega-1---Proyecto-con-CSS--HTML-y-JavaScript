function hideAllInfoClass(id) {
  const LIST_ELEMENTS = document.querySelectorAll('.info-class:not(' + id + ')');

  LIST_ELEMENTS.forEach(elem => {
    elem.style.display = "none";
  });
}

function showElementById(id) {
  const ELEMENT = document.querySelector(id);
  console.log(ELEMENT.style.display)
  if (ELEMENT.style.display === "flex") {
    ELEMENT.style.display = "none";
  }
  else {
    ELEMENT.style.display = "flex";
  }
}

function showInfoClass(id) {
  hideAllInfoClass(id);
  showElementById(id);
}

function goHomepage() {
  window.location.href = "index.html"
}

function getCurrentIncident() {
  let currentIncident = null;

  if (localStorage.getItem("currentIncident") != null) {
    currentIncident = (localStorage.getItem("currentIncident"));
  }
  return currentIncident;
}

function getTable() {
  let table = [];

  if (localStorage.getItem("table") != null) {
    table = JSON.parse(localStorage.getItem("table"));
  }
  return table;
}
