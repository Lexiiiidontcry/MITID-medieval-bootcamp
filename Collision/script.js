let board;

let led;

//a variable to store the bodyPose model//
let bodyPose;

//a variable to store the webcam data
let video;

//a variable to store the detected poses
let poses = [];

//our target
let target = {
    x: 300,
    y:200,
    d:50,

}


async function setup() {
    createCanvas(700, 500);
    board = createBoard();
    createConnectButton(board);

    led = new five.led(3);

    video = createCapture(VIDEO);
    video.size(700,500);
    video.hide();

    bodyPose = await ml5.bodyPose();
    //start the detection
    bodyPose.detectStart(video, function(result){
        poses = results;
    })

    
}

function draw() {
    Image(video, 0, 0)

    //make sure at least one person is detected
    if(poses.length > 0){
        let rw = poses[0].right_wrist; //right wrist coordinates
        
        //get the distance 
        let distance = dist(rw.x, rw.y, target.x, target.y);

        let isColliding = distance > target.d;

        textSize(10);
        text(isColliding, 20, 20);

        circle(target.x, target.y, target.d)

    }

}