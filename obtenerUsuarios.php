<?php

include "conectar.php";

$data = array();
$consulta = mysqli_query($conexion, "SELECT * FROM `usuario`");

while($row = mysqli_fetch_object($consulta)){
    $data[] = $row;
}

echo json_encode($data);
echo mysqli_error($conexion);


?>
