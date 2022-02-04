const background = document.getElementById("title-container");
const title = document.getElementById("maintitle");

title.onmouseenter = function () {
  background.style.backgroundImage = "url(IMG.JPG)";
};

title.onmouseleave = function () {
  background.style.backgroundImage = "url(main.png)";
};
