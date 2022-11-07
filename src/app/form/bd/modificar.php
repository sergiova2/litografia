<?php
    include("conexion.php");

    $identificacion = $_POST["identificacion"];
    $nombres = $_POST["nombres"];
    $apellidos = $_POST["apellidos"];
    $telefono = $_POST["telefono"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    $modificar = "UPDATE contactos SET nombres = '$nombres', apellidos = '$apellidos', telefono = '$telefono', email = '$email', mensaje = '$mensaje' WHERE identificacion = $identificacion";

    $resultado = mysqli_query($conexion, $modificar);
    return $resultado
?>
