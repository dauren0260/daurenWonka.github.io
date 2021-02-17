var nutrition = document.getElementById("nutrition");
var nutritionDetail = document.getElementById("nutritionDetail");
var nutritionIcon = nutrition.children[1];


var ingredient = document.getElementById("ingredient");
var ingredientDetail = document.getElementById("ingredientDetail");
var ingredientIcon = ingredient.children[1];


nutrition.addEventListener("click",function(){

    toggleClass(nutritionDetail,"open")
    replaceClass(nutritionIcon, "fas fa-angle-down", "fas fa-angle-up")


},false)

ingredient.addEventListener("click",function(){

    toggleClass(ingredientDetail,"open")
    replaceClass(ingredientIcon, "fas fa-angle-down", "fas fa-angle-up")


},false)


// add button
var minus = document.getElementById("minus");
var plus = document.getElementById("plus");
var number = document.getElementById("number");


plus.addEventListener("click",function(){

    var curNumber = number.value;

    number.value = ++curNumber;

},false)


minus.addEventListener("click",function(){
    
    var curNumber = number.value;

    var minusNum = --curNumber;

    if(minusNum <= 0){
        minusNum = 0;
    }

    number.value = minusNum;

},false)