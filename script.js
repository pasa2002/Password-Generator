let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = ".,;:!§$%&/?=";
let allchars = '';

let lengthSlider = document.getElementById('length-slider');
let generateBtn = document.getElementById('gen-btn');
let length = document.getElementById('show-password-length');
let passwordBoxOne = document.getElementById('passwordOne');
let passwordBoxTwo = document.getElementById('passwordTwo');
let options = document.getElementsByClassName('option');
let passIndicator = document.querySelector('.pass-indicator');


function updateSlider() {
  let showPasswordLength = document.getElementById('show-password-length');
  showPasswordLength.innerHTML = lengthSlider.value; // Update innerHTML with the value of the slider
  updatePassIndicator();
  generatePassword();
}
updateSlider();
lengthSlider.addEventListener('input', updateSlider); // Add event listener to call updateSlider() on input event

function generatePassword() {
  let passwordOne = '';
    let passwordTwo = '';
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
  
  while (lengthSlider.value > passwordOne.length) {
    passwordOne += allchars[Math.floor(Math.random() * allchars.length)];
  }

  while (lengthSlider.value > passwordTwo.length) {
    passwordTwo += allchars[Math.floor(Math.random() * allchars.length)];
  }
  

  passwordBoxOne.value = passwordOne;
  passwordBoxTwo.value = passwordTwo;
}

function copyPasswordOne() {
  passwordBoxOne.select();
  navigator.clipboard.writeText(passwordBoxOne.value);
}

function copyPasswordTwo() {
  passwordBoxTwo.select();
  navigator.clipboard.writeText(passwordBoxTwo.value);
}

function updatePassIndicator(){
  if(lengthSlider.value<=8){
    passIndicator.id="weak";
  }else if(lengthSlider.value<=24){
    passIndicator.id = "medium";
  }else{
    passIndicator.id="strong";
  }
}