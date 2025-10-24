function hideAllInfoClass(id) {
  const listElements = document.querySelectorAll('.info-class:not(' + id + ')');


  listElements.forEach(elem => {
    elem.style.display = "none";
  });
}

function showElementById(id) {
  const element = document.querySelector(id);
  console.log(element.style.display)
  if (element.style.display === "flex") {
    element.style.display = "none";
  }
  else {
    element.style.display = "flex";
  }
}

function showInfoClass(id) {
  hideAllInfoClass(id);
  showElementById(id);
}

