var product = document.getElementById("product");
var subProduct = document.getElementById("subProduct");

var gifts = document.getElementById("gifts");
var newArrivals = document.getElementById("newArrivals");
var allChoco = document.getElementById("allChoco");

var productIcon = product.children[0];

var account = document.getElementById("account");
var member = document.getElementById("member");
var customer = document.getElementById("customer");
var accountIcon = account.children[0];

var chocolate = document.getElementById("chocolate");

var chocoIcon = chocolate.children[0];
var chocoList = document.getElementById("chocoList");

var giftsList = document.getElementById("giftsList");
var giftsIcon = gifts.children[0];


var memberList = document.getElementById("memberList");
var customerList = document.getElementById("customerList");

var memberIcon = member.children[0];
var customerIcon = customer.children[0];


var pixel_desk = document.body.clientWidth;




function mobileMenu(){

    var hamburgerIcon = document.getElementById("hamburgerIcon");
    var menu = document.getElementById("menu");

    hamburgerIcon.addEventListener("click", function () {
        toggleClass(this, "on");
        toggleClass(menu, "open");
    }, false)


    product.addEventListener("click", function (e) {
        e.preventDefault();
        toggleClass(chocolate, "open");
        toggleClass(gifts, "open");
        toggleClass(newArrivals, "open");
        toggleClass(allChoco, "open");
        toggleClass(productIcon, "open");
        replaceClass(productIcon, "fas fa-angle-down", "fas fa-angle-up")

        chocolate.addEventListener("click", function () {

            toggleClass(chocoList, "open");
            replaceClass(chocoIcon, "fas fa-angle-down", "fas fa-angle-up")

        }, false)

        if (!hasClass(chocolate, open)) {
            removeClass(chocoList, "open")
            removeClass(chocoIcon, "fas fa-angle-up")
            addClass(chocoIcon, "fas fa-angle-down")
        }

        gifts.addEventListener("click", function () {
            toggleClass(giftsList, "open");
            replaceClass(giftsIcon, "fas fa-angle-down", "fas fa-angle-up")
        }, false)

        if (!hasClass(gifts, open)) {
            removeClass(giftsList, "open")
            removeClass(giftsIcon, "fas fa-angle-up")
            addClass(giftsIcon, "fas fa-angle-down")
        }
    }, false)

    account.addEventListener("click", function (e) {
        e.preventDefault();

        toggleClass(member, "open");
        toggleClass(customer, "open");
        replaceClass(accountIcon, "fas fa-angle-down", "fas fa-angle-up")

        member.addEventListener("click", function (e) {
            e.preventDefault();

            toggleClass(memberList, "open")
            replaceClass(memberIcon, "fas fa-angle-down", "fas fa-angle-up")

        }, false)

        if (!hasClass(member, open)) {
            removeClass(memberList, "open")
            removeClass(memberIcon, "fas fa-angle-up")
            addClass(memberIcon, "fas fa-angle-down")
        }

        customer.addEventListener("click", function (e) {
            e.preventDefault();

            toggleClass(customerList, "open")
            replaceClass(customerIcon, "fas fa-angle-down", "fas fa-angle-up")

        }, false)

        if (!hasClass(customer, open)) {
            removeClass(customerList, "open")
            removeClass(customerIcon, "fas fa-angle-up")
            addClass(customerIcon, "fas fa-angle-down")
        }
    }, false)
}

    



if (pixel_desk <= 1200) {
    mobileMenu();
} else {
    window.addEventListener("resize", mobileMenu);
}


// footer to-top
$("#to_top").click(function(){
    // 總距離
    var $page = $("html,body");
    var distance = $("html").scrollTop()+$("body").scrollTop();
    // 總時間
    var time = 1500;
    // 間隔時間
    var intervalTime = 15;
    var itemDistance = distance/(time/intervalTime);
    // 使用循環定時器不斷滾動
    var intervalId = setInterval(function(){
        distance-=itemDistance;
        // 到達頂部，停止定時器
        if(distance<=0){
            distance = 0; //修正
            clearInterval(intervalId);
        }
        $page.scrollTop(distance);
    }, intervalTime);

})