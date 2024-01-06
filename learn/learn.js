let seconds = 0 

function refreshPage() {
    location.reload()
}

document.addEventListener('DOMContentLoaded',function () {
    let audio = document.getElementById('audio')
    let playButton = document.getElementById('start')

    playButton.addEventListener('click',function () {
        audio.play();
    })
})

function myFunction() {
//  setTimeout(refreshPage,1000)
document.getElementById("demo").innerHTML = "Ben 10" + seconds;
show()
button()
}

// let time = document.getElementById("counter")
// time.textContent = counter(seconds)
// document.getElementById("counter").innerHTML = seconds

// function counter(seconds) {
//     seconds++;
    
//     console.log(seconds);
//     // return seconds;
// }
// setInterval(counter,1000)

function calculate(){
setTimeout(myFunction, 2000);
setTimeout(show,3000); 
}

function isAudioPlaying() {
    console.log(!audio.paused);
    return !audio.paused 
}

function show(){
    let audio = document.getElementById('audio')
    console.log("show");
console.log(audio.paused);
    if (audio.paused) {
        console.log("Audio not playing, playing now");
        audio.play();
    }

    if (document.getElementById("image").style.display=="block") {
        document.getElementById("image").style.display="none"
        // document.getElementById("audio").style.display="none";
        document.getElementById("show").style.display="none";
        document.getElementById("play-music").style.display="none";
        setTimeout(show,1000); 
        
    }
    else{
        document.getElementById("show").style.display="block";
        document.getElementById("image").style.display="block";
        // document.getElementById("audio").style.display="block";
        document.getElementById("play-music").style.display="block";
        setTimeout(show,2000);
    }
}

function button() {
    let start = document.getElementById("start")
    let stop = document.getElementById("stop")
    let playMusic = document.getElementById("play-music")

    setTimeout(button,500)
    if (start.className=="start") {
        start.classList.remove('start')
        start.classList.add('stop')
        playMusic.classList.remove('start')
        playMusic.classList.add('stop')
        stop.classList.remove('stop')
        stop.classList.add('start')
    }
    else{
        start.classList.remove('stop')
        start.classList.add('start')
        playMusic.classList.remove('stop')
        playMusic.classList.add('start')
        stop.classList.remove('start')
        stop.classList.add('stop')
    }
}



