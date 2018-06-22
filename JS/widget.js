var morningreading = document.querySelector('.morning');
var numofppl = document.querySelector('.People');
var afternoonreading = document.querySelector('.Afternoon ');
var display = document.querySelector('.water');
var updateSettingsBtn = document.querySelector('.updateSettingsBtn');




 //var familyWaterTotal = 0;


function splash() {
    var familyWaterTotal = Number(numofppl.value) * 50;
    var waterUsed = Number(afternoonreading.value) - Number(morningreading.value);
   var calculating = familyWaterTotal - waterUsed;

    var usedPercentage = waterUsed/familyWaterTotal;

    if (usedPercentage <= 0.20){
        display.innerHTML = "you have saved " + calculating + " Liters of water";
    }
    else if (usedPercentage >= 0.20 && usedPercentage <= 0.60) {

        display.innerHTML = "you have saved " + calculating + " Liters of water";
    }
    else {
        display.innerHTML = "you have used " + calculating + " Liters of water";
    }
    
}

updateSettingsBtn.addEventListener('click', function(){
    splash();
});
