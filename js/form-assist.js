const FORM = document.getElementById('assistForm');

FORM.addEventListener('submit', function (e) {
  e.preventDefault();


  const inputs = {
    name: document.getElementById('name'),
    surnames: document.getElementById('surnames'),
    phone: document.getElementById('phone'),
    email: document.getElementById('email'),
    incident: document.getElementById('incident'),
  };

  let isValid = true;

  document.querySelectorAll('.error-message').forEach(msg => msg.textContent = '');


  if (!inputs.name.value.trim()) {
    inputs.name.nextElementSibling.textContent = 'Por favor, ingresa tu nombre.';
    isValid = false;
  }

  if (!inputs.surnames.value.trim()) {
    inputs.surnames.nextElementSibling.textContent = 'Por favor, ingresa tus apellidos.';
    isValid = false;
  }

  if (!inputs.phone.value.trim() || inputs.phone.value.trim().length < 6) {
    inputs.phone.nextElementSibling.textContent = 'Teléfono inválido (mínimo 6 dígitos).';
    isValid = false;
  }

  if (!inputs.email.value.trim() || !/^\S+@\S+\.\S+$/.test(inputs.email.value.trim())) {
    inputs.email.nextElementSibling.textContent = 'Correo inválido.';
    isValid = false;
  }

  if (!inputs.incident.value.trim()) {
    inputs.incident.nextElementSibling.textContent = 'Describe la incidencia.';
    isValid = false;
  }


  if (isValid) {
    addIncident();
    form.reset();
  }

});