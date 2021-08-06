function loaded()
{
  // start
  console.log("THIS IS THE FIRST QUANTUM GAME STUDIO GAME! A WEB BASED GAME U CAN PLAY! - QUANTUMXS")
  // canvas stuff
  var canvas = document.getElementById("cvs")
  var cntxt = canvas.getContext("2d")
  // render
  cntxt.beginPath();
  cntxt.moveTo(10, 120);
  cntxt.lineTo(10, 180);
  cntxt.lineTo(110, 150);
  cntxt.fill();
}