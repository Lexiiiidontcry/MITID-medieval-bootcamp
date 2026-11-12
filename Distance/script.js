let board;

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
        let lw = poses[0].left_wrist; //left wrist coordinates

        let distance = parseInt(dist(rw.x, rw.y, lw.x, lw.y)); //compute distance

        Text(distance, 10, 10) //debug distance

        //translate distance into brightness
        let bri = map(distance, 30, 500, 0, 255);

        let.brightness(bri);  //apply the bright to the led



    }

}