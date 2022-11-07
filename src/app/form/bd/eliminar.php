<?php
    include("conexion.php");

    $identificacion = $_POST["identificacion"];

    $eliminar = "DELETE FROM contactos WHERE identificacion = $identificacion";
    
    $resultado = mysqli_query($conexion, $eliminar);
    return json_encode($resultado);
?>