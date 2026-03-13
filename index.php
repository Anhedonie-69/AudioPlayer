<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Audio Player</title>
    <link href="assets/css/style.css" rel="stylesheet">
</head>
<body>
    <header></header>
    <main>
        <div class="mobile-tabs">
            <button id="albums_toggle">ALBUMS</button>
            <button id="songs_toggle">PLAYLIST</button>
        </div>
        <div class="mobile-lists">
            <div id="album_list_mobile" class="list mobile"></div>
            <div id="song_list_mobile" class="list mobile"></div>
        </div>
        <div id="album_list" class="list desktop"></div>
        <div class="player">

            <img src="assets\images\Home_Cover.png" alt="cover" id="cover">

            <div class="song-info">
                <h2 id="songTitle">...</h2>
                <p id="albumName">...</p>
            </div>

            <audio id="audioA"></audio>
            <audio id="audioB"></audio>

            <div class="progress-container">
                <input
                    type="range"
                    id="progress_bar"
                    value="0"
                    min="0"
                    max="100"
                    step="1"
                />
                <div class="time_display">
                    <span id="current_time">0:00</span>
                    /
                    <span id="duration">0:00</span>
                </div>
            </div>
            <div class="volume_container">
                <div id="volume_icon">
                    <img src="assets/images/volume-up.svg" alt="volume_icon">
                </div>
                <input
                    type="range"
                    id="volume_slider"
                    min="0"
                    max="1"
                    step="0.01"
                    value="1"
                />
            </div>

            <div class="controls">
                <button id="prev">
                    <img src="assets/images/previous.svg" alt="preview_button">
                </button>
                <button id="play">
                    <img src="assets/images/play-button.svg" alt="play_button">
                </button>
                <button id="next">
                    <img src="assets/images/next-arrow.svg" alt="next_button">
                </button>
                <button id="shuffle">
                    <img src="assets/images/shuffle-arrow.svg" alt="shuffle_button">
                </button>
                <button id="repeat">
                    <img src="assets/images/repeat.svg" alt="repeat_button">
                </button>
            </div>
            <textarea 
                id="comment_input" 
                placeholder="Écrire un commentaire..."
                required
            ></textarea>
            <button id="comment_button">Envoyer</button>
            <div id="comments_container"></div>

        </div>
        <div id="song_list" class="list desktop"></div> 
    </main>
    <footer></footer>

    <!-- Scripts -->
    <script src="assets/js/tools.js"></script>
    <script src="assets/js/album.js"></script>
    <script src="assets/js/comments.js"></script>
    <script src="assets/js/lists.js"></script>
    <script src="assets/js/player.js"></script>
    <script src="assets/js/events.js"></script>
     
    <script> createAlbum();</script>
</body>
</html>