const prev = document.getElementById("prev");
const play = document.getElementById("play");
const next = document.getElementById("next");
const shuffe = document.getElementById("shuffle");
const repeat = document.getElementById("repeat");

prev.addEventListener("click", () => {
    previousSong();
});

play.addEventListener("click", () => {
    playSong();
});

next.addEventListener("click", () => {
    nextSong();
});

shuffle.addEventListener("click", () => {
    toggleShuffle();
});

repeat.addEventListener("click", () => {
    toggleRepeat();
});