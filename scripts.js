const display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    alert('Invalid calculation');
    clearDisplay();
  }
}

function clearDisplay() {
  display.value = '';
}