
console.log(Magic8ball)
console.log("hello world")

function ball() {
  let eightball = document.getElementById("eight-ball");

//let button = document.querySelector("button");
//let answer = document.querySelector("#answer");

//button.addEventListener("click", function() {



}

function response() {
  let list = [
    "I don't think so!",
    "Are you crazy!",
    "Like really!",
    "You go girl"

  ];
  let number = Math.floor(Math.random()*4);
  document.getElementById("response").innerHTML = list[number];
}

console.log (Magic8ball)