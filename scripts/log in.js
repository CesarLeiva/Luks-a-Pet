var usuario = "cesarleacu@hotmail.com";
var contraseña = "cesar";


document.querySelector('.login')
    .addEventListener('submit', e => {
        e.preventDefault()

        const form = Object.fromEntries(
            new FormData(e.target)
        )

        let payload =
        {
            correo: form.correo,
            contra: form.contraseña
        }

        fetch("http://localhost:3001/login",
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
                    localStorage.setItem('user', JSON.stringify({
                        id: data[0].IdUsuario,
                        correo: data[0].Correo,
                        role: data[0].Role
                    }));

                    alert("Ha iniciado sesion");
                    if (data[0].Role == "Usuario") {
                        setTimeout(function () { window.location.href = "/html/feed.html"; }, 1000);

                    } else {
                        setTimeout(function () { window.location.href = "/html/admin.html"; }, 1000);

                    }




                }





            })


    })