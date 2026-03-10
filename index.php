<?php session_start(); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Audio Player</title>
    <link href="assets/css/style.css" rel="stylesheet">
    <link href="assets/css/main.css" rel="stylesheet">
</head>
<body>
    <header></header>
    <main>
        <div class="player">

            <img id="cover" width="200px">

            <div class="song-info">
                <h2 id="songTitle"></h2>
                <p id="albumName"></p>
            </div>

            <audio id="audioPlayer" controls><!-- retirer controls après les tests-->
            </audio>

            <div class="controls">
                <button id="prev">⏮</button>
                <button id="play">▶</button>
                <button id="next">⏭</button>
                <button id="shuffle">🔀</button>
                <button id="repeat">🔁</button>
            </div>
            <form id="comment_form">

                <textarea 
                    id="comment_input" 
                    placeholder="Écrire un commentaire..."
                    required
                ></textarea>
        
                <button type="submit">Envoyer</button>
        
            </form>
            <div id="comments_container">
                
            <!--Créer le champ pour laisser un commentaire-->
            </div>

        </div>
        <div id="song_list" class="list"></div>
        <div id="album_list" class="list"></div>
    </main>
    <footer></footer>

    <!-- Scripts -->
     <script src="assets/js/album.js"></script>
     <script src="assets/js/comments.js"></script>
     <script src="assets/js/player.js"></script>
     <script src="assets/js/events.js"></script>
     <script src="assets/js/update.js"></script>

     <script> createAlbumList();</script>

</body>
</html>