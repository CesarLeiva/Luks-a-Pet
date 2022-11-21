document.querySelector('.registro1')
    .addEventListener('submit', e => {
        e.preventDefault()
        const data = Object.fromEntries(
            new FormData(e.target)
        )
        if (data.contraseña != data.repetirContraseña) {
            alert('la contraseña debe ser igual');
        }
        else {
            const payload = {
                correo: data.correo,
                contra: data.contraseña,
                nombres: data.nombres,
                apellidos: data.apellidos,
                identificacion: data.identificacion,
                celular: data.celular,
            }
            console.log(payload)

            fetch("https://backend-luks-a-pet-production.up.railway.app/registrar",
                {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                })
                .then(function (res) { return res.json(); })
                .then(function (data) {
                    console.log(data);
                    if (data.message) {
                        alert(data.message)
                    } else {

                        alert("Te has registrado");

                        setTimeout(function () { window.location.href = "/html/index.html"; }, 1000);

                    }





                })

        }

    });