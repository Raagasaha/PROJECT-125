noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;



function setup() 
{
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(20, 220)

    canvas = createCanvas(550, 550);
    canvas.position(950, 300);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#FFB6C1');
    textSize(difference);
    fill('#F90783');
    text('Raaga', 50, 200);
    document.getElementById("fontsize").innerHTML =  difference + " pixels";
}





function modelLoaded() 
{
    console.log('Posenet is initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y; 
        difference = floor(leftWristX - rightWristX);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

    }
}
