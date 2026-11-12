let board;

let microphone;
let micValue = 0; //a global variable to store mic value

function setup() {
    createCanvas(700, 500);
    board = createBoard();
    createConnectButton(board);

    microphone = new five.Sensor("A0");

    //we listen to the sensor value
    microphone.on("change", function(latestValue){

        micValue = latestValue;
    })
    


}

function draw() {
    background(200);

    //a circle that will get bigger when we scream 
    circle(width/2, height/2, micValue);

}