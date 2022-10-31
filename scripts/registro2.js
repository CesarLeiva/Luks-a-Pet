document.querySelector('.registro2')
    .addEventListener('submit', e => {
        e.preventDefault()
        const data = Object.fromEntries(
            new FormData(e.target)
        )
        if (data.contraseña != data.repetirContraseña){
            alert('la contraseña debe ser igual');
        }
        else{
            const usuario = {
                correo: data.correo,
                contraseña: data.contraseña,
            }
            console.log(usuario)
        }
    })