const valores = window.location.search;

//Creamos la instancia
const urlParams = new URLSearchParams(valores);

//Accedemos a los valores
var id = urlParams.get('id');

document.querySelector('form')
    .addEventListener('submit', e => {
        e.preventDefault()
        const data = Object.fromEntries(
            new FormData(e.target)
        )
        const reporteAdopcion = {
            idPropuesta: id,
            nombres: data.nombres,
            apellidos: data.apellidos,
            identificacion: data.identificacion,
            celular: data.celular
        }

        console.log(reporteAdopcion);

        fetch(`https://backend-luks-a-pet-production.up.railway.app/reporte`,
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reporteAdopcion)
            })
            .then(function (res) { return res.json(); })
            .then(function (data) {
                console.log(data);
                if (data.message) {
                    alert(data.message)
                } else {
                    alert("Se ha realizado el reporte");

                }
            });

    })


