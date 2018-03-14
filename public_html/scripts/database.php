<?php
$ini_array = parse_ini_file("../../config/access.ini");
$pdo = new PDO("mysql:host=".$ini_array["host"].";dbname=".$ini_array["dbname"], $ini_array["user"], $ini_array["password"], [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);
$result = $pdo->query('SELECT * FROM tickets');
$rows = $result->fetchAll(PDO::FETCH_ASSOC);
header('Content-Type: application/json;charset=utf-8');
echo json_encode($rows,
        JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK);
?>