const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  boogie1 = new Boogie(50,170,50,50);
  boogie2 = new Boogie(150,170,50,50);
  boogie3 = new Boogie(250,170,50,50);
  boogie4 = new Boogie(350,170,50,50);
  boogie5 = new Boogie(450,170,50,50);
  boogie6 = new Boogie(550,170,50,50);

  rock = new Rock(1100,200,100,100);

  chain1 = new Chain(boogie1.body,boogie2.body);
  chain2 = new Chain(boogie2.body,boogie3.body);
  chain3 = new Chain(boogie3.body,boogie4.body);
  chain4 = new Chain(boogie4.body,boogie5.body);
  chain5 = new Chain(boogie5.body,boogie6.body);
}

function draw() {
  background(bg);  
  Engine.update(myEngine);


  ground.show()
  boogie1.show()
  boogie2.show()
  boogie3.show()
  boogie4.show()
  boogie5.show()
  boogie6.show()

  rock.show()

  chain1.show()
  chain2.show()
  chain3.show()
  chain4.show()
  chain5.show()
    
var collision = Matter.SAT.collides(boogie6.body,rock.body)
if(collision.collided){
  flag = 1;
}
if(flag === 1){
  textSize(30)
  stroke(3)
  fill("blue")
  text("Crash!", 500, 200)
  crashSound.play()
}
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(boogie6.body, {x:boogie6.body.position.x, y:boogie6.body.position.y},{x:0.5,y:0})
    trainSound.play()
  }
}