Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("cameraa");

Webcam.attach('#cameraa');

function take_snapshot(){

    Webcam.snap(function(data_uri){
        document.getElementById("results").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });

}

console.log("ml5 version",ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/DVCw7HOa5//model.json',modelLoaded);

function modelLoaded(){

    console.log('model loaded');

}