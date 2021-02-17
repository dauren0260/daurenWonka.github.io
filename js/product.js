
// product.html
var tabChoco = document.getElementById("tabChoco");
var tabGift = document.getElementById("tabGift");
var chocoContent = document.getElementById("chocoContent");
var giftContent = document.getElementById("giftContent");


tabChoco.onclick=function(){
    giftContent.style.display="none";
    tabGift.style.backgroundColor="white";
    chocoContent.style.display="block";
    tabChoco.style.backgroundColor="#fbdfb7";

    tabGift.style.borderColor="transparent";
    tabChoco.style.borderColor="#681116";
}

tabGift.onclick=function(){
    chocoContent.style.display="none";
    tabChoco.style.backgroundColor="white";
    giftContent.style.display="block";
    tabGift.style.backgroundColor="#fbdfb7";


    tabChoco.style.borderColor="transparent";
    tabGift.style.borderColor="#681116";
}


