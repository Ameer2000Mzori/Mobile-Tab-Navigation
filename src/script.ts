// selecting our elements
const lisEl = document.querySelectorAll("li");
const screenImg: any = document.getElementsByClassName("screen-Img")[0];

// our gelobal varibales
let pageOne = false;
let pageTwo = false;
let pageThree = false;
let pageFour = false;

// our images :

// 1 https://images.unsplash.com/photo-1682905926517-6be3768e29f0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

// functions
const changeScreen = (indexNum): void => {
  console.log(indexNum);
  if (indexNum === 1) {
    if (pageOne) {
      console.log("page one is already true");
    } else {
      pageOne = true;
      screenImg.src =
        "https://images.unsplash.com/photo-1682905926517-6be3768e29f0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      console.log("just made page one true");
      screenImg.classList.add("active");
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

// when windows loads
changeScreen(1);
