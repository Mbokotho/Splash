var calculateBtn = document.querySelector(".calculateBtn");

var numOfFamily = document.querySelector(".familyValue");

var morningValue = document.querySelector(".minValues");

var afternoonValue = document.querySelector(".maxValues")

var displayValues = document.querySelector(".displayValues")
var CalculateBtnClick = findOurWater();

function displayElement() {

    afternoonValue.innerHTML = CalculateBtnClick.maxWidth();
    morningValue.innerHTML = CalculateBtnClick.minWidth();
    numOfFamily.innerHTML = CalculateBtnClick.findingTheValues();
    displayElement.innerHTML = CalculateBtnClick.finalProduct()

}
calculateBtn.addEventListener('click', function () {
  displayElement();
});