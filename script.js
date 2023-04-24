let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = ".,;:!§$%&/?=";
let allchars = '';

let lengthSlider = document.getElementById('length-slider');
let generateBtn = document.getElementById('gen-btn');
let length = document.getElementById('show-password-length');
let passwordBox = document.getElementById('password');
let options = document.getElementsByClassName('option');

function updateSlider() {
  let showPasswordLength = document.getElementById('show-password-length');
  showPasswordLength.innerHTML = lengthSlider.value; // Update innerHTML with the value of the slider
}
lengthSlider.addEventListener('input', updateSlider); // Add event listener to call updateSlider() on input event

function generatePassword() {
  let password = '';
  allchars = '';
  
  if (document.getElementById('lowercase').checked) {
    allchars += lowerCase;
  }
  
  if (document.getElementById('uppercase').checked) {
    allchars += upperCase;
  }
  
  if (document.getElementById('number').checked) {
    allchars += numbers;
  }
  
  if (document.getElementById('symbols').checked) {
    allchars += symbols;
  }
  
  while (lengthSlider.value > password.length) {
    password += allchars[Math.floor(Math.random() * allchars.length)];
  }
  
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand('copy');
  navigator.clipboard.writeText(passwordBox.value);
}
