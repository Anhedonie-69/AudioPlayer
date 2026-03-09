<?php

    include "../config/database.php";

    if(isset($_GET['id'])){
        $request = $pdo->prepare('
            SELECT * FROM songs
            WHERE album_id = ?
        ');
        $request->execute([$_GET['id']]);
        $songs = $request->fetchAll();

        header('Content-Type: application/json');

        echo json_encode($songs);
    };

?>