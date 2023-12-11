// selecting our elements
var lisEl = document.querySelectorAll("li");
var screenImg = document.getElementsByClassName("screen-Img")[0];
// our gelobal varibales
// functions
// event lisnters
lisEl.forEach(function (el, indx) {
    el.addEventListener("click", function (e) {
        console.log(e, indx + 1);
    });
});
