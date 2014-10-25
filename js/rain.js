function draw(){
    buffer.clearRect(
      0,
      0,
      width,
      height
    );

    // Add 2 randomly placed drops.
    var loop_counter = 1;
    do{
        drops.push([
          Math.floor(Math.random() * width),// X
          -99,// Y
          2,// Width
          7,// Height
        ]);
    }while(loop_counter--);

    loop_counter = drops.length - 1;
    buffer.fillStyle = '#aaf';
    do{
        if(drops[loop_counter][1] > height){
            // Remove drop that reached bottom of screen.
            drops.splice(
              loop_counter,
              1
            );

        }else{
            // Update drop position.
            drops[loop_counter][1] += Math.random() * 9 + 9;

            // Draw drop.
            buffer.fillRect(
              drops[loop_counter][0],
              drops[loop_counter][1],
              drops[loop_counter][2],
              drops[loop_counter][3]
            );
        }
    }while(loop_counter--);

    canvas.clearRect(
      0,
      0,
      width,
      height
    );
    canvas.drawImage(
      document.getElementById('buffer'),
      0,
      0
    );
}

function resize(){
    height = window.innerHeight;
    document.getElementById('buffer').height = height;
    document.getElementById('canvas').height = height;

    width = window.innerWidth;
    document.getElementById('buffer').width = width;
    document.getElementById('canvas').width = width;
}

var buffer = document.getElementById('buffer').getContext('2d');
var canvas = document.getElementById('canvas').getContext('2d');
var drops = [];
var height = 0;
var width = 0;

resize();
window.onresize = resize;

setInterval(
  'draw()',
  30
);
