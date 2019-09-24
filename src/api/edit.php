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

// $sql = "UPDATE Contacts SET name=".$data['name'].",phone=".$data['phone'].",info=".$data['info']."WHERE id=".$data['id'];
$sql = "UPDATE Contacts SET name='{$data['name']}' ,phone='{$data['phone']}' , info='{$data['info']}' WHERE id={$data['id']}" ;
if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
} 
// imgurl='{$data['imgurl']}'


$conn->close();

?>