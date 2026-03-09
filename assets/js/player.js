const cover = document.getElementById("cover");

const songTitle = document.getElementById("songTitle");
const albumName = document.getElementById("albumName");

let songs = null;

async function loadSongs(id){
    songs = await getSongsByAlbumById(id);
    img = await getCoverByAlbumById(id);
    cover.src = "../../" + img['cover_url'];
};

function previousSong(){};

function playSong(audio){
    audio.play();
};

function nextSong(){};

function toggleShuffle(){};

function toggleRepeat(){};

function crossfade(){};

function loadComments(){};

function addComment(){};