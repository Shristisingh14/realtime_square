noseX=0;
noseY=0;
difference=0;
rightwristX = 0;
leftwristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(600, 500);
    canvas.position(600, 140);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0 )
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + " noseY = " + noseY);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("leftWristX = " + leftwristX);
        console.log("rightWristX = " + rightwristX);
        console.log("difference = " + difference);
    }
}

function draw() {
    background('#808080');
    document.getElementById("square_side").innerHTML = "Width and height of the square will be = " +difference +"px";
    fill('#3F00FF');
    stroke('#1434A4');
    square(noseX, noseY, difference);
}