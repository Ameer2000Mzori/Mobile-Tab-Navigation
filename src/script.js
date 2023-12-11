// selecting our elements
var lisEl = document.querySelectorAll("li");
var screenImg = document.getElementsByClassName("screen-Img")[0];
// our gelobal varibales
var pageOne = false;
var pageTwo = false;
var pageThree = false;
var pageFour = false;
// our images :
// 1 https://images.unsplash.com/photo-1682905926517-6be3768e29f0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
// functions
var changeScreen = function (indexNum, el) {
    console.log(indexNum);
    if (indexNum === 1) {
        if (pageOne) {
            console.log("page one is already true");
        }
        else {
            // set false to each page has removed / add true to page clicked
            pageOne = true;
            pageTwo = false;
            pageThree = false;
            pageFour = false;
            screenImg.classList.remove("active");
            for (var i = 0; i < lisEl.length; i++)
                lisEl.forEach(function (el) {
                    el.classList.remove("active");
                });
            // set time out for effects to run on page
            setTimeout(function () {
                screenImg.src =
                    "https://images.unsplash.com/photo-1682905926517-6be3768e29f0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
                console.log("just made page one true");
                screenImg.classList.add("active");
                el.classList.add("active");
            }, 200);
        }
    }
    else if (indexNum === 2) {
        if (pageTwo) {
            console.log("page one is already true");
        }
        else {
            // set false to each page has removed / add true to page clicked
            pageOne = false;
            pageTwo = true;
            pageThree = false;
            pageFour = false;
            screenImg.classList.remove("active");
            for (var i = 0; i < lisEl.length; i++)
                lisEl.forEach(function (el) {
                    el.classList.remove("active");
                });
            // set time out for effects to run on page
            setTimeout(function () {
                screenImg.src =
                    "https://images.unsplash.com/photo-1701743801555-5e4a58185b24?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
                console.log("just made page one true");
                screenImg.classList.add("active");
                el.classList.add("active");
            }, 200);
        }
        console.log("wow 2 ");
    }
    else if (indexNum === 3) {
        if (pageThree) {
            console.log("page one is already true");
        }
        else {
            // set false to each page has removed / add true to page clicked
            pageOne = false;
            pageTwo = false;
            pageThree = true;
            pageFour = false;
            screenImg.classList.remove("active");
            for (var i = 0; i < lisEl.length; i++)
                lisEl.forEach(function (el) {
                    el.classList.remove("active");
                });
            // set time out for effects to run on page
            setTimeout(function () {
                screenImg.src =
                    "https://images.unsplash.com/photo-1702140944199-5c321e5d5798?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
                console.log("just made page one true");
                screenImg.classList.add("active");
                el.classList.add("active");
            }, 200);
        }
    }
    else if (indexNum === 4) {
        if (pageFour) {
            console.log("page one is already true");
        }
        else {
            // set false to each page has removed / add true to page clicked
            pageOne = false;
            pageTwo = false;
            pageThree = false;
            pageFour = true;
            screenImg.classList.remove("active");
            for (var i = 0; i < lisEl.length; i++)
                lisEl.forEach(function (el) {
                    el.classList.remove("active");
                });
            // set time out for effects to run on page
            setTimeout(function () {
                screenImg.src =
                    "https://images.unsplash.com/photo-1702157449974-7bf9e33409c5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
                console.log("just made page one true");
                screenImg.classList.add("active");
                el.classList.add("active");
            }, 200);
        }
    }
    else {
        console.log("wow else");
    }
};
// event lisnters
lisEl.forEach(function (el, indx) {
    el.addEventListener("click", function (e) {
        var indexNum = indx + 1;
        changeScreen(indexNum, el);
    });
});
// when windows loads
window.addEventListener("load", function () {
    // set page one true
    pageOne = true;
    // set time out for effects to run on page
    setTimeout(function () {
        screenImg.src =
            "https://images.unsplash.com/photo-1682905926517-6be3768e29f0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        console.log("just made page one true");
        screenImg.classList.add("active");
        lisEl[0].classList.add("active");
    }, 200);
});
