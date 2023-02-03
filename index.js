
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
const audio = new Audio("bock.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});
let count = 0
 console.log(saveEl)

function increment() {
 
    count += 1
    countEl.textContent = count
}


function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(count)
    countEl.textContent = 0
    count = 0
}

function xTen() {
  count +=  10
  countEl.textContent = count 





}


let saveBtn = document.getElementById("save")





  
