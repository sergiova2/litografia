<?php
    include("conexion.php");

    $identificacion = $_POST["identificacion"];
    $nombres = $_POST["nombres"];
    $apellidos = $_POST["apellidos"];
    $telefono = $_POST["telefono"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    $insertar = "INSERT INTO contactos (identificacion, nombres, apellidos, telefono, email, mensaje) VALUES ($identificacion, '$nombres', '$apellidos','$telefono','$email','$mensaje')";

    $resultado = mysqli_query($conexion, $insertar);
    echo json_encode($resultado)
?>
+



