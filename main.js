function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/mJ5-t09F2/model.json",modelLoaded);
}
function modelLoaded() {
    console.log("model loaded");
}
function draw() {
    image(video,0,0,300,300);
    classifier.classify(video,gotResult);
}

function gotResult(error,results) {
    if (error) {
        console.error(error,"ErRoR");
    } else {
        console.log(results);
        document.getElementById("ROSpan").innerHTML=results[0].label;
        document.getElementById("ROASpan").innerHTML=results[0].confidence.toFixed(3);
    }
}