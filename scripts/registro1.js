document.querySelector('.registro1')
    .addEventListener('submit', e => {
        e.preventDefault()
        const data = Object.fromEntries(
            new FormData(e.target)
        )
        const persona = {
            nombres: data.nombres,
            apellidos: data.apellidos,
            identificacion: data.identificacion,
            celular: data.celular,
        }
        console.log(persona)
    })