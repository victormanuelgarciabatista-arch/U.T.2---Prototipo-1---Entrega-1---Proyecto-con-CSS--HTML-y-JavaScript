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

