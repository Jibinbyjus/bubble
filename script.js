var timer = 30;
var score = 0;
var rn = 0;


function increasescore(){
  score += 10; 
  document.querySelector("#scoreset").textContent = score;
}

function getnewhit(){
    rn =  Math.floor(Math.random()*10)
   document.querySelector("#hitset").textContent = rn;
}

function makebubble() {
  var bubble1 = "";
  var colors = ["green", "red", "purple","lightgreen","orange"]; 

  for (var i = 1; i <= 70; i++) {  
     var rtn = Math.floor(Math.random() * 10); 
     var color = colors[Math.floor(Math.random() * colors.length)]; 
     bubble1 += `<div class="circle" style="background-color: ${color};">${rtn}</div>`; 
  }

  document.querySelector("#game-area").innerHTML = bubble1;  
}


function runtime(){
   var reset = setInterval(function(){
    if(timer>0){
    timer--;
    
    document.querySelector("#timer").textContent = timer;}
  else{
    clearInterval(reset);
    document.querySelector("#game-area").innerHTML = `<h1> Game Over! Score: ${score} <h1>`;
  
    

  }
},1000);
function adjustBubbleSize() {
  const screenWidth = window.innerWidth;
  const bubbles = document.querySelectorAll(".circle");

  
  let size;
  if (screenWidth > 1200) {
     size = "50px";
  } else if (screenWidth > 800) {
     size = "40px";
  } else {
     size = "30px";
  }

  
  bubbles.forEach(bubble => {
     bubble.style.width = size;
     bubble.style.height = size;
     bubble.style.fontSize = parseInt(size) / 2 + "px";
     bubble.style.lineHeight = size;
  });
}

window.addEventListener("resize", adjustBubbleSize);


adjustBubbleSize();


}


document.querySelector("#game-area")
.addEventListener("click",function(details){
    var clicknumber = (Number(details.target.textContent));
    if(clicknumber=== rn){
      increasescore();
      makebubble();
      getnewhit();
    }
});


makebubble();
runtime();
getnewhit();


