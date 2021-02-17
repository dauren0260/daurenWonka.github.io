function hasClass(obj,cn){
    var reg = new RegExp("\\b"+cn+"\\b");
    return reg.test(obj.className);
}

function addClass(obj, cn){
    if(!hasClass(obj,cn)){
        obj.className += " "+cn;
    }   
}

function removeClass(obj,cn){
    var reg = new RegExp("\\b"+cn+"\\b");
    obj.className = obj.className.replace(reg,"");
}


function replaceClass(obj,cn1,cn2){
    if(hasClass(obj,cn1)){
        removeClass(obj,cn1)
        addClass(obj,cn2)
    }else{
        removeClass(obj,cn2)
        addClass(obj,cn1)

    }
}

function toggleClass(obj,cn){
    if(hasClass(obj,cn)){
        removeClass(obj,cn);
    }else{
        addClass(obj,cn);
    }
}

