var p5 = require('p5');

const s = ( p ) => {

  let x = 100;
  let y = 100;

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = function() {
    p.background(0);
    p.fill(255);
    p.rect(x,y,50,50);
  };

  p.mouseMoved = function() {};
  p.mouseDragged = function() {};
  p.mousePressed = function() {};
  p.mouseReleased = function() {};
  p.mouseClicked = function() {};
  p.doubleClicked = function() {};
  p.mouseWheel = function() {};

  p.keyPressed = function() {};
  p.keyReleased = function() {};
  p.keyTyped = function() {
    if (p.key === 'f') {
      p.fullscreen(true);
    }
  };

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }

};

let myp5 = new p5(s, document.body);
