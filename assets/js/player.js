////////////////// VARIABLES //////////////////
const cover = document.getElementById("cover");
const songTitle = document.getElementById("songTitle");
const albumName = document.getElementById("albumName");

const audioA = document.getElementById("audioA");
const audioB = document.getElementById("audioB");
let currentAudio = audioA;
let nextAudio = audioB;
const progressBar = document.getElementById("progress_bar");
const currentTimeDisplay = document.getElementById("current_time");
const durationDisplay = document.getElementById("duration");
const volumeIcon = document.getElementById("volume_icon");
const volumeSlider = document.getElementById("volume_slider");
const commentContainer = document.getElementById("comments_container");
let isShuffle = false;
let isRepeat = false;
let isCrossfading = false;
const fadeDuration = 5; // secondes
let songs = [];
let songsShuffle = [];
let playlist = [];
let history = [];
let track = null;
let nextTrack = null;
let currentIndex = 0;
let album = null;
let allAlbums = null;
let volumeValue = 1;
////////////////// INITIALYSE //////////////////
async function createAlbum(){
    allAlbums = await getAllAlbums();
    createAlbumList(albumList);
    createAlbumList(albumListMobile);
};

async function createAlbumList(component){
    component.innerHTML ="";
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
            albumListMobile.classList.remove("open");
            playSong();     
        });
        component.appendChild(b);
    });
};

function createSongList(component){
    component.innerHTML = "";
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
            songListMobile.classList.remove("open");
            playSong();
        });
        component.appendChild(b);
    });
};
////////////////// AUDIO //////////////////
async function loadSongFromAlbum(albumId, songTrack){
    await loadSongs(albumId);
    createSongList(songList);
    createSongList(songListMobile);
    loadSong(songTrack);
    history.push(track.id);
};

async function loadSongs(id){
    songs = await getSongsByAlbumById(id);
    album = await getAlbumById(id); 
};

function loadSong(index){
    progressBar.value = 0;
    updatePlaylist();
    setNextTrack();

    if(index < 0 || index >= playlist.length) return;

    currentIndex = index;   
    track = playlist[currentIndex];

    cover.src = "../../" + album['cover_url'];
    songTitle.innerText = track['title'];
    albumName.innerText = album['title'];
    currentAudio.src = "../../" + track['file_url'];

    loadComments(track['id']);

    updateActiveSong();
    updateActiveAlbum();
    
};

function playSong(){
    if(currentAudio.paused){
        currentAudio.play();
        play.textContent = "⏸️";
    }else{
        currentAudio.pause();
        play.textContent = "▶️";
    };
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
    const nextId = setNextTrack();
    loadSong(nextId);
    playSong();
};

function setNextTrack(){
    let nextTrackIndex;
    if(isRepeat){
        nextTrackIndex = currentIndex;
    } else if(currentIndex < playlist.length - 1){
        nextTrackIndex = currentIndex + 1;
    } else {
        nextTrackIndex = 0;
    }
    nextTrack = playlist[nextTrackIndex];
    return nextTrackIndex;
}
////////////////// PLAYLIST //////////////////
function findSongIndexById(id){
    return playlist.findIndex(song => song.id === id);
};

function updatePlaylist(){
    playlist = isShuffle ? songsShuffle : songs;
};

function toggleShuffle(){
    isShuffle = !isShuffle;
    shuffle.classList.toggle("active");
    let currentTrackId = track ? track.id : null;
    if(isShuffle){
        songsShuffle = shuffleArray(songs);
    }else{
        playlist = songs;
    }
    currentIndex = playlist.findIndex(song => song.id === currentTrackId);
};
////////////////// REPEAT //////////////////
function toggleRepeat(){
    isRepeat = !isRepeat;
    repeat.classList.toggle("active");
    nextTrack = setNextTrack();
};
////////////////// UI //////////////////
function updateActiveSong(){
    document.querySelectorAll(".song-btn").forEach(btn => {
        btn.classList.remove("song-active");
    });
    let index = songs.findIndex(song => song.id === track.id);
    if(index !== -1){
        songList.children[index].classList.add("song-active");
        songListMobile.children[index].classList.add("song-active");
    };
};

function updateActiveAlbum(){
    document.querySelectorAll(".album-btn").forEach(btn => {
        btn.classList.remove("album-active");
    });
    let index = allAlbums.findIndex(alb => alb.id === album.id);
    if(index !== -1){
        albumList.children[index].classList.add("album-active");
        albumListMobile.children[index].classList.add("album-active");
    };
};

function updateVolumeIcon(){
    if(currentAudio.volume === 0){
        volumeIcon.textContent = "🔇";
    }
    else if(audioA.volume < 0.5){
        volumeIcon.textContent = "🔉";
    }
    else{
        volumeIcon.textContent = "🔊";
    };
};
////////////////// COMMENTS //////////////////
async function loadComments(id){
    let comments = await getCommentsBySongId(id);
    commentContainer.innerHTML = "";
    comments.forEach(msg => {
        const p = document.createElement("p");
        p.textContent = `${msg.content}`;
        commentContainer.appendChild(p);
    });
};

async function addComment(text){
    if(!track){return;};
    
    await createComment(text, track.id);
    document.getElementById("comment_input").value = "";
    loadComments(track.id);
};
////////////////// CONTROLS //////////////////
[audioA, audioB].forEach(a => {

    a.addEventListener("timeupdate", () => {
        if(a !== currentAudio) return;

        const progress = (a.currentTime / a.duration) * 100;
        progressBar.value = progress;
        currentTimeDisplay.innerText = formatTime(a.currentTime);
        durationDisplay.innerText = formatTime(a.duration);

        if(isCrossfading) return;

        let remaining = a.duration - a.currentTime;

        if(remaining <= fadeDuration && remaining > 0){
            startCrossfade();
        }
    });
});

progressBar.addEventListener("input", () => {
    const time = (progressBar.value / 100 ) * currentAudio.duration;
    currentAudio.currentTime = time;
});

volumeSlider.addEventListener("input", () => {
    currentAudio.volume = volumeSlider.value;
    updateVolumeIcon();
});

volumeIcon.addEventListener("click", () => {
    if(currentAudio.volume > 0){
        volumeValue = currentAudio.volume;
        volumeSlider.value = 0;
        currentAudio.volume = 0;
    }else{
        volumeSlider.value = volumeValue;
        currentAudio.volume = volumeValue;
    };
    updateVolumeIcon();
});
/*
currentAudio.addEventListener("ended", () => {
    if(isCrossfading) return;

    if(isRepeat){
        loadSong(currentIndex);
        playSong();
        return;
    } else {
        nextSong();
        playSong();
    };
});
*/
function startCrossfade(){

    if(isCrossfading) return;

    isCrossfading = true;

    let nextIndex = setNextTrack();

    if(nextIndex >= playlist.length){
        nextIndex = 0;
    }

    nextTrack = playlist[nextIndex];

    nextAudio.src = "../../" + nextTrack.file_url;
    nextAudio.volume = 0;
    nextAudio.currentTime = 0;
    nextAudio.play();

    let steps = 20;
    let intervalTime = (fadeDuration * 1000) / steps;
    volumeValue = currentAudio.volume;
    let volumeStep = volumeValue / steps;

    let fade = setInterval(() => {

        currentAudio.volume = Math.max(0, currentAudio.volume - volumeStep);
        nextAudio.volume = Math.min(volumeValue, nextAudio.volume + volumeStep);

        if(nextAudio.volume >= volumeValue){

            clearInterval(fade);

            currentAudio.pause();

            // swap audio
            let temp = currentAudio;
            currentAudio = nextAudio;
            nextAudio = temp;

            currentIndex = nextIndex;
            track = playlist[currentIndex];
            songTitle.innerText = track['title'];

            updateActiveSong();
            loadComments(track.id);

            isCrossfading = false;

        }

    }, intervalTime);

}