var fr = 5;
var bgm;
var SoundEffect;
var randomSound;

function preload(){
  var starSoundA;
  var starSoundB;
  var starSoundC;
  var starSoundD;
  var starSoundE;

  starSoundA = loadSound("sounds/SoundEffect/A.wav");
  starSoundB = loadSound("sounds/SoundEffect/B.wav");
  starSoundC = loadSound("sounds/SoundEffect/C.wav");
  starSoundD = loadSound("sounds/SoundEffect/D.wav");
  starSoundE = loadSound("sounds/SoundEffect/E.wav");
  SoundEffect = [starSoundA,starSoundB,starSoundC,starSoundD,starSoundE];
};


window.addEventListener("load", button);

function button(){
  const sendButton = document.getElementById("send");
  sendButton.addEventListener("click",addStar);
};

var Stars = [];

function addStar(){
  var text = document.getElementById("typing").value;

  console.log(text.length);
  for (var i=0; i<text.length; i++) {
    Stars.push(new star());
  };
  randomSound=Math.floor(random()*SoundEffect.length);
  SoundEffect[randomSound].play();
};

function loaded(){
  bgm.play();
}

function setup() {
  bgm = loadSound("sounds/star.mp3", loaded);


  createCanvas(1660, 500, WEBGL);
  frameRate(fr)
  addStar()
};

function draw() {
  background(0);

  console.log(Stars);
  for (var i=0; i<Stars.length; i++) {

    Stars[i].display();

  }
  ambientLight(100);
  noStroke();
  directionalLight(255, 255, 255, 0,  0, 1-2*random());
  push();

};

function star(){

  this.x = 1400*(-0.5+random());
  this.y = 500*(-0.5+random());
  this.diameter = 1*random();
  this.display = function() {
    push();
    translate(this.x, this.y, 0);
    sphere(this.diameter);
    pop();
  };
}
