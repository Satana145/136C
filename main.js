video = "";
status = "";
function preload() {
    video = createVideo('video.mp4');
    video.hide();
}
function setup() {
    canvas = createCanvas(450, 400);
    canvas.center();
}
function start() {
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status - deteting Objects";
}
function modelLoaded() {
    console.log("Model Loaded");
    status = true;

    video.loop();
    video.speed(1);
    video.volume(0);
}
function draw() {
    image(video, 0, 0, 450, 400);

}