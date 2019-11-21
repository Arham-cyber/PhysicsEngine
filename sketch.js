const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var ball_options ={
        restitution : 1
    }
ball = Bodies.circle(400, 200,20, ball_options)
    ground = Bodies.rectangle(400,390,800,20,ground_options);
    World.add(world,ground);
    World.add(world,ball);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    ellipseMode(RADIUS)
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20);
    ellipse(ball.position.x,ball.position.y,20)
}