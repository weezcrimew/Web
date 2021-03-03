<?php

include 'connect.php';

$get_reports = "SELECT `id`, `name`,  `text` FROM `reports`";

$array = [];
if($result = mysqli_query($conn, $get_reports)){
    if(mysqli_num_rows($result) > 0){
        while($row = mysqli_fetch_array($result)){
            $array[] = $row;
        }
    } else{
        echo "Записи не найдены";
    }
} else{
    echo "Ошибка: " . mysqli_error($conn);
}

echo json_encode($array);

?>
