var morningreading = document.querySelector('.morning');
var numofppl = document.querySelector('.People');
var afternoonreading = document.querySelector('.Afternoon ');
var display = document.querySelector('.water');
var updateSettingsBtn = document.querySelector('.updateSettingsBtn');




 var familyWaterTotal = 0;


function splash() {
if (numofppl.value = 8) {
    familyWaterTotal = 400;
}
if (numofppl.value  = 7) {
    familyWaterTotal = 350;
}
if (numofppl.value  = 6) {
    familyWaterTotal = 300;
}
if (numofppl.value  = 5) {
    familyWaterTotal = 250;
}
if (numofppl.value  =4) {
    familyWaterTotal = 200;
}
if (numofppl.value  = 3) {
    familyWaterTotal = 150;
}
if (numofppl.value  = 2) {
    familyWaterTotal = 100;
}
if (numofppl.value  = 1) {
    familyWaterTotal = 50;
}

waterUsed = afternoonreading.value - morningreading.value;
display.innerHTML = familyWaterTotal - waterUsed
}

updateSettingsBtn .addEventListener('click', splash);
