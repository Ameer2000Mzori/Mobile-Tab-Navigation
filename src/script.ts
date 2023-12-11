// selecting our elements
const lisEl = document.querySelectorAll("li");
const screenImg = document.getElementsByClassName("screen-Img")[0];

// our gelobal varibales

// functions
const changeScreen = (indexNum): void => {
  console.log(indexNum);
};

// event lisnters
lisEl.forEach((el, indx) => {
  el.addEventListener("click", (e) => {
    let indexNum = indx + 1;
    changeScreen(indexNum);
  });
});
