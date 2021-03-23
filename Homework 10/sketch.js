var bodyX = 151;
var bodyY = 209;
var bodyDirection = 2;

var leftArmX = 75;
var leftArmY = 172;
var leftArmDirection = 1.5;
var rightArmX = 192;
var rightArmY = 172;
var rightArmDirection = 4;

var leftLegX = 132;
var leftLegY = 271;
var leftLegDirection = 3;
var rightLegX = 153;
var rightLegY = 271;
var rightLegDirection = 2;

var nameSize = 18;
var nameCount = 0;
var nameSizeDirection = 1;
function setup()
{
    createCanvas(300, 400);
}

function draw()
{
    background(255, 179, 255);
    textFont('Lucida');
    textSize(24);
    text("I Tried", 20, 90);

    //head
    circle(150, 100, 90);

    //eyes
    strokeWeight(7.5);
    point(132, 95);
    point(167, 95);

    //mouth
    triangle(140, 125, 149.5, 109, 159, 125);

    //hair
    line(148, 59, 196, 96);
    line(159.5, 59.5, 195, 89.5);
    line(105, 100, 105, 150);
    line(195, 100, 195, 150);

    //body
    ellipse(bodyX, bodyY, 82, 130);
    bodyX+=bodyDirection;
    bodyY+=bodyDirection;
    if(bodyX <= 10 || bodyX >= 290)
    {
        bodyDirection *= -1;
    }
    if(bodyY <= 10 || bodyY >= 390)
    {
        bodyDirection *=-1;
    }

    //left arm
    rect(leftArmX, leftArmY, 38, 17);
    leftArmX+=leftArmDirection;
    if(leftArmX <= 0 || leftArmX >= 300)
    {
        leftArmDirection *= -1;
    }

    //right arm
    rect(rightArmX, rightArmY, 38, 17);
    rightArmX+=rightArmDirection;
    if(rightArmX <= 0 || rightArmX >= 300)
    {
        rightArmDirection *= -1;
    }

    //left leg
    rect(leftLegX, leftLegY, 19, 33);
    leftLegY+=leftLegDirection;
    if(leftLegY <= 0 || leftLegY >= 400)
    {
        leftLegDirection *= -1;
    }

    //right leg
    rect(rightLegX, rightLegY, 19, 33); 
    rightLegY+=rightLegDirection;
    if(rightLegY <= 0 || rightLegY >= 400)
    {
        rightLegDirection *= -1;
    }
    
    textSize(nameSize);
    nameSize+=nameSizeDirection;
    nameCount++;
    if(nameCount > 5)
    {
        nameSizeDirection *= -1;
        nameCount = 0;
    }
    text("Emma Musick", 185, 390);
}