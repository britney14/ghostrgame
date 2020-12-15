var tower, towerImage, door, doorGroup, climber, climberImage, climberGroup, ghost, ghostImage,invisbleBar,invisibleBarGroup;
var gameState="play"
var spookySound
function preload(){
  towerImage=loadImage("tower.png")
 doorImage=loadImage("door.png")
  climberImage=loadImage("climber.png")
  ghostImage=loadImage("ghost-standing.png")
  spookySound=loadSound("spooky.wav")
}

function setup(){
createCanvas(600,600) 
  tower=createSprite(300,300)
  tower.addImage( "tower",towerImage)
  tower.velocityY=1
  ghost=createSprite(100,100,50,50)
  ghost.scale=0.5
  
  ghost.addImage("ghost",ghostImage)
 doorGroup=new Group() 
  climberGroup= new Group()
  invisbleBarGroup= new Group()
  spookySound.loop()
}
function draw(){
background(0)
  
  
  if(gameState=="play"){
    
  
  if(tower.y>400 ){
    tower.y=300
}
  if (keyDown("right_arrow")){
    ghost.x= ghost.x +3
  }
    if (keyDown("left_arrow")){
    ghost.x= ghost.x -3
  }
    if (keyDown("space")){
    ghost.velocityY=-5         
      
  }
  ghost.velocityY= ghost.velocityY+0.8
  
  if (climberGroup.isTouching(ghost)){
    ghost.velocityY=0 
  }
  if (invisbleBarGroup.isTouching(ghost) ||ghost.y >600) {
      ghost.destroy()
    gameState="end"
      }
  spawndoors()
  
  drawSprites()
  }
  if (gameState=="end"){
    stroke("red")
    fill("red")
   textSize(35)
    text("gameOver",230,230)
  }
  
  
  
  
}
function spawndoors(){
  if(frameCount%240==0){
    door=createSprite(200,-50)
    door.addImage("doors",doorImage)
    climber=createSprite(200,10)
    climber.depth=door.depth
   climber.addImage("climber",climberImage)
    invisbleBar=createSprite(200,15)
    invisbleBar.width=climber.width
    invisbleBar.height=2
    invisbleBar.debug=true
    
    
   ghost.depth=door.depth 
   ghost.depth=ghost.depth+1 
    
    door.x= Math.round(random(120,400))
    door.velocityY=1
      invisbleBar.x=door.x
    invisbleBar.velocityY=1
    climber.x=door.x
    climber.velocityY=1
    climber.lifetime=800
    door.lifetime=800
    doorGroup.add(door)
    climberGroup.add(climber)
    invisbleBarGroup.add(invisbleBar)
  }
 
}