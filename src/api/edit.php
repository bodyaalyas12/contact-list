<?php
require_once 'connection.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
$content = file_get_contents('php://input');
$data = json_decode($content,true);
// Create connection

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$sql = "UPDATE Contacts SET name='{$data['name']}',phone='{$data['phone']}' , info='{$data['info']}'
 WHERE id=".$data['id'] ;
// if ($conn->query($sql) === TRUE) {
//     echo json_encode($data);
// } else {
//     echo "Error updating record: " . $conn->error;
// } 
// imgurl='{$data['imgurl']}'

if (mysqli_query($conn, $sql)) {
	mysqli_query($conn, $sql);
    echo $sql;
} else {
    echo "Error updating record: " . mysqli_error($conn);
}

$conn->close();

?>