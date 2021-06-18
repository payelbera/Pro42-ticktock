var hr,min,seconds

angleMode(DEGREES)


function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  
  translate(200,200)
  rotate(-90)
  hr=hour()
  min=minute()
  seconds=second()
  hrAngle=map(hr%12,0,12,0,360)
  minAngle=map(min,0,60,0,360)
  secondsAngle=map(seconds,0,60,0,360)
  push()
  rotate(secondsAngle)
  stroke("red")
  strokeWeight(7)
  line(0,0,100,0)
  pop()
  push()
  rotate(minAngle)
  stroke("blue")
  strokeWeight(7)
  line(0,0,75,0)
  pop()
  push()
  rotate(hrAngle)
  stroke("green")
  strokeWeight(7)
  line(0,0,50,0)
  pop()
  strokeWeight(10)
  noFill()
  stroke("green")
  arc(0,0,305,305,0,hrAngle)
  stroke("blue")
  arc(0,0,280,280,0,minAngle)
  stroke("red")
  arc(0,0,255,255,0,secondsAngle)
}