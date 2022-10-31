const propuesta = {
    nombre: 'Jack',
    edad: '2 años',
    sexo: 'Macho',
    departamento: 'Bolivar',
    ciudad: 'Cartagena',
    esterilizado: 'si',
    //foto: ''; meter este atributo en img del html
    descripcion: 'Es un gato pacífico, cariñoso y a veces un poco inquieto; le gusta jugar pero odia que lo acaricien en el estómago o cerca de la cola.',
    fecha: "31/10/2022",
}

if(propuesta.sexo == 'Macho'){
    document.getElementById('presentacion').innerHTML = "Mira que lindo es " + propuesta.nombre;
}
else{
    document.getElementById('presentacion').innerHTML = "Mira que linda es " + propuesta.nombre;
}

//meter aquí la foto de la mascota
document.getElementById('foto').innerHTML =`<img src="/imagenes/image 5.jpg" alt="mascota" style="border-radius: 15px; height: inherit; width: inherit;">`;

document.getElementById('nombre').innerHTML = propuesta.nombre;
document.getElementById('edad').innerHTML = propuesta.edad;
document.getElementById('sexo').innerHTML = propuesta.sexo;
document.getElementById('ubicacion').innerHTML = propuesta.ciudad+", "+propuesta.departamento;
document.getElementById('esterilizado').innerHTML = propuesta.esterilizado;
document.getElementById('descripcion').innerHTML = propuesta.descripcion;
document.getElementById('fecha').innerHTML = propuesta.fecha;

//meter el link para contactar con el dueño de la mascota
document.getElementById('contacto').innerHTML =`<a href="#" style="text-decoration: none; color: white; border-radius: 10px; background-color: #FF8298;">
                                                    <span class="mx-5">Me interesa</span>
                                                </a>`;