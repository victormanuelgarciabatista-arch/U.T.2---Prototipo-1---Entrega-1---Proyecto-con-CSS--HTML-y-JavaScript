function openIncident(index) {
  if (index != null)
    localStorage.setItem("currentIncident", index);
  window.location.href = "incident.html"
}

function refreshTable() {
  let table = getTable();

  const TABLE_BODY = document.getElementsByClassName("table-body")[0];
  let contentTable = "";

  for (let i = 0; i < table.length; i++) {
    contentTable +=
      `<div class="card-row">
          <div class="card-item"><span class="label">Nombre:</span> ${table[i].name}</div>
          <div class="card-item"><span class="label">Apellidos:</span> ${table[i].surnames}</div>
          <div class="card-item"><span class="label">Teléfono:</span> ${table[i].phone}</div>
          <div class="card-item"><span class="label">Correo:</span> ${table[i].email}</div>
          <div class="card-item"><span class="label">Incidencia:</span> ${table[i].incident}</div>
          <div class="card-item"><span class="label">¿Urgente?:</span> ${table[i].urgent}</div>

          <div class="card-actions">
            <button class="btn edit" onclick="openIncident(${i})">Editar</button>
            <button class="btn delete" onclick="deleteItem(${i})">Borrar</button>
          </div>
       </div>`;

  }
  TABLE_BODY.innerHTML = contentTable;
}
refreshTable();

function deleteItem(index) {
  let table = getTable();

  if (confirm("¿Seguro que quieres borrar esta incidencia?")) {
    table.splice(index, 1);
    localStorage.setItem("table", JSON.stringify(table));
    refreshTable();
  }
}

