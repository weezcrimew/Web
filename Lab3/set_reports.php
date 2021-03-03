<?php

include 'connect.php';

if (count($_POST) > 0){
  $sql_add = "INSERT INTO reports SET `name`='" . $_POST['name']."', `email`='".$_POST['email']."', `text`='".$_POST['text']."'";
  @mysqli_query($conn, $sql_add);
}

?>
