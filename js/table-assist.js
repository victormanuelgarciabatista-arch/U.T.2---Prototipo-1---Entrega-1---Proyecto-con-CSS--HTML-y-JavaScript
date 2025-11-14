var table = [];


function addIncident() {

  var nameAdded = document.getElementById('name').value;
  var surnamesAdded = document.getElementById('surnames').value;
  var phoneAdded = document.getElementById('phone').value;
  var emailAdded = document.getElementById('email').value;
  var incidentAdded = document.getElementById('incident').value;
  var urgentdAdded = document.getElementById('urgent').checked;

  var newIncident = {
    name: nameAdded,
    surnames: surnamesAdded,
    phone: phoneAdded,
    email: emailAdded,
    incident: incidentAdded,
    urgent: ""
  };
  if (urgentdAdded) {
    newIncident.urgent = "Sí";
  }
  else {
    newIncident.urgent = "No";
  }
  table.push(newIncident);
  refreshTable();
}

function refreshTable() {
  var tableBody = document.getElementById("tableBody");
  var contentTable = "";

  for (var i = 0; i < table.length; i++) {
    contentTable +=
      "<tr>" +
      "<td>" + table[i].name + "</td>" +
      "<td>" + table[i].surnames + "</td>" +
      "<td>" + table[i].phone + "</td>" +
      "<td>" + table[i].email + "</td>" +
      "<td>" + table[i].incident + "</td>" +
      "<td>" + table[i].urgent + "</td>" +
      "</tr>";
  }
  tableBody.innerHTML = contentTable;
}