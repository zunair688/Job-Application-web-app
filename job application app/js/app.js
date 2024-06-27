<!-- Function for Current date shown in date picker -->
function setdate() {
  const dateField = document.getElementById('date');
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = today.getFullYear();
  dateField.value = `${day}/${month}/${year}`;
}
document.addEventListener('DOMContentLoaded', setdate);

