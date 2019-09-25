<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
if($_FILES['img']['name']){
$fileName = $_FILES['img']['name'];
$fileTmpLoc = $_FILES['img']['tmp_name'];

$test =explode('.', $fileName);
$extension = end($test);
$name = rand(100,999).'.'.$extension;
$location = '/home/www/testtask123123.dx.am/src/components'.$fileName;
move_uploaded_file($_FILES['img']['tmp_name'], $location);
echo $location;
// if (!$fileTmpLoc){
// 	echo json_encode($_FILES);
// 	exit();
// }

// if(move_uploaded_file($fileTmpLoc, 'images/{$fileName}')){
// 	echo "completed";
// }else {
// 	echo "failed";
// }
}
?>