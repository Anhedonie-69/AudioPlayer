const prev = document.getElementById("prev");
const play = document.getElementById("play");
const next = document.getElementById("next");
const shuffle = document.getElementById("shuffle");
const repeat = document.getElementById("repeat");

const commentInput = document.getElementById("comment_input");
const commentButton = document.getElementById("comment_button");

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

commentButton.addEventListener("click", () => {
    const text = commentInput.value;
    if(!text) {return;};
    addComment(text);
});