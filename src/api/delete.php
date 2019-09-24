<?php
$servername = "localhost";
$username = "dev";
$password = "zuzenc1901";
$dbname = "reacttest";
$content = file_get_contents('php://input');

// Create connection

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "DELETE FROM Contacts WHERE id={$content}";
if ($conn->query($sql) === TRUE) {
    echo "Record deleted successfully";
} else {
    echo "Error updating record: " . $conn->error;
} 


$conn->close();

?>