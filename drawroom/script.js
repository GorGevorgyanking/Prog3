var socket;
function main() {
    socket = io.connect('http://localhost:3000');
    socket.on('cords', function (k) {
        ellipse(k[0], k[1], 50, 50);
    });
}


function setup() {
    
    createCanvas(600, 600);
    background('#acacac');

}

function mouseDragged() {

    var cord = [mouseX, mouseY];
    socket.emit('cord', cord);
}


window.onload = main;

