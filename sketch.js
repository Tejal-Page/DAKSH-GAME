var database;
var form,sub;
var lastFed;
var x=null;
var currentTime;
var tickImage;
function preload(){

    tickImage= loadImage("tick.png");
}


function setup(){
createCanvas(800,800);
database = firebase.database();
    
form = new Form();
sub = new Subject();



}


function draw(){
form.display();
currentTime = minute();
//console.log(sub.endTime);
//console.log(currentTime);
if(sub.endTime ===currentTime){
    //console.log("Done")
    image(tickImage, 650,60, 40,40);
}
//sub.getAdTime(sub.startTime);
//sub.updateAdTime(20);
}