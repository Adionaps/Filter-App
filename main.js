nosex=0
nosey=0
crownx=0
crowny=0
function preload(){
clownnose=loadImage("https://i.postimg.cc/MGD820PP/Mustache.png")
crown=loadImage("https://i.postimg.cc/Ssk14w2C/Crown.png")
}

function setup(){
canvas=createCanvas(300,300)
canvas.center()


camera=createCapture(VIDEO)
camera.size(300,300)
camera.hide()

poseNet=ml5.poseNet(camera,modelLoaded)
poseNet.on('pose',gotPoses)
}

function draw(){
image(camera,0,0,300,300)
image(clownnose,nosex,nosey,35,30)
image(crown,crownx,crowny,100,50)
}

function modelLoaded(){
console.log('poseNet is initialized')
}

function take_snapshot(){
save('Aditya.png')
}

function gotPoses(results){
    if(results.length>0){
        console.log(results)
        nosex=results[0].pose.nose.x -15
        nosey=results[0].pose.nose.y 
        crownx=results[0].pose.nose.x -50
        crowny=results[0].pose.nose.y -110
        
    }

}