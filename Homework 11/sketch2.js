// beginning x and y for character
var characterX = 100;
var characterY = 100;

// define the key codes for each letter/direction
var w = 88;
var s = 82;
var a = 42;
var d = 49;

// x and y for movingShape1
var movingShape1X = 40;
var movingShape1Y = 85;
var movingShape1Xspeed;
var movingshape1Yspeed;

// x and y for movingShape2
var movingShape2X = 15;
var movingShape2Y = 386;
var movingShape2Xspeed;
var movingShape2Yspeed;

//create a shape when mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(400, 500);
    // has random speed when it first starts
    movingShape1Xspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    movingshape1Yspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    movingShape2Xspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    movingShape2Yspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()
{
    background(255,128,255);
    stroke(0);
    fill(230,0,172);
    // top border
    rect(0,0,width,10);
    // bottom left border
    rect(0,height-10,width,10);
    // left border
    rect(0,0,10,height);
    // right border
    rect(width-10,0,10,height-50);
    
    // exit message
    fill(0);
    textSize(14);
    text("exit", width-50,height-50)

    // character
    fill(255,255,255);
    circle(characterX,characterY,25);
  
    // enemy 1 maybe
    fill(255,255,153);
    // draw enemy 1 shape
    circle(movingShape1X, movingShape1Y, 10);
    
    // enemy 2 maybe
    fill(0);
    // draw enemy 2 shape
    circle(movingShape2X, movingShape2Y, 16);

    // has a random speed when it first starts
    movingShape1Xspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    movingshape1Yspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    movingShape2Xspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    movingShape2Yspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move enemy 1
    movingShape1X += movingShape1Xspeed;
    movingShape1Y += movingshape1Yspeed;
    // check to see if enemy has gone out of bounds
    if(movingShape1X > width)
    {
        movingShape1X = 0;
    }
    if(movingShape1X < 0)
    {
        movingShape1X = width;
    }
    if(movingShape1Y > height)
    {
        movingShape1Y = 0;
    }
    if(movingShape1Y < 0)
    {
        movingShape1Y = height;
    }

    // move enemy 2
    movingShape2X += movingShape2Xspeed;
    movingShape2Y += movingShape2Yspeed;
    // check to see if enemy has gone out of bounds
    if(movingShape2X > width)
    {
        movingShape2X = 0;
    }
    if(movingShape2X < 0)
    {
        movingShape2X = width;
    }
    if(movingShape2Y > height)
    {
        movingShape2Y = 0;
    }
    if(movingShape2Y < 0)
    {
        movingShape2Y = height;
    }

    // check to see if character has passed through the exit
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(10);
        textSize(28);
        text("You Win!!", width/2-50, height/2-50);
    }

    // create an unmoving enemy based on mouse click
    fill(204,0,204);
    circle(mouseShapeX, mouseShapeY, 25);
}

 // using the keys
 function keyPressed() {
    if (key == 'w') {
        characterY -= 20;
    }
    else if (key == 's') {
        characterY += 20;
    }
    else if (key == 'a') {
        characterX -= 20;
    }
    else if (key == 'd') {
        characterX += 20;
    }
}

function mouseClicked()
    {
        mouseShapeX = mouseX;
        mouseShapeY = mouseY; 
    }

