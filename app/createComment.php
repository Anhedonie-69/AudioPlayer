<?php
    include "../config/database.php";

    $data = json_decode(file_get_contents("php://input"), true);

    $content = $data['content'];
    $songId = $data['songId'];
    
    $request = $pdo->prepare('
        INSERT INTO comments (song_id, content)
        values (:song_id, :content)
    ');
    $request->execute([
        'song_id' => $songId,
        'content' => $content
    ]);

    echo json_encode(["success" => true]);
?>