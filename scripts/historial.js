//editar acorde a la interfaz de historial

const propuesta1 = {
    nombre: 'Jack',
    edad: '2 años',
    sexo: 'Macho',
    departamento: 'Bolivar',
    ciudad: 'Cartagena',
    esterilizado: 'si',
    //foto: ''; meter este atributo en img del html
    descripcion: 'Muy bonito él',
    fecha: "30/10/2022",
}

const propuesta2 = {
    nombre: 'Rita',
    edad: '1 año',
    sexo: 'Hembra',
    departamento: 'Bolivar',
    ciudad: 'Cartagena',
    esterilizado: 'si',
    //foto: ''; meter este atributo en img del html
    descripcion: 'Es preciosa',
    fecha: "30/10/2022",
}

const propuesta3 = {
    nombre: 'Momo',
    edad: '1 año',
    sexo: 'Hembra',
    departamento: 'Bolivar',
    ciudad: 'Cartagena',
    esterilizado: 'si',
    //foto: ''; meter este atributo en img del html
    descripcion: 'Es preciosa',
    fecha: "30/10/2022",
}


const propuestas = [propuesta1, propuesta2, propuesta3];
//editar el eliminar publicación para que se muestre un mensaje de confirmación
//insertar la imagen del animal
for(i=0; i<=propuestas.length; i++){
    document.getElementById("card").innerHTML +=
        `<div class="containt">
        <div class="pa mx-3" style="background-color: #5F6C7B; border: 2px; margin-bottom: 20px; border-radius: 10px;">
            <section style="margin-top: 10px;">
                <div class="fotoMascota m-2" style="height: 200px; width: auto;">
                    <img src="/imagenes/image 5.jpg" alt="nombre" style="border-radius: 15px; height: inherit; width: inherit;">
                </div>
                    <div class="containt m-2" style="font-size: 190%; width: 100%;">
                    <h1 style="font-size: 200%; text-align: center;">`+propuestas[i].nombre+`</h1>
                    <div style="height: 75px;"></div>
                    <div style="text-align: center;">
                        <a href="/html/editar PA.html" style="text-decoration: none; color: white; border-radius: 10px; background-color: #FF8298; margin-right: 15px;">
                            <span class="mx-5">Editar</span>
                        </a>
                        <a href="/html/log in.html" style="text-decoration: none; color: white; border-radius: 10px; background-color: #FF8298; margin-right: 15px;">
                            <span class="mx-5">Eliminar</span>
                        </a>
                    </div>
                    <div style="text-align: center; font-size: 18px;">
                        <a href="/html/log in.html" style="text-decoration: none; color: white;">
                            Fue adoptado?
                            <span style="color: #FF8298;">Repórtalo aquí</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    </div>`
}