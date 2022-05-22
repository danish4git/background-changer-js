var colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "black",
  "orange",
  "olive",

  "pink",
  "brown",
];

var btn = document.getElementById("btn");
var bd = document.querySelector("body");
btn.addEventListener("click", changecolor);

function changecolor() {
  setInterval(() => {
    let col = Math.floor(Math.random() * colors.length);

    bd.style.backgroundColor = colors[col];
  }, 2000);
}
