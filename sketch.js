const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
var drops = [];
var maxdrops = 100;
thunderframecount = 0;
var thunder;
var thunderCreatedFrame;
var thundergrp;
function preload(){
    T1 = loadImage("images/thunderbolt/1.png");
    T2 = loadImage("images/thunderbolt/2.png");
    T3 = loadImage("images/thunderbolt/3.png");
    T4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;
   
 createCanvas(800,400);
// thundergrp = new Group();
   umbrella = new Umbrella(100,300);
   if(frameCount % 500 === 0){ 
   for(var i=0; i<maxdrops; i++){
   drops.push(new Rain(random(0,800),random(0,800)));
   }
   }
}

function draw(){
    Engine.update(engine); 

    background(0);
    
    umbrella.display();
    for( var i=0;i<maxdrops;i++){
    drops[i].display();
    drops[i].update();
    }  
    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(T1);
            break;
            case 2: thunder.addImage(T2);
            break; 
            case 3: thunder.addImage(T3);
            break;
            case 4: thunder.addImage(T4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    
    
drawSprites(); 


} 
