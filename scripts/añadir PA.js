document.querySelector('form')
    .addEventListener('submit', e => {
        e.preventDefault()
        const data = Object.fromEntries(
            new FormData(e.target)
        )
        if (data.esterilizado == undefined) {
            alert('Indique si se encuentra esterilizado')
            e.preventDefault()
        }
        // hoy = new Date;
        const user = JSON.parse(localStorage.getItem('user'));

        if (!user) {
            alert("Iniciar sesion");
        } else {


            let payload = {
                idUsuario: user.id,
                nombre: data.nombreMascota,
                edad: data.edadMascota,
                sexo: data.sexoMascota,
                departamento: data.departamentoMascota,
                ciudad: data.ciudadMascota,
                esterilizado: data.esterilizado,
                descripcion: data.descripcionMascota,
                // foto: data.fotoMascota,
                // fecha: hoy.toLocaleDateString(),
            }
            console.log(payload)


            fetch("https://backend-luks-a-pet-production.up.railway.app/propuesta",
                {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                })
                .then(function (res) { return res.json(); })
                .then(function (data) {
                    console.log(data);
                    if (data.message) {
                        alert("error", data.message)
                    } else {
                        alert("Se Ha guardado la propuesta");
                        setTimeout(function () { window.location.href = "/html/feed.html"; }, 1000);



                    }





                })

        }

    })