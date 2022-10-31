var usuario = "cesarleacu@hotmail.com";
var contraseña = "cesar";

document.querySelector('.login')
    .addEventListener('submit', e => {
        e.preventDefault()
        const data = Object.fromEntries(
            new FormData(e.target)
        )
        console.log(data.correo, data.contraseña)
        if (data.correo == usuario && data.contraseña == contraseña){
            console.log("todo correcto perro")
            document.getElementById("msg").innerHTML = ""
        }
        else {
            e.preventDefault()
            document.getElementById("msg").innerHTML = "El correo o contraseña son incorrectos";
        }
    })