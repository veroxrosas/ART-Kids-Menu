 var song; 
let bg 
let color = '#fae'
function preload () {
   bg = loadImage('menu.png');
 song = loadSound("Piano.mp3");


  
  }






function setup() {
 createCanvas(2104, 1080);
  background(bg);
  
  alert('CLICK ON THE CRAYONS TO CHANGE THE COLOR 🖍');
  alert ('PRESS "S" ON YOUR KEYBOARD TO SAVE YOUR MENU AS AN IMAGE ⌨️😄');
  alert ('🔊BE CAREFUL WITH THE VOLUME!!!🎵');
  song.play ();
}

  

function draw() {
  stroke(color);
  strokeWeight(4);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);


  }
}



document.querySelector('#greencrayon')
.addEventListener('click', function (){
 color = 'green'                
                  })
document.querySelector('#bluecrayon')
.addEventListener('click', function (){
 color = ('rgb(30, 84, 166)');                
                  })
document.querySelector('#pinkcrayon')
.addEventListener('click', function (){
 color = ('rgb(240, 0, 120)');                
                  })
document.querySelector('#orangecrayon')
.addEventListener('click', function (){
 color = ('rgb(251, 92, 8)');                
                  })
//htmlpage
function keyTyped() {
    
  if (key === 's') {
    
  saveCanvas('mymenu', 'png')
  
}
}

