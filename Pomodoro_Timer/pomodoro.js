const tabs = document.querySelector(".container");
const btns = document.querySelectorAll(".choose");
const clocks = document.querySelectorAll(".clk");
tabs.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("live");
    });
    e.target.classList.add("live");
    // hide other articles
    clocks.forEach(function (clock) {
      clock.classList.remove("live");
    });
    const element = document.getElementById(id);
    element.classList.add("live");
  }
});

const start1=document.getElementById("start");
const stop1=document.getElementById("stop");
const reset1=document.getElementById("reset");
var timer1=document.querySelectorAll(".timer");
let interval;
let timeleft=1500;

function updateTimer(){
    let minutes=Math.floor(timeleft/60);
    let seconds = timeleft%60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    timer1.innerHTML=formattedTime;
}
function startTimer(){
    interval=setInterval(()=>{
        timeleft--;
        updateTimer();
        if(timeleft===0){
            clearInterval(interval);
            alert("Time's uppp!!!");
            timeleft=1500;
            updateTimer();
        }
    },1000);
}
function stopTimer(){
    clearInterval(interval);
}
function resetTimer(){
    clearInterval(interval);
    timeleft=1500;
    updateTimer();
}
start1.addEventListener("click",startTimer);
stop1.addEventListener("click",stopTimer);
reset1.addEventListener("click",resetTimer);
