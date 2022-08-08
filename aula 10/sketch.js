var marilia
var gabriel
var anna
var henrique


function setup() {
  createCanvas(400, 400)
 
  marilia = createSprite(200,200,20,20)
  henrique = createSprite(100,100,40,60)
  anna = createSprite(100,300,20,80)
  gabriel = createSprite(300,200,10,50)
}

function draw() {
  background(234,23,12)


  drawSprites()
}

