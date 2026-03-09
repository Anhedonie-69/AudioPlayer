<?php

    include "../config/database.php";

    if(isset($_GET['id'])){
        $request = $pdo->prepare('
            SELECT cover_url
            FROM albums
            WHERE id = ?
        ');
        $request->execute([$_GET['id']]);

        $cover = $request->fetch();

        header('Content-Type: application/json');

        echo json_encode($cover);
    }

?>