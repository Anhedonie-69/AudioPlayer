<?php
    try
    {
        $pdo = new PDO('mysql:host=localhost;dbname=audio_player', 'root', "");
    }
    catch (Exception $e)
    {
        die('Erreur : ' . $e->getMessage());
    }
?>