// selecting our elements
const lisEl = document.querySelectorAll("li");
const screenImg = document.getElementsByClassName("screen-Img")[0];

// our gelobal varibales
let pageOne = true;
let pageTwo = false;
let pageThree = false;
let pageFour = false;

// functions
const changeScreen = (indexNum): void => {
  console.log(indexNum);
  if (indexNum === 1) {
    if (pageOne) {
      console.log("page one is already true");
    } else {
      pageOne = true;
      console.log("just made page one true");
    }
  } else if (indexNum === 2) {
    console.log("wow 2 ");
  } else if (indexNum === 3) {
    console.log("wow 3 ");
  } else if (indexNum === 4) {
    console.log("wow 4 ");
  } else {
    console.log("wow else");
  }
};

// event lisnters
lisEl.forEach((el, indx) => {
  el.addEventListener("click", (e) => {
    el.classList.add("active");
    let indexNum = indx + 1;
    changeScreen(indexNum);
  });
});
