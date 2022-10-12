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
    }
}

function draw() {
    background('#808080');
}