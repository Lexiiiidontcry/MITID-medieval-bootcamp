let board;


//a variable to store the bodyPose model//
let bodyPose;

//a variable to store the webcam data
let video;

//a variable to store the detected poses
let poses = [];

async function setup() {
    createCanvas(700, 500);
    board = createBoard();
    createConnectButton(board);

    //we open the webcam
    video = createCapture(VIDEO);
    video.size(700, 500);
    video.hide();

    bodyPose = await ml5.bodyPose();
    //start the detection
    bodyPose.detectStart(video, function(results){
        poses = results;

    })
    
}

function draw() {
   image(video, 0, 0);

   //make sure at least one person is detected
   if(poses.length > 0){
 //get nose position of the first person detected
   console.log(poses[0].nose);
   

   //we store the nose postition 
   let n = poses[0].nose;
   fill('#FF0000');
   circle(n.x, n.y, 30);


   //get eyes position of the first person detected
   console.log(poses[0].eye);

   //we store the nose postition 
   let e = poses[0].eye;
   fill('#FF0000');
   circle(e.x, e.y, 50);
   
   }

  


}