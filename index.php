<?php session_start(); ?>

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
        <div class="player">

            <img id="cover"
                
            >

            <div class="song-info">
                <h2 id="songTitle"></h2>
                <p id="albumName"></p>
            </div>

            <audio id="audioPlayer" controls><!-- retirer controls après les tests-->
                <source
                    src="uploads\songs\babylon_by_bus_bob_marley\Bob Marley - Babylon By Bus - 04 Stir It Up.mp3"
                >
            </audio>

            <div class="controls">
                <button id="prev">⏮</button>
                <button id="play">▶</button>
                <button id="next">⏭</button>
                <button id="shuffle">🔀</button>
                <button id="repeat">🔁</button>
            </div>

        </div>
    </main>
    <footer></footer>

    <!-- Scripts -->
     <script src="assets/js/getAlbum.js"></script>
     <script src="assets/js/player.js"></script>
     <script src="assets/js/events.js"></script>
     <script src="assets/js/update.js"></script>
</body>
</html>