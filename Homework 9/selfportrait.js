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
    ellipse(151, 209, 82, 130);

    //left arm
    rect(75, 172, 38, 17);

    //right arm
    rect(192, 172, 38, 17);

    //left leg
    rect(132, 271, 19, 33);

    //right leg
    rect(153, 271, 19, 33); 
    
    textSize(18);
    text("Emma Musick", 185, 390);
}