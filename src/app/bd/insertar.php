<?php
    include("conexion.php");

    $email = $_POST["email"];
    $password = $_POST["password"];

    $insertar = "INSERT INTO datos_acceso(usuario, contrasena) VALUES ('$email', '$password')";

    $resultado = mysqli_query($conexion, $insertar);
    if($resultado) {
        echo "<script>alert('usuario creado correcatmente'); window.location='/xampp/usuarios/'</script>";
    }   else {
        echo "<script>alert('no se ha creado correcatmente'); window.history.go(-1);</script>";
    }
?>
