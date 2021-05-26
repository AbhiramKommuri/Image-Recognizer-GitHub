Webcam.set({
  width : 400,
  height: 400,
  image_format : 'png',
  png_quality : 92,
});

var camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
  Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML ='<img id="capture" src = "' + data_uri + '"/>'
    check();
  });
};

console.log('ml5 version',ml5.version);

var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qLWyW2YJE/model.json',modelLoaded);
function modelLoaded(){
console.log("modelloadsuccess");
};
function check(){
var img = document.getElementById('capture');
classifier.classify(img, result);
};

function result(error,results){
if(error){
console.error(error)
alert("there was an error in the program(press f12 and open the console for more info)")
}else{
console.log("attemp was succesful results:");
console.log(results);
document.getElementById("Im_Not_Really_A_Genius").innerHTML = results[0].confidence.toFixed(3);
document.getElementById("Im_A_Genius").innerHTML = results[0].label;
};

};