<?php
$servername = "localhost";
$username = "dev";
$password = "zuzenc1901";
$dbname = "reacttest";
$content = file_get_contents('php://input');
$data = json_decode($content,true);
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO Contacts (name, phone, info)
VALUES ('{$data['name']}', '{$data['phone']}', '{$data['info']}')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully".json_encode($data);
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}


$conn->close();

?>