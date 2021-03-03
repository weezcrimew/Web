<?php

include 'connect.php';

$get_news = "SELECT `id`, `img`, `title`, `text` FROM `news`";

$array = [];
if($result = mysqli_query($conn, $get_news)){
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

$kol = $_GET['kol'];
$tek = $_GET['tek'];
echo json_encode(array_slice($array, $tek, $kol)); 

?>
