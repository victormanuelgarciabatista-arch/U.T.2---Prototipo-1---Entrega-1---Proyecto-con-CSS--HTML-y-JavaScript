const FORM = document.getElementById('assistForm');
function loadIncident(index) {
  let table = getTable();

  let incident = table[index];

  if (incident != null) {
    document.getElementById('name').value = incident.name;
    document.getElementById('surnames').value = incident.surnames;
    document.getElementById('phone').value = incident.phone;
    document.getElementById('email').value = incident.email;
    document.getElementById('incident').value = incident.incident;
  }
}

function editIncident(index) {
  let table = getTable();

  const NAME_ADDED = document.getElementById('name').value;
  const SURNAMES_ADDED = document.getElementById('surnames').value;
  const PHONE_ADDED = document.getElementById('phone').value;
  const EMAIL_ADDED = document.getElementById('email').value;
  const INCIDENT_ADDED = document.getElementById('incident').value;
  const URGENT_ADDED = document.getElementById('urgent').checked;

  let urgent;
  if (URGENT_ADDED) {
    urgent = "Sí";
  }
  else {
    urgent = "No";
  }

  if (index == null) {
    const NEW_INCIDENT = {
      name: NAME_ADDED,
      surnames: SURNAMES_ADDED,
      phone: PHONE_ADDED,
      email: EMAIL_ADDED,
      incident: INCIDENT_ADDED,
      urgent: urgent
    };
    table.push(NEW_INCIDENT);
  } else {
    table[index].name = NAME_ADDED
    table[index].surnames = SURNAMES_ADDED
    table[index].phone = PHONE_ADDED
    table[index].email = EMAIL_ADDED
    table[index].incident = INCIDENT_ADDED
  }
  localStorage.setItem("table", JSON.stringify(table));
}

loadIncident(getCurrentIncident());

FORM.addEventListener('submit', function (e) {
  e.preventDefault();
  let index = getCurrentIncident();

  const INPUTS = {
    name: document.getElementById('name'),
    surnames: document.getElementById('surnames'),
    phone: document.getElementById('phone'),
    email: document.getElementById('email'),
    incident: document.getElementById('incident'),
  };

  let isValid = true;

  document.querySelectorAll('.error-message').forEach(msg => msg.textContent = '');

  if (!INPUTS.name.value.trim()) {
    INPUTS.name.nextElementSibling.textContent = 'Por favor, ingresa tu nombre.';
    isValid = false;
  }

  if (!INPUTS.surnames.value.trim()) {
    INPUTS.surnames.nextElementSibling.textContent = 'Por favor, ingresa tus apellidos.';
    isValid = false;
  }

  if (!INPUTS.phone.value.trim() || INPUTS.phone.value.trim().length < 6) {
    INPUTS.phone.nextElementSibling.textContent = 'Teléfono inválido (mínimo 6 dígitos).';
    isValid = false;
  }

  if (!INPUTS.email.value.trim() || !/^\S+@\S+\.\S+$/.test(INPUTS.email.value.trim())) {
    INPUTS.email.nextElementSibling.textContent = 'Correo inválido.';
    isValid = false;
  }

  if (!INPUTS.incident.value.trim()) {
    INPUTS.incident.nextElementSibling.textContent = 'Describe la incidencia.';
    isValid = false;
  }

  if (isValid) {
    editIncident(index);

  }

});