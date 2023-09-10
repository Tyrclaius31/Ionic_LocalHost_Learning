<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-API-KEY, Origin, X-Request-With, Content-Type, Accept, Access-Control-Request-Method');
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Max-Age: 1728000');
header('Content-Length: 0');
header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS"){
    die();
}
$conexion = mysqli_connect("localhost", "root", "", "pruebas_mobile") or die("No se pudo conectar a BB.DD.");

?>