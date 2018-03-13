 <?php
$pdo = new PDO('mysql:host=localhost;dbname=ticket', 'root', '71ck37', [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);
$result = $pdo->query('SELECT * FROM tickets');
$rows = $result->fetchAll(PDO::FETCH_ASSOC);
header('Content-Type: application/json;charset=utf-8');
echo json_encode($rows,
        JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK);
?>