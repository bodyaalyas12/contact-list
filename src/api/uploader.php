<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if($_FILES['img']['name']){
$fileName = $_FILES['img']['name'];
$fileTmpLoc = $_FILES['img']['tmp_name'];

$test =explode('.', $fileName);
$extension = end($test);
$name = rand(100,999).'.'.$extension;
$location = $_SERVER['DOCUMENT_ROOT'].'/images/'.$fileName;
move_uploaded_file($_FILES['img']['tmp_name'], $location);
echo $location;

}


?>