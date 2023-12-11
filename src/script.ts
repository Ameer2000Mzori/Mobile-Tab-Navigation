// selecting our elements
const lisEl = document.querySelectorAll("li");
const screenImg = document.getElementsByClassName("screen-Img")[0];

// our gelobal varibales

// functions

// event lisnters
lisEl.forEach((el, indx) => {
  el.addEventListener("click", (e) => {
    console.log(e, indx + 1);
  });
});
