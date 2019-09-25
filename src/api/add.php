<?php
require_once 'connection.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
	// Header add Access-Control-Allow-Headers: "origin, x-requested-with, content-type"
$content = file_get_contents('php://input');
$data = json_decode($content,true);




// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO Contacts (name, phone, info,imgurl)
VALUES ('{$data['name']}', '{$data['phone']}', '{$data['info']}','{$data['imgurl']}')";

if ($conn->query($sql) === TRUE) {
    echo $data;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}



$conn->close();

?>