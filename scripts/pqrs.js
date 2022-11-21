document.querySelector('form')
    .addEventListener('submit', e => {
        e.preventDefault()
        const data = Object.fromEntries(
            new FormData(e.target)
        )
        const pqrs = data.pqrs;

        const user = JSON.parse(localStorage.getItem('user'));

        if (!user) {
            alert("Iniciar sesion");
        } else {


            let payload = {
                idUsuario: user.id,
                mensaje: pqrs
            }
            console.log(payload)


            fetch("https://backend-luks-a-pet-production.up.railway.app/pqrs",
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
                        alert("Se ha enviado la pqrs");
                        setTimeout(function () { window.location.href = "/html/feed.html"; }, 1000);

                    }





                })

        }


    })