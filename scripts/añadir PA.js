document.querySelector('form')
    .addEventListener('submit', e => {
        e.preventDefault()
        const data = Object.fromEntries(
            new FormData(e.target)
        )
        if (data.esterilizado == undefined){
            alert('Indique el sexo de la mascota')
            e.preventDefault()
        }
        hoy = new Date;
        const propuesta = {
            nombre: data.nombreMascota,
            edad: data.edadMascota,
            sexo: data.sexoMascota,
            departamento: data.departamentoMascota,
            ciudad: data.ciudadMascota,
            esterilizado: data.esterilizado,
            foto: data.fotoMascota,
            descripcion: data.descripcionMascota,
            fecha: hoy.toLocaleDateString(),
        }
        console.log(propuesta)
    })