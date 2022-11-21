const valores = window.location.search;

//Creamos la instancia
const urlParams = new URLSearchParams(valores);

//Accedemos a los valores
var id = urlParams.get('id');

console.log(id)
fetch(`https://backend-luks-a-pet-production.up.railway.app/propuesta/${id}`,
    {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
    })
    .then(function (res) { return res.json(); })
    .then(function (data) {
        console.log(data);
        if (data.message) {
            alert("error", data.message)
            console.log(data)
        } else {
            const propuesta = data[0];

            if (propuesta.Sexo == 'Macho') {
                document.getElementById('presentacion').innerHTML = "Mira que lindo es " + propuesta.Nombre;
            }
            else {
                document.getElementById('presentacion').innerHTML = "Mira que linda es " + propuesta.Nombre;
            }

            //meter aquí la foto de la mascota
            document.getElementById('foto').innerHTML = `<img src=` + propuesta.Foto + ` alt="mascota" style="border-radius: 15px; height: inherit; width: inherit;">`;

            document.getElementById('nombre').innerHTML = propuesta.Nombre;
            document.getElementById('edad').innerHTML = propuesta.Edad;
            document.getElementById('sexo').innerHTML = propuesta.Sexo;
            document.getElementById('ubicacion').innerHTML = propuesta.Ciudad + ", " + propuesta.Departamento;
            document.getElementById('esterilizado').innerHTML = propuesta.Esterilizado;
            document.getElementById('descripcion').innerHTML = propuesta.Descripcion;

            //meter el link para contactar con el dueño de la mascota
            document.getElementById('contacto').innerHTML = `<a href= https://wa.me/57${propuesta.Celular} style="text-decoration: none; color: white; border-radius: 10px; background-color: #FF8298;">
                                                                <span class="mx-5">Me interesa</span>
                                                            </a>`;
        }
    });



// const propuesta = {
//     nombre: 'Jack',
//     edad: '2 años',
//     sexo: 'Macho',
//     departamento: 'Bolivar',
//     ciudad: 'Cartagena',
//     esterilizado: 'si',
//     //foto: ''; meter este atributo en img del html
//     descripcion: 'Es un gato pacífico, cariñoso y a veces un poco inquieto; le gusta jugar pero odia que lo acaricien en el estómago o cerca de la cola.',
//     fecha: "31/10/2022",
// }
