document.querySelector('form')
    .addEventListener('submit', e => {
        e.preventDefault()
        const data = Object.fromEntries(
            new FormData(e.target)
        )
        const reporteAdopcion ={
            nombres: data.nombres,
            apellidos: data.apellidos,
            identificacion: data.identificacion,
            celular: data.celular
        }

        console.log(reporteAdopcion);
    })