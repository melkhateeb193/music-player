const songDetails = [
        {
        name:"Lost in the City Lights" ,
        author:"cosmo sheledrake",
        img : "dccl--javascript-music-player/cover-1.png",
        music: "dccl--javascript-music-player/lost-in-city-lights-145038.mp3"
        },
        {
        name:"Forest Lullaby" ,
        author:"Lesfm",
        img : "dccl--javascript-music-player/cover-2.png",
        music: "dccl--javascript-music-player/forest-lullaby-110624.mp3"
        }
];

// controls
const nextAudio = document.getElementById("nextAudio");
const prevAudio = document.getElementById("prevAudio");
const play = document.querySelector(".play");
// body
const img = document.querySelector(".itteratedImg");
const author = document.querySelector(".author");
const h1 = document.querySelector("h1");
let currentIndex = 0;

//progress bar and the timer 
const progressBar = document.getElementById("progressBar");
const audio = document.getElementById("myAudio");
let startCounter =document.querySelector(".startCounter");
let finishCounter =document.querySelector(".finishCounter");

showData(currentIndex)
function showData(index)
{
img.setAttribute("src", songDetails[index].img)
author.innerHTML=songDetails[index].author;
h1.innerHTML= songDetails[index].name;
audio.setAttribute('src' , songDetails[currentIndex].music);
audio.addEventListener("timeupdate", function () {
    if (!isNaN(audio.duration) && isFinite(audio.duration)) {
        let value = (audio.currentTime / audio.duration) * 100;
        progressBar.value = value;
         startCounter.textContent = formatTime(audio.currentTime);
         finishCounter.textContent = formatTime(audio.duration)
    }
});
}
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedTime = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    return formattedTime;
}

nextAudio.addEventListener("click",()=> {
if (currentIndex < songDetails.length -1) {
    currentIndex++;
    showData(currentIndex)
}else {
    // Optionally, handle what happens when you reach the end of the array
    console.log("Reached the end of the array");
}
})

prevAudio.addEventListener("click",()=> {
if (currentIndex > 0) {
    currentIndex --;
    showData(currentIndex)
}else {
    // Optionally, handle what happens when you reach the end of the array
    console.log("Reached the begin of the array");
}

})

play.addEventListener('click', ()=>{
    if (audio.paused) {
        audio.play();
    }
    else{
        audio.pause()
    }
})
















