const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var blower,handle;
var button;
var ball;

function setup() {
  createCanvas(800,700);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world

  button = createButton("Click To Blow")
  button.position(width/2,height - 100);
  button.class("blowButton");
  button.mousePressed(blow)

  
  handle = new Blower(400,300,250,10);
  blower = new Blower(500,270,100,150);
  ball = new Ball(400,150,20)

}

function draw() {
  background("grey"); 
  
  Engine.update(engine);

  handle.show();
  blower.show();
  ball.display();
   

}

function blow(){

  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:-10});
}