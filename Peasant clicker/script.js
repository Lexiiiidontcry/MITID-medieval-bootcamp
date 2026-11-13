let board;

let button;

let counter = 0;

      

function setup() {
    createCanvas(700, 500);
    board = createBoard();
    createConnectButton(board);

    button = new five.Button({ pin: 2, isPullup: true });

    button.on("press", function(){
        console.log("The button has just been pressed")
        counter = counter+1;
    }
    
}

function draw() {
    background(200);

    text(counter, width/2, height/2);

}

