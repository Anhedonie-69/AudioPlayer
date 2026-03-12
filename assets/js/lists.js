const albumList = document.getElementById("album_list");
const songList = document.getElementById("song_list");
const albumListMobile = document.getElementById("album_list_mobile");
const songListMobile = document.getElementById("song_list_mobile");

document.getElementById("albums_toggle").addEventListener("click", () => {

    albumListMobile.classList.toggle("open");
    songListMobile.classList.remove("open");

});

document.getElementById("songs_toggle").addEventListener("click", () => {

    songListMobile.classList.toggle("open");
    albumListMobile.classList.remove("open");

});