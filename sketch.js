var gameState = "PLAY"
function preload(){
sharkImg = loadImage("shark.png")
fishImg = loadImage("fish.png")
plasticImg = loadImage("plastic.png")
bgImg = loadImage("background.png")
gameOverImg = loadImage("gameover.png")
}

function setup() {
 createCanvas(600, 400)
 gameOver = createSprite(300, 200, 40, 40) 
 gameOver.addImage(gameOverImg)
 shark = createSprite(475, 200, 40, 40)
 shark.addImage(sharkImg)
 shark.scale = 0.8
 fish = createSprite(200, 200, 40, 40)
 fish.addImage(fishImg)
 fish.scale = 0.4
 plasticg = createGroup()
}

function draw(){
    background(bgImg)
    plastics() 
    fish.velocityY = 0
    if(gameState === "PLAY"){
        gameOver.visible = false
        }
    if (keyDown("UP_ARROW")){
        fish.velocityY = -6
       }
    if (keyDown("DOWN_ARROW")){
        fish.velocityY = 6
       }
    if (fish.isTouching(plasticg)){
        gameState = "END"
      }
    if (gameState === "END"){
        gameOver.visible = true
        shark.depth = gameOver.depth - 1
        gameOver.depth = fish.depth + 1
        gameOver.depth = plastic.depth + 1
        plasticg.setVelocityXEach(0)
        plasticg.setLifetimeEach(-5)
        fish.velocityY = 0
      }
    drawSprites()
}

function plastics(){
    if (frameCount%70===0){
        plastic = createSprite(-100, random(50, 350))
        plastic.velocityX = 3
        plastic.scale = 0.4
        plastic.addImage(plasticImg)
        plasticg.add(plastic)
        shark.depth = plastic.depth + 1
    }
}