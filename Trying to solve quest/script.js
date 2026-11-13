
let board;
let potentiometer;              // a variable to store the sensor
let currentPotValue = 0;        // a variable to store the sensor value

      function setup(){

       
      createCanvas(400, 300);       // create a canvas
      board = createBoard();        // create the "board"
      createConnectButton(board);   // create the "Connect Arduino" button

        potentiometer = new five.Sensor("A0");  // potentiometer on analog pin A0

        // every time the sensor value "changes" it triggers the following event
        potentiometer.on("change", function(latestvalue){
          /* The value that the sensor sends us exists only within 
          the function's scope. We need to “store” it in a globally 
          accessible variable. */
          currentPotValue = latestvalue;        
        });

      }

      function draw(){
                 
        if(currentPotValue < 400){
            background ("#FF0000");

        }else {
            background ("#00FF00");

        }
      }
      