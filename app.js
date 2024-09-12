const car = document.getElementById("car");
const stopsign = document.getElementById("stopsign")
const stopGo = document.getElementById("image");
const stupidSong = document.getElementById("stupidSong");
let stopSignThere = true
let speed = 20;
let carMoving = false;
let laps =0


if (!car.style.left) {
    car.style.left = "-200px";
}

function stopSignLogic(){
    stopsign.addEventListener("click",()=>{
        if(stopSignThere){
            stopGo.setAttribute("src","Assets/arrow.png");
            stopSignThere=false;
            speed = 20;
            if(!carMoving){
                carMoving=true;
                stupidSong.play();
                moveCar();
            }
            moveCar();
        }
        else{
            stopGo.setAttribute("src","Assets/stop.png");
            stopSignThere=true;
            lookForStop();
        }
    })
}

function lookForStop(){
    if (parseInt(car.style.left)==1600 && stopSignThere){
        speed=0;
    }
}

function moveCar() {
    let currentLeft = parseInt(car.style.left);
    car.style.left = (currentLeft +speed) + "px";
    if (currentLeft > window.innerWidth) {
        car.style.left = "-200px";
        laps++;
        console.log(laps);
        stupidSong.playbackRate +=.1;
    }
    lookForStop();

    if(speed>0||!stopSignThere){
    requestAnimationFrame(moveCar);
    }
    else{
        carMoving=false;
    }
}

stopSignLogic();



