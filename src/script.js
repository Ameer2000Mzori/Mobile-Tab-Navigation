// selecting our elements
var lisEl = document.querySelectorAll("li");
var screenImg = document.getElementsByClassName("screen-Img")[0];
// our gelobal varibales
// functions
var changeScreen = function (indexNum) {
    console.log(indexNum);
    if (indexNum === 1) {
        console.log("wow 1 ");
    }
    else if (indexNum === 2) {
        console.log("wow 2 ");
    }
    else if (indexNum === 3) {
        console.log("wow 3 ");
    }
    else if (indexNum === 4) {
        console.log("wow 4 ");
    }
    else {
        console.log("wow else");
    }
};
// event lisnters
lisEl.forEach(function (el, indx) {
    el.addEventListener("click", function (e) {
        var indexNum = indx + 1;
        changeScreen(indexNum);
    });
});
