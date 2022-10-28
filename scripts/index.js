var propuesta = {
    nombre: 'Jack',
    edad: "2 años",
    sexo: "macho",
    fecha: "27/10/2022",
    ciudad: "Cartagena",
    departamento: "Bolivar",
}


function imprimirPa (nombre, edad, sexo, fecha, ciudad, departamento){
    var pa =`<div class="containt">
                <div class="pa mx-3" style="background-color: #5F6C7B; border: 2px; margin-bottom: 20px; border-radius: 10px;">
                    <section style="margin-top: 10px;">
                        <div class="fotoMascota m-2" style=" height: 200px; width: auto;">
                            <img src="/imagenes/image 5.jpg" alt="nombre" style="border-radius: 15px; height: inherit; width: inherit;">
                        </div>
                        <div class="containt m-2" style="font-size: 190%; width: 100%;">
                            <h1 style="font-size: 200%; text-align: center;">`+nombre+`</h1>
                            <div class="informaion">
                            `+edad+`, `+sexo+`
                            <br>
                            `+fecha+`
                            <br>
                            `+ciudad+`, `+departamento+`
                            </div>
                            <div style="text-align: end;">
                            <a href="/html/log in.html" style="text-decoration: none; color: white; border-radius: 10px; background-color: #FF8298; margin-right: 15px;">
                                <span class="mx-5">Me interesa</span>
                            </a>
                        </div>
                        </div>
                    </section>
            </div>
            </div>`;

return pa;
}


var card = document.getElementById ("card");

card.innerHTML = imprimirPa(propuesta.nombre, propuesta.edad, propuesta.sexo, propuesta.fecha, propuesta.ciudad, propuesta.departamento);

        