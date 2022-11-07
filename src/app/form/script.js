
document.getElementById('registerButton').innerHTML = '<span></span><span></span><span></span><span></span>Enviar';

function register() {
    let textRegiter = document.getElementById('registerButton').innerHTML;

    let identificacion = document.getElementById('identifyField').value;
    let nombres = document.getElementById('firstName').value;
    let apellidos = document.getElementById('lastName').value;
    let telefono = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('message').value;

    if (textRegiter.includes('Actualizar')) {
        $.ajax({
            method: "POST",
            url: "bd/modificar.php",
            data: { identificacion: identificacion, nombres: nombres, apellidos: apellidos, telefono: telefono, email: email, mensaje: mensaje }
          }).done(function() {
            alert('Se actualizo!!');
            clearForm();
        }).fail(function (err) {
            console.log(err);
        });
    }else{
        $.ajax({
            method: "POST",
            url: "bd/insertar.php",
            data: { identificacion: identificacion, nombres: nombres, apellidos: apellidos, telefono: telefono, email: email, mensaje: mensaje }
          }).done(function() {
            alert('Se registro!!');
            clearForm();
        }).fail(function (err) {
            console.log(err);
        });
    }

}

function find() {
    let identificacion = document.getElementById('identifyField').value;

    $.ajax({
        method: "POST",
        url: "bd/consultar.php",
        data: { identificacion: identificacion }
      }).done(function(res) {
        document.getElementById('registerButton').innerHTML = '<span></span><span></span><span></span><span></span>Actualizar';
        setForm(JSON.parse( res )[0]);
    }).fail(function (err) {
        console.log(err);
    });
}

function clearForm() {
    console.log('Limpiar');
    let textRegiter = document.getElementById('registerButton').innerHTML;

    if (textRegiter.includes('Actualizar')) {
        document.getElementById('registerButton').innerHTML = '<span></span><span></span><span></span><span></span>Enviar';
    }
    
    document.getElementById('identifyField').value = '';
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

function setForm(data) {
    document.getElementById('firstName').value = data.nombres;
    document.getElementById('lastName').value = data.apellidos;
    document.getElementById('phone').value = data.telefono;
    document.getElementById('email').value = data.email;
    document.getElementById('message').value = data.mensaje;
}