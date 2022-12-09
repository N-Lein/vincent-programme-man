let myImage;
function setup() {
  createCanvas (windowWidth, windowHeight);

}
function preload(){
  myImage = loadImage();
}


function draw() {
  background(255, 0, 0);
}Image(myImage, 0, 0)