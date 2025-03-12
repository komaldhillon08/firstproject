// console.log("komal");
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let range = document.getElementById("range");
let gif = document.getElementById("gif");
let mastersonginfo = document.getElementById("mastersonginfo");
let songItem = Array.from(document.getElementsByClassName("song-items"));

let songs = [
    { songName: "Warriyo - Mortals [NCS Release]", filePath: "./songs/1.mp3", coverPath: "./assets/covers/1.jpg" },
    { songName: "Cielo - Huma-Huma", filePath: "./songs/2.mp3", coverPath: "./assets/covers/2.jpg" },
    { songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "./songs/3.mp3", coverPath: "./assets/covers/3.jpg" },
    { songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "./songs/4.mp3", coverPath: "./assets/covers/4.jpg" },
    { songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "./songs/5.mp3", coverPath: "./assets/covers/5.jpg" },
    { songName: "Rabba - Salam-e-Ishq", filePath: "./songs/6.mp3", coverPath: "./assets/covers/6.jpg" },
    { songName: "Sakhiyaan - Salam-e-Ishq", filePath: "./songs/7.mp3", coverPath: "./assets/covers/7.jpg" },
    { songName: "Bhula Dena - Salam-e-Ishq", filePath: "./songs/8.mp3", coverPath: "./assets/covers/8.jpg" },
    { songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "./songs/9.mp3", coverPath: "./assets/covers/9.jpg" },
    { songName: "Na Jaana - Salam-e-Ishq", filePath: "./songs/10.mp3", coverPath: "./assets/covers/10.jpg" }
];

songItem.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;  // Set the image source (accessing the first <img>)
    element.getElementsByClassName("songname")[0].innerHTML = songs[i].songName;  // Set the song name
});

// play audio
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        // play and pause button
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    } else {

        audioElement.pause();
        // play and pause button

        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener("timeupdate", () => {
    myrange = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(range);
    range.value = myrange
})

range.addEventListener('change' , () => {
    audioElement.currentTime = range.value * audioElement.duration/100 ;
})
// play and pause eishu 

let makeAllPlay = () => {
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    });
};

Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play")
        e.target.classList.add("fa-circle-pause")
        mastersonginfo.innerText = songs[songIndex].songName
        gif.style.opacity = 1;
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    })
})

//
document.getElementById("next").addEventListener("click" , () =>{
    if(songIndex >= 9){
        songIndex = 0 ;
    }else{
        songIndex += 1 ;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})

document.getElementById("previous").addEventListener("click" , () =>{
    if(songIndex <= 0){
        songIndex = 0 ;
    }else{
        songIndex -= 1 ;
    }
    gif.style.opacity = 1;

    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersonginfo.innerText = songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})

// time function
let clock  = document.getElementById("time");
setInterval( () => {
    let time = new Date() ;
    clock.innerHTML = (time.toLocaleString())
},1000)