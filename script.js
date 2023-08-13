function calculate() {
  const birthdayValue = document.getElementById('input');
  const birthday = birthdayValue.value;

  if (!birthday) {
    alert('Silakan input tahun lahir');
    return false;
  }

  const days = new Date().getFullYear();
  const age = days - birthday;

  const View = document.getElementById('resultView');
  View.innerHTML = 'Usia kamu adalah ' + age + ' tahun.';
}
