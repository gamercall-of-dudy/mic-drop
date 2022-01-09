illegal_wepon_song="";
bts_mic_drop_song="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    illegal_wepon_song = loadSound("music2.mp3");
    bts_mic_drop_song = loadSound("music.mp3");
}

function draw(){
    image(video,0,0,600,530);
}