// carousel
var imgList = document.getElementById("imgList");
var img = imgList.getElementsByTagName("img")[0];
var imgArr = ["./image/index/banner1.jpg","./image/index/banner2.jpg","./image/index/banner3.jpg"];


var index = 0;
var indicator = document.getElementById("indicator");

var dotA = indicator.getElementsByTagName("a");
dotA[index].style.backgroundColor = "#681116";


for(var i=0; i<dotA.length; i++){
    dotA[i].num = i;

    dotA[i].onclick = function(){
        index = this.num;

        img.src = imgArr[index];

        setA();
    }

}

function setA(){

    for(var i=0; i<dotA.length; i++){
        dotA[i].style.backgroundColor = "#ede2dc";
    }

    dotA[index].style.backgroundColor = "#681116";
}

// autochange carousel
function autochange(){

    index++

    for(var i=0; i<dotA.length; i++){
        dotA[i].style.backgroundColor = "#ede2dc";
    }    
    
    if(index >= imgArr.length){
        index = 0;
    }
    
    img.setAttribute("src",imgArr[index]);
    dotA[index].style.backgroundColor = "#681116";

}

setInterval(autochange, 2000);


// banner p  --author:Gregory Schier
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };






// product
var paletCollect = document.getElementById("paletCollect");
var truffleCollect = document.getElementById("truffleCollect");
var pralineCollect = document.getElementById("pralineCollect");
var biscuitCollect = document.getElementById("biscuitCollect");
var barCollect = document.getElementById("barCollect");
var specialCollect = document.getElementById("specialCollect");

var demoArea = document.getElementById("demoArea");

var demoArr = ["./image/index/palet-demo.png","./image/index/truffles-demo.png","./image/index/praline-demo.png","./image/index/biscuit-demo.png","./image/index/bar-new.png","./image/index/nama.png"]


paletCollect.addEventListener("mouseover",function(){
    demoArea.setAttribute("src",demoArr[0]);
},false)

truffleCollect.addEventListener("mouseover",function(){
    demoArea.setAttribute("src",demoArr[1]);
},false)

pralineCollect.addEventListener("mouseover",function(){
    demoArea.setAttribute("src",demoArr[2]);
},false)

biscuitCollect.addEventListener("mouseover",function(){
    demoArea.setAttribute("src",demoArr[3]);
},false)

barCollect.addEventListener("mouseover",function(){
    demoArea.setAttribute("src",demoArr[4]);
},false)

specialCollect.addEventListener("mouseover",function(){
    
    demoArea.setAttribute("src",demoArr[5]);
},false)



// new arrivals
var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var fourth = document.getElementById("fourth");
var fifth = document.getElementById("fifth");
var newContainer = document.getElementById("newContainer");

var nextBtn = document.getElementById("next");

var productArr = [first,second,third,fourth,fifth];

var indexNew = 0

nextBtn.addEventListener("click",function(){
    
    newContainer.appendChild(productArr[indexNew])
    
    indexNew++; 

    if(indexNew > 4){
        indexNew = 0;
    }
    

},false)



// factory
window.addEventListener("load", function () {

    var month = document.getElementById("month");
    var day = document.getElementById("day");
    var hour = document.getElementById("hour");
    var min = document.getElementById("min");
    var sec = document.getElementById("sec");
    var status = document.getElementById("status");
    function refreshTime(){
        var time = new Date();
        
        var monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var monText = time.getMonth();

        month.innerText = monthArr[monText];

        day.innerText = time.getDate();

        var hourText = time.getHours();

        hour.innerText = hourText;

        min.innerText = time.getMinutes();


        var secText = time.getSeconds();
        sec.textContent = secText;

        if(hourText > 18 || hourText < 9){
            status.innerText = "We are closed.";
        }

    }
    setInterval(refreshTime,500);
});