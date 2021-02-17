
var bySubway = document.getElementById("bySubway");
var detailSubway = document.getElementById("detailSubway");
var subwayIcon = bySubway.children[1];


var byBus = document.getElementById("byBus");
var detailBus = document.getElementById("detailBus");
var busIcon = byBus.children[1];


var byCar = document.getElementById("byCar");
var detailCar = document.getElementById("detailCar");
var carIcon = byCar.children[1];


bySubway.addEventListener("click",function(){

    toggleClass(detailSubway,"open")
    replaceClass(subwayIcon, "fas fa-angle-up" , "fas fa-angle-down")

},false)

byBus.addEventListener("click",function(){

    toggleClass(detailBus,"open")
    replaceClass(busIcon, "fas fa-angle-down", "fas fa-angle-up")

},false)

byCar.addEventListener("click",function(){

    toggleClass(detailCar,"open")
    replaceClass(carIcon, "fas fa-angle-down", "fas fa-angle-up")

},false)

