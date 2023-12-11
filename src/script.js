// selecting our elements
var lisEl = document.querySelectorAll("li");
var screenImg = document.getElementsByClassName("screen-Img")[0];
// our gelobal varibales
// functions
var changeScreen = function (indexNum) {
    console.log(indexNum);
};
// event lisnters
lisEl.forEach(function (el, indx) {
    el.addEventListener("click", function (e) {
        var indexNum = indx + 1;
        changeScreen(indexNum);
    });
});
