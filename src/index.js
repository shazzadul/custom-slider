// For Image 1

var firstButton = document.querySelector("#clickbtn1");
var secondButton = document.querySelector("#clickbtn2");
var thirdButton = document.querySelector("#clickbtn3");

var firstImage = document.getElementById("img1");
var secondImage = document.getElementById("img2");
var thirdImage = document.getElementById("img3");

firstButton.addEventListener("click", function() {
  firstImage.setAttribute("style", "background:orange", "display:block");
  secondImage.setAttribute("style", "display:none");
  thirdImage.setAttribute("style", "display:none");
});

// For Image 2
secondButton.addEventListener("click", function() {
  secondImage.setAttribute("style", "background:purple", "display:block");
  firstImage.setAttribute("style", "display:none");
  thirdImage.setAttribute("style", "display:none");
});

// For Image 3
thirdButton.addEventListener("click", function() {
  thirdImage.setAttribute("style", "background:blue", "display:block");
  firstImage.setAttribute("style", "display:none");
});
