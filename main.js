var income = document.querySelector('.income');
var textVal = income.innerHTML;
var areaDrop = document.querySelector('#areaDrop');
var compiledTemplate = Handlebars.compile(areaDrop.innerHTML);
var dropDisplay = document.querySelector('.dropDisplay');
var subButn = document.querySelector('.subButn');

var results = compiledTemplate({
    dropDownArea: jumoData
});
dropDisplay.innerHTML = results;




subButn.addEventListener("click", function(){
alert("I am a button");
});
