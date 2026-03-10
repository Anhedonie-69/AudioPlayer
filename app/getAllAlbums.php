<?php

    include "../config/database.php";

    $request = $pdo->prepare('
        SELECT * FROM albums
    ');
    $request->execute();

    $albums = $request->fetchAll();

    header('Content-Type: application/json');

    echo json_encode($albums);

?>