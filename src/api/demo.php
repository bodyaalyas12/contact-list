<?php
 require_once 'connection.php';

// $content = file_get_contents('php://input');
// $data = json_decode($content,true);



$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// $sql = "CREATE TABLE Contacts (
// id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
// name VARCHAR(30) NOT NULL,
// phone VARCHAR(30) NOT NULL,
// info VARCHAR(50),
// imgurl VARCHAR(50)	
// )";
$sql = "SELECT * FROM Contacts";
// $result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
// if($result)
// {
//     echo "Выполнение запроса прошло успешно";
// }
$result = $conn->query($sql);
// $kek = array();
// if ($result->num_rows > 0) {
//     $i=0;
//     while($row = $result->fetch_assoc()) {

//         $kek[$i] = "id: " . $row["id"]. " - Name: " . $row["name"]. " " . $row["phone"] . ' ' .  $row["info"]. "<br>";
//         $i++;
//     }
// } else {
//     echo "0 results";
// }
for ($set = array (); $row = $result->fetch_assoc(); $set[] = $row);


$response =  array('success' =>true ,'message' => $set);
$conn->close();
print json_encode($set);
?>