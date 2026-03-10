const cover = document.getElementById("cover");
const songTitle = document.getElementById("songTitle");
const albumName = document.getElementById("albumName");
const audio = document.getElementById("audioPlayer");
const commentContainer = document.getElementById("comments_container");

const songList = document.getElementById("song_list");
const albumList = document.getElementById("album_list");



let isShuffle = false;
let isRepeat = false;
let isGoingBack = false;

let songs = [];
let songsShuffle = [];
let playlist = [];
let history = [];

let track = null;
let currentIndex = 0;

let album = null;
let allAlbums = null;

async function loadSongFromAlbum(albumId, songTrack){
    await loadSongs(albumId);
    createSongList();
    loadSong(songTrack);
    history.push(track.id);
};

async function loadSongs(id){
    songs = await getSongsByAlbumById(id);
    album = await getAlbumById(id); 
};

function loadSong(index){

    updatePlaylist();

    if(index < 0 || index >= playlist.length) return;

    currentIndex = index;   
    track = playlist[currentIndex];

    cover.src = "../../" + album['cover_url'];
    songTitle.innerText = track['title'];
    albumName.innerText = album['title'];
    audio.src = "../../" + track['file_url'];

    loadComments(track['id']);

    updateActiveSong();
    updateActiveAlbum();
};

function previousSong(){

    if(history.length === 0){

        //if(currentIndex > 0){
        //    loadSong(currentIndex - 1);
        //}else{
        //    loadSong(playlist.length - 1);
        //}

        return;
    }

    let previousId = history.pop();
    let index = findSongIndexById(previousId);

    if(index !== -1){
        loadSong(index);
    };
    playSong();
};

function nextSong(){

    history.push(track.id);

    if(currentIndex < playlist.length - 1){
        
        loadSong(currentIndex + 1);
    }else{
        loadSong(0);
    };
    playSong();
};

function findSongIndexById(id){
    return playlist.findIndex(song => song.id === id);
};

function updatePlaylist(){
    playlist = isShuffle ? songsShuffle : songs;
};

function playSong(){
    audio.play();
};

function toggleShuffle(){

    isShuffle = !isShuffle;

    let currentTrackId = track ? track.id : null;

    if(isShuffle){
        songsShuffle = shuffleArray(songs);
    }else{
        playlist = songs;
    }

    currentIndex = playlist.findIndex(song => song.id === currentTrackId);

}

function toggleRepeat(){
    isRepeat = !isRepeat;
};

function shuffleArray(array){

    let shuffled = [...array];

    for(let i = shuffled.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
};

audio.addEventListener("ended", () => {

    if(isRepeat){
        loadSong(currentIndex);
        playSong();
        return;
    }

    if(currentIndex < playlist.length - 1){
        nextSong();
        playSong();
    }

});

function createSongList(){
    songList.innerHTML = "";
    songs.forEach(sg => {
        const b = document.createElement("button");
        b.type = "button";
        b.classList.add("song-btn");
        b.innerText = sg['title'];
        b.addEventListener("click", () => {

            if(isShuffle){
                toggleShuffle();
            }
            let index = songs.findIndex(song => song.id === sg.id);

            loadSong(index);
            playSong();

        });
        songList.appendChild(b);
    });
};

async function createAlbumList(){
    allAlbums = await getAllAlbums();
    albumList.innerHTML ="";
    allAlbums.forEach(alb => {
        const b = document.createElement("button");
        b.type = "button";
        b.classList.add("album-btn");
        b.innerText = alb['title'];

        b.addEventListener("click", async () => {

            history = [];

            if(isShuffle){
                toggleShuffle();
            }
        
            await loadSongFromAlbum(alb.id, 0);
            playSong();
        
        });

        albumList.appendChild(b);
    });
};

function updateActiveSong(){

    document.querySelectorAll(".song-btn").forEach(btn => {
        btn.classList.remove("song-active");
    });

    let index = songs.findIndex(song => song.id === track.id);

    if(index !== -1){
        songList.children[index].classList.add("song-active");
    };

}

function updateActiveAlbum(){
    document.querySelectorAll(".album-btn").forEach(btn => {
        btn.classList.remove("album-active");
    });

    let index = allAlbums.findIndex(alb => alb.id === album.id);

    if(index !== -1){
        albumList.children[index].classList.add("album-active");
    };
}

async function loadComments(id){
    let comments = await getCommentsBySongId(id);

    commentContainer.innerHTML = "";
    comments.forEach(msg => {
        const p = document.createElement("p");
        p.textContent = `${msg.content}`;
        commentContainer.appendChild(p);
    });
};

function addComment(){};

function crossfade(){};