<?php
    include("conexion.php");

    $identificacion = $_POST["identificacion"];

    $consultar = "SELECT * FROM contactos WHERE identificacion = $identificacion";
    
    $resultado = mysqli_query($conexion, $consultar);
    
    $datos = array();

    while($row = mysqli_fetch_assoc($resultado)) {
        $datos[] = $row;
    };

    echo json_encode($datos)
?>