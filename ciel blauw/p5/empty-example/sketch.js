function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(25, 69, 12);
  stroke(255);
  let counter = 0
  while(counter< 100){
    mouliStar(noise(1, counter)* width, noise(2, counter) *(height), 75, 75);
    counter++;
  }
}

function mouliStar(x, y, w, h){
  push();
  translate(x, y)
  if(frameCount %5==0){

    line(-w/2, 0, w/2, 0);

  }else{
    line(0, -h/2, 0, h/2);
  }
  pop();
}
