<?php

    include "../config/database.php";

    if(isset($_GET['id'])){
        $request = $pdo->prepare('
            SELECT * FROM comments
            WHERE song_id = ?
            ORDER BY created_at DESC
        ');
        $request->execute([$_GET['id']]);

        $comments = $request->fetchALL();

        header('Content-Type: application/json');

        echo json_encode($comments);
    };

?>