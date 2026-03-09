const audio = document.getElementById("audioPlayer");

const prev = document.getElementById("prev");
const play = document.getElementById("play");
const next = document.getElementById("next");
const shuffe = document.getElementById("shuffle");
const repeat = document.getElementById("repeat");

prev.addEventListener("click", () => {
    console.log("preview");
});

play.addEventListener("click", () => {
    playSong(audio);
});

next.addEventListener("click", () => {
    console.log("next");
});

shuffle.addEventListener("click", () => {
    console.log("shuffle");
});

repeat.addEventListener("click", () => {
    console.log("repeat");
});