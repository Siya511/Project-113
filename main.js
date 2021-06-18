function preload(){}

function setup(){
    canvas = createCanvas(650 , 500);
    canvas.position(110 , 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 70 , 70 , 500 , 370);
    fill(255, 0, 0);//red
    stroke(255, 0, 0)
    circle(30, 40, 50);
    circle(135, 40, 50);
    circle(240, 40, 50);
    circle(345, 40, 50);
    circle(450, 40, 50);
    circle(555, 40, 50);
    circle(620, 100, 50);
    circle(620, 205, 50);
    circle(620, 310, 50);
    circle(620, 415, 50);
    circle(545, 475, 50);
    circle(440, 475, 50);
    circle(335, 475, 50);
    circle(230, 475, 50);
    circle(125, 475, 50);
    circle(30, 145, 50);
    circle(30, 145, 50);
    circle(30, 250, 50);
    circle(30, 355, 50);
    circle(30, 475, 50);

    fill(25, 161, 13);//green
    stroke(25, 161, 13)
    rect(55, 35, 55, 10);
    rect(160, 35, 55, 10)
    rect(265, 35, 55, 10);
    rect(370, 35, 55, 10);
    rect(475, 35, 55, 10);
    rect(580, 35, 40, 10);
    rect(620, 35, 10, 40);
    rect(620, 125, 10, 55);
    rect(620, 230, 10, 55);
    rect(620, 335, 10, 55);
    rect(620, 440, 10, 45);
    rect(570, 475, 55, 10);
    rect(465, 475, 55, 10);
    rect(360, 475, 55, 10);
    rect(255, 475, 55, 10);
    rect(150, 475, 55, 10);
    rect(45, 475, 55, 10);
    rect(25, 65, 10, 55);
    rect(25, 170, 10, 55);
    rect(25, 275, 10, 55);
    rect(25, 380, 10, 70);
    
}

function take_snapshot(){
    save("image.png");//It will download and save the image auttomaticly
}