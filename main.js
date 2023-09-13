song = "";

function preload() {
    song = loadSound("music.mp3")
}

function setup() {
    canvas = createCanvas(800, 700);
    video = createCapture(VIDEO);
    video.size(800, 900);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play() {
    song.play();
}

function pause() {
    song.pause();
}

function stop() {
    song.stop();
}