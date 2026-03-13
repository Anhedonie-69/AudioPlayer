const prev = document.getElementById("prev");
const play = document.getElementById("play");
const next = document.getElementById("next");
const shuffle = document.getElementById("shuffle");
const repeat = document.getElementById("repeat");

const commentInput = document.getElementById("comment_input");
const commentButton = document.getElementById("comment_button");

const tablet = window.matchMedia("(min-width: 768px)");

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

function submitComment() {
    const text = commentInput.value.trim();
    if (!text) return;
    addComment(text);
}

commentButton.addEventListener("click", submitComment);

commentInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        submitComment();
    }
});

tablet.addEventListener("change", (e)=> {
    if (e.matches) {
        console.log("matches");
        albumListMobile.classList.remove("open");
        songListMobile.classList.remove("open");
    };
});